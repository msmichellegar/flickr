var test = require("tape");
var server = require("../server.js");

test("'/' returns 200 statusCode", function (t) {
    server.inject({method: "GET", url: "/"}, function (res) {
        t.equal(res.statusCode, 200, "page loaded successfully");
        t.end();
    });
});

test("'/{file*}' returns 200 statusCode", function (t) {
    server.inject({method: "GET", url: "/public/css/main.css"}, function (res) {
        t.equal(res.statusCode, 200, "static file retrieved");
        t.end();
    });
});
