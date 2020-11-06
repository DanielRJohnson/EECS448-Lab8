document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("chBorder").addEventListener("click", () => {
        let r = document.getElementById("colR").value;
        let g = document.getElementById("colG").value;
        let b = document.getElementById("colB").value;
        let colorString = r + g + b;
        if (/^[0-9a-f]{6}$/i.test(colorString)){
            document.getElementById("catText").style.borderColor = "#" + colorString;
        }
        else{
            alert("Invalid Color. Good input is (0-F,0-F) (0-F,0-F) (0-F,0-F)");
        }
    });
    document.getElementById("chBackground").addEventListener("click", () => {
        let r = document.getElementById("bgcolR").value;
        let g = document.getElementById("bgcolG").value;
        let b = document.getElementById("bgcolB").value;
        let colorString = r + g + b;
        if (/^[0-9a-f]{6}$/i.test(colorString)){
            document.getElementById("catText").style.backgroundColor = "#" + colorString;
        }
        else{
            alert("Invalid Color. Good input is (0-F,0-F) (0-F,0-F) (0-F,0-F)");
        }
    });
})
