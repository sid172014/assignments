const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const router = Router();
const {Admin, Course} = require('../db');
// Admin Routes

router.post('/signup', async (req, res) => {
    // Implement admin signup logic
    const admin = new Admin(req.body);
    try{
        await admin.save();
        res.status(201).json({
            message : 'Admin created successfully'
        })
    }catch(e){
        res.status(404).json({
            message : "Username already exists"
        });
    }
});

router.post('/courses', adminMiddleware,async (req, res) => {
    // Implement course creation logic
    let courseCreated;
    if(req.body.published){
        courseCreated = new Course(req.body);
    }else{
        courseCreated = new Course({
            ...req.body,
            published : false
        });
    }

    try{
        await courseCreated.save();
        if(!courseCreated){
            throw new Error("Course not created");
        }
        res.status(201).json({
            message : "Course created Successfully",
            courseId : courseCreated.id
        });
    }catch(e){
        res.status(404).send(e.message);
    }
    res.send();
});

router.get('/courses', adminMiddleware,async (req, res) => {
    // Implement fetching all courses logic
    try{
        const courses = await Course.find({});
        res.json(courses);
    }catch(e){
        res.send(e.message);
    }
});

module.exports = router;