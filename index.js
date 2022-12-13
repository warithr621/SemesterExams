function final() {
	var q1 = document.getElementById("box1").value;
	var q2 = document.getElementById("box2").value;
	var final = document.getElementById("box3").value;
	
	if (q1.length==0 || q2.length==0 || final.length==0) return;
	if (q1 > 100 || q2 > 100 || final > 100) {
		window.open("https://warithr621.github.io/SemesterExams/oops.html", "_self");
		return;
	}

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

	if (q1.length==0 || q2.length==0 || goal.length==0) return;
	if (q1 > 100 || q2 > 100 || goal > 100) {
		window.open("https://warithr621.github.io/SemesterExams/oops.html", "_self");
		return;
	}

	var res = Math.ceil(5 * (goal - q1 * 0.4 - q2 * 0.4));
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