function addOrange() {
  var OrangeTimer = document.getElementById('timer');
  OrangeTimer.classList.add('orange');
};

function addRed() {
  var RedTimer = document.getElementById('timer');
  RedTimer.classList.add('red');
};

function startClock() {
  var deadline = new Date(Date.parse(new Date()) + 90 * 1000);
  initializeClock('timer', deadline);
};

function getTimeRemaining(endtime) {
  var t = Date.parse(endtime) - Date.parse(new Date());
  var seconds = Math.floor((t / 1000) % 60);
  var minutes = Math.floor((t / 1000 / 60) % 60);

  return {
    'total': t,
    'minutes': minutes,
    'seconds': seconds
  };
}

function initializeClock(id, endtime) {
  var clock = document.getElementById(id);
  var minutesSpan = clock.querySelector('.minutes');
  var secondsSpan = clock.querySelector('.seconds');

  function updateClock() {
    var t = getTimeRemaining(endtime);
    if(t.total == 0) {
    document.getElementById('cover');
    addBlur();
    show('cover');
    removeButton('timer');
    addButton('BEGIN');

  } if (t.total <= 30000 && t.total >= 10000) {
    addOrange();
  } if (t.total <= 10000) {
    addRed();
  };

    minutesSpan.innerHTML = ('' + t.minutes).slice(-2);
    secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);

    if (t.total <= 0) {
      clearInterval(timeinterval);
    }
  }

  updateClock();
  var timeinterval = setInterval(updateClock, 1000);
}
