
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

//Box hover css
function editBoxCss(id) {
    let color = randomColor();

    const box = document.getElementById(id);

    const height = box.clientHeight;
    const backgroundSize = `100% ${height * 2}px`; 

    box.style.backgroundSize = backgroundSize;

    const hoverStyle = `
        #${id} {
            background-position: bottom;
            background: #000000;
            background-size: ${backgroundSize};
            transition: 5s ease-out;
        }

        #${id}:hover {
            background-position: bottom;
            background: ${color};
            background-size: ${backgroundSize};
            -webkit-box-shadow: 0 0 5rem ${color};
            -moz-box-shadow: 0 0 5rem ${color};
            box-shadow: 0 0 5rem ${color};
            transition: 0.01s ease;
        }
    `;

    //Check if the style element for this box already exists, and remove it if it does
    const existingStyleElement = document.getElementById(`style-${id}`);
    if (existingStyleElement) {
        existingStyleElement.remove();
    }

    //Create a new style element for this box and add it to the head
    const styleElement = document.createElement("style");
    styleElement.id = `style-${id}`;
    styleElement.innerHTML = hoverStyle;
    document.head.appendChild(styleElement);

}





//Helper functions
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