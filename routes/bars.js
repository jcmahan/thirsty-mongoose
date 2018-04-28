const express = require("express");
const router = express.Router();
const barsCtrl = require("../controllers/bars")

router.get("/new", barsCtrl.new);
// router.post("/", barsCtrl.create);
router.get("/", barsCtrl.index);
// router.get("/:id/edit", barsCtrl.edit);
// router.put("/:id", barsCtrl.update);
// router.delete("/:id", barsCtrl.destroy);

module.exports = router; 