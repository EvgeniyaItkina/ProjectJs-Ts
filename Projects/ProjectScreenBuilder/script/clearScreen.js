export function clearScreen() {
    const messageClear = document.querySelector('.messageClear');
    messageClear.style.display = "block";

    document.getElementById('yesClear').addEventListener('click', () => {
        document.getElementById('whiteSheet').innerHTML = "";
        document.getElementById('element').value = "";
        document.getElementById("bgColor").value = "";
        document.getElementById("width").value = "";
        document.getElementById("height").value = "";
        document.getElementById("textarea").value = "";
        document.getElementById("font-size").value = "";
        document.getElementById("font-color").value = "";
        document.getElementById("widthBorder").value = "";
        document.getElementById("colorBorder").value = "";
        document.getElementById("radiusBorder").value = "";
        document.getElementById("padding").value = "";
        document.getElementById("margin").value = "";
        document.getElementById("boxShadowX").value = "";
        document.getElementById("boxShadowY").value = "";
        document.getElementById("boxShadowBlur").value = "";
        messageClear.style.display = "none";
        localStorage.clear();
    });

    document.getElementById('noClear').addEventListener('click', () => {
        messageClear.style.display = "none";
    });
}