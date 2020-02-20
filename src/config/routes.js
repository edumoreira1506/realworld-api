const express = require('express')

const MainController = require('../controllers/MainController')
const UserController = require('../controllers/UserController')
const PostController = require('../controllers/PostController')

const routes = express.Router()

routes.get('/', MainController.index)

routes.post('/user', UserController.store)
routes.get('/user/:id', UserController.show)
routes.delete('/user/:id', UserController.remove)
routes.patch('/user/:id', UserController.update)

routes.post('/auth', UserController.login)

routes.post('/user/:id/follow', UserController.follow)

routes.post('/post', PostController.store)

module.exports = routes
