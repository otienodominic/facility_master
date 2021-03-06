const express = require('express');
const router = express.Router();
const {auth} = require('../middlewares')

// controllers
const userController = require('../controllers/auth')



// User controller routes
router.post('/register', userController.Register)
router.post('/login', userController.Login)
router.delete('/delete-user', auth,userController.Delete)
router.post('/tokenIsValid', userController.TokenIsValid)
router.get('/', auth,userController.FindUser)



module.exports = router
