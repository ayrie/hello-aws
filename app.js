const express = require('express');

const app = express();

app.get('/', (req, res, next) => {
    try {
        res.status(200).send('Hello there, AWS');
    }
    catch (err) {
        res.status(500).send(err.message);
    }
})

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
    console.log(`App running on port ${PORT}`);
})