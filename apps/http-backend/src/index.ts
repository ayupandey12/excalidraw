import express from "express"
import "dotenv/config"
import jwt from "jsonwebtoken"
import { Roomschema, Signinschema ,Signupschema} from "@repo/zod/index";
import { middleware } from "./middleware";
import { prisma } from "@repo/db";
import { JWT_SECRET } from "@repo/common-jwtsecret/index";
console.log(process.env.DATABASE_URL)


const app=express();
app.use(express.json());
app.get("/",async (req,res)=>{
     const user=await prisma.user.findMany({});
    console.log(user);
    return res.json({mess:"ok"})
})

app.post('/signup',async (req,res)=>{
   
    const respone=Signupschema.safeParse(req.body)
    
    if(!respone.success)
    {   const message=JSON.parse(respone.error.message||"")
        res.json({mess:message[0].message??"invalid credentials"})
        return ;
    }
    try {
        const name=await prisma.user.findFirst({
            where:{
                name:respone.data.name
            }
        })
        if(name) 
        {
            res.status(411).json({
            mess:"name is already in use , try with different name"})
             return
         }
         const email=await prisma.user.findFirst({
            where:{
                email:respone.data.email
            }
        })
        if(email) 
        {
            res.status(411).json({
            mess:"email is already in use , try with different email"})
            return
        }
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
            mess:"something went wrong while signup!",
            
        })
    }
    
})
app.post('/signin',async (req,res)=>{
    const respone=Signinschema.safeParse(req.body)
    if(!respone.success)
    {
        const message=JSON.parse(respone.error.message||"")
        res.json({mess:message[0].message??"invalid credentials"})
        return ;
    }
    const user=await prisma.user.findFirst({where:{
        email:respone.data.email,
        password:respone.data.password
    }})
    if(!user)
    {
        res.json({mess:"user not found"})
        return ;
    }
      try {
        const token=jwt.sign({userId:user.id},JWT_SECRET)
        return res.status(200).json({
            mess:"signin successfull",
            token:token
        })
    } catch (error) {
        return res.status(411).json({
            mess:"something wrong while signin!"
        })
    }
})
app.post('/room',middleware,async(req,res)=>{
    const respone=Roomschema.safeParse(req.body)
    if(!respone.success)
    { 
        const message=JSON.parse(respone.error.message||"")
        res.json({mess:message[0].message??"invalid credentials"})
        return ;
    }
    //@ts-ignore
    const userId=req.userId;
    try {
        const room=await prisma.room.create({
            data:{
                name:respone.data.name,
                adminId:userId
            }
        })
        res.status(200).json({
            mess:"room is created successfully!",
            roomId:room.id
        })
        return;
    } catch (error) {
        res.status(411).json({
            mess:"room name is already taken !"
        })
        return;
    }
})
app.get('/chat/:roomId',async(req,res)=>{
    const roomId=Number(req.params.roomId)
     try {
         const chat=await prisma.messages.findMany({
            where:{
                roomId:roomId
            },
            orderBy:{
                id:"desc"
            },
            take:50
         })
         res.status(200).json(chat);
         return;
     } catch (error) {
         res.status(411).json({mess:"no room with this room id"})
     }
})
app.get('/findroomid/:roomname',async (req,res)=>{
    const roomname=req.params.roomname;
    try {
        const room=await prisma.room.findFirst({
            where:{
                name:roomname
            }
        })
        res.status(200).json(room);
        return ;
    } catch (error) {
        res.status(411).json({mess:"no roomId  with this roomname "})
    }
})
app.listen(3010)