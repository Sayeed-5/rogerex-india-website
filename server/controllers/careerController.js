const { sendEmail } = require("../config/mailer");
const { isValidEmail, isValidPhone, isFieldEmpty } = require("../middleware/validation");

const submitCareer = async (req, res) => {
  try {
    const { name, email, phone, college, role, coverLetter } = req.body;

    // Validate all required text fields
    if (
      isFieldEmpty(name) ||
      isFieldEmpty(email) ||
      isFieldEmpty(phone) ||
      isFieldEmpty(college) ||
      isFieldEmpty(role) ||
      isFieldEmpty(coverLetter)
    ) {
      return res.status(400).json({
        success: false,
        message: "All fields are required.",
      });
    }

    // Validate email format
    if (!isValidEmail(email.trim())) {
      return res.status(400).json({
        success: false,
        message: "Invalid email format.",
      });
    }

    // Validate phone format
    if (!isValidPhone(phone)) {
      return res.status(400).json({
        success: false,
        message: "Invalid phone number.",
      });
    }

    // Validate resume file
    if (!req.file) {
      return res.status(400).json({
        success: false,
        message: "Resume file is required. Please upload a PDF or Word document.",
      });
    }

    // Trim strings for safety
    const trimmedData = {
      name: name.trim(),
      email: email.trim(),
      phone: phone.trim(),
      college: college.trim(),
      role: role.trim(),
      coverLetter: coverLetter.trim(),
    };

    // Prepare email HTML content
    const htmlContent = `
      <h2 style="color:#333;">New Career Application</h2>
      <p><strong>Applicant Name:</strong> ${trimmedData.name}</p>
      <p><strong>Email:</strong> ${trimmedData.email}</p>
      <p><strong>Phone:</strong> ${trimmedData.phone}</p>
      <p><strong>College:</strong> ${trimmedData.college}</p>
      <p><strong>Applied Role:</strong> ${trimmedData.role}</p>
      <p><strong>Cover Letter:</strong></p>
      <p>${trimmedData.coverLetter.replace(/\n/g, "<br>")}</p>
      <hr/>
      <p style="color:#888; font-size:12px;">Resume is attached to this email.</p>
    `;

    // Build mail options with resume attached from memory buffer
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_TO,
      replyTo: trimmedData.email,
      subject: `Career Application: ${trimmedData.role} — ${trimmedData.name}`,
      html: htmlContent,
      attachments: [
        {
          filename: req.file.originalname,
          content: req.file.buffer,
          contentType: req.file.mimetype,
        },
      ],
    };

    const emailResult = await sendEmail(mailOptions);

    if (!emailResult.success) {
      return res.status(500).json({
        success: false,
        message: "Failed to submit application. Please try again later.",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Application submitted successfully.",
    });
  } catch (error) {
    console.error("Career submission error:", error.message);
    return res.status(500).json({
      success: false,
      message: "An error occurred. Please try again later.",
    });
  }
};

module.exports = { submitCareer };