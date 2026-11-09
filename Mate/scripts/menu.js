const menuBox = document.getElementById("menu-box");

document.getElementById("menu-button").onclick = (event) => {
    event.stopPropagation();
    menuBox.classList.toggle("open");
};

const calendarBox = document.getElementById("calendar-box");

document.getElementById("calendar-button").onclick = (event) => {
    event.stopPropagation();
    calendarBox.classList.toggle("open");
};

const kdeBox = document.getElementById("kde-box");

document.getElementById("kde-button").onclick = (event) => {
    event.stopPropagation();
    kdeBox.classList.toggle("open");
};

document.onclick = () => {
    calendarBox.classList.remove("open");
    menuBox.classList.remove("open");
};

document.getElementById("kde").onclick = () => {
    kdeBox.classList.remove("open");
};