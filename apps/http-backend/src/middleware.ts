import { JWT_SECRET } from "@repo/common-jwtsecret/index";
import { NextFunction, Request, Response } from "express";
import jwt, { JwtPayload } from "jsonwebtoken"
export const middleware=  (req:Request,res:Response,next:NextFunction)=>{
   const token=req.headers["authorization"]||"";
   const decode= jwt.verify(token,JWT_SECRET)
   if(!decode)
   {
      res.status(403).json({mess:"unuthorized user"})
      return;
   }
   else
   {  req.userId=(decode as JwtPayload).userId;
      next()
   }
}