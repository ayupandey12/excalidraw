import express from "express"
import "dotenv/config"
import { Roomschema, Signinschema ,Signupschema} from "@repo/zod/index";
import { middleware } from "./middleware";
import { prisma } from "@repo/db";
console.log(process.env.DATABASE_URL)


const app=express();
app.get("/",async (req,res)=>{
     const user=await prisma.user.findMany({});
    console.log(user);
    return res.json({mess:"ok"})
})

app.post('/signup',async (req,res)=>{
   
    const respone=Signinschema.safeParse(req.body)
    if(!respone.success)
    {
        res.json({mess:"invalid schema"})
        return ;
    }
    
})
app.post('/signin',(req,res)=>{
    const respone=Signupschema.safeParse(req.body)
    if(!respone.success)
    {
        res.json({mess:"invalid schema"})
        return ;
    }
})
app.post('/room',middleware,(req,res)=>{
    const respone=Roomschema.safeParse(req.body)
    if(!respone.success)
    {
        res.json({mess:"invalid schema"})
        return ;
    }
})
app.listen(3010)