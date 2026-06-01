let employees = [];

function addEmployee() {

    let name = document.getElementById("name").value;
    let empId = document.getElementById("empId").value;
    let salary = parseFloat(document.getElementById("salary").value);
    let dept = document.getElementById("dept").value;

    if (name === "" || empId === "" || isNaN(salary) || dept === "") {
        alert("Please fill all fields properly");
        return;
    }

    let employee = {
        name: name,
        id: empId,
        salary: salary,
        department: dept
    };

    employees.push(employee);

    alert("Employee Added Successfully");

    document.getElementById("name").value = "";
    document.getElementById("empId").value = "";
    document.getElementById("salary").value = "";
    document.getElementById("dept").value = "";
}

function displayEmployees() {

    let output = document.getElementById("output");
    output.innerHTML = "";

    employees.forEach(emp => {
        output.innerHTML += 
        "Name: " + emp.name + 
        " | ID: " + emp.id + 
        " | Salary: " + emp.salary + 
        " | Department: " + emp.department + 
        "<br>";
    });
}

function filterSalary() {

    let output = document.getElementById("output");
    output.innerHTML = "";

    let filtered = employees.filter(emp => emp.salary > 50000);

    filtered.forEach(emp => {
        output.innerHTML += 
        emp.name + " - " + emp.salary + "<br>";
    });
}

function totalSalary() {

    let total = 0;

    employees.forEach(emp => {
        total += emp.salary;
    });

    document.getElementById("output").innerHTML = 
    "Total Salary = " + total;
}

function averageSalary() {

    if (employees.length === 0) {
        document.getElementById("output").innerHTML = "No employees";
        return;
    }

    let total = 0;

    employees.forEach(emp => {
        total += emp.salary;
    });

    let avg = total / employees.length;

    document.getElementById("output").innerHTML = 
    "Average Salary = " + avg;
}

function countDepartment() {

    let deptCount = {};

    employees.forEach(emp => {
        if (deptCount[emp.department]) {
            deptCount[emp.department]++;
        } else {
            deptCount[emp.department] = 1;
        }
    });

    let output = "";

    for (let dept in deptCount) {
        output += dept + " : " + deptCount[dept] + "<br>";
    }

    document.getElementById("output").innerHTML = output;
}