import Person from './Person.js';
class Employee extends Person {
    constructor(fullName, address, id, email, workingDays, dailyWage) {
        super(fullName, address, id, email);
        this.dailyWage = dailyWage;
        this.workingDays = workingDays;
    }

    calcSalary() {
        return this.workingDays * this.dailySalary;
    }
}
export default Employee;
