const express = require('express');
const bodyParser = require('body-parser');
const http = require('http');
const dateFormat = require('dateformat');
const router = express.Router();

var app = express();

app.use(bodyParser.urlencoded({extended:true}));

router.get('/',(req,res)=>{

    const options={
        hostname: 'localhost',
        port:'8080',
        path:'/helper/getCases/1',
        method: 'GET',
        headers:{
            'content-type' : 'application/json',
            'accept':'application/json'
        }
    };
    var casesInfos =[];
    const request = http.request(options,(res)=>{
        res.setEncoding('utf8');
        res.on('data',(chunk)=>{
            var gelendata= JSON.parse(`${chunk}`);
            
            for(data of gelendata){
                casesInfos.push({
                    id : data.id,
                    vehiclePlate : data.incidentInfo.firstVehicle.vehiclePlate,
                    ownerName : data.incidentInfo.firstVehicle.vehicleOwner.ownerName,
                    createDate : dateFormat(data.createDate,"dd/MM/yyyy")
                })
                console.log(data.incidentInfo.firstVehicle.vehiclePlate);
            }
    
            console.log("casesInfos ----")
            console.log(casesInfos);
        });
        res.on('end',()=>{
            console.log('No more data in response');
        });
    });

    request.end();
    
    res.render('wait-detail',{casesInfos: casesInfos});
})

module.exports = router;
