"use server"
import axios from "axios"
import "dotenv/config"
export async function Formsubmitaction({ type,name,email,password }: { type: "signin" | "signup",name:string,email:string,password:string }) {
    console.log(`${process.env.HTTP_URL}/${type}`)
    const user=await axios.post(`${process.env.HTTP_URL}/${type}`,{name,email,password})
      console.log(user.data.mess,user.data.token)
      
     }