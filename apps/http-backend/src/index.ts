import express from "express"
import "dotenv/config"
import jwt from "jsonwebtoken"
import { Roomschema, Signinschema ,Signupschema} from "@repo/zod/index";
import { middleware } from "./middleware";
import { prisma } from "@repo/db";
import { JWT_SECRET } from "@repo/common-jwtsecret/index";
console.log(process.env.DATABASE_URL)


const app=express();
app.get("/",async (req,res)=>{
     const user=await prisma.user.findMany({});
    console.log(user);
    return res.json({mess:"ok"})
})

app.post('/signup',async (req,res)=>{
   
    const respone=Signupschema.safeParse(req.body)
    
    if(!respone.success)
    {
        res.json({mess:respone.error.message??"invalid credentials"})
        return ;
    }
    try {
        const user=await prisma.user.create({
            data:{
                name:respone.data.name,
                email:respone.data.email,
                password:respone.data.password
            }
        })
        const token=jwt.sign({userId:user.id},JWT_SECRET)
        return res.status(200).json({
            mess:"signup successfull",
            token:token
        })
    } catch (error) {
        return res.status(411).json({
            mess:"something wrong while signup!"
        })
    }
    
})
app.post('/signin',async (req,res)=>{
    const respone=Signinschema.safeParse(req.body)
    if(!respone.success)
    {
        res.json({mess:respone.error.message??"invalid credentials"})
        return ;
    }
    const user=await prisma.user.findFirst({where:{
        email:respone.data.email
    }})
    if(!user)
    {
        res.json({mess:"user not found"})
        return ;
    }
      try {
        const token=jwt.sign({userId:user.id},JWT_SECRET)
        return res.status(200).json({
            mess:"signup successfull",
            token:token
        })
    } catch (error) {
        return res.status(411).json({
            mess:"something wrong while signin!"
        })
    }
})
app.post('/room',middleware,(req,res)=>{
    const respone=Roomschema.safeParse(req.body)
    if(!respone.success)
    { 
        res.json({mess:"invalid schema"})
        return ;
    }
    try {
        
    } catch (error) {
        
    }
})
app.listen(3010)