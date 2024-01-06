import Person from './Person.js';
class Customer extends Person {
    constructor(fullName, address, id, email, companyName, invoiceValue, rating) {
        super(fullName, address, id, email);
        this.companyName = companyName;
        this.invoiceValue = invoiceValue;
        this.rating = rating;
    }
}
export default Customer;
