const http = require('http')

const server = http.createServer((req,res)=>{
    const myhtml = `
    <h1>Hello Node.js</h1>
    <p style="font-weight:bold;color:red;">| Non | Natanon Nantajittanon |</p>
    `
    res.write(myhtml)
    res.end()
})

server.listen(8080,'localhost',()=>{
    console.log("start server in port 8080")
})