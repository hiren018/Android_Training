const customer = require('./customer.json');
const express = require('express');
const app = express();
app.use(express.json());




/*1.Create a Restful API, which will return Customer list in JSON format.

http://localhost:3000/customers*/

app.get('/customers', function(req, res) {
    res.send(customer);
    res.end();
})





/*2. Create a Restful API which will search a particular record from the customer list.

http://localhost:3000/customers/1*/


app.get('/customers/:id', (req, res) => {

    const cu1 = customer.find((c) => {
        return c.id === parseInt(req.params.id);

    })
    res.send(cu1);
})



/*3. Create a Restful API which will insert a new customer object in the customer list.

http://localhost:3000/customer*/

app.post('/customers', (req, res) => {

    customer.push(req.body);
    res.send(customer)
})
app.get('/customers', function(req, res) {
    res.send(customer);
    res.end();
})



/*4. Create a Restful API which update a name of existing customer whose customer ID is 1

http://locahost:3000/customer*/

app.put('/customers/:id', (req, res) => {
    const cu = customer.find((c) => {
        return c.id === parseInt(req.params.id)
    })
    cu.name = req.body.name;
    res.send(cu);
})



/*5. Create a Restful API which will delete a record from the customer list.

http://localhost:3000/customer */

app.delete('/customers/:id', (req, res) => {
    const cu2 = customer.find((c) => {
        return c.id === parseInt(req.params.id);
    })

    const index = customer.indexOf(cu2);
    customer.splice(index, 1);

    res.send(cu2);
})

app.listen(3000, () => { console.log('Application Started') })