const express = require('express')
const { enterExhibition } = require('../controllers/login')


const router = express.Router()

router
    .route('/')
    .get(enterExhibition)
    
module.exports = router