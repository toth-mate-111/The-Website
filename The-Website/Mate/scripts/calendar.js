const calendar = document.getElementById("calendar");
const now = new Date();
const year = now.getFullYear();
const month = now.getMonth();
const today = now.getDate();

const firstWeekday = new Date(year, month, 1).getDay();
const daysInMonth = new Date(year, month + 1, 0).getDate();

let html = `<h2 class="month">${now.toLocaleDateString("en-US", { month: "long", year: "numeric" })}</h2>`;
html += `<div class="grid">`;

for (const name of ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]) {
    html += `<div class="day-name">${name}</div>`;
}

for (let i = 0; i < firstWeekday; i++) {
    html += `<div></div>`;
}

for (let day = 1; day <= daysInMonth; day++) {
    const className = day === today ? "day today" : "day";
    html += `<div class="${className}">${day}</div>`;
}

html += `</div>`;
calendar.innerHTML = html;
