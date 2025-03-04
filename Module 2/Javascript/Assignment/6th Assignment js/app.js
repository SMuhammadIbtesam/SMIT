let dobInput = prompt("Enter Your Date Of Birth (YYYY-MM-DD):");

function calculateAge(dob) {
    let birthDate = new Date(dob);
    let today = new Date();

let years = today.getFullYear() - birthDate.getFullYear();
let months = today.getMonth() - birthDate.getMonth();
let days = today.getDate() - birthDate.getDate();

alert(`Your Age is ${years}, Month is ${months}, Day is ${days}`);
}

calculateAge(dobInput);