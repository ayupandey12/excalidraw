import express from "express"
import { Roomschema, Signinschema ,Signupschema} from "@repo/zod/index";
import { middleware } from "./middleware";



const app=express();
 
app.post('/signup',async (req,res)=>{
    // const user=await prisma.user.findMany({});
    // console.log(user);
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
app.listen(3001)