
//Animate main section
function fadeInMainSection() {
    const mainSection = document.getElementById("main-section");
    mainSection.style.display = "block";
    mainSection.style.animation = "fadeIn 1s";
}

// Call the function when the page is fully loaded
window.addEventListener("load", fadeInMainSection);

//---- NON WORKING PHP STUFF FOR DONO LIGHTS ----
//fetch the color list from the server
function fetchColors() {
    fetch('fetch_colors.php')
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                displayColors(data.colors);
            } else {
                console.error('Failed to fetch colors: ' + data.message);
            }
        });
}

//Assign colors
function assignColorsToBoxes(colors) {
    const boxElements = document.querySelectorAll('.box');

    for (let i = 0; i < boxElements.length; i++) {
        if (colors[i]) {
            boxElements[i].style.backgroundColor = colors[i];
        }
    }
}

//add a new color
function addColor() {
    const newColorInput = document.getElementById('newColor');
    const newColor = newColorInput.value;

    fetch('update_colors.php', {
        method: 'POST',
        body: JSON.stringify({ color: newColor }),
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                fetchColors(); //Refresh the color list after adding a new color
                newColorInput.value = ''; //Clear the input field
            } else {
                console.error('Failed to add color: ' + data.message);
            }
        });
}

//Initial fetch to load the colors when the page loads
fetchColors()
    .then(data => {
        if (data.success) {
            assignColorsToBoxes(data.colors);
        }
    });