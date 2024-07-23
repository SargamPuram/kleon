"use client"

import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import toast from "react-hot-toast";

export default function ProfilePage() {
    const router = useRouter()

    const [data, setData] = useState("nothing")
    const logout = async () => {
        try{
            await axios.get('/api/users/logout')
            toast.success('Logout successful')
            router.push('/hero')

        }catch(error: any){
            console.log(error.message)
            toast.error(error.message)
        }

    }

    const getUserDeatils = async() => {
        const res: any= await axios.get('/api/users/me')
        console.log(res.data)
        setData(res.data.data._id)
    }


    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
            {/* <h1>Profile</h1> */}
            <hr />
            <h1 className="text-6xl">Profile Page</h1>
            {/* <h2> {data=== 'nothing' ? "Hey" : <Link 
            href={'/profile/${data}'}>{data}
            </Link> }
            </h2> */}
            <hr />
            <div className="relative inline-flex group mt-10">
                <div
                    className="absolute transition-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-xl blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt"
                ></div>
                <hr />
                <button
                    onClick={logout}
                    className="relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white transition-all duration-200 bg-gray-900 font-pj rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
                >
                    Logout
                </button>
            

            </div>
        </div>
    );
}
