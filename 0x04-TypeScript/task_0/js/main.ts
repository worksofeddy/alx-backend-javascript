// create an interface that defines the shape of the Student object
interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student1: Student = {
  firstName: "Nuru",
  lastName: "Ahmed",
  age: 20,
  location: "Abuja",
};

const student2: Student = {
  firstName: "Muhd",
  lastName: "Ahmed",
  age: 10,
  location: "Abuja",
};

const studentsList: Student[] = [student1, student2];
const table = document.createElement("table");
const headerRow = table.insertRow();
const firstNameCell = headerRow.insertCell();
const locationCell = headerRow.insertCell();

firstNameCell.textContent = "First Name";
locationCell.textContent = "Location";

studentsList.forEach((student) => {
  const row = table.insertRow();
  const firstNameCell = row.insertCell();
  const locationCell = row.insertCell();
  firstNameCell.textContent = student.firstName;
  locationCell.textContent = student.location;
});

document.body.appendChild(table);
