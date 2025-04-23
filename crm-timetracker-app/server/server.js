require("dotenv").config();
const express = require("express");
// Express hilft webserver zu erstellen
// damit kann man ganz einfach http routen bauen
// auf requests reagieren und responses zurückgeben
const mongoose = require("mongoose");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());

// 🧠 Funktion, die alles startet:
async function startServer() {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("✅ MongoDB verbunden");

    app.listen(PORT, () => {
      console.log(`🚀 Server läuft auf Port ${PORT}`);
    });
  } catch (error) {
    console.error("❌ MongoDB-Fehler:", error);
  }
}

// Jetzt rufen wir die Startfunktion auf:
startServer();

// Test-Route
app.get("/", (req, res) => {
  res.send("Server läuft!");
});
