let express = require("express");
let bodyParser = require("body-parser");

// Modulos
let conta = require("./modules/Conta/conta");

let app = express();

// Habilita JSON
app.use(bodyParser.json({limit: "102400kb"}));

// Carrega Modulos do sistema
app.use("/conta", conta);

app.listen(5000);
