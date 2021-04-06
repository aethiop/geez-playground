window.ፃፍ = function(val) {
	term.Write(val);
};
window.መስፃፍ = function(val) {
	term.Write([].slice.call(arguments, 0).join(" "));
};
window.ተቀበል = function(txt) {
	term.Write(txt);
	term.Prompt(
		true,
		function(input) {
			// Alert the user with the command.
			return input;
		},
		function(input) {
			// Continue if the last character is a backslash.
			return /\\$/.test(input);
		}
	);
};

window.ፃፍ = function() {
	term.Write([].slice.call(arguments, 0).join(" ") + "\n");
};

window.ሰልፍ = function() {
	return [].slice.call(arguments, 0);
};
window.ሰልፍ_ስንት = function(array) {
	return array.length;
};
window.ሰልፍ_የት = function(array, index) {
	return array[index];
};
window.ሰልፍ_ቀይር = function(array, index, newval) {
	array[index] = newval;
};
window.ሰልፍ_ጨምር = function(array, newval) {
	array.push(newval);
};
