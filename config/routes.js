const express=require('express')
const router=express.Router()
const notesController=require('../app/controllers/notesController')
const categoriesController=require('../app/controllers/categoriesController')
router.get('/notes',notesController.list)
router.get('/notes/:id',notesController.show)
router.post('/notes',notesController.create)
router.put('/notes/:id',notesController.update)
router.delete('/notes/:id',notesController.destroy)

router.get('/categories',categoriesController.list)
router.get('/categories/:id',categoriesController.show)
router.post('/categories',categoriesController.create)
module.exports=router