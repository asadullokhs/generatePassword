function generatePassword(length) {
  const letters =
    "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()-_=+";
  let password = "";
  for (let i = 0; i < length; i++) {
    const randomPassword = Math.floor(Math.random() * letters.length);
    password += letters[randomPassword];
  }
  return password;
}

module.exports = generatePassword;
