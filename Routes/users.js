const express = require('express')
const router = express.Router();
const userController = require('./../Controllers/user-controller')

console.log('user router!')

router.get('/', function(req, res){
    return res.end('<h1>User Page</h1>');
})
router.get('/profile', userController)

module.exports = router