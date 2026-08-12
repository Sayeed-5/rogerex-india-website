const express = require("express");
const { submitCareer } = require("../controllers/careerController");
const upload = require("../middleware/upload");

const router = express.Router();

// Wrap multer so its errors are caught and returned as JSON (not Express default HTML)
const resumeUpload = (req, res, next) => {
  upload.single("resume")(req, res, (err) => {
    if (err) {
      return res.status(400).json({ success: false, message: err.message });
    }
    next();
  });
};

router.post("/careers", resumeUpload, submitCareer);

module.exports = router;
