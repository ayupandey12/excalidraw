import { WebSocket, WebSocketServer } from "ws";
import jwt, { JwtPayload } from "jsonwebtoken";
import { JWT_SECRET } from "@repo/common-jwtsecret/index"
import { prisma } from "@repo/db";
type User={
  ws:WebSocket,
  roomId:number[],
  userId:string
}
const user:User[]=[];
const wss=new WebSocketServer({port:8080},()=>{console.log("ws server created")})
wss.on("connection",(ws,request)=>{
   ws.on("error",console.error);
  const url=request.url
  const query=new URLSearchParams(url?.split("?")[1])
  const token=query.get("token")||""
  const decode =jwt.verify(token,JWT_SECRET)
   if(typeof(decode)==="string")
   { ws.close();
    return ;
   }

  if(!decode||!decode.userId)
  {
    ws.close();
    return ;
  }
  user.push({
    ws:ws,
    roomId:[],
    userId:decode.userId
  })
  ws.on("message",async(data)=>{ //comming data is in string form 
    const parsedata=JSON.parse(data as unknown as string)
    if(parsedata.type==="join_room")
      {
         const user2=user.find(x=>x.ws===ws)
         if(!user2) return ;
         user2.roomId.push(parsedata.roomId)
      }  
    if(parsedata.type==="leave_room")
      { const user2=user.find(x=>x.ws===ws)
        if(!user2) return ;
        user2.roomId=user2.roomId.filter(x=>x!==parsedata.roomId)
      } 
    if(parsedata.type==="chat")
      {
         const roomId =parsedata.roomId;
         const message=parsedata.message;
         user.forEach(u=>{
          if(u.roomId.includes(roomId))
          {
            u.ws.send(JSON.stringify({ //you can send  data in string form
              type:"chat",
              message:message,
              roomId:roomId
            }));
          }
         })

         
      }   

  })
})