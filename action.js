// Create constants here
// =====================================
const hoursPerDay = 24;
const minutesPerHour = 60;
const secondsPerMinute = 60;
// =====================================

const dayInput = document.querySelector('#day-input');
const calculateButton = document.querySelector('#calculate-button');
const hours = document.querySelector('#hours');
const minutes = document.querySelector('#minutes');
const seconds = document.querySelector('#seconds');

calculateButton.addEventListener('click', () => {
    let days = dayInput.value;
    let calcHours = days * hoursPerDay;
    let calcMinutes = calcHours * minutesPerHour;
    let calcSeconds = calcMinutes * secondsPerMinute;

    hours.innerText = `${calcHours} hours`;
    minutes.innerText = `${calcMinutes} minutes`;
    seconds.innerText = `${calcSeconds} seconds`;
});


// Exercise 2 Type of data
//============================
let episodeTitle = " The First Battle";
let episodeDuration = 45;
let hassBeenWatched = false;

const frame = document.querySelector('#episode-info');

frame.innerText = `Episode: ${episodeTitle} \n Duration: ${episodeDuration} min \n ${hassBeenWatched ? 'Already watched' : 'Not yet watched'}`

//=============================