const express = require('express');
const bodyParser = require('body-parser');
const router = express.Router();

var app = express();

app.use(bodyParser.urlencoded({extended:true}));

router.get('/',(req,res)=>{
    res.render('helper');
})

router.post('/add',(req,res)=>{
    console.log(ekledi);
});



module.exports = router;
