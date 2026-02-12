import express from "express"
import { middleware } from "./middleware";
import { Signinschema } from "@repo/zod/index";


const app=express();
 
app.post('/signup',(req,res)=>{

    const respone=Signinschema.safeParse(req.body)
    if(!respone.success)
    {
        
    }
})
app.post('/signin',(req,res)=>{
    
})
app.post('/room',middleware,(req,res)=>{
    
})
app.listen(3001)