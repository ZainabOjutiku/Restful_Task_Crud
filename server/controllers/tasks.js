const Task = require('../models/task').Task;

module.exports={
    show:function(req,res){
        Task.find({}, function (err, tasks) {
            if(err){
                res.json({errorMsg:"Could not be found", data:tasks})
            } else {
                res.json({msg:"Found", data:tasks})
            }
        })
    },

    find: function (req, res) {
        var id = req.params.id;
        Task.findOne({_id:id}, function(err, tasks){
            if(err){
                res.json({errorMsg:"Could not be found", data:tasks})
            } else {
                res.json({msg:"Could not be found", data:tasks})
            }

        })
    },
    new: function (req, res) {
        console.log("POST DATA", req.body);
        var task = new Task({title: req.params.title, description: req.params.description});
        task.save(function (err) {
            if (err) {
                console.log(err);


            } else {
                console.log('successfully added a user!');
                res.redirect('/');

            }
        })
    },
    update: function (req,res) {
        Task.findByIdAndUpdate(req.params.id,{title: req.params.title, description: req.params.description, completed: req.params.completed}, function(err,tasks){
            if(err){
                res.json({errorMsg:"Could not be found", data:tasks})
            } else {
                res.json({msg:"Could not be found", data:tasks})
            }
        })
    },
    destroy: function (req, res) {
        var id = req.params.id;
        Task.remove({_id:id}, function (err){
            res.redirect('/');
        })
    }


}