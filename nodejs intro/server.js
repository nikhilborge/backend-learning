const http = require('http')

const server = http.createServer((req,res)=>{
res.end("Hello world from server")
}) //server created here

server.listen(3002,()=>{
console.log("server running on port 3002")
})








