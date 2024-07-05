var student1 = {
    firstName: "Nuru",
    lastName: "Ahmed",
    age: 20,
    location: "Abuja",
};
var student2 = {
    firstName: "Muhd",
    lastName: "Ahmed",
    age: 10,
    location: "Abuja",
};
var studentsList = [student1, student2];
var table = document.createElement("table");
var headerRow = table.insertRow();
var firstNameCell = headerRow.insertCell();
var locationCell = headerRow.insertCell();
firstNameCell.textContent = "First Name";
locationCell.textContent = "Location";
studentsList.forEach(function (student) {
    var row = table.insertRow();
    var firstNameCell = row.insertCell();
    var locationCell = row.insertCell();
    firstNameCell.textContent = student.firstName;
    locationCell.textContent = student.location;
});
document.body.appendChild(table);
