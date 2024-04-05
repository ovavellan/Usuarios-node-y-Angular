let app = require('express')();
const http = require('node:http').Server(app);
const express = require('express');
const cors = require('cors');
const { request } = require('node:http');
const hostname = '127.0.0.1';

const port = 3000;
app.use(express.json());
app.use(cors());

//cabeceras CORS
app.use(function (req, res, next){
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
})

//routes
app.use(require('./routes/usuario'))


http.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});