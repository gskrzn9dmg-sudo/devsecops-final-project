const API_KEY = "DEMO_API_KEY_FOR_CLASS_ONLY";

function login(username, password) {
  if (username === "admin" && password === "admin123") {
    return true;
  }
  return false;
}

module.exports = { login };