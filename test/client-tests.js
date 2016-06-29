var test = require("tape");
var React = require("react");
var enzyme = require("enzyme");

var Nav = require("../src/js/components/nav.jsx");
var Carousel = require("../src/js/components/carousel.jsx");
var Grid = require("../src/js/components/grid.jsx");
var Pagination = require("../src/js/components/pagination.jsx");
var ShareButton = require("../src/js/components/sharebutton.jsx");
var Tile = require("../src/js/components/tile.jsx");

var methods = require("../src/js/methods/methods.jsx");

var testData = require("./test-data.js");

test("'<Nav />' renders", function(t) {
    var nav = enzyme.shallow(<Nav />);
    var children = nav.children().nodes;

    t.equal(children.length > 0, true, "nav renders");
    t.end();
});

test("'<Carousel />' renders", function(t) {
    var carousel = enzyme.shallow(<Carousel />);
    var children = carousel.children().nodes;

    t.equal(children.length > 0, true, "carousel renders");
    t.end();
});

test("'<Grid />' renders", function(t) {
    var grid = enzyme.shallow(<Grid theme="kittens" images={testData.urls} />);
    var children = grid.children().nodes;

    t.equal(children.length > 0, true, "grid renders");
    t.end();
});

test("'<Pagination />' renders", function(t) {
    var pagination = enzyme.shallow(<Pagination />);
    var children = pagination.children().nodes;

    t.equal(children.length > 0, true, "pagination renders");
    t.end();
});

test("'<ShareButton />' renders", function(t) {
    var shareButton = enzyme.shallow(<ShareButton />);
    var children = shareButton.children().nodes;

    t.equal(children.length > 0, true, "shareButton renders");
    t.end();
});

test("'<Tile />' renders", function(t) {
    var tile = enzyme.shallow(<Tile />);
    var children = tile.children().nodes;

    t.equal(children.length > 0, true, "tile renders");
    t.end();
});

test("getPhotos() returns array", function(t) {
    var urls = methods.getPhotoUrls(testData.data);

    t.equal(Array.isArray(urls), true, "getPhotos() returns an array");
    t.end();
});

test("getPhotos() returns array of 15 urls", function(t) {
    var urls = methods.getPhotoUrls(testData.data);

    t.equal(urls.length, 15, "getPhotos() returns array of length 15");
    t.end();
});
