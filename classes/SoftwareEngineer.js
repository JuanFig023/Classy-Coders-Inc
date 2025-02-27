const Employee = require('./Employee');

class SoftwareEngineer extends Employee {
    #programmingLanguages;
    
    constructor(name,position,salary){
        super(name,position,salary);
        this.#programmingLanguages = [];
    }

    getProgrammingLanguages(){
        return this.#programmingLanguages;
    }

    setProgrammingLanguage(language){
        this.#programmingLanguages.push(language);
    }
}
module.exports = {
    SoftwareEngineer,
}