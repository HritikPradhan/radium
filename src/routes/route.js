const express = require('express');
const router = express.Router();

const cowinController= require("../controllers/cowinController")

router.get("/cowin/states", cowinController.getStatesList)
router.get("/cowin/districts/:stateId", cowinController.getDistrictsList)
router.get("/cowin/centers", cowinController.getByPin)
router.post("/cowin/getOtp", cowinController.getOtp)
router.get("/weather",cowinController.getweather)
router.get("/londontemp",cowinController.getweather2)
router.get("/city",cowinController.cities)


module.exports = router;