var clockElement = document.getElementById('clock');
var shortClock = document.getElementById('clock1');
// timeZone: 'America/Toronto' (Eastern Standard Time)

function clock() {
    var options = {
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
    timeZone: 'America/Toronto'
    };
    var estDateTimeString = new Date().toLocaleString('en-US', options);
    clockElement.textContent = estDateTimeString + ' EST';
}

function clock1() {
    var options = {
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
    };
    var estDateTimeString = new Date().toLocaleString('en-US', options);
    shortClock.textContent = estDateTimeString + ' EST';
}

setInterval(clock, 1000);