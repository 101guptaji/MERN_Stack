const express = require('express');
const app = express();

// Middleware to parse JSON data
app.use(express.json());

// Connecting to MongoDB
require('./db/connection');

// Importing the teacher model
const teacherModel = require('./models/teacher');

// add a new teacher
app.post('/api/teachers', async (req, res) => {
    const teacher = new teacherModel({
        name: req.body.name,
        phone: req.body.phone,
        email: req.body.email,
        course: req.body.course,
        experience: req.body.experience
    });

    await teacher.save()
        .then((data) => {
            console.log(teacher);
            res.status(201).send('Document created successfully');
        })
        .catch((err) => {
            if (err.name === 'ValidationError') {
                res.status(400).send('Validation Error:' + err.message);
            } else {
                res.status(500).send('Error saving document:' + err);
            }
        });
});

// retrieve all teachers data
app.get('/api/teachers', async (req, res) => {
    await teacherModel.find()
        .then((data) => {
            res.status(200).send(data);
        }).catch(err => {
            res.status(500).send('Can not get data:' + err);
        });
});

// retrieve teacher by id
app.get('/api/teachers/:id', async (req, res) => {
    const id = req.params.id;
    await teacherModel.findById(id)
        .then((data) => {
            if (!data) {
                return res.status(404).send('Teacher not found');
            }
            res.status(200).send(data);
        }).catch(err => {
            res.status(500).send('Can not get data:' + err);
        });
});


// update teacher by id
app.patch('/api/teachers/:id', async (req, res) => {
    const id = req.params.id;
    await teacherModel.findByIdAndUpdate(id, {
        name: req.body.name,
        phone: req.body.phone,
        email: req.body.email,
        course: req.body.course,
        experience: req.body.experience
    }, { new: true })
        .then((data) => {
            if (!data) {
                return res.status(404).send('Teacher not found');
            }
            res.status(200).send("Updated: \n"+data);
        }).catch(err => {
            if (err.name === 'ValidationError') {
                res.status(400).send('Validation Error:' + err.message);
            } else {
                res.status(500).send('Error in updating data:\n' + err);
            }
        });
});

// delete teacher by id
app.delete('/api/teachers/:id', async (req, res) => {
    const id = req.params.id;
    await teacherModel.findByIdAndDelete(id)
        .then((data) => {
            if (!data) {
                return res.status(404).send('Teacher not found');
            }
            res.status(204);
        }).catch(err => {
            res.status(500).send('Error in deleting data:' + err);
        });
});


// assign a port for server
const PORT = process.env.PORT || 8080;
// Starting a server
app.listen(PORT, () => {
    console.log("Server is running on http://localhost:" + PORT);
});