import mysql from 'mysql' ;
import dotenv from 'dotenv';

dotenv.config();
const pool=mysql.createPool({
    host:process.env.DB_HOST ;
    port : process.env.DB_PORT ;
    user:process.env.DB_USER ;
    password:process.env.DB_PASSWORD ;
    database:process.env.DB_NAME ;
    connectionLimit:process.env.DB_CONNECTION_LIMIT ;
})

export default pool ; 

const express = require('express');
const mysql = require('mysql');
const app = express();

// Middleware pour parser les données JSON
app.use(express.json());

// Connexion à la base de données MySQL
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '19581998Aliou',
    database: 'KBS_TRANSFERT'
});

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

// Démarrer le serveur
app.listen(3000, () => {
    console.log('Serveur démarré sur http://localhost:3000');
});
