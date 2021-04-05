window.ፃፍ = function(val) {
	term.Write(val);
};
window.መስፃፍ = function(val) {
	term.Write(val + "\n");
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
