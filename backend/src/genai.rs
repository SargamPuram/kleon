use genai::chat::{ChatMessage, ChatRequest};
use genai::Client;
use serde::{Deserialize, Serialize};
use std::error::Error;

#[derive(Deserialize)]
pub struct QueryPrompt {
    pub prompt: String,
    pub dialect: String, // Added dialect field
}

#[derive(Serialize)]
pub struct QueryResponse {
    pub message: String,
}

#[derive(Deserialize)]
pub struct ExplainSqlRequest {
    pub prompt: String,
    pub dialect: String,
}


pub struct GenAIModel {
    client: Client,
    model: String,
}

impl GenAIModel {
    pub fn new() -> Self {
        let client = Client::default();

        GenAIModel {
            client,
            model: "gemini-1.5-flash-latest".to_string(),
        }
    }

    pub async fn generate(&self, prompt: &str, dialect: &str) -> Result<String, Box<dyn Error>> {
        let system_message = format!(
            "Understand this user prompt and generate the {} query accordingly. The response should only include the query and not the explanation:",
            dialect
        );

        let chat_req = ChatRequest::new(vec![
            ChatMessage::system(&system_message),
            ChatMessage::user(prompt),
        ]);

        let chat_res = self.client.exec_chat(&self.model, chat_req.clone(), None).await?;
        Ok(chat_res.content_text_as_str().unwrap_or("NO ANSWER").to_string())
    }
    // Method to generate explanation
    pub async fn explain_query(&self, query: &str, dialect: &str) -> Result<String, Box<dyn Error>> {
        let system_message = format!(
            "Explain the following SQL query considering the dialect ({}) used. Provide a detailed explanation without including the query itself.",
            dialect
        );
    
        let chat_req = ChatRequest::new(vec![
            ChatMessage::system(&system_message),
            ChatMessage::user(query),
        ]);
    
        let chat_res = self.client.exec_chat(&self.model, chat_req.clone(), None).await?;
        
        // Check if the response includes unnecessary formatting or text
        let response_text = chat_res.content_text_as_str().unwrap_or("NO EXPLANATION").to_string();
    
        Ok(response_text)
    }
}
    
