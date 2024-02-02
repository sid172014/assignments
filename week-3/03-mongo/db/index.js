const mongoose = require('mongoose');

// Connect to MongoDB
mongoose.connect('mongodb+srv://sidforbusiness172001:%40Sid9934432078@cluster0.mhhlhuy.mongodb.net/');

// Define schemas
const AdminSchema = new mongoose.Schema({
    // Schema definition here
    username : {
        type : String,
        required : true,
        unique : true
    },  
    password : {
        type : String,
        required : true
    }
});

const UserSchema = new mongoose.Schema({
    // Schema definition here
    username : {
        type : String,
        required : true,
        unique : true
    },
    password : {
        type : String,
        required : true,
        unique : true
    },
    purchasedCourse : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'Course'
    }
});

const CourseSchema = new mongoose.Schema({
    // Schema definition here
    title : {
        type : String,
        required : true,
        unique : true
    },
    description : {
        type : String
    },
    price : {
        type : Number,
        required : true
    },
    imageLink  : {
        type : String,
        unique : true
    },
    published : {
        type : Boolean,
        required : false
    }
});

const Admin = mongoose.model('Admin', AdminSchema);
const User = mongoose.model('User', UserSchema);
const Course = mongoose.model('Course', CourseSchema);

module.exports = {
    Admin,
    User,
    Course
}