const jwt = require("jsonwebtoken");
const pool = require("../config/db");
const bcrypt = require("bcrypt");

const register = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: "Email ve password zorunlu" });
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  await pool.query(
    "INSERT INTO users (email, password) VALUES ($1, $2)",
    [email, hashedPassword]
  );

  res.status(201).json({ message: "Kullanıcı oluşturuldu" });
};

module.exports = { register };

const login = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: "Email ve password zorunlu" });
  }

  const result = await pool.query(
    "SELECT * FROM users WHERE email = $1",
    [email]
  );

  if (result.rows.length === 0) {
    return res.status(401).json({ message: "Kullanıcı bulunamadı" });
  }

  const user = result.rows[0];

  
  const isMatch = await bcrypt.compare(password, user.password);

  if (!isMatch) {
    return res.status(401).json({ message: "Şifre hatalı" });
  }

  const token = jwt.sign(
    { id: user.id, role: user.role },
    "SECRET_KEY",
    { expiresIn: "1h" }
  );

  res.json({ token });
};

module.exports = { register, login };
