const express = require('express')
const userController = require('../Controllers/userController')
const projectController = require('../Controllers/projectController')

const jwtMiddle = require('../Middlewares/jwtMiddleware')
const multerMiddle = require('../Middlewares/multerMiddleware')

const routes = express.Router()

routes.post('/reg', userController.userRegistration)
routes.post('/log', userController.userLogin)
routes.put('/updateprofile', jwtMiddle, multerMiddle.single('profile'), userController.profileUpdate)

routes.post('/addproject', jwtMiddle, multerMiddle.single('image'), projectController.addProject)
routes.get('/projectlist', jwtMiddle, projectController.getProjectList)
routes.delete('/delproject/:id', jwtMiddle, projectController.deleteProject)
routes.put('/updateproject/:id', jwtMiddle, multerMiddle.single('image'), projectController.editProject)
routes.get('/allprojects', projectController.allProject)

module.exports = routes