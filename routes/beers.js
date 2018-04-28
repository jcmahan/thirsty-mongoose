const express = require("express");
const router = express.Router(); 
const beersCtrl = require("../controllers/beers")

router.get("/new", beersCtrl.new);
// router.post("/", beersCtrl.create);
router.get("/", beersCtrl.index);

// router.get("/:id/edit", beersCtrl.edit);
// router.put("/:id", beersCtrl.update);
// router.delete("/:id", beersCtrl.delete);

module.exports = router;