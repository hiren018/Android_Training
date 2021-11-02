/* 
Rambo Rental Bikes is looking for developing a system to calculate the rentals of the bikes. 
System should accept the customer details, bike details and calculate the rental charges. 
DESCRIPTION OF PROJECTSSystem allows users to add customer details with bike rented. It computes rent for each customer. 
Systems displays the Bike details with summation of days of hire and rental payment.   
FUNCTIONALITY AND TASKDefine a class called Mobike with the following description: 
Instance variables/data members: BikeNumber – to store the bike’s number, PhoneNumber – to store the phone number of the customer,
Name – to store the name of the customer, Days – to store the number of days the bike is taken on rent,
charge – to calculate and store the rental chargeMember 
 
methods:void Compute( )– to compute the rental charge     Bike No.     PhoneNo      No. of days         
Charge The rent for a mobike is charged on the following basis:
First five days Rs 500 per day
Next five days Rs 400 per day
Rest of the days Rs 200 per day
Note use get this Data @param ES6 class  Exports BikeNo,Phone,No of days and Charge.
like 1 surprised 1
*/

var bike = require('./bikemo')


console.log('Details');
const customer1 = new bike('ab1212', 1234567890, 'hiren', 6);
var charge = customer1.compute();