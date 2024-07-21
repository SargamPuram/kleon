"use client"

import Link from "next/link"
import React, { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import axios from "axios"
import toast from "react-hot-toast"



export default function SignUp(){
    const router = useRouter()
    const [user, setUser] = useState({
        email: "",
        password: "",
        username: "",
    })

    const [buttonDisabled, setbuttonDisabled] = useState(false)
    const [loading, setLoading] = useState(false)

    const onSignup = async() =>{
        try{
            setLoading(true);
           const response = await axios.post("/api/users/signup", user)
           console.log("Signup success", response.data)
           router.push("/login")

        }catch(error: any) {
            console.log("SignUp failed", error.message)
            toast.error(error.message)

        } finally{
            setLoading(false)
        }

    }

    useEffect(() => {
        if(user.email.length > 0 && user.password.length >0
            && user.username.length > 0){
                setbuttonDisabled(true);
            }
        else{
            setbuttonDisabled(false)
        }

    }, [user])

    return(
        <div className="flex flex-col items-center 
        justify-center min-h-screen py-2">
            <h1>{loading ? "Processing" : "SignUp"}</h1>
            <hr />
            <label htmlFor="username">username</label>
            <input 
                className="p-2 border border-purple-300 rounded-lg
                mb-4 focus:outline-none focus:border-gray-600 text-black"
                id="username"
                type="text"
                value={user.username}
                onChange={(e) => setUser({...user, username: e.target.value})}
                placeholder="username"
                 />
            
            <hr />
            <label htmlFor="password">password</label>
            <input 
               className="p-2 border border-purple-300 rounded-lg
               mb-4 focus:outline-none focus:border-gray-600 text-black"
                id="password"
                type="password"
                value={user.password}
                onChange={(e) => setUser({...user, password: e.target.value})}
                placeholder="password"
                 />

            <hr />
            <label htmlFor="email">email</label>
            <input 
               className="p-2 border border-purple-300 rounded-lg
               mb-4 focus:outline-none focus:border-gray-600 text-black"
                id="email"
                type="email"
                value={user.email}
                onChange={(e) => setUser({...user, email: e.target.value})}
                placeholder="password"
                 />  

            <hr /> 

            <button 
            onClick={onSignup}
            className="p-2 border bg-yellow-50 border-purple-100 rounded-lg focus:outline-none focus:border-gray-50 
            text-black" >
                {buttonDisabled ? "true": "disabled"}
                </button>  

            <Link href="/login">Have already signed up? Visit the Login Page</Link>

        </div>
    )
}