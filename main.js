document.getElementById("h1js").innerHTML = "Salam dunya!"
document.getElementById("myParagraph").innerHTML = "Yeni mezmun."
// document.getElementById("email").innerHTML= "admin@gmail.com"
function myFunction() {
    document.getElementById("email").value = "admin@gmail.com";
}
const employees = [
    {
        id: 1,
        name: 'Farman',
        age: 22,
        position: 'Frontend | Team Leader',
        salary: 250
    },
    {
        id: 2,
        name: 'Subhan',
        age: 22,
        position: 'Backend | Team Leader',
        salary: 250
    },
    {
        id: 3,
        name: 'Aqil',
        age: 27,
        position: 'QA Tester',
        salary: 70
    },
    {
        id: 4,
        name: 'Lala',
        age: 18,
        position: 'QA Tester',
        salary: 70
    },
    {
        id: 5,
        name: 'Oktay',
        age: 12,
        position: 'Frontend',
        salary: 160
    },
];
const tbody = document.querySelector(".tbody");
employees.forEach((employee)=>{
    const tr = document.createElement("tr");
    tr.innerHTML = `
    <td>${employee.id}</td>
    <td>${employee.name}</td>
    <td>${employee.age}</td>
    <td>${employee.position}</td>
    <td>${employee.salary}</td>
    `;
    tbody.innerHTML += tr.innerHTML;
})