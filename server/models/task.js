const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const TaskSchema = new mongoose.Schema({
    title: {type: String,required: true, minlength: 2},
    description: {type: String, default:''},
    completed:{type:Boolean, default:false}
},{timestamps: true})
mongoose.model('Task', TaskSchema);

module.exports = {
    Task: mongoose.model('Task')};