// mongoose importieren
// Mongoose ist die Bibliothek, die uns bei der Arbeit mit MongoDB hilft.
// Sie macht Mongo einfacher, sicherer und strukturierter.
const mongoose = require("mongoose");

//  Schema erstellen: definiert die Struktur eines "User"-Dokuments in der Datenbank
// Ein Schema ist wie eine Vorlage oder Blaupause: Welche Felder hat der User? Welche sind Pflicht?
const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },

  // 📧 E-Mail-Adresse (einzigartig!)
  email: {
    type: String,
    required: true,
    unique: true,
  },

  password: {
    type: String,
    required: true,
  },

  //evtl  weitere Felder hinzufügen, z. B. Rolle, Firma, istAdmin, usw.
});

//  Modell erstellen:
// Ein Modell ist wie eine „Klasse“, die du später nutzen kannst, um neue User zu erzeugen,
// in der Datenbank zu speichern oder nach ihnen zu suchen.
const User = mongoose.model("User", UserSchema);

// mongoose.model(Name, Schema):
// - "User": so wird die Collection heißen (MongoDB nennt sie automatisch "users")
// - UserSchema: sagt, wie die Dokumente aufgebaut sein sollen

// Jetzt exportieren:
// Damit man in anderen Dateien `require("./models/User")` machen kannst und Zugriff auf das Modell hast
module.exports = User;
