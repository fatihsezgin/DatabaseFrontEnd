const express = require('express');
const bodyParser = require('body-parser');
const http = require('http');
const router = express.Router();

var app = express();

app.use(bodyParser.urlencoded({extended:true}));



router.get('/',(req,res)=>{

    const options={
        hostname: 'localhost',
        port:'8080',
        path:'/workorder/getWorkOrdersByService/1',
        method: 'GET',
        headers:{
            'content-type' : 'application/json',
            'accept':'application/json'
        }
    };
    var workOrders =[];
    const request = http.request(options,(res1)=>{
        res1.setEncoding('utf8');
        res1.on('data',(chunk)=>{
            var gelendata= JSON.parse(`${chunk}`);
            
            console.log(gelendata);
            for(data of gelendata){
                workOrders.push({
                    id : data.id,
                    vehiclePlate : data.incidentInfo.firstVehicle.vehiclePlate,
                    ownerName : data.incidentInfo.firstVehicle.vehicleOwner.ownerName,
                    createDate : dateFormat(data.createDate,"dd/MM/yyyy")
                })
                console.log(data.incidentInfo.firstVehicle.vehiclePlate);
            }
    
            console.log("workOrders ----")
            console.log(workOrders);
        });
        res1.on('end',()=>{
            console.log('No more data in response');
            res.render('work-order-display',{list : workOrders});
        });
    });

    request.end();


    
})




module.exports = router;
