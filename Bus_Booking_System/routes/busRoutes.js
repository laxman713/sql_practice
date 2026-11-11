const express = require("express");
const router = express.Router();
const busRouter = require("../controllers/busController")


router.post("/buses",busRouter.busEntry);
router.get("/buses/available/:seats",busRouter.retrievBusEntries);
module.exports = router;