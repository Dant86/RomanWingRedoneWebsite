const utils = require("./Utils/utils.js");
const backend = utils.loadBackend();

var arg = process.argv.slice(2)[0];

if (arg === "users") {
    seed_users();
} else if (arg === "articles") {
    seed_articles();
} else if (arg === "events") {
    seed_events();
} else if (arg === "all") {
    seed_users();
    seed_articles();
    seed_events();
} else if (arg == "migrate") {
    migrate();
} else {
    console.log("No valid arguments provided.");
}

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

function migrate() {
    backend.Migrate()
}

function seed_users() {
    for (var i = 0; i < 10; i++) {
        var result = backend.CreateUser("User", String(i), "user" + i + "@ex.com", "password");
    }
}

function seed_articles() {
    var urls = [
        "https://img.huffingtonpost.com/asset/5b7fdeab1900001d035028dc.jpeg?cache=sixpwrbb1s&ops=1910_1000",
        "http://homepages.uc.edu/~burgesmr/catanddog/Dogs/1.jpg",
        "https://www.psychologistworld.com/images/articles/a/575x360-v-dpc-47651712.jpg",
    ];
    for (var i = 0; i < 15; i++) {
        var userId = getRandomInt(10) + 1;
        var thumbnailUrl = urls[getRandomInt(3)];
        var title = "sample_title";
        var desc = "this is the description of the article";
        var body = "this is the body of the article"
        var result = JSON.parse(backend.CreateArticle(userId, title, desc, body,
                                           thumbnailUrl)).ID;
        backend.ApproveArticle(result);
    }
}

function seed_events() {
    for (var i = 0; i < 15; i++) {
        var name = "Event" + i;
        var description = "This is the event's description.";
        var date = "2019-08-31";
        var location = "This is the event's title";
        var result = backend.CreateEvent(name, description, date, location);
    }
}
