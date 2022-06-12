const express = require('express');
const router  = express.Router();

router.use('/movies',     require('./movies/routes'))
router.use('/actor',      require('./actor/routes'))
router.use('/categories', require('./categories/routes'))

// Ruta inicial de portada
router.get('/', (req, res) => {
    res.render('index');
});

module.exports = router;