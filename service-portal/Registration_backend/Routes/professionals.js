const express = require('express');
const professionals = require('../models/Signup_model')
const router = express.Router();
router.get('/all',async (req,res) => {
    console.log('Test')
    professionals.find({}, (err, allProfessional) => {
        //Error Handling
        if (err) console.error(err);

        //Data Processing
        var occupations = [];
        
        // var cities = [];



        allProfessional.forEach( (element) => {
            var object = {
                "fullName" : element['fullName'],
                "occupation" : element['occupation'],
                "phoneNo": element['phoneNo']
            }
            return occupations.push(object);
        });

       

        

        //Data Return to Client
        res.send(occupations);
        // res.send(cities);
       

    })
});

module.exports = router;
