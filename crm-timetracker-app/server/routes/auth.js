// server/routes/auth.js

const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/User");

const JWT_SECRET = process.env.JWT_SECRET || "geheimesToken123"; // später in .env-Datei auslagern

// LOGIN-ROUTE
router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    // 1. Prüfen: Felder vorhanden?
    if (!email || !password) {
      return res
        .status(400)
        .json({ error: "Email und Passwort sind erforderlich." });
    }

    // 2. User suchen
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ error: "User nicht gefunden." });
    }

    // 3. Passwort vergleichen
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ error: "Falsches Passwort." });
    }

    // 4. JWT-Token erstellen
    const token = jwt.sign(
      { userId: user._id, email: user.email },
      JWT_SECRET,
      { expiresIn: "1d" }
    );

    // 5. Erfolg: Token zurückgeben
    res.status(200).json({ token });
  } catch (err) {
    console.error("Fehler beim Login:", err);
    res.status(500).json({ error: "Serverfehler beim Login." });
  }
});

module.exports = router;
