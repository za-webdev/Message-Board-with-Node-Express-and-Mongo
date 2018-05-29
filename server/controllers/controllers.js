
let Post = require("mongoose").model("Post");
let Comment = require("mongoose").model("Comment");

class UserController{
	all(req,res){
		Post.find({})
		.populate("comments")
		.exec(function(err,posts){
			if(err){
				res.render("index");
			}else{
				res.render("index",{posts:posts});
			}
		});
	}

	create(req,res){
		let post = new Post(req.body);
		console.log(req.body);

		post.save((err)=>{
			if(err){
				res.render("index",{errors:post.errors});
				console.log(err)
			}else{
				console.log("hello")
				res.redirect("/");
			}
		})
	}


 	addComment(req, res){
    	Post.findOne({_id: req.params.id}, function(err, post){
        // data from form on the front end
        var comment = new Comment(req.body);
        //  set the reference like this:
        comment._post = post._id;
        // now save both to the DB
        comment.save(function(err){
        	console.log(req.body)
                post.comments.push(comment);
                post.save(function(err){
                     if(err) {
                          console.log('Error');
                     } else {
                          res.redirect('/');
                     }
                 });
         });
    });
 }

}

module.exports = new UserController();
