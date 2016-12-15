window.locked = false;

$('body').keyup(function(e) {
	if (e.keyCode == 32) {
		window.locked = false;
	}
});

$(document).on("keypress", function (e) {

	if (window.locked) return;
	//e.which
	// 0 -> 9 = 48 -> 57
	if (e.which >= 48 && e.which <= 57) {
		window.locked = true;

		// evens = Team A
		// odds = Team B

		// 48, 50, 52, 54, 56 = 0, 2, 4, 6, 8
		// Team A (Evens)
		if (e.which % 2 == 0) {
			playHighBeep();
		}
		else { // Team B (Odds)
			playLowBeep();
		}
		document.getElementById("current").innerHTML = e.which;
	}
});

function playHighBeep() {
	var high_beep = document.getElementById("high_beep");
	high_beep.play();
}

function playLowBeep() {
	var low_beep = document.getElementById("low_beep");
	low_beep.play();
}