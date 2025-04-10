// Datos de los torneos
const tournaments = [
    { name: "SFC Harz-Weser", date: "09 · 11 · 2025", place: "soon" },
    { name: "Göttingen - TV Roringen", date: "26 · 10 · 2025", place: "soon" },
    { name: "DJK Kolping Northeim", date: "24 · 05 · 2025", place: "soon" },
    { name: "Göttingen - TV Roringen", date: "04 · 2025", place: "4. / 10" },
    { name: "SFC Harz-Weser", date: "10 · 2024", place: "12. / 20" },
    { name: "SFC Harz-Weser", date: "10 · 2023", place: "11. / 20" },
];

// Selecciona el contenedor de la lista
const tournamentsList = document.getElementById("tournaments-list");

// Genera dinámicamente los torneos
tournaments.forEach(tournament => {
    const listItem = document.createElement("li");
    listItem.className = "list-item";
    listItem.innerHTML = `
        <div class="item-info">
            <span class="name">${tournament.name}</span>
            <span class="date">${tournament.date}</span>
        </div>
        <div class="item-details">
            <span>${tournament.place}</span>
        </div>
    `;
    tournamentsList.appendChild(listItem);
});