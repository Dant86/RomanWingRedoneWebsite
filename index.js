const express = require("express");
const bodyParser = require("body-parser");
const hbs = require("express-handlebars");
const userRouter = require("./Routes/userRoutes.js");
const session = require('express-session');
const utils = require("./Utils/utils.js");
const backend = utils.loadBackend();

const app = express();

app.engine("hbs", hbs({extname: "hbs", defaultLayout: "layout",
                       layoutsDir: "./Views/Layouts"}));

app.set("views", "./Views")
app.set("view engine", "hbs");

var sess = {
    secret: "romanwing",
    cookie: {}
}

app.use(session(sess))
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/Public'));
app.use("/users", userRouter);

app.get("/", function(req,res) {
    var err = req.session.error;
    req.session.error = null;
    var articles = JSON.parse(backend.Get12MostRecentArticles());
    var events = JSON.parse(backend.GetFutureEvents());
    console.log(articles)
	return res.render('index', {err: err, articles: articles, events: events});
});

process.on('SIGINT', function() {
  console.log( "\nGracefully shutting down from SIGINT (Ctrl-C)" );
  process.exit(1);
});

app.listen(3000);

//a;slkfjks
