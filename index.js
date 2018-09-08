const express = require("express");
const bodyParser = require("body-parser");
const hbs = require("express-handlebars");
const userRouter = require("./Routes/userRoutes.js");

const app = express();

app.engine("hbs", hbs({extname: "hbs", defaultLayout: "layout",
                       layoutsDir: "./Views/Layouts"}));

app.set("views", "./Views")
app.set("view engine", "hbs");

app.use(bodyParser.urlencoded({ extended: true }));
app.use("/users", userRouter);

app.get("/", function(req,res){
	res.render('index')
});

process.on('SIGINT', function() {
  console.log( "\nGracefully shutting down from SIGINT (Ctrl-C)" );
  process.exit(1);
});

app.listen(3000);

//a;slkfjks
