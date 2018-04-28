var Bar = require("./../models/bar");

module.exports = {
    index, 
    // create,

    new: newBar,
}
function index(req, res) {
    Bar.find({}, function(err, bars) {
        res.render("bars/index", {bars});
    });
}
function newBar(req, res) {
    res.render("bars/new");
}
function create(req, res){
    req.body
    Bar.new
}
