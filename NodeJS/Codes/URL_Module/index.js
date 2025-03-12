//importing the module 'url' 
const url = require("url");

const address = "https://localhost:3000/courses/lessons=58498366-url-module?name=URL-indexing&cid=01";

let parsedUrl = url.parse(address, true);

console.log(parsedUrl.href); // https://localhost:3000/courses/lessons=58498366-url-module?name=URL-indexing&cid=01

console.log(parsedUrl.host); // localhost:3000

console.log(parsedUrl.pathname); // /courses/lessons=58498366-url-module

console.log(parsedUrl.query); // [Object: null prototype] { name: 'URL-indexing', cid: '01' }

console.log(parsedUrl.port); // 3000

// // format a URL object back into a URL string
// const urlString = url.format({
//     protocol: 'https',
//     hostname: 'example.com',
//     pathname: '/some/path',
//     query: {
//         page: 1,
//         format: 'json',
//     },
// });
// console.log(urlString); //https://example.com/some/path?page=1&format=json

// // resolve relative URLs against a base URL
// const urlResolved = url.resolve("/products/apple/", "google/abs");
// console.log(urlResolved); // /products/apple/google/abs

