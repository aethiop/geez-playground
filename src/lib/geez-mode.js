/* Example definition of a simple mode that understands a subset of
 * JavaScript:
 */

CodeMirror.defineSimpleMode("geez", {
	// The start state contains the rules that are initially used
	start: [
		// The regex matches the token, the token property contains the type
		{ regex: /"(?:[^\\]|\\.)*?(?:"|$)/, token: "string" },
		// You can match multiple tokens at once. Note that the captured
		// groups must span the whole string in this case

		// Rules are matched in the order in which they appear, so there is
		// no ambiguity between this one and the one above
		{
			regex: /\B(?:ስራ|ከሆነ|ካልሆነ|ሥራ|ፃፍ|ባዶ|ብቀ|ብጀ|ባዶ|ክፍል|ከሰልፍ|ርዝመት|ይህቀጥል|ተኛ|ወደ-ቁጥር|ተቀበል|ሰልፍ)\B/,
			token: "keyword",
		},
		{ regex: /አውነት|ሀሰት|ሐሰት/, token: "atom" },
		{
			regex: /0x[a-f\d]+|[-+]?(?:\.\d+|\d+\.?\d*)(?:e[-+]?\d+)?/i,
			token: "number",
		},
		{ regex: /\/(?:[^\\]|\\.)*?\//, token: "variable-3" },
		// A next property will cause the mode to move to a different state
		{ regex: /[-+\/*=<>!]+/, token: "operator" },
		// indent and dedent properties guide autoindentation
		{ regex: /[\{\[\(]/, indent: true },
		{ regex: /[\}\]\)]/, dedent: true },

		// You can embed other modes with the mode property. This rule
		// causes all code between << and >> to be highlighted with the XML
		// mode.
	],
	// The multi-line comment state.

	// The meta property contains global information about the mode. It
	// can contain properties like lineComment, which are supported by
	// all modes, and also directives like dontIndentStates, which are
	// specific to simple modes.
	meta: {
		dontIndentStates: ["comment"],
		lineComment: "#",
	},
});
