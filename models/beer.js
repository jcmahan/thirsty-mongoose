var mongoose = require("mongoose");
var Schema = mongoose.Schema; 

var commentSchema = new Schema({
    content: String, 
}, {
    timestamps: true
})

var beerSchema = new Schema({
    name: {type: String, require: true}, 
    style: String, 
    bars: [{type: Schema.Types.ObjectId, ref: "Bar"}],
    comments: [commentSchema]
}, {
    timestamps: true
});

beerSchema.post("remove", function(beerDoc){
    let Bar = this.model("Bar");
    Bar.find({ beers: beerdoc_id }, function (err,bars) {
        bars.forEach(function(barDoc) {
            barDoc.beers.remove(beerDoc._id);
            barDoc.save();
        });
    });
});

module.exports = mongoose.model("Beer", beerSchema)