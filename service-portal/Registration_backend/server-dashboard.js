const express= require('express');
const mongoose= require('mongoose');
const morgan= require('morgan');
const path= require('path');

const app=express();
const PORT=process.env.PORT || 4000;
app.use(morgan('tiny'));
app.get('/api',(req,res)=>{
    const data={
        username: 'knives',
        age: 5
    };
    res.json({data});
});
app.get('/api/name',(req,res)=>{
    const data={
        username: 'knives',
        age: 5
    };
    res.json({data});
});

app.listen(PORT,console.log(`Server is starting at ${PORT}`));