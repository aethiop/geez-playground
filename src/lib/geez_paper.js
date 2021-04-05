const ሰሌዳ = {};

ሰሌዳ.ወረቀት = function(a, b) {
	var canvas = window.$("#canvas")[0];
	if (!a && !b) {
		canvas.style.width = "100%";
		canvas.style.height = "100%";
		canvas.style.borderRadius = "0.375rem";
		canvas.width = canvas.offsetWidth;
		canvas.height = canvas.offsetHeight;
	} else {
		canvas.width = a;
		canvas.height = b;
	}

	ሰሌዳ.ማዕዘን = canvas.getBoundingClientRect();
	window.ስፋት = ሰሌዳ.ማዕዘን?.width;
	window.ርዝመት = ሰሌዳ.ማዕዘን?.height;
	ሰሌዳ.ወረቀት = canvas.getContext("2d");
};
ሰሌዳ.ወረቀት.ቀባ = function(a, b, c, d) {
	ሰሌዳ.ወረቀት.fillStyle = `rgba(${a}, ${b}, ${c}, ${d})`;
};

ሰሌዳ.ወረቀት.አስምር = function(a, b, c, d) {
	ሰሌዳ.ወረቀት.strokeStyle = `rgba(${a}, ${b}, ${c}, ${d})`;
};

ሰሌዳ.ወረቀት.አራት_ማእዘን = function(a, b, c, d) {
	ሰሌዳ.ወረቀት.fillRect(a, b, c, d);
};

ሰሌዳ.ወረቀት.ክብ = function(a, b, c) {
	ሰሌዳ.ወረቀት.beginPath();
	ሰሌዳ.ወረቀት.arc(a, b, c, 0, Math.PI * 2, false);
	ሰሌዳ.ወረቀት.stroke();
};

ሰሌዳ.ወረቀት.መስመር = function(a, b, c, d) {
	ሰሌዳ.ወረቀት.beginPath();
	ሰሌዳ.ወረቀት.moveTo(a, b);
	ሰሌዳ.ወረቀት.lineTo(c, d);
	ሰሌዳ.ወረቀት.stroke();
};
ሰሌዳ.ወረቀት.ቀጥል = function(a, b) {
	ሰሌዳ.ወረቀት.lineTo(a, b);
	ሰሌዳ.ወረቀት.stroke();
};

ሰሌዳ.ወረቀት.አጥፋ = function(a, b, c, d) {
	ሰሌዳ.ወረቀት.clearRect(a, b, c, d);
};

ሰሌዳ.ፍሬም = function(f) {
	return requestAnimationFrame(f);
};
window.addEventListener("mousemove", function(event) {
	window.የት_አግድም = event.x - ሰሌዳ.ማዕዘን?.left || undefined;
	window.የት_ሽቅብ = event.y - ሰሌዳ.ማዕዘን?.top || undefined;
});

window.ወረቀት = ሰሌዳ.ወረቀት;

window.ፍሬም = ሰሌዳ.ፍሬም;

window.ቀባ = ሰሌዳ.ወረቀት.ቀባ;
window.አጥፋ = ሰሌዳ.ወረቀት.አጥፋ;
window.ክብ = ሰሌዳ.ወረቀት.ክብ;
window.አስምር = ሰሌዳ.ወረቀት.አስምር;
window.መስመር = ሰሌዳ.ወረቀት.መስመር;
window.ቀጥል = ሰሌዳ.ወረቀት.ቀጥል;
window.አራት_ማእዘን = ሰሌዳ.ወረቀት.አራት_ማእዘን;
