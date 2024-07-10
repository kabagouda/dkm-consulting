function generateId(lastname: string, firstname: string) {
  const normalizeString = (str: string) => {
    return str
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/[^a-zA-Z0-9]/g, "")
      .toLowerCase();
  };

  const normalizedLastname = normalizeString(lastname);
  const normalizedFirstname = normalizeString(firstname);

  return normalizedLastname.slice(0, 3) + normalizedFirstname.slice(0, 3) + Date.now().toString();
}

const generatePassword = () => {
  const length = 8;
  const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$*";
  let password = "";
  let hasLetter = false;
  let hasDigit = false;
  let hasSpecialChar = false;

  while (!hasLetter || !hasDigit || !hasSpecialChar) {
    const char = charset.charAt(Math.floor(Math.random() * charset.length));
    if (/[a-zA-Z]/.test(char)) hasLetter = true;
    if (/[0-9]/.test(char)) hasDigit = true;
    if (/[^a-zA-Z0-9]/.test(char)) hasSpecialChar = true;
    password += char;
  }

  while (password.length < length) {
    const char = charset.charAt(Math.floor(Math.random() * charset.length));
    password += char;
  }

  password = password
    .split("")
    .sort(() => 0.5 - Math.random())
    .join("");

  return password.slice(0, length);
};

export { generateId, generatePassword };
