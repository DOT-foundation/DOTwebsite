
//Animate main section
function fadeInMainSection() {
    const mainSection = document.getElementById("main-section");
    mainSection.style.display = "block";
    mainSection.style.animation = "fadeIn 1s";
}

//Goofy ahh Animate DonoLights fucntion
let i = 1;
function fadeInDonoLights() {
    setTimeout(function() {  
        const box = document.getElementById("box" + i.toString());
        box.style.display = "block";
        box.style.animation = "fadeIn 1s, bounce 1s";
        i++;
        if (i < 101) {
        fadeInDonoLights();         
        }           
    }, 10);
}

//Box hover css NOT WORKING 
// function editBoxCss(){
//     let color = randomColor();
//     let box = checkWitchBoxIsHoverd()
//     console.log(box)
//     box.style.background = "linear-gradient(to top, " + color + " 50%, black 50%) top;";
// }



//Helper functions
function checkWitchBoxIsHoverd(){
    for(let i = 1; i<101; i++){
        if(isDivHovered("box" + i.toString())){
            console.log(i);
            console.log(document.getElementById("box" + i.toString()) + " is visable");
            return document.getElementById("box" + i.toString());
        }
    }
}

function isDivHovered(divId) {
    var div = document.getElementById(divId);
    
    div.addEventListener("mouseover", function() {
        return true
    });
    
    return false
}

function checkVisible(elm, threshold, mode) {
    threshold = threshold || 0;
    mode = mode || 'visible';

    var rect = elm.getBoundingClientRect();
    var viewHeight = Math.max(document.documentElement.clientHeight, window.innerHeight);
    var above = rect.bottom - threshold < 0;
    var below = rect.top - viewHeight + threshold >= 0;

    return mode === 'above' ? above : (mode === 'below' ? below : !above && !below);
}
function randomColor(){
    return '#'+(Math.random() * 0xFFFFFF << 0).toString(16).padStart(6, '0');
}

// Call the functions when the page is fully loaded
window.addEventListener("load", fadeInMainSection);
window.onscroll = function(){
    if(checkVisible(document.getElementById("box100"))){
        fadeInDonoLights();
        window.onscroll = null;
    }
}








// //---- NON WORKING PHP STUFF FOR DONO LIGHTS ----
// //fetch the color list from the server
// function fetchColors() {
//     fetch('fetch_colors.php')
//         .then(response => response.json())
//         .then(data => {
//             if (data.success) {
//                 displayColors(data.colors);
//             } else {
//                 console.error('Failed to fetch colors: ' + data.message);
//             }
//         });
// }

// //Assign colors
// function assignColorsToBoxes(colors) {
//     const boxElements = document.querySelectorAll('.box');

//     for (let i = 0; i < boxElements.length; i++) {
//         if (colors[i]) {
//             boxElements[i].style.backgroundColor = colors[i];
//         }
//     }
// }

// //add a new color
// function addColor() {
//     const newColorInput = document.getElementById('newColor');
//     const newColor = newColorInput.value;

//     fetch('update_colors.php', {
//         method: 'POST',
//         body: JSON.stringify({ color: newColor }),
//         headers: {
//             'Content-Type': 'application/json'
//         }
//     })
//         .then(response => response.json())
//         .then(data => {
//             if (data.success) {
//                 fetchColors(); //Refresh the color list after adding a new color
//                 newColorInput.value = ''; //Clear the input field
//             } else {
//                 console.error('Failed to add color: ' + data.message);
//             }
//         });
// }

// //Initial fetch to load the colors when the page loads
// fetchColors()
//     .then(data => {
//         if (data.success) {
//             assignColorsToBoxes(data.colors);
//         }
//     });