const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const jwt = require('jsonwebtoken');
const router = Router();
const {Admin,User,Course} = require('../db');

// Admin Routes
router.post('/signup',async (req, res) => {
    // Implement admin signup logic

    const admin = new Admin(req.body);
    try{
        await admin.save();
        res.status(201).json({
            message : "Admin Created Successfully"
        });
    }catch(e){
        res.status(404).send(e.message);
    }
});


router.post('/signin',async (req, res) => {
    // Implement admin signup logic
    try{
        const findAdmin = await Admin.find({
            username : req.body.username
        });
        const token = jwt.sign({    // Here we are creating a JSON web token for the user who wants to sign in
            username : req.body.username
        },'jwtsecret'); // Signing in request for the admin user
        res.json({
            token
        });
    }catch(e){
        res.status(404).send(e.message);
    }
});

router.post('/courses', adminMiddleware,async (req, res) => {
    // Implement course creation logic
    const courseRegister = new Course(req.body);
    try{
        await courseRegister.save();
        res.status(201).json({
            message : "Course created successfully",
            id : courseRegister._id
        })
    }catch(e){
        res.status(404).send(e.message);
    }
});

router.get('/courses', adminMiddleware,async (req, res) => {
    // Implement fetching all courses logic
    try{
        const courses = await Course.find({});
        res.send(courses);
    }catch(e){
        res.status(404).send(e.message);
    }
});

module.exports = router;