document.getElementById("client-form").addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("client-name").value;
    const address = document.getElementById("client-address").value;
    const cpf = document.getElementById("client-cpf").value;
    const phone = document.getElementById("client-phone").value;

    const tableBody = document.getElementById("client-table-body");
    const newRow = document.createElement("tr");

    newRow.innerHTML = `
        <td>${name}</td>
        <td>${address}</td>
        <td>${cpf}</td>
        <td>${phone}</td>
    `;

    tableBody.appendChild(newRow);

    document.getElementById("client-form").reset();
});