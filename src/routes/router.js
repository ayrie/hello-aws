const express = require('express');
const Yacht = require('../models/yacht-model');

const router = express.Router();

router.get('/', async (req, res, next) => {
    try {
        res.status(200).send('Hello there!');
    }
    catch (err) {
        res.status(500).send(err.message);
    }
});

router.post('/yachts/add', (req, res, next) => {
    try {
        res.status(200).send('Add yacht');
    }
    catch (err) {
        res.status(500).send(err.message);
    }
});

router.get('/yachts', async (req, res, next) => {
    try {
        const yachts = await Yacht.findAll();
        console.log(yachts);
        res.status(200).send(yachts);
    }
    catch (err) {
        res.status(500).send(err.message);
    }
});

module.exports = router;