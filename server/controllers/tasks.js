const Task = require('../models/task').Task;

module.exports={
    show:function(req,res){
        Task.find({}, function (err, tasks) {
            res.json(tasks);
        })
    },

    find: function (req, res) {
        var id = req.params.id;
        Task.findOne({_id:id}, function(err, tasks){
            res.json(tasks);
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
    update: function (res, req) {
        var id = req.params.id;
        Task.findByIdAndUpdate(id,{title: req.params.title, description: req.params.description, completed: req.params.completed}, {runValidators: true}, function(err){
            if (err) {
                console.log(err);
            }else{
                res.redirect('/')
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