var mongoose = require("mongoose");
var Schema = mongoose.Schema; 

var barSchema = new Schema({
    name: {type: String, require: true}, 
    location: String, 
    beers: [{type: Schema.Types.ObjectId, ref: "Beer"}]
} , {
    timestamps: true
});

barSchema.post("remove", function(barDoc){
    let Beer = this.model("Beer");
    Beer.find({bars: bardoc_id}, function (err,beers) {
        beers.forEach(function(beerDoc) {
            beerDoc.bars.remove(barDoc._id);
            beerDoc.save();
        });
    });
});

module.exports = mongoose.model("Bar", barSchema);