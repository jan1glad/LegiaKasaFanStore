document.addEventListener('DOMContentLoaded', function () {

    let currentDate = new Date();

    currentDate = new Date().toLocaleDateString("pl-PL", {
        day: "numeric",
        month: "long",
        year: "numeric",
        weekday: "long"
    });

    document.title = currentDate;
});