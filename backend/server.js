// import express from 'express';
const express=require('express')
const mongoose=require('mongoose')
const dotenv=require('dotenv')
const url=require("./route/route")
const cors=require('cors')

dotenv.config()
mongoose.connect(process.env.DB_ACCESS,{ useUnifiedTopology:true,useNewUrlParser: true, useCreateIndex: true },()=>{
    console.log("DB Connected...")
})

const app=express()
app.use(express.json())
app.use(cors())
app.use('/user',url)
app.listen(4000,()=>{
    console.log("Server is ready for hearing...")
})
