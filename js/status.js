function loadDay() {
  const num = new Date().getDay();
  switch (num) {
    case 0:
      day = "Sunday";
      break;
    case 1:
      day = "Monday";
      break;
    case 2:
      day = "Tuesday";
      break;
    case 3:
      day = "Wednesday";
      break;
    case 4:
      day = "Thursday";
      break;
    case 5:
      day = "Friday";
      break;
    case 6:
      day = "Saturday";
  }
  return day;
}

function startTime() {
  var today = new Date();
  var h = today.getHours();
  var m = today.getMinutes();
  var s = today.getSeconds();
  m = checkTime(m);
  s = checkTime(s);
  var day = loadDay();
  document.getElementById("time-text").innerHTML =
    day + " " + h + ":" + m + ":" + s;
  var t = setTimeout(startTime, 500);
}

function checkTime(i) {
  if (i < 10) {
    i = "0" + i;
  } // add zero in front of numbers < 10
  return i;
}

function loadStatus() {
  startTime();
  loadAvailability();
  loadLastUpdated();
}

function loadLastUpdated() {
  var first = 9;
  var second = Math.floor(Math.random() * 10);
  var third = Math.floor(Math.random() * 10);
  var final = first + "." + second + "." + third;
  document.getElementById("update").innerHTML =
    "Last Updated Version: " + final;
}

function loadAvailability() {
  var now = new Date();
  var dayOfWeek = now.getDay();
  var hour = now.getHours();
  var minutes = now.getMinutes();

  if (dayOfWeek > 0 && dayOfWeek < 6) {
    if (hour > 9 && hour < 15 && minutes > 0) {
      document.getElementById("availability").innerHTML = "Unavailable";
      document.getElementById("small-rectangle").style.backgroundColor = "red";
      document.getElementById(
        "status-text"
      ).innerHTML = `<i class="fas fa-school"></i> In School`;
    } else {
      document.getElementById("availability").innerHTML = "Available";
      document.getElementById("small-rectangle").style.backgroundColor =
        "limegreen";
      document.getElementById(
        "status-text"
      ).innerHTML = `<i class="fas fa-signal"></i> Online`;
    }
  } else {
    document.getElementById("availability").innerHTML = "Available";
    document.getElementById("small-rectangle").style.backgroundColor =
      "limegreen";
    document.getElementById(
      "status-text"
    ).innerHTML = `<i class="fas fa-signal"></i> Online`;
  }
}
