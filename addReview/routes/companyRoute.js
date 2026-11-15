const express = require('express');
const router = express.Router();
const companyController = require("../controllers/companyController") 


router.post("/addCompany",companyController.companyEntry)
router.get("/getCompany/:companyName",companyController.getCompany);
module.exports = router