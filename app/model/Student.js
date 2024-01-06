import Person from './Person.js';
class Student extends Person {
    constructor(fullName, address, id, email, math = 0, physics = 0, chemistry = 0) {
        super(fullName, address, id, email);
        this.math = math;
        this.physics = physics;
        this.chemistry = chemistry;
    }

    calcAverage() {
        return (this.math + this.physics + this.chemistry) / 3;
    }
}
export default Student;
