var http = require("http");
var resultado = function () {
    console.log("API em funcionamento...")
}
var api = () => {
    http.createServer(function(req, res) { 
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.writeHead(200, {'Contente-Type': 'application/json'});
            let numero = {
                temp: Math.round(Math.random() * 10),
                nivel: Math.round(Math.random() * 10),
                press: Math.round(Math.random() * 10)
            }
            res.end(JSON.stringify(numero)) // convertendo em JSON
    }).listen(8080, resultado);
}

// acessando a API http://localhost:8080

api();


