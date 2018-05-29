let UserController = require("../controllers/controllers.js");

module.exports =(app)=>{
	app.get("/",UserController.all);
	app.post("/post/:id",UserController.addComment);
	app.post("/post/new",UserController.create);
}