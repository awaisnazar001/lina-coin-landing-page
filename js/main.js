var ham = document.getElementById("ham-icon");
var menuLinks = document.getElementById("nav-menu");
var homeBtn = document.getElementById("home-btn");
var aboutBtn = document.getElementById("about-btn");
var roadmapBtn = document.getElementById("roadmap-btn");
var howtoBtn = document.getElementById("howto-btn");
var contactBtn = document.getElementById("contact-btn");

// When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};

// Get the navbar
var navbar = document.getElementById("navbar");

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
    navbar.style.backgroundColor = "white";
  } else {
    navbar.classList.remove("sticky");
  }
}

homeBtn.addEventListener("click", function(){
    homeBtn.classList.add('active');
    aboutBtn.classList.remove('active');
    roadmapBtn.classList.remove('active');
    howtoBtn.classList.remove('active');
    contactBtn.classList.remove('active');
})
aboutBtn.addEventListener("click", function(){
    homeBtn.classList.remove('active');
    aboutBtn.classList.add('active');
    roadmapBtn.classList.remove('active');
    howtoBtn.classList.remove('active');
    contactBtn.classList.remove('active');
})
roadmapBtn.addEventListener("click", function(){
    homeBtn.classList.remove('active');
    aboutBtn.classList.remove('active');
    roadmapBtn.classList.add('active');
    howtoBtn.classList.remove('active');
    contactBtn.classList.remove('active');
})
howtoBtn.addEventListener("click", function(){
    homeBtn.classList.remove('active');
    aboutBtn.classList.remove('active');
    roadmapBtn.classList.remove('active');
    howtoBtn.classList.add('active');
    contactBtn.classList.remove('active');
})
contactBtn.addEventListener("click", function(){
    homeBtn.classList.remove('active');
    aboutBtn.classList.remove('active');
    roadmapBtn.classList.remove('active');
    howtoBtn.classList.remove('active');
    contactBtn.classList.add('active');
})

ham.addEventListener("click", function () {
    // ham.classList.toggle("is-active");
    console.log("clicked");
    menuLinks.classList.toggle("hamburger-active");
})

//Timer Code
var countDate = new Date('Jan 2, 2022 00:00:00').getTime();

function newYear(){
    var now = new Date().getTime();
        gap = countDate - now;
    var second = 1000;
    var minute = second * 60;
    var hour = minute * 60;
    var day = hour * 24;

    var d = Math.floor(gap / (day));
    var m = Math.floor(gap % (day) / (hour));
    var h = Math.floor(gap % (hour) / (minute));
    var s = Math.floor(gap % (minute) / (second));

    document.getElementById('days').innerHTML = d;
    document.getElementById('hours').innerHTML = h;
    document.getElementById('minutes').innerHTML = m;
    document.getElementById('seconds').innerHTML = s;
}

setInterval(function(){
    newYear();
},1000);

$(document).ready(function () {
    var ctx = document.getElementById("mycanvas");
    var data = [{
        data: [180, 90, 90],
        backgroundColor: [
            "#223AFF",
            "#000000",
            "#FFFFFF"
        ],
        borderColor: "#000000"
    }];

    var options = {
        responsive: false,
        maintainAspectRatio: false,
        tooltips: {
            callbacks: {
                label: function (tooltipItem, data) {
                    //get the concerned dataset
                    var dataset = data.datasets[tooltipItem.datasetIndex];
                    //calculate the total of this data set
                    var total = dataset.data.reduce(function (previousValue, currentValue, currentIndex, array) {
                        return previousValue + currentValue;
                    });
                    //get the current items value
                    var currentValue = dataset.data[tooltipItem.index];
                    //calculate the precentage based on the total and current item, also this does a rough rounding to give a whole number
                    var percentage = Math.floor(((currentValue / total) * 100) + 0.5);

                    return percentage + "%";
                }
            }
        }
        
    };

    var myChart = new Chart("mycanvas", {
        type: 'doughnut',
        data: {
            labels: ["Presale", "Team", "Rewards"],
            datasets: data
        },
        options: options
    });

})

let currentActive = 0;

var progress = document.getElementsByClassName("circle");
var prev = document.getElementById("prev");
var next = document.getElementById("next");
var leftArrow = document.getElementById("left");
var roadmap1 = document.getElementsByClassName("roadmap-content1");
var roadmap2 = document.getElementsByClassName("roadmap-content2");
var roadmap3 = document.getElementsByClassName("roadmap-content3");
var roadmap4 = document.getElementsByClassName("roadmap-content4");
var roadmap5 = document.getElementsByClassName("roadmap-content5");
console.log(roadmap1);
// roadmap1.style.color = "white";

next.addEventListener("click", function(){
    currentActive += 1;
    if(currentActive == 1){
        progress[0].classList.remove("active-circle");
        progress[1].classList.add("active-circle");
        prev.disabled = false;
        leftArrow.style.color = "white";
        changeColor(roadmap1,roadmap2);
    }
    if(currentActive == 2){
        progress[1].classList.remove("active-circle");
        progress[2].classList.add("active-circle");
        changeColor(roadmap2,roadmap3);
    }
    if(currentActive == 3){
        progress[2].classList.remove("active-circle");
        progress[3].classList.add("active-circle");
        changeColor(roadmap3,roadmap4);
    }
    if(currentActive == 4){
        progress[3].classList.remove("active-circle");
        progress[4].classList.add("active-circle");
        changeColor(roadmap4,roadmap5);
    }
    if(currentActive == 5){
        progress[4].classList.remove("active-circle");
        progress[0].classList.add("active-circle");
        currentActive = 0;
        prev.disabled = true;
        leftArrow.style.color = "#9C9C9F";
        changeColor(roadmap5,roadmap1);
    }
})

prev.addEventListener("click", function(){
    currentActive -= 1;
    console.log("clicked");
    if(currentActive == 0){
        progress[1].classList.remove("active-circle");
        progress[0].classList.add("active-circle");
        prev.disabled = true;
        leftArrow.style.color = "#9C9C9F";
        changeColor(roadmap2,roadmap1);
    }
    if(currentActive == 1){
        progress[2].classList.remove("active-circle");
        progress[1].classList.add("active-circle");
        changeColor(roadmap3,roadmap2);
    }
    if(currentActive == 2){
        progress[3].classList.remove("active-circle");
        progress[2].classList.add("active-circle");
        changeColor(roadmap4,roadmap3);
    }
    if(currentActive == 3){
        progress[4].classList.remove("active-circle");
        progress[3].classList.add("active-circle");
        changeColor(roadmap5,roadmap4);
    }
    if(currentActive == 4){
        progress[0].classList.remove("active-circle");
        progress[4].classList.add("active-circle");
        changeColor(roadmap1,roadmap5);
    }
    if(currentActive == 5){
        progress[4].classList.remove("active-circle");
        progress[0].classList.add("active-circle");
        currentActive = 0;
        prev.disabled = true;
        leftArrow.style.color = "#9C9C9F";
        changeColor(roadmap5,roadmap1);
    }
})

function changeColor(prevElement, nextElement){
    for(var i = 0; i < prevElement.length; i++){
        prevElement[i].classList.remove("active-roadmap");
    }
    for(var i = 0; i < nextElement.length; i++){
        nextElement[i].classList.add("active-roadmap");
    }
}

var playButton = document.getElementById("video-btn");
var video = document.getElementById("video");
// Event listener for the play/pause button
playButton.addEventListener("click", function() {
  if (video.paused == true) {
    // Play the video
    video.play();

    // Update the button text to 'Pause'
    // playButton.innerHTML = "Pause";

    playButton.style.opacity = 0;
} else {
    // Pause the video
    video.pause();
    
    playButton.style.opacity = 1;
    // Update the button text to 'Play'
    // playButton.innerHTML = "Play";
  }
});