var express = require('express');
var fs = require('fs');
var app = express();

app.listen(8080, () => {
    console.log("Server is listening on 8080");
})

app.use(express.static("public"));

app.get("/", (req, res) => {
    fs.readFile('public/main.html', function(err, data) {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);
        return res.end();
    });
})