const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const {User,Course} = require('../db');

// User Routes
router.post('/signup',async (req, res) => {
    // Implement user signup logic
    const user = new User(req.body);
    try{
        user.save();
        if(!user){
            throw new Error("Could not create user");
        }
        res.json({
            message : "User created successfully"
        });
    }catch(e){
        res.status(404).send(e.message);
    }
});

router.get('/courses',async (req, res) => {
    // Implement listing all courses logic
    try{
        const courses = (await Course.find({})).filter((course) => {
            return course.published === true
        });
        res.send(courses);
    }catch(e){
        res.status(404).send(e.message);
    }
});

router.post('/courses/:courseId', userMiddleware, async (req, res) => {
    // Implement course purchase logic
    try{
        const course = await Course.findById(req.params.courseId);
        if(!course || course.published == false){
            throw new Error("The course does not exists or has not been published yet");
        }
        const addPurchasedCourse = await User.updateOne({
            username : req.headers.username
        },  {
            "$push" : { // This '$push' command will help push elements, i.e 'ObjectId' in this case, inside the 'purchasedCourse' array and if that array doesn't exist then it will automatically create one and insert that course inside it
                purchasedCourse : req.params.courseId
            }
        });
        res.send(course);
    }catch(e){
        res.status(404).send(e.message);
    }
});

router.get('/purchasedCourses', userMiddleware, async (req, res) => {
    // Implement fetching purchased courses logic
    try{
        const courser = await User.findOne({
            username : req.headers.username
        }).populate('purchasedCourse').exec();
        console.log(courser)
        res.send();
    }catch(e){
        res.send(e.message);
    }
});

module.exports = router