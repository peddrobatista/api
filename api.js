var http = require("http");
var resultado = function () {
    console.log("API em funcionamento...")
}
var api = () => {
    http.createServer(function(req, res) { 
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.writeHead(200, {'Contente-Type': 'application/json'});
        if (req.url == '/') {
            let numero = {
                temp: Math.round(Math.random() * 10),
                nivel: Math.round(Math.random() * 10),
                press: Math.round(Math.random() * 10)
            }
            res.end(JSON.stringify(numero)) // convertendo em JSON
        } else if (req.url == '/gravar' && req.method === 'POST') {
            let body = '';
            req.on('data', chunk => {
                body += chunk.toString();
            });
            req.on('end', () => {
                res.end(JSON.stringify(body));
            });
        } else {
            res.statusCode = 404;
            res.end('Rota não encontrada');
        }
            
    }).listen(8080, resultado);
}

// acessando a API http://localhost:8080

api();