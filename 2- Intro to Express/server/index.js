const express = require('express')
const app = express()
app.use(express.json())

// app.get('/', (req, res) => {
//     console.log(req)
//     res.send("Hello from Home Page")
// })

// app.get('/about', (req, res) => {
//     res.send("Hello from About Page")
// })

// app.get('/contact', (req, res) => {
//     res.send("Hello from Contact Page")
// })


let courses  = [
    {id:1, name:'Java'},
    {id:2, name:'DBMS'},
    {id:3, name:'Python'},
]
// ROUTING:
// route to get all the courses
app.get('/courses', (req, res) => {
    res.send(courses)
})
// route to get a course by id
app.get('/courses/:id', (req, res) => {
    // console.log(req.params)
    // res.send(courses)

    let course = courses.find((course) => course.id === parseInt(req.params.id))
    if(!course) {
        res.status(404).send('Did not find the course')
    }
    res.send(course)
})


// CREATE a course:
app.post('/courses', (req, res) => {
    let course = {
        id: req.body.id,
        name: req.body.name,
    }
    courses.push(course)
    res.send(courses)
})


// UPDATE a course:
app.put('/courses/:id', (req, res) => {
    let course = courses.find((course) => course.id === parseInt(req.params.id))
    course.name = req.body.name
    res.send(courses)
})


// DELETE a course:
app.delete('/courses/:id', (req, res) => {
    let course = courses.find((course) => course.id === parseInt(req.params.id))
    course.name = req.body.name
    res.send(courses)
})


app.listen(8001, () => {
    console.log('Server running')
})



// Difference between route parameter and query parameter