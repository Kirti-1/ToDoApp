const express = require('express')
const homeController = require('./../Controllers/home')
const toDoHomePageController = require('./../Controllers/todohomepage')
const taskManipulation = require('./../Controllers/taskManipulation')


let route = express.Router();
console.log('router connected!')

route.get('/', homeController.home);
route.get('/todoapp', toDoHomePageController.home)
route.post('/manipulatelist/add',taskManipulation.actionAdd)
route.get('/manipulatelist/delete/:id',taskManipulation.actionDelete)


module.exports = route