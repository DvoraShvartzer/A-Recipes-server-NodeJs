const express=require('express');
const { getAllrecipes, addRecipe, getDetailsRecipe, deleteRecipe, updateRecipe } = require('../controllers/recipe.controllers');
const { auth } = require('../middlewarws/auth');
 //const { auth } = require('../middlewarws/auth');
// const { auth } = require('../middlewarws/auth');

const recipeRouter=express.Router(); 

recipeRouter.get('/',auth,getAllrecipes)
 recipeRouter.get('/:id',getDetailsRecipe)
 recipeRouter.post('/:id',updateRecipe)
 recipeRouter.post('/',auth,addRecipe)
 recipeRouter.delete('/:pid',auth,deleteRecipe)

module.exports=recipeRouter;


