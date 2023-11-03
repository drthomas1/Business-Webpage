/*--------------weather-api-----------------*/

window.addEventListener('load', ()=> {
  let lon;
  let lat;
  let temperatureDescription = document.querySelector('.temperature-description');
  let weatherIcon = document.querySelector('.weather-icon');
  let temperatureDegree = document.querySelector('.temperature-degree');
  let locationTimezone = document.querySelector('.weather-location-timezone');
  let temperatureSection = document.querySelector('.temperature');
  let temperatureSectionSpan = document.querySelector('.temperature span');

  const api = `https://api.openweathermap.org/data/2.5/weather?lat=53.3062&lon=-4.6321&appid=8ea182d9eb466c3c1a9ec66a0f9fe487`;

  fetch(api)
    .then(response =>{
      return response.json();
    })
    .then(data => {
      console.log(data);
      const {temp} = data.main;
      temperatureDegree.textContent = Math.floor(((temp - 273.15) * 1.8000) + 32.00);
      const {description} = data.weather[0];
      temperatureDescription.textContent = description;
      const {icon} = data.weather[0];
      weatherIcon.innerHTML = `<img src="icons/${icon}.png"/>`;

      temperatureSection.addEventListener('click', () => {
        if(temperatureSectionSpan.textContent === 'F'){
          temperatureDegree.textContent = Math.floor(temp - 273.15);
          temperatureSectionSpan.textContent = 'C';
        }else{
          temperatureDegree.textContent = Math.floor(((temp - 273.15) * 1.8000) + 32.00);
          temperatureSectionSpan.textContent = 'F';
        }
      })
    });
  });

  /*------feedback section------*/

const locationH1 = document.getElementById('location-h1');
const feedBox = document.querySelector('.feedback-box');
feedBox.style.height = '253px';
feedBox.style.width = '450px';
const feedMessage = document.getElementById('feedback-message');
const feedName = document.getElementById('feedback-name');
feedMessage.style.transition = 'opacity 0.4s ease-in-out';
feedName.style.transition = 'opacity 0.4s ease-in-out';
const feedBackward = document.getElementById('feedback-backward');
const feedForward = document.getElementById('feedback-forward');

function mediaChangeHeight(x) {
  if (x.matches) { // If media query matches
    feedBox.style.height = '365px';
    feedBox.style.width = '100%';
  }
}

const x = window.matchMedia("(max-width: 500px)")
mediaChangeHeight(x) // Call listener function at run time
x.addListener(mediaChangeHeight) // Attach listener function on state changes

const y = window.matchMedia("(min-width: 500px)");

function insertLineBreak() {
  if(z.matches){
    locationH1.innerHTML = 'welcome To<br> <span class="main-logo-style">NW-SCUBA</span>'
  }
}
function removeLineBreak() {
  if(z2.matches){
    locationH1.innerHTML = 'welcome To <span class="main-logo-style">NW-SCUBA</span>'
  }
}
const z = window.matchMedia("(max-width: 650px)");
const z2 = window.matchMedia("(min-width: 650px)");
z.addListener(insertLineBreak);
z2.addListener(removeLineBreak);

const messageArr = ['" Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "',
'" Adipiscing commodo elit at imperdiet. Urna nec tincidunt praesent semper feugiat nibh. Id venenatis a condimentum vitae. Augue neque gravida in fermentum et sollicitudin ac orci. "',
'" Lovely stuff. "',
 '" Nisi vitae suscipit tellus mauris a diam maecenas sed enim. Justo eget magna fermentum iaculis eu non diam. Morbi leo urna molestie at elementum eu facilisis sed odio. Neque laoreet suspendisse interdum consectetur libero id faucibus nisl tincidunt. "',
'" Fusce id velit ut tortor. Morbi tristique senectus et netus et malesuada fames. Eget dolor morbi non arcu risus quis. Scelerisque felis imperdiet proin fermentum leo vel orci porta. "',
 '" Ante in nibh mauris cursus mattis molestie a iaculis at. Faucibus turpis in eu mi bibendum neque. "'];
const nameArr = ['John Doe', 'James Jones', 'S. Stevens', 'George Smith', 'Lisa Foster', 'Beaux Jackson'];

let elemNum = 0;

feedMessage.innerHTML = messageArr[elemNum];
feedName.innerHTML = nameArr[elemNum];

function changeHeight () {
  if(y.matches && elemNum === 0) {
    feedBox.style.height = '253px';
    feedBox.style.width = '450px';
  }
  if(y.matches && elemNum === 1) {
    feedBox.style.height = '277px';
    feedBox.style.width = '450px';
  }
  if(y.matches && elemNum === 2) {
    feedBox.style.height = '205px';
    feedBox.style.width = '450px';
  }
  if(y.matches && elemNum === 3) {
    feedBox.style.height = '320px';
    feedBox.style.width = '450px';
  }
  if(y.matches && elemNum === 4) {
    feedBox.style.height = '277px';
    feedBox.style.width = '450px';
  }
  if(y.matches && elemNum === 5) {
    feedBox.style.height = '229px';
    feedBox.style.width = '450px';
  }
};

y.addListener(changeHeight)

function elemTransition () {
  feedMessage.style.opacity = 1;
  feedName.style.opacity = 1;
  feedBackward.style.opacity = 1;
  feedForward.style.opacity = 1;
  feedMessage.innerHTML = messageArr[elemNum];
  feedName.innerHTML = nameArr[elemNum];
}

feedBackward.onclick = () => {
    elemNum--;
    if(elemNum < 5) {
      feedForward.style.visibility = 'visible';
    }
    if(elemNum === 0) {
      feedBackward.style.visibility = 'hidden';
    }
    setTimeout(changeHeight, 250);
    feedBackward.style.opacity = 0;
    feedForward.style.opacity = 0;
    feedMessage.style.opacity = 0;
    feedName.style.opacity = 0;
    setTimeout(elemTransition, 750);
  }

feedForward.onclick = () => {
    elemNum++;
    if(elemNum !== 0) {
      feedBackward.style.visibility = 'visible';
    }
    if(elemNum === 5) {
      feedForward.style.visibility = 'hidden';
    }
    setTimeout(changeHeight, 250);
    feedBackward.style.opacity = 0;
    feedForward.style.opacity = 0;
    feedMessage.style.opacity = 0;
    feedName.style.opacity = 0;
    setTimeout(elemTransition, 750);
  }

/*-----------------------------*/

//Scroll back to top button

const upButton = document.getElementById('up-button')

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    upButton.style.display = "block";
  } else {
    upButton.style.display = "none";
  }
}

