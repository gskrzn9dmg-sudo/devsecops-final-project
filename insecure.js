const API_KEY = process.env.API_KEY;

function login(username, password) {
  const storedUsername = process.env.ADMIN_USERNAME;
  const storedPassword = process.env.ADMIN_PASSWORD;

  return username === storedUsername && password === storedPassword;
}

module.exports = { login };