 const { wrongPage, errorFunc } = require("./middlewarws/error.middleware");
const cors = require("cors");
const { connectToDB } = require("./config/conectToDb");
const userRouter = require("./routes/users.route");
const recipeRouter = require("./routes/recipe.rout");
const categoryRoute = require("./routes/category.route");
const express = require("express");

const app=express();
connectToDB()
app.get("/",(req,res,next)=>{
    res.json("welcome to our project......")
})



app.use(express.json());
app.use(cors());
app.use("/user",userRouter);
app.use("/recipe",recipeRouter);
app.get("/category",categoryRoute);
app.use(wrongPage);
app.use(errorFunc);

const port=process.env.PORT||8000;
app.listen(port,()=>{
    console.log("server running in port 8000");
});
