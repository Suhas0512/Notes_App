const express=require('express')
const router=express.Router()
const notesController=require('../app/controllers/notesController')
const categoriesController=require('../app/controllers/categoriesController')
const authenticateUser=require('../app/middlewares/authentication')
const UserController=require('../app/controllers/UserController')

router.post('/users/register',UserController.register)
router.post('/users/login',UserController.login)
router.get('/users/account',authenticateUser,UserController.account)
router.delete('/users/logout',authenticateUser,UserController.logout)

router.get('/notes',notesController.list)
router.get('/notes/:id',notesController.show)
router.post('/notes',notesController.create)
router.put('/notes/:id',notesController.update)
router.delete('/notes/:id',notesController.destroy)

router.get('/categories',categoriesController.list)
router.get('/categories/:id',categoriesController.show)
router.post('/categories',categoriesController.create)
router.delete('/categories/:id',categoriesController.destroy)

module.exports=router