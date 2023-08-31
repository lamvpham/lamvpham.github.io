  var shortClock = document.getElementById('shortclock');
  // timeZone: 'America/Toronto' (Eastern Standard Time)

  function clock() {
    var options = {
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric',
      hour12: false, 
    };
    var estDateTimeString = new Date().toLocaleString('en-US', options);
    shortClock.textContent = estDateTimeString;
  }

  setInterval(clock, 1000);