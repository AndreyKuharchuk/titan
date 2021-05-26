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

const dbres = client.connect();

app.get('/', (req, res) => {
    console.log(dbres);
    res.send('HOME PAGE');

});

app.listen(3000, () => {
    console.log(`HELLO`);
});

