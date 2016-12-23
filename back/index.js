let express = require("express");
let bodyParser = require("body-parser");

// Modulos
let conta = require("./modules/Conta/conta");

let app = express();

// Habilita JSON
app.use(bodyParser.json({limit: "102400kb"}));

// Carrega Modulos do sistema
app.use("/conta", conta);

//Arquivos estaticos do front
app.use(express.static('../front'));

//404 - Redirecionar para home
app.use((req,res) => {
	res.redirect("/");
})

app.listen(5000);
