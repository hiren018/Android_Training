// Assignment:

// Collections as follows:

// Students=[{“ID”:1,”Name”:Reena”,”Address”:”Ahmedabad”,”Fees”:{“Amount:10000,”PaymentDate”:”12/12/2020”,”Status”:”true”},
// ”Result”:{“Hindi”:80,”Eng”:70,”Math”:60,”Total”:210,”Grade”:”A”}

// },{“ID”:2,”Name”:”Rita”,”Address”:”Surat”, ”Fees”:{“Amount:12000,”PaymentDate”:”12/12/2020”,”Status”:”false”},

// ”Result”:{“Hindi”:80,”Eng”:70,”Math”:60,”Total”:210,”Grade”:”A”}

// }]


const students = require('./students.json');
const express = require('express');

const app = express();
app.use(express.json());



// 1. Create a RESTFUL API which will return a Studentlist.

http: //localhost:3000/students

    app.get('/students', (req, res) => {
        res.send(students);
        console.log(students)
        res.end();
    })




// 2. Create RESTFUL API which will return a Particular Student Record

// http://localhost:3000/students/1

app.get('/students/:id', (req, res) => {
    const student1 = students.find((c) => {
        return c.ID === parseInt(req.params.id)
    })

    if (!student1) return res.status(404).send('student not found');

    res.send(student1);
    console.log(student1);
})


// 3. Create a RESTFUL API which return a particular student FEES Record. Fees field are 
// http://localhost:3000/students/1/fees

app.get('/students/:id/fees', (req, res) => {
    const student1 = students.find((c) => {
        return c.ID === parseInt(req.params.id)
    })

    if (!student1) return res.status(404).send('student not found');

    res.send(student1.Fees);
    console.log(student1.Fees);
})


// 4. Create a RESTFUL API which will return a particular student Exam Result. Result Fields are 
// http://localhost:/3000/students/1/result

app.get('/students/:id/result', (req, res) => {
    const student1 = students.find((c) => {
        return c.ID === parseInt(req.params.id)
    })

    if (!student1) return res.status(404).send('student not found');

    res.send(student1.Result);
    console.log(student1.Result);
})



// 5. Create a RESTFUL API which will update a result of result of student id 1. Update the marks for English Subject

app.put('/students/:id', (req, res) => {
    const student1 = students.find((c) => {
        return c.ID === parseInt(req.params.id)
    })

    if (!student1) return res.status(404).send('student not found');

    student1.Result.Eng = req.body.Eng
    res.send(students)
    console.log(students)
})

app.listen(3000, function() {
    console.log('applicetion started')
})