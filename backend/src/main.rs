use actix_cors::Cors;
use actix_web::{post, web, App, HttpResponse, HttpServer, Responder};
use dotenv::dotenv;
use env_logger::Env;
use std::sync::Arc;
use tokio::sync::Mutex;
use regex::Regex;
use std::env;

mod genai;
use genai::{GenAIModel, QueryPrompt, QueryResponse, ExplainSqlRequest};

#[post("/generate_sql")]
async fn generate_sql(
    prompt: web::Json<QueryPrompt>,
    genai_model: web::Data<Arc<Mutex<GenAIModel>>>,
) -> impl Responder {
    let message = {
        let genai_model = genai_model.lock().await;
        let dialect = prompt.dialect.to_lowercase();
        let prompt_text = &prompt.prompt;

        match genai_model.generate(prompt_text, &dialect).await {
            Ok(response) => {
                let re = Regex::new(r"```sql\n([\s\S]*)\n```").unwrap();
                let response_clone = response.clone();
                re.captures(&response_clone)
                    .and_then(|caps| caps.get(1))
                    .map_or(response, |m| m.as_str().to_string())
            },
            Err(e) => {
                eprintln!("Error generating response: {}", e);
                "Error generating response".to_string()
            },
        }
    };

    let response = QueryResponse { message };
    HttpResponse::Ok().json(response)
}

#[post("/explain_sql")]
async fn explain_sql(
    req: web::Json<ExplainSqlRequest>,
    genai_model: web::Data<Arc<Mutex<GenAIModel>>>,
) -> impl Responder {
    let prompt = &req.prompt;
    let dialect = &req.dialect;

    match genai_model.lock().await.explain_query(prompt, dialect).await {
        Ok(explanation) => HttpResponse::Ok().json(QueryResponse { message: explanation }),
        Err(err) => {
            eprintln!("Error explaining query: {:?}", err);
            HttpResponse::InternalServerError().json("Error explaining query.")
        }
    }
}

#[actix_web::main]
async fn main() -> std::io::Result<()> {
    dotenv().ok();
    env_logger::Builder::from_env(Env::default().default_filter_or("info")).init();

    let genai_model = web::Data::new(Arc::new(Mutex::new(GenAIModel::new())));

    let port = env::var("PORT").unwrap_or_else(|_| "8080".to_string());
    let port = port.parse::<u16>().expect("PORT must be a valid u16");

    HttpServer::new(move || {
        App::new()
            .app_data(genai_model.clone())
            .wrap(
                Cors::default()
                    .allow_any_origin()
                    .allow_any_method()
                    .allow_any_header()
            )
            .service(generate_sql)
            .service(explain_sql)
    })
    .bind(("0.0.0.0", port))?  // Use the port variable here
    .run()
    .await
}
