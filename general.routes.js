const express = require('express')
const router  = express.Router()

router.use('/robots.txt', (req, res) => {
    res.type('text/plain');
    res.send("User-agent: *\nDisallow: /");
})
router.use('/favicon.ico', express.static('images/favicon.ico'));
router.use('/test', (req,res)=>{
    res.send("OK")
})

module.exports = router;