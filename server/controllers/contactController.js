const { sendEmail } = require("../config/mailer");
const { isValidEmail, isValidPhone, isFieldEmpty } = require("../middleware/validation");

const submitContact = async (req, res) => {
  try {
    console.log("Hello, Your request received");
    // console.log(req);
    
    
//{
//   "name": "John",
//   "email": "john@gmail.com",
//   "phone": "9876543210",
//   "subject": "Website Development",
//   "message": "Need a business website."
//}
    
console.log(" we start read")
    const { name, email, phone, subject, message } = req.body;
    console.log("Now read is complete")

    // Validate all required fields exist and are not empty
    console.log("validating empty input fields")
    if (
      isFieldEmpty(name) ||
      isFieldEmpty(email) ||
      isFieldEmpty(phone) ||
      isFieldEmpty(subject) ||
      isFieldEmpty(message)
    ) {
      return res.status(400).json({
        success: false,
        message: "All fields are required.",
      });
    }

    console.log("validating email")
    // Validate email format
    if (!isValidEmail(email.trim())) {
      return res.status(400).json({
        success: false,
        message: "Invalid email format.",
      });
    }

    console.log("validating phone")
    // Validate phone format
    if (!isValidPhone(phone)) {
      return res.status(400).json({
        success: false,
        message: "Invalid phone number.",
      });
    }

    // Trim strings for safety
    const trimmedData = {
      name: name.trim(),
      email: email.trim(),
      phone: phone.trim(),
      subject: subject.trim(),
      message: message.trim(),
    };

    

    // Prepare email content
    const htmlContent = `
      <h2>New Contact Form Submission</h2>
      <p><strong>Name:</strong> ${trimmedData.name}</p>
      <p><strong>Email:</strong> ${trimmedData.email}</p>
      <p><strong>Phone:</strong> ${trimmedData.phone}</p>
      <p><strong>Subject:</strong> ${trimmedData.subject}</p>
      <p><strong>Message:</strong></p>
      <p>${trimmedData.message.replace(/\n/g, "<br>")}</p>
    `;

    // Send email via Nodemailer
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_TO,
      replyTo: trimmedData.email,
      subject: `Contact Form: ${trimmedData.subject}`,
      html: htmlContent,
    };

    const emailResult = await sendEmail(mailOptions);

    if (!emailResult.success) {
      return res.status(500).json({
        success: false,
        message: "Failed to send message. Please try again later.",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Message sent successfully.",
    });
  } catch (error) {
    console.error("Contact submission error:", error.message);
    return res.status(500).json({
      success: false,
      message: "An error occurred. Please try again later.",
    });
  }
};

module.exports = { submitContact };