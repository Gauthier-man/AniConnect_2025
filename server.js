require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

// Connexion à MongoDB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Modèle utilisateur
const UserSchema = new mongoose.Schema({
  username: String,
  email: String,
  password: String,
  profilePicture: String,
});
const User = mongoose.model("User", UserSchema);

// Route pour l'inscription
app.post("/signup", async (req, res) => {
  const { username, email, password, profilePicture } = req.body;

  // Vérification si l'utilisateur existe déjà
  const existingUser = await User.findOne({ email });
  if (existingUser) return res.status(400).json({ message: "Email déjà utilisé" });

  // Hachage du mot de passe
  const hashedPassword = await bcrypt.hash(password, 10);
  const newUser = new User({ username, email, password: hashedPassword, profilePicture });

  await newUser.save();
  res.status(201).json({ message: "Compte créé avec succès !" });
});

// Lancer le serveur
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Serveur démarré sur le port ${PORT}`));
