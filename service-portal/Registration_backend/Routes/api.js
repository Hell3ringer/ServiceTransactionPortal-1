const express = require('express');
const { mongo } = require('mongoose');

const router = express.Router();
const BlogPost= require('../models/blogPost');



//{status:{$lt:2}},

router.get('/:id', async(req, res) => {
    console.log(req.params.id)
    
    BlogPost.find( {$and:  [{ c_id : req.params.id },{$or :[ {status:"Available"},{status:"Ongoing"}]} ]}            )
    .then((data)=>{
        // console.log('Data ',data);
        res.json(data);
    })
    .catch((error)=>{
        console.log('error ',error);
    })
 
});

router.patch('/:pid',async(req,res)=>{
   await BlogPost.findOneAndUpdate({_id: req.params.pid},{status: req.body.status}, 
    function (err, docs) {
   if (err){
       console.log(err)
   }
   else{
    //    console.log("Updated Docs : ", docs);
   }
});

    

});









router.post('/save', (req, res) => {
  
    const data=req.body;
    const newBlogPost= new BlogPost(data);

    newBlogPost.save((error)=>{
        if(error){
            res.status(500).json({msg: 'Sorry,server error'});
        }
        else{
            console.log('Added');
            res.json({
                msg:'data has been stored in db'
            });

        }

    });

});
router.post('/delete', function(req,res) {
    var id=req.body.id;
    mongo.connect(url,function(err,db){
        
    })
    
    

});


module.exports=router;