// CRUD
const fileSystem = require('fs')

// READ A FILE
// SYNCHRONOUS
let data = fileSystem.readFileSync('f1.txt')
// console.log(data)  // will get the data in a different encoding
console.log("Data from file 1: " + data)  // concatenate with a string

// ASYNCHRONOUS
// Erro first callback function: First handle errors and then executes the function
fileSystem.readFile('f2.txt', function(err, data) {
    if(err) {
        console.error(err)
    }
    console.log("Data from file 2: " + data)
})


// WRITE ON A FILE 
// writeFile, writeFileSync
fileSystem.writeFile("f4.txt", "I like coding", 'utf8', (err) => {
    if(err) {
        console.log("Error writing the file: " + err)
    }
    console.log("File written sucessfully")
})

append