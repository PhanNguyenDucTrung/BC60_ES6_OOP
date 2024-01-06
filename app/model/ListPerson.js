class ListPerson {
    constructor() {
        this.people = [];
    }

    addPerson(person) {
        this.people.push(person);
    }

    removePersonById(id) {
        this.people = this.people.filter(person => person.id !== id);
    }

    updatePersonInfo(id, updatedInfo) {
        const personIndex = this.people.findIndex(person => person.id === id);
        if (personIndex !== -1) {
            this.people[personIndex] = { ...this.people[personIndex], ...updatedInfo };
        }
    }

    sortByFullName() {
        this.people.sort((a, b) => a.fullName.localeCompare(b.fullName));
    }

    filterByUserType(userType) {
        return this.people.filter(person => person instanceof userType);
    }
}

export default ListPerson;
