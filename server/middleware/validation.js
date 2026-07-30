// Simple email validation
const isValidEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);

};

// Simple phone validation (10-13 digits, allow +, -, spaces)
const isValidPhone = (phone) => {
  const phoneRegex = /^[\d\s\-\+]{10,13}$/;
  return phoneRegex.test(phone.replace(/\s/g, ""));
};

// Trim and check if field is empty
const isFieldEmpty = (field) => {
  return !field || field.trim() === "";
};

module.exports = {
  isValidEmail,
  isValidPhone,
  isFieldEmpty,
};