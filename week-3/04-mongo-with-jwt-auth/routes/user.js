const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const {User,Course} = require('../db');
const jwt = require('jsonwebtoken');

// User Routes
router.post('/signup',async (req, res) => {
    // Implement user signup logic
    const user = new User(req.body);
    try{
        await user.save();
        if(!user){
            throw new Error("The user could not be saved due to some error");
        }
        res.status(201).json({
            message : "User created successfully"
        });
    }catch(e){
        res.status(404).send(e.message);
    }
});

router.post('/signin',async (req, res) => {
    // Implement admin signup logic
    try{
        const user = await User.findOne({
            username : req.body.username
        });
        if(!user){
            throw new Error("The username does not exists");
        }

        if(user.password != req.body.password){
            throw new Error("The password for the given username is incorrect");
        }

        // Creating a jwt token for the given user
        const token = jwt.sign({
            username : req.body.username
        }, 'jwtsecret');
        res.json({
            token : token
        }); 
    }catch(e){
        res.status(404).send(e.message);
    }
});

router.get('/courses',async (req, res) => {
    // Implement listing all courses logic
    try{
        const courses = await Course.find({});
        res.send(courses);
    }catch(e){
        res.status(404).send(e.message);
    }
});

router.post('/courses/:courseId', userMiddleware,async (req, res) => {
    // Implement course purchase logic
    try{
        const course = await Course.findById(req.params.courseId);
        const user = await User.updateOne({
            username : req.username
        }, {
            "$push" : {
                puchasedCourse : course._id
            }
        });
        res.json({
            message : "Course purchased Successfully"
        });
    }catch(e){
        res.status(404).send(e.message);
    }
});

router.get('/purchasedCourses', userMiddleware,async (req, res) => {
    // Implement fetching purchased courses logic
    try{
        const userPurchaseIds = await User.findOne({
            username : req.username
        });
        const courses = await Course.find({
            _id : {
                "$in" : userPurchaseIds.puchasedCourse
            }
        });
        res.json(courses);
    }catch(e){
        res.status(404).send(e.message);
    }
});

module.exports = router