const http=require('http');
const { url } = require('inspector');
 
 const myserver=http.createServer((req,res)=>{
const url=req.url;
if(url==='/'){
    res.write("<h1> wellcome to home page </h1>");
    res.end();
}else if(url==='/about'){
    res.end("<h1> wellcome to about page   ffff</h1>");
}

else {res.write("<h1>eror route to connect with server");
}

})


myserver.listen(8080,()=>{
    console.log("server is running on port 8080");
})