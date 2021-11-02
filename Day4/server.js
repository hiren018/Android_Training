/* 1.Write a Nodejs server that listen on port 3001 and which will read person.json and return a response in JSON format.

Person.json content as follows:

[

{
    PersonID:1,
    PersonName:”Rita”,
    PersonAddress:”Ahmedabad”
},
{
    PersonID:2,
    PersonName:”Reema”,
    PersonAddress:”Calcutta”
}

] */

// var http = require('http');
// var fs = require('fs');

// http.createServer(function(req, res) {

//     fs.readFile('person.json', function(err, data) {
//         res.writeHead(200, { 'Content-Type': 'application/json' });
//         res.write(data);
//         res.end();
//     });


// }).listen(3000, function() {
//     console.log('server started!')
// })

/*2. Write a Nodejs server that serves as a RESTFUL API that takes two parameters in a GET call and produces their sum.

http://localhost:3001/product?param1=5&param2=10 */

// var http = require('http');
// var url = require('url');

// http.createServer(function(req, res) {
//     /* var adr = 'http://localhost:3000/default.htm?value1=20&value2=30';*/
//     var q = url.parse(req.url, true).query
//         // console.log(q.hostname)
//         // console.log(q.search)
//         // console.log(q.query)
//         // console.log(q.pathname)
//     var a = parseInt(q.value1);
//     var b = parseInt(q.value2);
//     const c = a + b;
//     console.log(c);

//     res.writeHead(200, { 'Content-Type': 'text' });

//     res.end('sum is :' + c.toString());
// }).listen(3000, function() { console.log('server created') })




/*3. Write a Nodejs server that serves as a RESTFUL API that accepts a string as an input name and returns the first vowel character from the string.

 http://localhost:3000/vowefind?input=rita */


// var http = require('http');
// var url = require('url');
// http.createServer((req, res) => {

//     var q = url.parse(req.url, true).query;
//     console.log('url : ' + req.url);
//     let name = q.input;
//     console.log('name : ' + name)
//     if (req.url != '/favicon.ico') {
//         for (var i = 0; i < name.length; i++) {
//             if (name[i].match(/[aeiou]/i)) {
//                 res.end('first vowel is : ' + name[i].toString() + ' at index : ' + i)
//                 break;
//             }
//         }
//     }
// }).listen(3000, function() {
//     console.log('server started!!')
// })

/*4. Write a Nodejs server that serve as a RESTFUL API that accepts a file content and writes them to the disk.

http://localhost:3001/upload */