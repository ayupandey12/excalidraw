import { WebSocketServer } from "ws";
const wss=new WebSocketServer({port:8080},()=>{console.log("ws server created")})
wss.on("connection",(ws)=>{
  ws.on("error",console.error);
  ws.on("message",(data)=>{
    ws.send(data)
  })
})