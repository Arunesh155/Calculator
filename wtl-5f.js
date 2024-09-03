const calculator = require('./wtl-5')
const http = require('http')
const url = require('url')
querystring = require('querystring')

http.createServer((req,res) => {
    
    if(req.url.includes('/calculate')) {
        const query = url.parse(req.url).query
        const qs = querystring.parse(query)
        const n1 = qs["n1"]
        const n2 = qs["n2"]
        const operation = qs["operation"]

        const a = parseInt(n1)
        const b = parseInt(n2)

        res.write("Number1 = "+a+"\n")
        res.write("Number2 = "+b+"\n")

        if(operation=='addition') {
            console.log("Addition = "+calculator.addition(a,b))
            res.write("Addition = "+calculator.addition(a,b))
        }

        else if(operation=='subtraction') {
            console.log("Subtraction = "+calculator.subtraction(a,b))
            res.write("Subtraction = "+calculator.subtraction(a,b))
        }

        else if(operation=='multiplication') {
            console.log("Multiplication = "+calculator.multiplication(a,b))
            res.write("Multiplication = "+calculator.multiplication(a,b))
        }

        else if(operation=='division') {
            console.log("Division = "+calculator.division(a,b))
            res.write("Division = "+calculator.division(a,b))
        }

        else if(operation=='modulus') {
            console.log("Modulus = "+calculator.modulus(a,b))
            res.write("Modulus = "+calculator.modulus(a,b))
        }
        else if(operation=='square') {
            console.log("square = "+calculator.square(a,b))
            res.write("square = "+calculator.square(a,b))
        }

        res.end()
    }      
}).listen(4000)

console.log("running")