let raidData = [];

fetch("data.json")
    .then(response => response.json())
    .then(data => {
        raidData = data;
        renderTable();
    });

document.getElementById("roleFilter").addEventListener("change", renderTable);
document.getElementById("classFilter").addEventListener("change", renderTable);

function renderTable() {
    const role = document.getElementById("roleFilter").value;
    const klasse = document.getElementById("classFilter").value;

    const table = document.getElementById("raidTable");
    table.innerHTML = "";

    raidData
        .filter(p => !role || p.rolle === role)
        .filter(p => !klasse || p.klasse === klasse)
        .forEach(p => {
            const row = document.createElement("tr");
            row.innerHTML = `
                <td>${p.spieler}</td>
                <td>${p.klasse}</td>
                <td>${p.rolle}</td>
                <td>${p.typ}</td>
                <td>${p.info}</td>
            `;
            table.appendChild(row);
        });
}
