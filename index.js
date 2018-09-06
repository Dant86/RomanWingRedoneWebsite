const userRouter = require("./Routes/userRoutes.js")
const express = require("express")
const hbs = require("express-handlebars")
const app = express();

app.engine("hbs", hbs({extname: "hbs", defaultLayout: "layout",
                       layoutsDir: "./Views/Layouts"}));
app.set("views", "./Views")
app.set("view engine", "hbs");

app.use("/users", userRouter);

process.on('SIGINT', function() {
  console.log( "\nGracefully shutting down from SIGINT (Ctrl-C)" );
  process.exit(1);
});

app.listen(3000);
