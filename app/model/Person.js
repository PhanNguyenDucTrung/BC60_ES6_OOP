class Person {
    constructor(fullName, address, id, email) {
        this.fullName = fullName;
        this.address = address;
        this.id = id;
        this.email = email;
    }

    getPersonName() {
        return this.fullName;
    }
}

export default Person;
