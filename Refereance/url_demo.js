const url = require('url');
const myurl = new URL ('http://mywebsite.com/hello.html?id=100&Status=active');
// console.log(myurl.href);
// console.log(myurl.toString());


// console.log(myurl.host);
// console.log(myurl.hostname);

// console.log(myurl.pathname);
// console.log(myurl.searchParams);

myurl.searchParams.forEach((value,name)=>console.log(`${name}:${value}`));
myurl.searchParams.append('abc','123');
console.log(myurl.searchParams);