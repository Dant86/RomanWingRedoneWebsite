const users = require('express').Router();
const utils = require("../Utils/utils.js");
const backend = utils.loadBackend();
const bodyParser = require("body-parser")

users.post('/', function(req, res) {
   fname = req.body.fname;
   lname = req.body.lname;
   email = req.body.email;
   pword = req.body.pword;
   id = JSON.parse(backend.CreateUser(fname, lname, email, pword)).ID;
   req.session.user = id;
   res.redirect("/users/" + id)
});

users.get("/create", function(req, res) {
    res.render("Users/create")
});

users.get("/:id", function(req, res) {
    console.log("what the fuck");
    var id = req.params.id;
    var result = JSON.parse(backend.GetUser(id));
    if(utils.isError(result)) {
        req.session.error = "User not found."
        res.redirect("/");
    }
    else {
        if(req.session.user === undefined || req.session.user === null) {
            return res.redirect("/users/login");
        }
        if(req.session.user !== id) {
            req.session.error = "You can only view your own profile."
            return res.redirect("/")
        }
        posts = JSON.parse(backend.GetArticlesFromUser(result.ID))
        console.log(posts)
        res.render("Users/userPage", {user: result, posts: posts});
    }
});

module.exports = users;
