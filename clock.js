var clockID;
var homeTimezone = +5; //time zone value where you are at
var moscowTimezone = +3; //time zone value of another place

var d = new Date();
//get the timezone offset from local time in minutes
var tzHomeDifference = homeTimezone * 60 + d.getTimezoneOffset();
var tzMoscowDifference = moscowTimezone * 60 + d.getTimezoneOffset();
//convert the offset to milliseconds, add to targetTime, and make a new Date
var homeOffset = tzHomeDifference * 60 * 1000;
var moscowOffset = tzMoscowDifference * 60 * 1000;

function UpdateClock() {
  var tDateHome = new Date(new Date().getTime() + homeOffset);
	var tDateMoscow = new Date(new Date().getTime() + moscowOffset);
  var in_hours_home = tDateHome.getHours();
	var in_hours_moscow = tDateMoscow.getHours();
  var in_minutes = tDateHome.getMinutes();
  var in_seconds = tDateHome.getSeconds();

  if (in_minutes < 10)
    in_minutes = '0' + in_minutes;
  if (in_seconds < 10)
    in_seconds = '0' + in_seconds;
  if (in_hours_home < 10)
    in_hours_home = '0' + in_hours_home;
	if (in_hours_moscow < 10)
		in_hours_moscow = '0' + in_hours_moscow;

  document.getElementById('clock--home').innerHTML = "" +
    in_hours_home + ":" +
    in_minutes + ":" +
    in_seconds;
    
  document.getElementById('clock--Moscow').innerHTML = "" +
    in_hours_moscow + ":" +
    in_minutes + ":" +
    in_seconds;

}

function StartClock() {
  clockID = setInterval(UpdateClock, 500);
}

function KillClock() {
  clearTimeout(clockID);
}

function calc() {
	var money = Number(document.getElementById("money").value);
	var lessons = Number(document.getElementById("lessons").value * 300);
	document.getElementById("total").value = money + lessons;
}

function GetIcon() {

	var base = document.getElementsByClassName("bookmrks__link");
	var fin = document.getElementsByClassName("bookmrks__ico");
	var googleIconGetter = "https://s2.googleusercontent.com/s2/favicons?domain_url="

	for (i=0; i<base.length; i++) {
		var icon = googleIconGetter + base[i];
		fin[i].onerror = function() {
			this.style.display = "none";
		}
		fin[i].setAttribute("src", icon);
	}
}

window.onload = function() {
  StartClock();
	GetIcon();
}
