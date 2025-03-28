document.getElementById("employee-form").addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const cpf = document.getElementById("cpf").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const address = document.getElementById("address").value;


    const tableBody = document.getElementById("employee-table-body");
    const newRow = document.createElement("tr");

    newRow.innerHTML = `
        <td>${name}</td>
        <td>${cpf}</td>
        <td>${email}</td>
        <td>${phone}</td>
        <td>${address}</td>
    `;

    tableBody.appendChild(newRow);

    document.getElementById("employee-form").reset();
});