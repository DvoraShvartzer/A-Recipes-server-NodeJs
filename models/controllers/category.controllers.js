const Category = require("../models/category.model");
const Recipe = require("../models/recipe.model")
async function  ReRecipe(id){
    try {

        const ca = await Category.findById(id)
        const re = await Recipe.find({ category_id: id })
        console.log(re);
    const  categoryRecipes={"categoryca":ca.name,"recipes":re}
        console.log(categoryRecipes);
        return {categoryRecipes}
    } catch (error) {
        console.log(error);
        return ({ error: error.message, status: 400 })  
    } 
}
module.exports = {
    getAllCategories: async (req, res, next) => {
        try {
            const cat = await Category.find();
            return res.json(cat)
        } catch (error) {
            return next({ error: error.message, status: 40 })
        }

    },
    getRecipeByCategory: async (req, res, next) => {
        const recipes = [];
        try {            
            const category = await Category.find();
            console.log(category);
           for (let index = 0; index < category.length; index++) {
            console.log(category[index]);
            //    async function name() {
                 const xx=await ReRecipe(category[index]._id)
                   
                 recipes.push( xx)

                // } 
            
        }
            return res.json(recipes)
        }
        catch (error) {
            return next({ error: error.message, status: 400 })

        }

    },
        getCategories: async (req, res, next) => {
            const { cId } = req.params;
            console.log(cId);
  
            try {
                console.log(cId);

               return res.json(await ReRecipe(cId))
              
            } catch (error) {
                return next({ error: error.message, status: 400 })

            }

        }
    }
