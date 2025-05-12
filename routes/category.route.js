const express=require('express');
const { auth } = require('../middlewarws/auth');
const { getAllCategories, getCategories, getRecipeByCategory } = require('../controllers/category.controllers');

const categoryRoute=express.Router(); 

categoryRoute.get("/category",getAllCategories  );
categoryRoute.get("/category/All", getCategories );
categoryRoute.get("/category/:cId",getRecipeByCategory);

module.exports=categoryRoute;