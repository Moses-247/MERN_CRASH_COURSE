// const express = require('express');
import express from 'express';

const app = express();

app.get("/", (req, res) =>{
    res.send("server is radaaaa!!");
});

app.listen(5000,()=>{
    console.log("Server has started at hhtp://localhost:5000")
});