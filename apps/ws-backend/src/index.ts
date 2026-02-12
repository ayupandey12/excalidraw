import { WebSocketServer } from "ws";
const wss=new WebSocketServer({port:8080},()=>{console.log("ws server created")})
wss.on("connection",(ws,request)=>{
  const url=request.url
  const query=new URLSearchParams(url?.split("?")[1])
  const token=query.get("token")
  
  ws.on("error",console.error);
  ws.on("message",(data)=>{
    ws.send(data)
  })
})