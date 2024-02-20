export function save() {

    const whiteSheet = document.getElementById('whiteSheet');
    const children = whiteSheet.children;

    //check children
    if (children.length === 0) {
        console.log("No elements to save.");
        return;
    }

    // create new dataBase
    const elementsData = [];

    // check every time 
    for (let i = 0; i < children.length; i++) {
        const element = children[i];
        const boxShadow = element.style.boxShadow;
        const elementData = {
            tag: element.tagName,
            content: element.textContent,
            style: {
                width: element.style.width,
                height: element.style.height,
                border: element.style.border,
                borderRadius: element.style.borderRadius,
                backgroundColor: element.style.backgroundColor,
                fontSize: element.style.fontSize,
                color: element.style.color,
                padding: element.style.padding,
                margin: element.style.margin,
                boxShadow: boxShadow
            }
        };
        elementsData.push(elementData);
    }

    // save localStorage
    localStorage.setItem("savedElements", JSON.stringify(elementsData));
    console.log("Elements saved successfully.");
}
