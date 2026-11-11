//top
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


document.onclick = () => {
    calendarBox.classList.remove("open");
    menuBox.classList.remove("open");
};



//games
document.getElementById("counter-strike-2-button").onclick = (event) => {
    event.stopPropagation();
    document.getElementById("game-open").classList.toggle("game-open");

    document.getElementById("sea-of-thieves-button").classList.toggle("game-show");
    document.getElementById("they-are-billions-button").classList.toggle("game-show");
    document.getElementById("scrap-mechanic-button").classList.toggle("game-show");
    document.getElementById("the-long-dark-button").classList.toggle("game-show");
    document.getElementById("phasmophobia-button").classList.toggle("game-show");
    document.getElementById("ultrakill-button").classList.toggle("game-show");
    document.getElementById("rainbow-six-siege-button").classList.toggle("game-show");
    document.getElementById("rainbow-six-siege-x").classList.toggle("game-show");

    document.getElementById("game-box").classList.toggle("game-box-big");
    document.getElementById("rainbow-six-siege-div").classList.toggle("game-show");

    document.querySelectorAll('.description-not-visible-id').forEach(library => library.classList.toggle('description-not-visible'));
};

document.getElementById("sea-of-thieves-button").onclick = (event) => {
    event.stopPropagation();
    document.getElementById("game-open").classList.toggle("game-open");

    document.getElementById("counter-strike-2-button").classList.toggle("game-show");
    document.getElementById("they-are-billions-button").classList.toggle("game-show");
    document.getElementById("scrap-mechanic-button").classList.toggle("game-show");
    document.getElementById("the-long-dark-button").classList.toggle("game-show");
    document.getElementById("phasmophobia-button").classList.toggle("game-show");
    document.getElementById("ultrakill-button").classList.toggle("game-show");
    document.getElementById("rainbow-six-siege-button").classList.toggle("game-show");
    document.getElementById("rainbow-six-siege-x").classList.toggle("game-show");
};

document.getElementById("they-are-billions-button").onclick = (event) => {
    event.stopPropagation();
    document.getElementById("game-open").classList.toggle("game-open");

    document.getElementById("sea-of-thieves-button").classList.toggle("game-show");
    document.getElementById("counter-strike-2-button").classList.toggle("game-show");
    document.getElementById("scrap-mechanic-button").classList.toggle("game-show");
    document.getElementById("the-long-dark-button").classList.toggle("game-show");
    document.getElementById("phasmophobia-button").classList.toggle("game-show");
    document.getElementById("ultrakill-button").classList.toggle("game-show");
    document.getElementById("rainbow-six-siege-button").classList.toggle("game-show");
    document.getElementById("rainbow-six-siege-x").classList.toggle("game-show");
};

document.getElementById("scrap-mechanic-button").onclick = (event) => {
    event.stopPropagation();
    document.getElementById("game-open").classList.toggle("game-open");

    document.getElementById("sea-of-thieves-button").classList.toggle("game-show");
    document.getElementById("they-are-billions-button").classList.toggle("game-show");
    document.getElementById("counter-strike-2-button").classList.toggle("game-show");
    document.getElementById("the-long-dark-button").classList.toggle("game-show");
    document.getElementById("phasmophobia-button").classList.toggle("game-show");
    document.getElementById("ultrakill-button").classList.toggle("game-show");
    document.getElementById("rainbow-six-siege-button").classList.toggle("game-show");
    document.getElementById("rainbow-six-siege-x").classList.toggle("game-show");
};

document.getElementById("the-long-dark-button").onclick = (event) => {
    event.stopPropagation();
    document.getElementById("game-open").classList.toggle("game-open");

    document.getElementById("sea-of-thieves-button").classList.toggle("game-show");
    document.getElementById("they-are-billions-button").classList.toggle("game-show");
    document.getElementById("scrap-mechanic-button").classList.toggle("game-show");
    document.getElementById("counter-strike-2-button").classList.toggle("game-show");
    document.getElementById("phasmophobia-button").classList.toggle("game-show");
    document.getElementById("ultrakill-button").classList.toggle("game-show");
    document.getElementById("rainbow-six-siege-button").classList.toggle("game-show");
    document.getElementById("rainbow-six-siege-x").classList.toggle("game-show");
};

document.getElementById("phasmophobia-button").onclick = (event) => {
    event.stopPropagation();
    document.getElementById("game-open").classList.toggle("game-open");

    document.getElementById("sea-of-thieves-button").classList.toggle("game-show");
    document.getElementById("they-are-billions-button").classList.toggle("game-show");
    document.getElementById("scrap-mechanic-button").classList.toggle("game-show");
    document.getElementById("the-long-dark-button").classList.toggle("game-show");
    document.getElementById("counter-strike-2-button").classList.toggle("game-show");
    document.getElementById("ultrakill-button").classList.toggle("game-show");
    document.getElementById("rainbow-six-siege-button").classList.toggle("game-show");
    document.getElementById("rainbow-six-siege-x").classList.toggle("game-show");
};

document.getElementById("ultrakill-button").onclick = (event) => {
    event.stopPropagation();
    document.getElementById("game-open").classList.toggle("game-open");

    document.getElementById("sea-of-thieves-button").classList.toggle("game-show");
    document.getElementById("they-are-billions-button").classList.toggle("game-show");
    document.getElementById("scrap-mechanic-button").classList.toggle("game-show");
    document.getElementById("the-long-dark-button").classList.toggle("game-show");
    document.getElementById("phasmophobia-button").classList.toggle("game-show");
    document.getElementById("counter-strike-2-button").classList.toggle("game-show");
    document.getElementById("rainbow-six-siege-button").classList.toggle("game-show");
    document.getElementById("rainbow-six-siege-x").classList.toggle("game-show");
};

document.getElementById("rainbow-six-siege-button").onclick = (event) => {
    event.stopPropagation();
    document.getElementById("game-open").classList.toggle("game-open");
    document.getElementById("rainbow-six-siege-x").classList.toggle("game-open");

    document.getElementById("sea-of-thieves-button").classList.toggle("game-show");
    document.getElementById("they-are-billions-button").classList.toggle("game-show");
    document.getElementById("scrap-mechanic-button").classList.toggle("game-show");
    document.getElementById("the-long-dark-button").classList.toggle("game-show");
    document.getElementById("phasmophobia-button").classList.toggle("game-show");
    document.getElementById("ultrakill-button").classList.toggle("game-show");
    document.getElementById("counter-strike-2-button").classList.toggle("game-show");
};






//kde
const kdeBox = document.getElementById("kde-box");
document.getElementById("kde-button").onclick = (event) => {
    event.stopPropagation();
    kdeBox.classList.toggle("open");
};



document.getElementById("kde").onclick = () => {
    kdeBox.classList.remove("open");
};