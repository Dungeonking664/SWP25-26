document.getElementById("essen-button").addEventListener("click", async () => {
  const response = await fetch("/api/essen");
  const data = await response.json();
  
  const tbody = document.querySelector("#essen-table tbody");
  tbody.innerHTML = "";
  
  for (const [name, essen] of data) {
    const row = document.createElement("tr");
    row.innerHTML = `<td>${name}</td><td>${essen}</td>`;
    tbody.appendChild(row);
  }
});
