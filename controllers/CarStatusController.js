const express = require('express');
const bodyParser = require('body-parser');
const router = express.Router();

var app = express();

app.use(bodyParser.urlencoded({extended:true}));

router.get('/',(req,res)=>{
    res.render('car-status');
})

module.exports = router;
