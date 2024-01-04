const fs = require('fs');
const path = require('path');
// fs.mkdir(path.join(__dirname,'/text3'),{},err=>

// {
//     if(err) throw err;
//     console.log('Folder created.......3')
// })
 

// fs.writeFile(path.join(__dirname,'/text3','Hello.text'),'Hello World!',err=>{
//     if(err) throw err;
//     console.log('File written to...');
// }
// );



 

// fs.appendFile(path.join(__dirname,'/text3','Hello.text'),'i love you node js ',err=>{
//     if(err) throw err;
//     console.log('File append to...');
// }
// );

 

// fs.readFile(path.join(__dirname,'/text3','Hello.text'),'utf8',(err,data)=>{
//     if(err) throw err;
//     console.log(data);
// }
// );

fs.rename(
    path.join(__dirname,'text3', 'hello.text'),
    path.join(__dirname,'/text3', 'Hello_Word.text'),
    err => {
        if(err) throw err;
        console.log('file renamed.....');
    }
);


