require('dotenv').config()

const cors = require('cors')
const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const MD5 = require('crypto-js/md5')

const app = express()
const port = 8080
const domain = 'http://localhost:8080/'

/**
 * Import MongoClient & connexion à la DB
 */

mongoose.connect('mongodb://localhost/ravenclaw', function (err) {
  if (err) { throw err; }
  else { console.log("connecté à la base de données") }
});

app.use(cors())
app.use(bodyParser.json())
app.use(express.json())

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

