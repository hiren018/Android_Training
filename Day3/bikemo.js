class Mobike {
    constructor(bno, phno, name, day) {
        this.bno = bno;
        this.phno = phno;
        this.name = name;
        this.day = day;
        console.log('Customer Name ' + name, ', Bike no. ' + bno, ', Phone no.' + phno, ', Total days ' + day);

    }
    compute() {
        var charge;
        if (this.day <= 5) {
            charge = this.day * 500;
        } else if (this.day <= 10) {
            charge = 500 * 5 + (this.day - 5) * 400;
        } else if (this.day > 10) {
            charge = 500 * 5 + 400 * 5 + (this.day - 10) * 200;
        }
        console.log('Total charge is : ' + charge)
    }

}

module.exports = Mobike;