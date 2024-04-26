// rendom color generator
function hexColor() {
    let hex = "0123456789ABCDEF";
    let color = "#"
    for (let i = 0; i < 6; i++) {
        color += hex[Math.floor(Math.random() * 16)]
    }
    return color;
}
let setColor;
const startChangingColor = () => {
    if(!setColor){
        setColor = setInterval(() => {
            document.body.style.backgroundColor = hexColor()
        }, 1000);
    }
}
const stopChangingColor = () => {
    clearInterval(setColor)
    setColor=null
};
document.querySelector('#start').addEventListener('click', startChangingColor);
document.querySelector('#stop').addEventListener('click', stopChangingColor);
