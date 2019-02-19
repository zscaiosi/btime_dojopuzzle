const router = require('express').Router();
const lineBreaker = require('../Models/LineBreaker');

router.get('/breakLines/:number', (req, res) => {
    const { phrase } = req.query;
    const { number } = req.params;
console.log(req.query, req.params)
    if (phrase && number) {
        const LineBreaker = new lineBreaker.LineBreaker(number, phrase);
        let newPhrase = LineBreaker.breakLines();

        if (newPhrase) {
            res.status(200).json({ newPhrase });
        } else {
            res.status(500).json({ newPhrase });
        }
    } else {
        res.status(400).json({ success: false, phrase, number });
    }
});

module.exports = router;