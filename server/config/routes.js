const tasks = require('../controllers/tasks');

module.exports = function(app){

    app.get('/tasks', function (req, res) {
        tasks.show(req,res);
    });

    app.get('/task/:id', function (req, res) {
        tasks.find(req,res);

    });

    app.post('/new', function (req, res) {
        tasks.new(req,res);

    });

    app.put('/update/:id/:title/:description/:completed', function (req, res) {
        console.log("req param", req.params)
        tasks.update(req,res);
    });

    app.delete('/delete/:id', function (req, res) {
        tasks.destroy(req,res);

    });
}