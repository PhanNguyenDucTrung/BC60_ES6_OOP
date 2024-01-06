import Person from '../model/Person.js';
import Student from '../model/Student.js';
import Employee from '../model/Employee.js';
import Customer from '../model/Customer.js';
import ListPerson from '../model/ListPerson.js';

// HElPER
const getEle = id => {
    return document.getElementById(id);
};

const querySelector = selector => {
    return document.querySelector(selector);
};

// MAIN
///////////////////////////////////////////////
const roleSelect = document.getElementById('role');
const studentFields = document.getElementById('studentFields');
const employeeFields = document.getElementById('employeeFields');
const customerFields = document.getElementById('customerFields');

roleSelect.addEventListener('change', function () {
    studentFields.style.display = 'none';
    employeeFields.style.display = 'none';
    customerFields.style.display = 'none';

    const selectedRole = roleSelect.value;
    if (selectedRole === 'student') {
        studentFields.style.display = 'block';
    } else if (selectedRole === 'employee') {
        employeeFields.style.display = 'block';
    } else if (selectedRole === 'customer') {
        customerFields.style.display = 'block';
    }
});

// Sample data for demonstration
const listPerson = new ListPerson();

const student1 = new Student('John Doe', '123 Main St', 'S001', 'john@example.com', 85, 90, 78);
const employee1 = new Employee('Alice Smith', '456 Oak St', 'E001', 'alice@example.com', 22, 50);
const customer1 = new Customer('Company A', '789 Maple St', 'C001', 'companyA@example.com', 'ABC Corp', 5000, 4);

listPerson.addPerson(student1);
listPerson.addPerson(employee1);
listPerson.addPerson(customer1);

getEle('addButton').addEventListener('click', () => {});

function handleAddUser() {}

function displayUsers() {
    const tableBody = document.querySelector('#userTable tbody');

    tableBody.innerHTML = '';

    console.log(listPerson);
    listPerson.people.forEach(person => {
        const row = tableBody.insertRow();
        const role =
            person instanceof Student
                ? 'Student'
                : person instanceof Employee
                ? 'Employee'
                : person instanceof Customer
                ? 'Customer'
                : '';

        row.innerHTML = `
                <td>${person.fullName}</td>
                <td>${person.address}</td>
                <td>${person.id}</td>
                <td>${person.email}</td>
                <td>${role}</td>
                <td>
                     <button class="editButton" data-person-id="${person.id}">Edit</button>
                     <button class="deleteButton" data-person-id="${person.id}">Delete</button>
                </td>
            `;
    });

    document.getElementById('userTable').addEventListener('click', function (event) {
        if (event.target.classList.contains('editButton')) {
            const personId = event.target.dataset.personId;
            console.log(personId);
            fillFormForEdit(personId);
        } else if (event.target.classList.contains('deleteButton')) {
            const personId = event.target.dataset.personId;
            deletePerson(personId);
        }
    });
}

function getRole(person) {
    return person instanceof Student
        ? 'student'
        : person instanceof Employee
        ? 'employee'
        : person instanceof Customer
        ? 'customer'
        : '';
}

function fillFormForEdit(id) {
    const person = listPerson.people.find(p => p.id === id);

    if (person) {
        document.getElementById('role').value = getRole(person);

        $('#exampleModalCenter').modal('show');

        console.log(person.fullName);
        document.getElementById('fullName').value = person.fullName;
        document.getElementById('address').value = person.address;
        document.getElementById('id').value = person.id;
        document.getElementById('email').value = person.email;

        if (person instanceof Student) {
            studentFields.style.display = 'block';
            employeeFields.style.display = 'none';
            customerFields.style.display = 'none';
            document.getElementById('math').value = person.math;
            document.getElementById('physics').value = person.physics;
            document.getElementById('chemistry').value = person.chemistry;
        } else if (person instanceof Employee) {
            studentFields.style.display = 'none';
            employeeFields.style.display = 'block';
            customerFields.style.display = 'none';
            document.getElementById('workingDays').value = person.workingDays;
            document.getElementById('dailyWage').value = person.dailyWage;
        } else if (person instanceof Customer) {
            studentFields.style.display = 'none';
            employeeFields.style.display = 'none';
            customerFields.style.display = 'block';
            document.getElementById('companyName').value = person.companyName;
            document.getElementById('invoiceValue').value = person.invoiceValue;
            document.getElementById('rating').value = person.rating;
        }
    }
}

getEle('updateButton').addEventListener('click', () => {
    handleUpdate();
});

function handleUpdate() {
    const id = getEle('id').value;

    const updatedInfo = {
        fullName: getEle('fullName').value,
        address: getEle('address').value,
        email: getEle('email').value,
    };

    const role = getEle('role').value;

    if (role === 'student') {
        updatedInfo.math = getEle('math').value;
        updatedInfo.physics = getEle('physics').value;
        updatedInfo.chemistry = getEle('chemistry').value;
    } else if (role === 'employee') {
        updatedInfo.workingDays = getEle('workingDays').value;
        updatedInfo.dailyWage = getEle('dailyWage').value;
    } else if (role === 'customer') {
        updatedInfo.companyName = getEle('companyName').value;
        updatedInfo.invoiceValue = getEle('invoiceValue').value;
        updatedInfo.rating = getEle('rating').value;
    }

    listPerson.updatePersonInfo(id, updatedInfo);
    displayUsers();
}

function deletePerson(id) {
    listPerson.removePersonById(id);
    displayUsers();
}

// Initial display
displayUsers();

getEle('btnAddAndOpenModal').addEventListener('click', () => {
    clearForm();
});

function clearForm() {
    document.getElementById('fullName').value = '';
    document.getElementById('email').value = '';
    document.getElementById('address').value = '';
    document.getElementById('id').value = '';
    document.getElementById('role').value = 'default';
    document.getElementById('workingDays').value = '';
    document.getElementById('dailyWage').value = '';
    document.getElementById('math').value = '';
    document.getElementById('physics').value = '';
    document.getElementById('chemistry').value = '';
    document.getElementById('companyName').value = '';
    document.getElementById('invoiceValue').value = '';
    document.getElementById('rating').value = '';

    // Hide all role-specific fields
    document.getElementById('studentFields').style.display = 'none';
    document.getElementById('employeeFields').style.display = 'none';
    document.getElementById('customerFields').style.display = 'none';
}
