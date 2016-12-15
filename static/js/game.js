window.locked = false;

// set initial opacity

$('body').keyup(function(e) {
	if (e.keyCode == 32) {
		// unlock buzzers
		window.locked = false;
		// update display
		document.getElementById("current").innerHTML = "<br />";
		document.getElementById("teamAindicator").style.opacity = 0.3;
		document.getElementById("teamBindicator").style.opacity = 0.3;
	}
});

$(document).on("keypress", function (e) {

	var asciiToPlayer = {
		"48": "A1",
		"50": "AC",
		"52": "A2",
		"54": "A3",
		"56": "A4",

		"49": "B1",
		"51": "BC",
		"53": "B2",
		"55": "B3",
		"57": "B4"
	};

	if (window.locked) return;
	// e.which: 0 -> 9 = 48 -> 57
	if (e.which >= 48 && e.which <= 57) {
		window.locked = true;

		// evens = Team A
		// 48  50  52  54  56  (ascii)
		//  0,  2,  4,  6,  8  (buzzer)
		// A1, AC, A2, A3, A4  (id)

		// odds = Team B
		// 49  51  53  55  57  (ascii)
		//  1,  3,  5,  7,  9  (buzzer)
		// B1, BC, B2, B3, B4  (id)

		// Team A
		if (e.which % 2 == 0) {
			playHighBeep();
			document.getElementById("teamAindicator").style.opacity = 1.0;
		}
		// Team B
		else {
			playLowBeep();
			document.getElementById("teamBindicator").style.opacity = 1.0;
		}

		// update display
		document.getElementById("current").innerHTML = asciiToPlayer[e.which.toString()];
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