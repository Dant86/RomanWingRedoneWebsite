var ref = require("ref");
var ffi = require("ffi");

exports.loadBackend = function() {
    var backend = ffi.Library("./Utils/Lib/libbackend.dylib", {
        CreateUser: ["string", ["string", "string", "string", "string"]],
        GetUser: ["string", ["int"]],
        GetUserByEmail: ["string", ["string"]],
        ValidateUser: ["string", ["int", "string"]],
        CreateArticle: ["string", ["int", "string", "string", "string", "string"]],
        GetArticle: ["string", ["int"]],
        DeleteArticle: ["string", ["int"]],
        ApproveArticle: ["string", ["int"]],
        GetArticlesFromUser: ["string", ["int"]],
        GetApprovedArticles: ["string", []],
        GetArticleAuthor: ["string", ["int"]],
        SaveArticle: ["string", ["int", "int"]],
        GetSavedArticles: ["string", ["int"]],
        CreateEvent: ["string", ["string", "string", "string", "string"]],
        GetEvent: ["string", ["int"]],
        GetFutureEvents: ["string", []]
    });
    return backend;
}

exports.isError = function(jsonObj) {
    return ("Message" in jsonObj);
}
