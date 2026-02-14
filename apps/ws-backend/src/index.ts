import { WebSocketServer } from "ws";
import jwt, { JwtPayload } from "jsonwebtoken";
import { JWT_SECRET } from "@repo/common-jwtsecret/index";
const wss=new WebSocketServer({port:8080},()=>{console.log("ws server created")})
wss.on("connection",(ws,request)=>{
   ws.on("error",console.error);
  const url=request.url
  const query=new URLSearchParams(url?.split("?")[1])
  const token=query.get("token")||""
  const decode =jwt.verify(token,JWT_SECRET)
  if(!decode||!(decode as JwtPayload).userId)
  {
    ws.close();
    return ;
  }
  ws.on("message",(data)=>{
    ws.send(data)
  })
})