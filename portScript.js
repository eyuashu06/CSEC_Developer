const form = document.getElementById("portfolioForm");
const output = document.getElementById("output");

form.addEventListener("submit", function (e) {
e.preventDefault(); 
const name = document.getElementById("fname").value;
const id = document.getElementById("id").value;
const dept = document.getElementById("department").value;
const email = document.getElementById("email").value;
const message = document.getElementById("message").value;

output.innerHTML = `
    <h3>Submitted Information</h3>
    <p><strong>Full Name:</strong> ${name}</p>
    <p><strong>ID:</strong> ${id}</p>
    <p><strong>Department:</strong> ${dept}</p>
    <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong> ${message}</p>
`;
});