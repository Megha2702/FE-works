/*To get the values displayed in the output screen of the calculator */
const display = (val) => {
    console.log(val);
    const screen = document.getElementById("screen")
    screen.style.display = display;
    screen.value += val;
}

/* To clear the screen */
const clearScreen = () => {
    document.getElementById("screen").value = "";
}

/* For the calculations */

const calculate = (val) => {
    const screen = document.getElementById("screen")
    try{
        screen.value = eval(screen.value)
    }
    catch(error){
        screen.value = 'Error: ' 
        }
    
    console.log(screen.value);
}

