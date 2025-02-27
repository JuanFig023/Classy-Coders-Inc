const Employee = require('./Employee');

class SalesPerson extends Employee{
    #totalSales;

    constructor(name,position,salary){
        super(name,position,salary);
        this.#totalSales = 0;
        this.clients = [];
    }

    getSalesNumers(){
        return this.#totalSales;
    }

    makeSale(amount){
        this.#totalSales = amount;
    }

}

module.exports = {
    SalesPerson,
}