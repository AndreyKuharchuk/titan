const express = require('express');
const app = express();
const { Client } = require('pg');

const client = new Client({
    user: 'postgres',
    host: 'database-2.c2kjmrriyglx.us-east-2.rds.amazonaws.com',
    database: 'titan',
    password: 'zXJiF9tAPiwUEcjjXjjw',
    port: 5432,
});

client.connect();

app.get('/  ', (req, res) => {
    res.sendFile(__dirname + "home.html");
});

app.listen(8080, () => {
    console.log(`HELLO`);
});

