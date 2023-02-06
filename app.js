/*const fs = require('fs');
 console.log('hello world')
 const userName='Cemile'
 fs.writeFile('text.txt','Name:' +userName,(err)=>{
    if (err){
        console.log(err);
        return
    }
    console.log("WROTE FILE")
 })
 */

 /* const http = require('http');
  const server=http.createServer(( req,res)=>{
  console.log(req.method,req.url);

  if (req.method==='POST'){
    let body=  ''
    console.log("POST REQUEST RECEIVED")
    req.on('end',()=>{
        console.log(body)
        res.end('<h1> Got the post request/<h1>')
    })
    req.on('data',(chunk)=>{
        body+=chunk
    })

  }
  else{
     res.setHeader('Content-Type','text/html')
     res.end('<form method="POST"> <input type="text" name="username" > <button> Create User</button></form>')

  }
 
 })

 server.listen(5000)
 */
 const express =  require('express');
 const bodyParser =  require('body-parser')
 const app=express();
app.use(bodyParser.urlencoded({extended:false}))

app.post('/user',(req,res,next)=>{
   console.log(req.body.userName)
     res.send(`<h1> ${req.body.username} </h1>`)
})
 
 app.get('/',(req,res,next)=>{
   console.log("hry")
    res.send('<form  action ="/user" method= "POST"> <input type="text" name="username"> <button type="submit"> Create username</button> </form>')
 })

 app.listen(5000);

 