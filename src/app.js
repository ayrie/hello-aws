const express = require('express');
const bodyParser = require('body-parser');
const db = require('./config/db-config');
const router = require('./routes/router');

const app = express();

db.authenticate()
    .then(() => console.log('Database connected'))
    .catch(err => console.log(err));

app.use(bodyParser.json());

app.use('/', router);

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
    console.log(`App running on port ${PORT}`);
});