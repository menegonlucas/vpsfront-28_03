document.getElementById("product-form").addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("product-name").value;
    const description = document.getElementById("product-description").value;
    const salePrice = parseFloat(document.getElementById("sale-price").value).toFixed(2);
    const costPrice = parseFloat(document.getElementById("cost-price").value).toFixed(2);

    const tableBody = document.getElementById("product-table-body");
    const newRow = document.createElement("tr");

    newRow.innerHTML = `
        <td>${name}</td>
        <td>${description}</td>
        <td>R$ ${salePrice}</td>
        <td>R$ ${costPrice}</td>
    `;

    tableBody.appendChild(newRow);

    document.getElementById("product-form").reset();
});