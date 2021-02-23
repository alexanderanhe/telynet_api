const { Router } = require('express');

const router = new Router();

router.get('/test', (req, res) => {
    const data = {
        name: 'Alexander Angulo',
        website: 'https://www.alex-angulo.me/'
    };
    res.json(data);
});  

module.exports = router;
