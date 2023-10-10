const isHover = e => e.parentElement.querySelector(':hover') === e;

const founders = document.getElementsByClassName('Founder');
const founderDiv = document.getElementsByClassName('FoundersDesc');

document.addEventListener('mousemove', function checkHover() {
    const hoveredF1 = isHover(founders[0]);
    const hoveredF2 = isHover(founders[1]);
    const hoveredFD = isHover(founderDiv[0]);

    // If hovering about us div
    if (hoveredFD) {

        if (hoveredF1) {
            founders[0].style.width = "25%"; 
            founders[0].style.transform = "translateX(-10%)";
            founders[0].style.margin = "2.5%";

            founders[0].style.display = "inline-block";
            founders[1].style.display = "none";

            $(".pierceDesc").css("display", "inline-block");
        } 
        else if(hoveredF2) {
            founders[1].style.width = "25%";
            founders[1].style.transform = "translateX(-10%)";
            founders[1].style.margin = "2.5%";

            founders[0].style.display = "none";
            founders[1].style.display = "inline-block";

            $(".sonanDesc").css("display", "inline-block");
            
        }
    } 
    else {
        founders[0].style.width = "15%";
        founders[1].style.width = "15%";

        founders[0].style.transform = "translateX(0)";
        founders[1].style.transform = "translateX(0)";

        founders[0].style.display = "inline-block";
        founders[1].style.display = "inline-block";

        founders[0].style.width = "15%";
        founders[1].style.width = "15%";

        founders[0].style.margin = "0%";
        founders[1].style.margin = "0%";

        founders[0].style.marginRight = "5%";
        founders[0].style.marginLeft = "5%";
        founders[1].style.marginRight = "5%";
        founders[1].style.marginLeft = "5%";


        $(".pierceDesc").css("display", "none");
        $(".sonanDesc").css("display", "none");
    }
});