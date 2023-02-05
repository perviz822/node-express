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

 app.use((req,res,next)=>{
   let body = '';
    req.on('data',chunk=>{
      body+=chunk;
        
    })
    req.on('end',()=>{
      const name=  body.split('=')[1];
     if(name){
       req.body =  {userName:name};
     }
      next()
    })
    console.log("MIDDLEWARE")
   // res.send('<form method= "POST"> <input type="text" name="username"> <button type="submit"> Create username</button> </form>')
 })
 app.use((req,res,next)=>{
   if (req.body){
      res.send(`<h1>${req.body.userName} </h1>`)
   }
    res.send('<form method= "POST"> <input type="text" name="username"> <button type="submit"> Create username</button> </form>')
    next()
 })

 app.listen(5000);