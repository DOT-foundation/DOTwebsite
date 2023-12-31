//Animate main section
function fadeInMainSection() {
    const mainSection = document.getElementById("main-section");
    mainSection.style.display = "block";
    mainSection.style.animation = "fadeIn 1s";
}

//Goofy ahh Animate DonoLights fucntion
let i = 1;
let z = 101;
function fadeInDonoLights(lightType) {
    if(lightType==1){
        setTimeout(function () {
            const box = document.getElementById("box" + i.toString());
            box.style.display = "block";
            box.style.animation = "fadeIn 1s, bounce 1s";
            i++;
            if (i < 101) {
                fadeInDonoLights(1);
            }
        }, 10);
    }
    else{
        setTimeout(function () {
            const box = document.getElementById("box" + z.toString());
            box.style.display = "block";
            box.style.animation = "fadeIn 1s, bounce 1s";
            z++;
            if (z < 201) {
                fadeInDonoLights(2);
            }
        }, 10);
    }
}

//Box hover css
let count = 0
function editBoxCss(id) {
    if(lightData != [] && lightData[id.replace(/box/g, '')-1].DonationAmount == "-1"){
        document.getElementById("donations").innerText = `Total Donations: ${++count}`

        let color = randomColor();

        const box = document.getElementById(id);
        box.classList.add("box");

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
                -webkit-box-shadow: 0 0 5rem 1rem ${color};
                -moz-box-shadow: 0 0 5rem 1rem ${color};
                box-shadow: 0 0 5rem 1rem ${color};
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

}
function editBoxCssColor(id, pcolor) {
    document.getElementById("donations").innerText = `Total Donations: ${++count}`;

    let color = pcolor;

    const box = document.getElementById("box" + id);

    const height = box.clientHeight;
    const backgroundSize = `100% ${height * 2}px`;

    box.style.backgroundSize = backgroundSize;
    box.style.background     = color;
    box.classList.remove("box");

    const hoverStyle = `
        #${id} {
            background-position: bottom;
            background: ${color};
            background-color: ${color};
            background-size: ${backgroundSize};
            background-position: bottom;
            background: ${color};
            -webkit-box-shadow: 0 0 5rem 1rem ${color};
            -moz-box-shadow: 0 0 5rem 1rem ${color};
            box-shadow: 0 0 5rem 1rem ${color};
            opacity: 100;
        }   
    `;

    // Check if the style element for this box already exists, and remove it if it does
    const existingStyleElement = document.getElementById(`style-${id}`);
    if (existingStyleElement) {
        existingStyleElement.remove();
    }

    // Create a new style element for this box and add it to the head
    const styleElement = document.createElement("style");
    styleElement.id = `style-${id}`;
    styleElement.innerHTML = hoverStyle;
    document.head.appendChild(styleElement);

}

//Contact popup
const contactPopup = document.getElementById("contact-popup");
const closeContactPopup = document.getElementById("close-contact-popup");
const contactButton = document.getElementById("contactButton");
const successPopup = document.getElementById("success-popup");
const closeSuccessPopup = document.getElementById("close-success-popup");

//Show the success pop-up
function showSuccessPopup(msg){
    successPopup.style.display = "block";
    document.getElementById("success-status").innerHTML = msg;
}

//close success pop-up
closeSuccessPopup.addEventListener("click", function (){
    successPopup.style.display = "none";
});


//open the pop-up
contactButton.addEventListener("click", function (){
    contactPopup.style.display = "block";
});

//Close the pop-up
closeContactPopup.addEventListener("click", function (){
    contactPopup.style.display = "none";
});

//close it when clicked outside
window.addEventListener("click", function (event){
    if (event.target == contactPopup) {
        contactPopup.style.display = "none";
    }
});
window.addEventListener("click", function (event){
    if (event.target == successPopup) {
        successPopup.style.display = "none";
    }
});

//Handle form submission
const contactForm = document.getElementById("contact-form");
contactForm.addEventListener("submit", async function (event){
    event.preventDefault();

    const name = document.getElementById("name").value;
    const message = document.getElementById("message").value;

    //ADD CODE TO SEND EMAIL WE CAN USE MAILTRAP OR NODE JS
    // SIR YES SIR

    const emailRequest = await (fetch("/contact-us", {
        method: "POST",
        headers: {
            'Accept': "application/json",
            'Content-Type': "application/json"
        },
        body: JSON.stringify({
            name: name,
            message: message
        })
    }))
    const result = await emailRequest.json()
    
    contactPopup.style.display = "none";

    //ADD REAL LOGIC TO SEE IF EMAIL SENT
    if(result["success"]){
        showSuccessPopup("Email sent successfully.");
    }
    else{
        showSuccessPopup("Error! please try again later.")
    }
});


//Helper functions
function isDivHovered(divId) {
    let div = document.getElementById(divId);

    div.addEventListener("mouseover", function () {
        return true
    });

    return false
}

function checkVisible(elm, threshold, mode) {
    threshold = threshold || 0;
    mode = mode || 'visible';

    let rect = elm.getBoundingClientRect();
    let viewHeight = Math.max(document.documentElement.clientHeight, window.innerHeight);
    let above = rect.bottom - threshold < 0;
    let below = rect.top - viewHeight + threshold >= 0;

    return mode === 'above' ? above : (mode === 'below' ? below : !above && !below);
}
function randomColor() {
    return `hsla(${~~(360 * Math.random())}, 70%,  50%, 0.8)`
}

// Call the functions when the page is fully loaded
window.addEventListener("load", fadeInMainSection);
window.onscroll = function () {
    if (checkVisible(document.getElementById("box100"))) {
        fadeInDonoLights(1);
        window.onscroll = null;
    }
}

document.addEventListener("DOMContentLoaded", function () {
    let chiefCards = document.querySelectorAll("#slideInDivStatic");
    
    let observer = new IntersectionObserver(
        function (entries, observer) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting) {
            entry.target.classList.add("slideInDiv");
            observer.unobserve(entry.target);
            }
        });
        },
        { threshold: 0.5 } 
    );
    
    chiefCards.forEach(function (chiefCard) {
        observer.observe(chiefCard);
    });
    });



document.addEventListener("DOMContentLoaded", function () {
let chiefCards = document.querySelectorAll(".chief-card-below");

let observer = new IntersectionObserver(
    function (entries, observer) {
    entries.forEach(function (entry) {
        if (entry.isIntersecting) {
        entry.target.classList.add("animated");
        observer.unobserve(entry.target);
        }
    });
    },
    { threshold: 0.5 } 
);

chiefCards.forEach(function (chiefCard) {
    observer.observe(chiefCard);
});
});

document.addEventListener("DOMContentLoaded", function () {
let chiefCards = document.querySelectorAll(".chief-card-bottom");

let observer = new IntersectionObserver(
    function (entries, observer) {
    entries.forEach(function (entry) {
        if (entry.isIntersecting) {
        entry.target.classList.add("animated");
        observer.unobserve(entry.target);
        }
    });
    },
    { threshold: 0.5 } 
);

chiefCards.forEach(function (chiefCard) {
    observer.observe(chiefCard);
});
});


//Functions to grab light data 
function fetchData() {
    return new Promise((resolve, reject) => {
      $.ajax({
        url: "fetchData.php",
        type: "GET",
        dataType: "json",
        success: function(response) {
          if (response.success) {
            resolve(response.data);
          } else {
            console.log("Error: " + response.message);
            reject("Data retrieval failed.");
          }
        },
        error: function(xhr, status, error) {
          console.log("Error: " + error);
          reject("Data retrieval failed.");
        }
      });
    });
}

function grabFetchedData(){
    return fetchData()
    .then(function(data) {
        return data
    })
    .catch(function(error) {
        return false
    });
}

//Push data to SQL server
function pushData(index, donationAmount, donationTime, lightColor, lightID, showName, showAmount) {
    //Had to make the code promise me it would wrork ykyk
    return new Promise(function(resolve, reject) {
        let data = {
            index: index,
            donationAmount: donationAmount,
            donationTime: donationTime,
            lightColor: lightColor,
            lightID: lightID,
            showName: showName,
            showAmount: showAmount
        };

        //send an AJAX request 
        $.ajax({
            type: "POST",
            url: "pushDATA.php",
            data: data,
            success: function(response) {
                //handle the response
                resolve(response);
            },
            error: function() {
                console.log("Error updating database");
                reject("Error updating database"); //Reject the Promise in case of an error (i hate the code if it dose this)
            }
        });
    });
}

//Update lights
async function updateLights() {
    try {
      const data = await fetchData();
      if (data) {
        data.forEach(function(row) {
            const box = document.getElementById("box" + row.LightID);
            //See if light needs to be shutoff
            const boxLife =  row.DonationAmount * 2//1$ = 2 hours

            const timestampString = row.DonationTime;
            const timestamp = new Date(timestampString);
            const currentTime = new Date();
            const timeDifference = currentTime - timestamp;
            const hoursPassed = timeDifference / (1000 * 60 * 60);

            if(hoursPassed > boxLife){
                // MAKE TIMESTAMP
                const currentTime = new Date();
                const year = currentTime.getFullYear();
                const month = (currentTime.getMonth() + 1).toString().padStart(2, '0');
                const day = currentTime.getDate().toString().padStart(2, '0');
                const hours = currentTime.getHours().toString().padStart(2, '0');
                const minutes = currentTime.getMinutes().toString().padStart(2, '0');
                const seconds = currentTime.getSeconds().toString().padStart(2, '0');
                const timestamp = `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;

                pushData(row.LightID.toString(), "-1", timestamp, "", row.LightID.toString(), "0", "0") //unlight light if time it up
                .then(function(response) {
                    //pass
                })
                .catch(function(error) {
                    console.log("Error: " + error); //BoOoOoOooo... spooky! (im going insane)
                });
                
            }
            else{
                if(row.LightColor != undefined){
                    console.log(row.LightID)
                    editBoxCssColor(row.LightID, "red");
                }
                else{
                    box.style.color = "black";
                }
            }
        });
      } else {
        console.log("Error fetching light data");
      }
    } catch (error) {
      console.error(error);
    }
  }


let lightData = [];

function fetchAndUseLightData() {
grabFetchedData()
    .then(data => {
    lightData = data;
    })
    .catch(error => {
    console.error(error);
    });
}


fetchAndUseLightData();

const lightUpdate = setInterval(updateLights, 5000);
 

//Animate Dono stats
document.addEventListener("DOMContentLoaded", function() {
    let clothIcon = document.getElementById('cloth-icon');
    let clothCount = document.getElementById('cloth-count');
    let clothCountValue = 200;

    let options = {
        root: null,
        rootMargin: '0px',
        threshold: 0.5
    };

    let observer = new IntersectionObserver(function(entries, observer) {
        entries.forEach(function(entry) {
            if (entry.isIntersecting) {
                animateCount(clothCount, 0, clothCountValue);
                observer.unobserve(entry.target);
            }
        });
    }, options);

    observer.observe(clothIcon);

    function animateCount(element, start, end) {
        let duration = 2500;
        let startTime = null;

        function step(currentTime) {
            if (!startTime) startTime = currentTime;

            let progress = currentTime - startTime;
            let percentage = Math.min(progress / duration, 1);

            element.textContent = Math.floor(percentage * (end - start) + start);

            if (percentage < 1) {
                requestAnimationFrame(step);
            }
        }

        requestAnimationFrame(step);
    }
});
