const isHover = e => e.parentElement.querySelector(':hover') === e;

const founders = document.getElementsByClassName('Founder');
const founderDiv = document.getElementsByClassName('AboutUs');

const pierceDesc = document.getElementsByClassName('pierceDesc')[0];


document.addEventListener('mousemove', function checkHover() {
    const hoveredF1 = isHover(founders[0]);
    const hoveredF2 = isHover(founders[1]);
    const hoveredFD = isHover(founderDiv[0]);

    // If hovering about us div
    if (hoveredFD) {

        if (hoveredF1) {
            founders[0].style.width = "17.5%"; 
            founders[0].style.transform = "translateX(-180%)";
            founders[0].style.width = "20%";

            founders[0].style.display = "inline";
            founders[1].style.display = "none";

            // BROKEN
            pierceDesc.style.display = "inline";
        } 
        else if(hoveredF2) {
            founders[1].style.width = "17.5%";
            founders[1].style.transform = "translateX(-180%)";
            founders[1].style.width = "20%";

            founders[0].style.display = "none";
            founders[1].style.display = "inline";
            
        }
    } 
    else {
        founders[0].style.width = "15%";
        founders[1].style.width = "15%";

        founders[0].style.transform = "translateX(0)";
        founders[1].style.transform = "translateX(0)";

        founders[0].style.display = "inline";
        founders[1].style.display = "inline";

        founders[0].style.width = "15%";
        founders[1].style.width = "15%";

        // BROKEN
        pierceDesc.style.display = "none";
    }
});