function valid(s) {
	if (s.length == 0) return false;
	if (s > 100 || s < 0) return false;
	if (/^\d+$/.test(s) == false) return false;
	if (!Number.isInteger(Number(s))) return false;

	return true;
}

function final() {
	var q1 = document.getElementById("box1").value;
	var q2 = document.getElementById("box2").value;
	var final = document.getElementById("box3").value;
	
	if (!valid(q1) || !valid(q2) || !valid(final)) return;

	var res = Math.round(q1 * 0.4 + q2 * 0.4 + final * 0.2);
	var txt = document.getElementById("result");
	let m = (new Date()).getMonth();
	let A = (m <= 5 ? 3 : 1), B = (m <= 5 ? 4 : 2);
	txt.innerHTML = `With a ${q1} in Q${A}, ${q2} in Q${B}, and ${final} on the final, you would end the semester with a ${res}.`;
}

function sem() {
	var q1 = document.getElementById("box1").value;
	var q2 = document.getElementById("box2").value;
	var goal = document.getElementById("box3").value;

	if (!valid(q1) || !valid(q2) || !valid(goal)) return;

	var res = Math.ceil(5 * (goal - 0.4 - q1 * 0.4 - q2 * 0.4));
	var txt = document.getElementById("result");
	if (res > 100) {
		txt.innerHTML = `Sadly, it's impossible for you to achieve this goal grade. Your max possible grade is a ${Math.round(q1*0.4 + q2*0.4 + 20)}.`
	} else if (res <= 0) {
		txt.innerHTML = "With those grades, you're already guaranteed that goal semester grade or better!";
	} else {
		let m = (new Date()).getMonth();
		let A = (m <= 5 ? 3 : 1), B = (m <= 5 ? 4 : 2);
		txt.innerHTML = `With a ${q1} in Q${A} and ${q2} in Q${B}, you would need at least a ${res} on the final to achieve your goal of finishing the semester with a ${goal}.`;
	}
}