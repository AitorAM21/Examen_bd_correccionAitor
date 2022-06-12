const express = require('express');
const router  = express.Router();


const cCat = require('./category.functions');

router.get('/list',  cCat.getList)
router.get('/:id',   cCat.getCategoryMovies)


// Ruta inicial de portada
router.get('/', (req, res) => {
    res.render('category/index');
});

module.exports = router;