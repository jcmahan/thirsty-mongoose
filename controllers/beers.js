var Beer = require("./../models/beer")

module.exports = {
    index, 
    // create,
    new: newBeer,
}

function index(req, res) {
    Beer.find({}, function(err, beers) {
        res.render("beers/index", {beers});
    });
}
function newBeer(req, res){
    res.render("beers/new");
}
