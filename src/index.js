import cors from 'cors';
import dotenv from 'dotenv';
import ip from 'ip';
import express from 'express';
import Response from './domain/response.js';
import logger from './uti/logger.js';
import mysql from 'mysql';

// Connexion à la base de données MySQL
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '19581998Aliou',
    database: 'KBS_TRANSFERT'
});

// Charger les variables d'environnement à partir du fichier .env
dotenv.config();

// Créer une instance d'Express
const app = express();

// Définir le port en utilisant les variables d'environnement ou le port par défaut 3000
const PORT = process.env.SERVER_PORT || 3000;

// Configurer le middleware CORS
app.use(cors({ origin: '*' }));

// Configurer le middleware pour analyser les requêtes JSON
app.use(express.json());

// Définir la route racine avec une réponse simple
app.get('/users', (req, res) => res.send(new Response(200,'OK','Patient API , v1.0.0 - All systems Go')));

// Route pour insérer les données dans la table
app.post('/users', (req, res) => {
    const { genre, nom, prenom, email, password } = req.body;

    // Requête SQL pour insérer les données
    const query = 'INSERT INTO users (genre, nom, prenom, email, password) VALUES (?, ?, ?, ?, ?)';
    connection.query(query, [genre, nom, prenom, email, password], (err, result) => {
        if (err) {
            console.error(err);
            res.status(500).send('Erreur lors de l\'insertion des données');
        } else {
            res.status(201).send('Données insérées avec succès');
        }
    });
});

// Lancer le serveur sur le port spécifié
app.listen(PORT, () => {
    logger.info(`Server running on: ${ip.address()}:${PORT}`);
});
