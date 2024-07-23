"use client"

import Link from "next/link"
import React, { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import axios  from "axios"
import toast from "react-hot-toast"



export default function LoginPage(){
    const router = useRouter()
    const [user,setUser] = useState({
        email: '',
        password: ''
    })

    const [buttonDisabled,setbuttonDisabled] = useState(false)
    const [loading, setLoading] = useState(false)


    const onLogin = async() =>{
        try{
            setLoading(true)
        const response = await axios.post('api/users/login', user)
        console.log("Login successful", response.data)
        router.push("/profile")
        }catch(error: any){
            console.log("Login Unsuccessful", error.message)
            toast.error(error.message)

        }finally{
            setLoading(false)
        }

    }
    useEffect(() => {
        if(user.email.length > 0 && user.password.length>0){
            setbuttonDisabled(true)

        }else{
            setbuttonDisabled(false)
        }}, [user])

    return(
        <div className="flex flex-col items-center 
        justify-center min-h-screen py-2">
            <h1>{loading ? "Processing": "LogIn"}</h1>
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

            <button 
            onClick={onLogin}
            className="p-2 border bg-yellow-50 border-purple-100 rounded-lg focus:outline-none focus:border-gray-50 
            text-black" >
                {buttonDisabled ? "LogIn" : "Disabled"}
                </button>  

            <Link href="/signup">Not signed up? Visit Sign Up Page</Link>

        </div>
    )
}