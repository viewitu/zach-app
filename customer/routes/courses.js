const express = require("express");
const router = express.Router();
const Joi = require("joi");



const courses = [
    {id: 1, name: 'course1'},
    {id: 2, name: 'course2'},
    {id: 3, name: 'course3'},
    ] 
    
router.get('/',(req, res)=> {
    res.send(courses);
});


router.get('/:id',(req,res)=> {
   const course = courses.find(c=> c.id === parseInt(req.params.id));
   if (!course) return res.status(404).send ('The course with the given ID was not found.');//404
    res.send(course);
});

router.post('/',(req,res) => {
    const {error} = validateCourse(req.body);
    
    if(error) return res.status(400).send(error.details[0].message); //400 Bad Request
        
    
    const course = {
        id: courses.length + 1, 
        name: req.body.name
    };
    courses.push(course);
    res.send(course);
});


router.put('/:id' , (req,res ) =>{
    //look up course
    //if not existing, return 404
    const course = courses.find(c=> c.id === parseInt(req.params.id));
    if (!course) return res.status(404).send ('The course with the given ID was not found.');//404
    
    //Validate
    // if invalid, return 400 - bad request
    
    //const result = validateCourse(req.body);
    const {error} = validateCourse(req.body);
    
    
    if(error) return res.status(400).send(error.details[0].message); //400 Bad Request
        
    
    
    //Update Course
    course.name = req.body.name;
    //return the updated course
    res.send(course);
    
});

router.delete('/:id', (req,res) => {
    //look up course
    //if not existing, return 404
    const course = courses.find(c=> c.id === parseInt(req.params.id));
    if (!course) return res.status(404).send ('The course with the given ID was not found.');//404
    
    //Delete
    
    const index = courses.indexOf(course);
    courses.splice(index, 1);
    
    res.send(course);
});
function validateCourse(course){
     const schema = {
        name: Joi.string().min(3).required()
    };
    return Joi.validate(course,schema);
    
};

module.exports = router;