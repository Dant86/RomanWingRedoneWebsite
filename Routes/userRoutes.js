const users = require('express').Router();
const utils = require("../Utils/utils.js");
const backend = utils.loadBackend();

users.get("/:id", function(req, res) {
    var id = req.params.id;
    console.log(id)
    var result = JSON.parse(backend.GetUser(id));
    console.log(result)
    if(utils.isError(result)) {
        res.render("index", {errMsg: result.Message});
    }
    else {
        posts = JSON.parse(backend.GetArticlesFromUser(result.ID))
        console.log(posts)
        res.render("Users/userPage", {user: result, posts: posts});
    }
});

users.post('/', function(req, res) {
   fname = req.body.fname;
   lname = req.body.lname;
   email = req.body.email;
   pword = req.body.pword;
   id = backend.CreateUser(fname, lname, email, pword);
   res.redirect("/users/" + id)
});

module.exports = users;
