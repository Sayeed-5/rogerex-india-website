const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const contactRoutes = require("./routes/contactRoutes");
const careerRoutes = require("./routes/careerRoutes");

// Health check endpoint
app.get("/api/health", (req, res) => {
  res.json({ status: "ok" });
});

// Contact form route
app.use("/api", contactRoutes);

// Career application route
app.use("/api", careerRoutes);

app.get("/",(req,res) => {
    res.status(200).json({success: true, message: "This is home route"})
})

// 404 handler (optional, for debugging)
app.use((req, res) => {
  res.status(404).json({ success: false, message: "Endpoint not found." });
});

// Start server
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
