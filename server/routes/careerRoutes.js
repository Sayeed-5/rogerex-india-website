const express = require("express");
const { submitCareer } = require("../controllers/careerController");

const router = express.Router();

router.post("/careers", submitCareer);

module.exports = router;