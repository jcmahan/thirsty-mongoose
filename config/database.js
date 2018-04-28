var mongoose = require("mongoose")

mongoose.connect("mongodb://localhost/thirsty-mongoose");

var db = mongoose.connection; 
db.on("open", function(){
    console.log(`connected to MongoDB at ${db.host}: ${db.port}`);
});