import {connect} from "@/dbConfig/dbConfig"
import User from "@/models/userModel"
import { NextRequest, NextResponse } from "next/server"
import bcryptjs from "bcryptjs"
import jwt from "jsonwebtoken"
import "dotenv/config"

connect()

export async function POST(request: NextRequest) {
    
    try {
        const reqBody = await request.json()
        const {email, password} = reqBody
        console.log(reqBody)

        //check if user exists
        const user = await User.findOne({email})

        if(!user){
            return NextResponse.json({error: "User doesnt exist"}, {status: 400});
            
        }
        console.log("user exists")

        // check if password is correct 

        const validPassword = await bcryptjs.compare(password, user.password)
        //here password comes from reqBody and user.password is the password from the database

        if(!validPassword){
            return NextResponse.json({error: "Invalid password", status: 400});   
        }

        //create token data
        const tokenData = {
            id: user._id,
            username: user.username,
            email: user.email
        }

        //create token
        const token = await jwt.sign(tokenData, process.env.TOKEN_SECRET!, {expiresIn: "1d"})

        const response = NextResponse.json({
            message: "Login successful",
            success: true,

        })
        response.cookies.set(
            "token", 
            token, 
            {httpOnly: true,}
        )
        return response

    } catch (error: any) {
        return NextResponse.json({erroe: error.message},
            {status: 500})
        
    }
}