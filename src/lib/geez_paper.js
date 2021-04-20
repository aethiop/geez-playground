const ሰሌዳ = {};

ሰሌዳ.ወረቀት = function(a, b) {
	var canvas = window.$("#canvas")[0];
	canvas.style.cursor = "none";
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

ሰሌዳ.ወረቀት.ቀባ = function() {
	switch (arguments.length) {
		case 4:
			ሰሌዳ.ወረቀት.fillStyle = `rgba(${arguments[0]}, ${arguments[1]}, ${arguments[2]}, ${arguments[3]})`;
			break;
		case 3:
			ሰሌዳ.ወረቀት.fillStyle = `rgb(${arguments[0]}, ${arguments[1]}, ${arguments[2]})`;
			break;
		case 2:
			ሰሌዳ.ወረቀት.fillStyle = `rgba(${arguments[0]}, ${arguments[0]}, ${arguments[0]}, ${arguments[2]})`;
			break;
		case 1:
			ሰሌዳ.ወረቀት.fillStyle = `rgb(${arguments[0]}, ${arguments[0]}, ${arguments[0]})`;
			break;
		default:
			ሰሌዳ.ወረቀት.fillStyle = "#fff";
	}
};
ሰሌዳ.ወረቀት.ያለ_ቀለም = function() {
	ሰሌዳ.ወረቀት.fillStyle = `rgba(0,0,0,0)`;
};
ሰሌዳ.ወረቀት.ያለ_መስመር = function() {
	ሰሌዳ.ወረቀት.strokeStyle = `rgba(0,0,0,0)`;
};

ሰሌዳ.ወረቀት.አስምር = function() {
	switch (arguments.length) {
		case 4:
			ሰሌዳ.ወረቀት.strokeStyle = `rgba(${arguments[0]}, ${arguments[1]}, ${arguments[2]}, ${arguments[3]})`;
			break;
		case 3:
			ሰሌዳ.ወረቀት.strokeStyle = `rgb(${arguments[0]}, ${arguments[1]}, ${arguments[2]})`;
			break;
		case 2:
			ሰሌዳ.ወረቀት.strokeStyle = `rgba(${arguments[0]}, ${arguments[0]}, ${arguments[0]}, ${arguments[2]})`;
			break;
		case 1:
			ሰሌዳ.ወረቀት.strokeStyle = `rgb(${arguments[0]}, ${arguments[0]}, ${arguments[0]})`;
			break;
		default:
			ሰሌዳ.ወረቀት.strokeStyle = "#fff";
	}
};

ሰሌዳ.ወረቀት.አራት_ማእዘን = function(a, b, c, d) {
	ሰሌዳ.ወረቀት.rect(a, b, c, d);
	ሰሌዳ.ወረቀት.fill();
	ሰሌዳ.ወረቀት.stroke();
};

ሰሌዳ.ወረቀት.ክብ = function(a, b, c) {
	ሰሌዳ.ወረቀት.beginPath();
	ሰሌዳ.ወረቀት.arc(a, b, c, 0, Math.PI * 2, false);
	ሰሌዳ.ወረቀት.fill();
	ሰሌዳ.ወረቀት.closePath();
	ሰሌዳ.ወረቀት.stroke();
};

ሰሌዳ.ወረቀት.መስመር = function(a, b, c, d) {
	ሰሌዳ.ወረቀት.beginPath();
	ሰሌዳ.ወረቀት.moveTo(a, b);
	ሰሌዳ.ወረቀት.lineTo(c, d);
	ሰሌዳ.ወረቀት.stroke();
};
ሰሌዳ.ወረቀት.ኩርባ = function(a, b, c, d, e, f) {
	ሰሌዳ.ወረቀት.beginPath();
	ሰሌዳ.ወረቀት.moveTo(a, b);
	ሰሌዳ.ወረቀት.quadraticCurveTo(e, f, c, d);
	ሰሌዳ.ወረቀት.stroke();
};

ሰሌዳ.ወረቀት.ጀርባ_አጥፋ = function(a, b, c, d) {
	ሰሌዳ.ወረቀት.clearRect(a, b, c, d);
};
ሰሌዳ.ወረቀት.ጀርባ = function() {
	switch (arguments.length) {
		case 4:
			ሰሌዳ.ወረቀት.fillStyle = `rgba(${arguments[0]}, ${arguments[1]}, ${arguments[2]}, ${arguments[3]})`;
			break;
		case 3:
			ሰሌዳ.ወረቀት.fillStyle = `rgb(${arguments[0]}, ${arguments[1]}, ${arguments[2]})`;
			break;
		case 2:
			ሰሌዳ.ወረቀት.fillStyle = `rgba(${arguments[0]}, ${arguments[0]}, ${arguments[0]}, ${arguments[2]})`;
			break;
		case 1:
			ሰሌዳ.ወረቀት.fillStyle = `rgb(${arguments[0]}, ${arguments[0]}, ${arguments[0]})`;
			break;
		default:
			ሰሌዳ.ወረቀት.fillStyle = "#fff";
	}
	ሰሌዳ.ወረቀት.fillRect(0, 0, ሰሌዳ.ማዕዘን.width, ሰሌዳ.ማዕዘን.height);
};

ሰሌዳ.ፍሬም = function(f) {
	return requestAnimationFrame(f);
};

/////////////////
ሰሌዳ.ወረቀት.ስፋ = function(x, y) {
	ሰሌዳ.ወረቀት.scale(x, y);
};
ሰሌዳ.ወረቀት.ዙር = function(ang) {
	ሰሌዳ.ወረቀት.rotate(ang);
};
ሰሌዳ.ወረቀት.ቀይር = function(x, y) {
	ሰሌዳ.ወረቀት.translate(x, y);
};
// special transformation	same transformation in terms of transform()
// scale(x,y)	transform (x, 0, 0, y, 0, 0)
// rotate(angle)	transform (c, s, -s, c, 0, 0)
// where c = Math.cos(angle) and s = Math.sin(angle)
// translate(x,y)	transform (1, 0, 0, 1, x, y)
ሰሌዳ.ወረቀት.ለውጥ = function(a, b, c, d, e, f) {
	ሰሌዳ.ወረቀት.tranform(a, b, c, d, e, f);
};

ሰሌዳ.ወረቀት.ጥላ = function() {
	ሰሌዳ.ወረቀት.shadowOffsetX = 0 || arguments[0];
	ሰሌዳ.ወረቀት.shadowOffsetY = 0 || arguments[1];
	ሰሌዳ.ወረቀት.shadowBlur = 0 || arguments[2];
};
ሰሌዳ.ወረቀት.ጥላ_ቀለም = function() {
	switch (arguments.length) {
		case 4:
			ሰሌዳ.ወረቀት.shadowColor = `rgba(${arguments[0]}, ${arguments[1]}, ${arguments[2]}, ${arguments[3]})`;
			break;
		case 3:
			ሰሌዳ.ወረቀት.shadowColor = `rgb(${arguments[0]}, ${arguments[1]}, ${arguments[2]})`;
			break;
		case 2:
			ሰሌዳ.ወረቀት.shadowColor = `rgba(${arguments[0]}, ${arguments[0]}, ${arguments[0]}, ${arguments[2]})`;
			break;
		case 1:
			ሰሌዳ.ወረቀት.shadowColor = `rgb(${arguments[0]}, ${arguments[0]}, ${arguments[0]})`;
			break;
		default:
			ሰሌዳ.ወረቀት.shadowColor = "rgba(0,0,0,0)";
	}
};

ሰሌዳ.ወረቀት.ፅሁፍ_ቦታ = function(val) {
	switch (val) {
		case val == "መጨረሻ":
			ሰሌዳ.ወረቀት.textAlign = "end";
			break;
		case val == "ግራ":
			ሰሌዳ.ወረቀት.textAlign = "left";
			break;
		case val == "ቀኝ":
			ሰሌዳ.ወረቀት.textAlign = "right";
			break;
		case val == "መሃል":
			ሰሌዳ.ወረቀት.textAlign = "center";
			break;
		default:
			ሰሌዳ.ወረቀት.textAlign = "start";
	}
};

ሰሌዳ.ወረቀት.ሙላ = function() {
	ሰሌዳ.ወረቀት.fill();
};
ሰሌዳ.ወረቀት.ጥምዝ = function(x, y, r, start, end, anticlockwise) {
	ሰሌዳ.ወረቀት.arc(x, y, r, start, end, anticlockwise);
};
ሰሌዳ.ወረቀት.ጥምዝ_ወደ = function(x1, y1, x2, y2, radius) {
	ሰሌዳ.ወረቀት.arcTo(x1, y1, x2, y2, radius);
};
ሰሌዳ.ወረቀት.ፅሁፍ = function(text, x, y) {
	if (arguments.length == 4) {
		ሰሌዳ.ወረቀት.fillText(text, x, y, arguments[3]);
	}
	ሰሌዳ.ወረቀት.fillText(text, x, y);
};
ሰሌዳ.ወረቀት.መስመር_ፅሁፍ = function(text, x, y) {
	if (arguments.length == 4) {
		ሰሌዳ.ወረቀት.strokeText(text, x, y, arguments[3]);
	}
	ሰሌዳ.ወረቀት.strokeText(text, x, y);
};
window.addEventListener("mousemove", function(event) {
	window.የት_አግድም = event.x - ሰሌዳ.ማዕዘን?.left || undefined;
	window.የት_ሽቅብ = event.y - ሰሌዳ.ማዕዘን?.top || undefined;
});

window.addEventListener("resize", function() {
	resizeCanvas();
});

function resizeCanvas() {
	// eslint-disable-next-line no-undef
	var canvas = $("#canvas")[0];
	canvas.css("width", $(window).width());
	canvas.css("height", $(window).height());
}

window.ወረቀት = ሰሌዳ.ወረቀት;

window.ፍሬም = ሰሌዳ.ፍሬም;

window.ቀባ = ሰሌዳ.ወረቀት.ቀባ;
window.ጀርባ_አጥፋ = ሰሌዳ.ወረቀት.ጀርባ_አጥፋ;
window.ያለ_ቀለም = ሰሌዳ.ወረቀት.ያለ_ቀለም;
window.ያለ_መስመር = ሰሌዳ.ወረቀት.ያለ_መስመር;

window.ስፋ = ሰሌዳ.ወረቀት.ስፋ;
window.ዙር = ሰሌዳ.ወረቀት.ዙር;
window.ቀይር = ሰሌዳ.ወረቀት.ቀይር;
window.ለውጥ = ሰሌዳ.ወረቀት.ለውጥ;

window.ጥላ = ሰሌዳ.ወረቀት.ጥላ;
window.ጥላ_ቀለም = ሰሌዳ.ወረቀት.ጥላ_ቀለም;
window.ፅሁፍ_ቦታ = ሰሌዳ.ወረቀት.ፅሁፍ_ቦታ;
window.ሙላ = ሰሌዳ.ወረቀት.ሙላ;
window.ጥምዝ = ሰሌዳ.ወረቀት.ጥምዝ;
window.ጥምዝ_ወደ = ሰሌዳ.ወረቀት.ጥምዝ_ወደ;
window.ፅሁፍ = ሰሌዳ.ወረቀት.ፅሁፍ;
window.መስመር_ፅሁፍ = ሰሌዳ.ወረቀት.መስመር_ፅሁፍ;

window.ክብ = ሰሌዳ.ወረቀት.ክብ;
window.አስምር = ሰሌዳ.ወረቀት.አስምር;
window.መስመር = ሰሌዳ.ወረቀት.መስመር;
window.ቀጥል = ሰሌዳ.ወረቀት.ቀጥል;
window.ጀርባ = ሰሌዳ.ወረቀት.ጀርባ;
window.አራት_ማእዘን = ሰሌዳ.ወረቀት.አራት_ማእዘን;
