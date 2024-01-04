const http = require ('http');
http.createServer((req,res)=>{
    res.write('hello word');
    res.end();
}).listen(5000, ()=> console.log('server running'))