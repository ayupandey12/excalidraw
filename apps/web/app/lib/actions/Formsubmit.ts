"use server"
import axios from "axios"
import "dotenv/config"
export async function Formsubmitaction({ type,name,email,password }: { type: "signin" | "signup",name:string,email:string,password:string }) {
    console.log(`${process.env.HTTP_URL}/${type}`)
   try {
     const user=await axios.post(`${process.env.HTTP_URL}/${type}`,{name,email,password})
      const message=user.data.mess;
      const token=user.data.token;
      return {
        mess:message,
        token:token
      }
   } catch (error) {
    return{
      mess:"backend server is down!",
      token:undefined
    }
   }
      
     }