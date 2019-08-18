var selectedRow = null

function onFormSubmit() {
    if (validate()) {
        var formData = readFormData();
        if (selectedRow == null)
            insertNewRecord(formData);
        else
            updateRecord(formData);
        resetForm();
    }
}

function readFormData() {
    var formData = {};
    formData["Student ID"] = document.getElementById("Student ID").value;
    formData["Student Name"] = document.getElementById("Student Name").value;
    formData["Email"] = document.getElementById("Email").value;
    formData["class"] = document.getElementById("class").value;
    formData["Enrollment Num"] = document.getElementById("Enrollment Num").value;
    formData["city"] = document.getElementById("city").value;
    formData["country"] = document.getElementById("country").value;
    return formData;
}

function insertNewRecord(data) {
    var table = document.getElementById("Regpage.html").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.StudentID;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.StudentName;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.Email;
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = data.class;
    cell5 = newRow.insertCell(4);
    cell5.innerHTML = data.EnrollmentNum;
    cell6 = newRow.insertCell(5);
    cell6.innerHTML = data.city;
    cell7 = newRow.insertCell(6);
    cell7.innerHTML = data.country;
    cell7 = newRow.insertCell(6);
    cell7.innerHTML = `<a onClick="onEdit(this)">Edit</a>
                       <a onClick="onDelete(this)">Delete</a>`;
}

function resetForm() {
    document.getElementById("Student Id").value = "";
    document.getElementById("Student Name").value = "";
    document.getElementById("Email").value = "";
    document.getElementById("class").value = "";
    document.getElementById("Enrollment Num").value = "";
    document.getElementById("city").value = "";
    document.getElementById("country").value = "";
    selectedRow = null;
}

function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("Student ID").value = selectedRow.cells[1].innerHTML;
    document.getElementById("Student Name").value = selectedRow.cell[2].innerHTML;
    document.getElementById("Email").value = selectedRow.cells[3].innerHTML;
    document.getElementById("class").value = selectedRow.cells[4].innerHTML;
    document.getElementById("Enrollment Num").value = selectedRow.cells[5].innerHTML;
    document.getElementById("city").value = selectedRow.cells[6].innerHTML;
    document.getElementById("country").value = selectedRow.cells[7s].innerHTML;
}
function updateRecord(formData) {
    selectedRow.cells[1].innerHTML = formData.StudentID;
    selectedRow.cells[2].innerHTML = formData.StudentName;
    selectedRow.cells[3].innerHTML = formData.Email;
    selectedRow.cells[4].innerHTML = formData.class;
    selectedRow.cells[5].innerHTML = formData.EnrollmentNum;
    selectedRow.cells[6].innerHTML = formData.city;
    selectedRow.cells[7].innerHTML = formData.country;
}

function onDelete(td) {
    if (confirm('Are you sure to delete this record ?')) {
        row = td.parentElement.parentElement;
        document.getElementById("Student Data").deleteRow(row.rowIndex);
        resetForm();
    }
}
function validate() {
    isValid = true;
    if (document.getElementById("StudentID").value == "") {
        isValid = false;
        document.getElementById("StudentIDValidationError").classList.remove("hide");
    } else {
        isValid = true;
        if (!document.getElementById("StudentIDValidationError").classList.contains("hide"))
            document.getElementById("StudentIDValidationError").classList.add("hide");
    }
    return isValid;
}