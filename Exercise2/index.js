document.addEventListener("DOMContentLoaded", () => {
    let img = document.getElementById("img");
    let filepaths = ["cleo.jpg", "effi1.jpg", "effi2.png", "salami1.png", "salami2.png"];
    let tracker = 0;
    document.getElementById("prev").addEventListener("click", () => {
        tracker--;
        if (tracker < 0) tracker = 4;
        img.src = "img/" + filepaths[tracker];
    });
    document.getElementById("next").addEventListener("click", () => {
        tracker++;
        if (tracker > 4) tracker = 0;
        img.src = "img/" + filepaths[tracker];
    });
});