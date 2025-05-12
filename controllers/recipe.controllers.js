// const Category = require("../models/category.model");
// const Recipe = require("../models/recipe.model");
// const { User } = require("../models/user.model");
const Category = require("../models/category.model");
const Recipe = require("../models/recipe.model");

module.exports = {

    getAllrecipes: async (req, res, next) => {
        const { searchText } = req.body;
        let filter = {
            $or: [
                { isPrivate: false },
                { user_id: req.userId }]
        };
        if (searchText) {
            const regex = new RegExp(searchText);  
            filter = {
                ...filter,
                $or: [
                    { name: { $regex: regex } },
                    { description: { $regex: regex } }
                ]
            };
            try {
                const recipes =await Recipe.find();

                return res.json(recipes)

            } catch (error) {
                return next({ error: error.message, status: 400 })
             }
        }
    }
    ,

    getRecipeByMinutesTime: async (req, res, next) => {
        const { minutesTime } = req.body
        if (minutesTime != undefined) {
            try {
                const recipes =await Recipe.find(minutesTime).populate('user_id', 'name').populate('category_id')

                return res.json(recipes)
            } catch (error) {
                return next({ error: error.message, status: 400 })
            }
        }
        else
            return next({ error: error.message, status: 400 })
    },

    getRecipeByUser: async (req, res, next) => {
        const { user_id } = req.body
        if (user_id != undefined) {
            try {
                const recipeUser =await Recipe.find(user_id);
                return res.json(recipeUser)
            } catch (error) {
                return next({ error: error.message, status: 400 })
            }
        }
        else
            return next({ error: error.message, status: 400 })
    },

    getDetailsRecipe: async (req, res, next) => {
        const { id } = req.params;
        if (id != undefined) {
            try {
                const recipe = await Recipe.findById(id)
                              .populate('category_id')
                           // .exec()

                if (recipe) {
                    return res.json(recipe)
                }
                else
                    return next({ error: "there isn't fit recipy", status: 400 })
            } catch (error) {
                return next({ error: error.message, status: 404 })
            }
        }
    },

    addRecipe: async (req, res, next) => {
        try {
          
            // const id=req.body.category_id;
            const name = req.body.category_name;
            console.log(name);
            const numOfReciepes = 0;
            const c =await Category.findOne({name:name})
            console.log(c);
            const newRecipe = new Recipe(req.body);
            
            if (c!=null) {
                newRecipe.category_id = c._id;
                const cc= c.numOfReciepes+1;
                const id=c._id
               const body={numOfReciepes:cc}
                const rUpdate = await Category.findByIdAndUpdate(id, { $set:body}, { new: true });
            }
          
            else {
                const newcategory = new Category({ name, numOfReciepes: 1 });
               await newcategory.save();
                newRecipe.category_id = newRecipe._id;

            }
            console.log(newRecipe);
              newRecipe.user_id = req.user_id;

            await newRecipe.save();
            return res.json(newRecipe).status(201)

        } catch (error) {
            return next({ error: error.message, status: 400 })
        }

    },

    updateRecipe: async (req, res, next) => {
        try {
            const { id } = req.params;
            const rUpdate = await Recipe.findByIdAndUpdate(id, { $set: req.body }, { new: true });

            res.json(rUpdate)
        } catch (error) {
            return next({ error: error.message, status: 400 })
        }

    },

    deleteRecipe: async (req, res, next) => {
        const userId = req.user_id
        const role = req.user_role
        const { pid } = req.params;

        if (pid!=null) {

            try {       
                const deleteRecipes = await Recipe.findOne({_id:pid})   
                .populate('category_id')
                //.populate('user_id')

                if (!(role == 'director' || userId == deleteRecipe.user_id))
                return next({ error: "there isn't fit recipy", status: 400 })

            const cc= deleteRecipes.category_id.numOfReciepes-1

            const id=deleteRecipes.category_id
           const body={numOfReciepes:cc}
            const rUpdate = await Category.findByIdAndUpdate(id, { $set:body}, { new: true });
          
                await Recipe.findByIdAndDelete(pid);
                return res.status(204).json()
            } catch (error) {
                return next({ error: error.message })
            }
        }
        else {
            return next({ error: error.message })

        }


    }
}