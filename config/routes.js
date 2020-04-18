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

router.get('/notes',authenticateUser,notesController.list)
router.get('/notes/:id',authenticateUser,notesController.show)
router.post('/notes',authenticateUser,notesController.create)
router.put('/notes/:id',authenticateUser,notesController.update)
router.delete('/notes/:id',authenticateUser,notesController.destroy)

router.get('/categories',authenticateUser,categoriesController.list)
router.get('/categories/:id',authenticateUser,categoriesController.show)
router.post('/categories',authenticateUser,categoriesController.create)
router.delete('/categories/:id',authenticateUser,categoriesController.destroy)

module.exports=router