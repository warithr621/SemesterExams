function final() {
	var sm1 = document.getElementById("box1").value;
	var sm2 = document.getElementById("box2").value;
	var final = document.getElementById("box3").value;
	
	if (sm1.length==0 || sm2.length==0 || final.length==0) return;
	if (sm1 > 100 || sm2 > 100 || final > 100) {
		window.open("https://warithr621.github.io/SemesterExams/oops.html", "_self");
		return;
	}

	var res = Math.round(sm1 * 0.4 + sm2 * 0.4 + final * 0.2);
	var txt = document.getElementById("result");
	txt.innerHTML = `With a ${sm1} in SM1, ${sm2} in SM2, and ${final} on the final, you would end the semester with a ${res}`;
}

function sem() {
	var sm1 = document.getElementById("box1").value;
	var sm2 = document.getElementById("box2").value;
	var goal = document.getElementById("box3").value;

	if (sm1.length==0 || sm2.length==0 || goal.length==0) return;
	if (sm1 > 100 || sm2 > 100 || goal > 100) {
		window.open("https://warithr621.github.io/SemesterExams/oops.html", "_self");
		return;
	}

	var res = Math.ceil(5 * (goal - sm1 * 0.4 - sm2 * 0.4));
	var txt = document.getElementById("result");
	if (res > 100) {
		txt.innerHTML = `Sadly, it's impossible for you to achieve this goal grade. Your max possible grade is a ${Math.round(sm1*0.4 + sm2*0.4 + 20)}.`
	} else if (res <= 0) {
		txt.innerHTML = "With those grades, you're already guaranteed that goal semester grade or better!";
	} else {
		txt.innerHTML = `With a ${sm1} in SM1 and ${sm2} in SM2, you would need a ${res} on the final to achieve your goal of finishing the semester with a ${goal}`;
	}
}