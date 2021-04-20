/**
 * StreamObject - Provides operations to read characters from a string
 * @param {string} input
 */
function StreamObject(input) {
	var pos = 0,
		line = 1,
		col = 0;
	return {
		next: next,
		peek: peek,
		eof: eof,
		croak: croak,
	};
	/**
	 * @returns {string} The next value and removes it from the stream.
	 */
	function next() {
		var ch = input.charAt(pos++);
		if (ch == "\n") line++, (col = 0);
		else col++;
		return ch;
	}
	/**
	 * @returns {string} The next value without removing it from the stream.
	 */
	function peek() {
		return input.charAt(pos);
	}
	/**
	 * @returns {Boolean} True if and only if there is no value in the string.
	 */
	function eof() {
		return peek() == "";
	}
	/**
	 * @param {string} msg
	 * Throws an error message and describes the line and column of the error.
	 */
	function croak(msg) {
		term.Write(msg + " (" + line + ":" + col + ")\n", "jqconsole-error");
		throw new Error(msg + " (" + line + ":" + col + ")");
	}
}
/**
 * TokenStream /Lexer/ - Operates on a character stream input.
 * @param {string} input
 * @returns {Object} An Object with type and value.
 */
function TokenStream(input) {
	var current = null;
	var keywords = " ሰይም ከሆነ ከዛ ካልሆነ ስራ እውነት ሀሰት ጃስ ";
	return {
		next: next,
		peek: peek,
		eof: eof,
		croak: input.croak,
	};
	function is_keyword(x) {
		return keywords.indexOf(" " + x + " ") >= 0;
	}
	function is_digit(ch) {
		return /[0-9]/i.test(ch);
	}
	function is_id_start(ch) {
		return /[\u1200-\u135f\u1369-\u137ca-zA-Z0-9_]/u.test(ch);
	}
	function is_id(ch) {
		return is_id_start(ch) || "?!-<:>=0123456789".indexOf(ch) >= 0;
	}
	function is_op_char(ch) {
		return "+-*/%=&|<>!".indexOf(ch) >= 0;
	}
	function is_punc(ch) {
		return "፣፤(){}[]".indexOf(ch) >= 0;
	}
	function is_whitespace(ch) {
		return " \t\n".indexOf(ch) >= 0;
	}
	function read_while(predicate) {
		var str = "";
		while (!input.eof() && predicate(input.peek())) str += input.next();
		return str;
	}
	function read_number() {
		var has_dot = false;
		var number = read_while(function(ch) {
			if (ch == ".") {
				if (has_dot) return false;
				has_dot = true;
				return true;
			}
			return is_digit(ch);
		});
		return { type: "num", value: parseFloat(number) };
	}
	function read_ident() {
		var id = read_while(is_id);
		return {
			type: is_keyword(id) ? "kw" : "var",
			value: id,
		};
	}
	function read_escaped(end) {
		var escaped = false,
			str = "";
		input.next();
		while (!input.eof()) {
			var ch = input.next();
			if (escaped) {
				str += ch;
				escaped = false;
			} else if (ch == "#") {
				escaped = true;
			} else if (ch == end) {
				break;
			} else {
				str += ch;
			}
		}
		return str;
	}
	function read_string() {
		return { type: "str", value: read_escaped('"') };
	}
	function skip_comment() {
		read_while(function(ch) {
			return ch != "\n";
		});
		input.next();
	}
	function read_next() {
		read_while(is_whitespace);
		if (input.eof()) return null;
		var ch = input.peek();
		if (ch == "#") {
			skip_comment();
			return read_next();
		}
		if (ch == '"') return read_string();
		if (is_digit(ch)) return read_number();
		if (is_id_start(ch)) return read_ident();
		if (is_punc(ch))
			return {
				type: "punc",
				value: input.next(),
			};
		if (is_op_char(ch))
			return {
				type: "op",
				value: read_while(is_op_char),
			};
		input.croak("ፊደል ማስተናገድ አልተቻለም፥ " + ch);
	}
	function peek() {
		return current || (current = read_next());
	}
	function next() {
		var tok = current;
		current = null;
		return tok || read_next();
	}
	function eof() {
		return peek() == null;
	}
}

var FALSE = { type: "bool", value: false || "ሀሰት" };
var TRUE = { type: "bool", value: true || "እውነት" };
function parse(input) {
	var PRECEDENCE = {
		"=": 1,
		"||": 2,
		"&&": 3,
		"==": 7,
		"!=": 7,
		"<": 8,
		">": 8,
		"<=": 8,
		">=": 8,
		"+": 10,
		"<<": 13,
		">>": 13,
		">>>": 13,
		"-": 10,
		"*": 20,
		"/": 20,
		"%": 20,
	};
	return parse_toplevel();
	function is_punc(ch) {
		var tok = input.peek();
		return tok && tok.type == "punc" && (!ch || tok.value == ch) && tok;
	}
	function is_kw(kw) {
		var tok = input.peek();
		return tok && tok.type == "kw" && (!kw || tok.value == kw) && tok;
	}
	function is_op(op) {
		var tok = input.peek();
		return tok && tok.type == "op" && (!op || tok.value == op) && tok;
	}
	function skip_punc(ch) {
		if (is_punc(ch)) input.next();
		else input.croak('ስርዐተ ነጥብ በመጠበቅ ላይ፥ "' + ch + '"');
	}
	function skip_kw(kw) {
		if (is_kw(kw)) input.next();
		else input.croak('ቁልፍ ቃል በመጠበቅ ላይ፥ "' + kw + '"');
	}
	function skip_op(op) {
		if (is_op(op)) input.next();
		else input.croak('ስሌት በመጠበቅ ላይ፥"' + op + '"');
	}
	function unexpected() {
		input.croak("ያልተበቀ ቃል፥ " + JSON.stringify(input.peek()));
	}
	function maybe_binary(left, my_prec) {
		var tok = is_op();
		if (tok) {
			var his_prec = PRECEDENCE[tok.value];
			if (his_prec > my_prec) {
				input.next();
				return maybe_binary(
					{
						type: tok.value == "=" ? "assign" : "binary",
						operator: tok.value,
						left: left,
						right: maybe_binary(parse_atom(), his_prec),
					},
					my_prec
				);
			}
		}
		return left;
	}
	function delimited(start, stop, separator, parser) {
		var a = [],
			first = true;
		skip_punc(start);
		while (!input.eof()) {
			if (is_punc(stop)) break;
			if (first) first = false;
			else skip_punc(separator);
			if (is_punc(stop)) break;
			a.push(parser());
		}
		skip_punc(stop);
		return a;
	}
	function parse_call(func) {
		return {
			type: "call",
			func: func,
			args: delimited("(", ")", "፣", parse_expression),
		};
	}
	function parse_varname() {
		var name = input.next();
		if (name.type != "var") input.croak("Expecting variable name");
		return name.value;
	}

	function parse_if() {
		skip_kw("ከሆነ");
		var cond = parse_expression();
		if (!is_punc("{")) skip_kw("ከዛ");
		var then = parse_expression();
		var ret = {
			type: "if",
			cond: cond,
			then: then,
		};
		if (is_kw("ካልሆነ")) {
			input.next();
			ret.else = parse_expression();
		}
		return ret;
	}
	function parse_lambda() {
		return {
			type: "lambda",
			name: input.peek().type == "var" ? input.next().value : null,
			vars: delimited("(", ")", "፣", parse_varname),
			body: parse_expression(),
		};
	}
	function parse_let() {
		skip_kw("ሰይም");
		if (input.peek().type == "var") {
			var name = input.next().value;
			var defs = delimited("(", ")", "፣", parse_vardef);
			return {
				type: "call",
				func: {
					type: "lambda",
					name: name,
					vars: defs.map(function(def) {
						return def.name;
					}),
					body: parse_expression(),
				},
				args: defs.map(function(def) {
					return def.def || FALSE;
				}),
			};
		}
		return {
			type: "let",
			vars: delimited("(", ")", "፣", parse_vardef),
			body: parse_expression(),
		};
	}
	function parse_vardef() {
		var name = parse_varname(),
			def;
		if (is_op("=")) {
			input.next();
			def = parse_expression();
		}
		return { name: name, def: def };
	}
	function parse_bool() {
		return {
			type: "bool",
			value: input.next().value == "እውነት",
		};
	}

	function parse_raw() {
		skip_kw("ጃስ");
		if (input.peek().type != "str") input.croak("ጃስ ሐረግ መሆን አለበት::");
		return {
			type: "raw",
			code: input.next().value,
		};
	}
	function maybe_call(expr) {
		expr = expr();
		return is_punc("(") ? parse_call(expr) : expr;
	}
	function parse_atom() {
		return maybe_call(function() {
			if (is_punc("(")) {
				input.next();
				var exp = parse_expression();
				skip_punc(")");
				return exp;
			}
			if (is_punc("{")) return parse_prog();
			if (is_kw("ሰይም")) return parse_let();
			if (is_kw("ከሆነ")) return parse_if();
			if (is_kw("እውነት") || is_kw("ሀሰት")) return parse_bool();
			if (is_kw("ጃስ")) return parse_raw();
			if (is_kw("ስራ") || is_kw("ሥራ")) {
				input.next();
				return parse_lambda();
			}
			var tok = input.next();
			if (tok.type == "var" || tok.type == "num" || tok.type == "str")
				return tok;
			unexpected();
		});
	}
	function parse_toplevel() {
		var prog = [];
		while (!input.eof()) {
			prog.push(parse_expression());
			if (!input.eof()) {
				skip_punc("፤");
			}
		}
		return { type: "prog", prog: prog };
	}
	function parse_prog() {
		var prog = delimited("{", "}", "፤", parse_expression);
		if (prog.length == 0) return FALSE;
		if (prog.length == 1) return prog[0];
		return { type: "prog", prog: prog };
	}
	function parse_expression() {
		return maybe_call(function() {
			return maybe_binary(parse_atom(), 0);
		});
	}
}

function make_js(exp) {
	return js(exp);

	function js(exp) {
		switch (exp.type) {
			case "num":
			case "str":
			case "bool":
				return js_atom(exp);
			case "var":
				return js_var(exp);
			case "binary":
				return js_binary(exp);
			case "assign":
				return js_assign(exp);
			case "let":
				return js_let(exp);
			case "lambda":
				return js_lambda(exp);
			case "if":
				return js_if(exp);
			case "prog":
				return js_prog(exp);
			case "call":
				return js_call(exp);
			case "raw":
				return js_raw(exp);
			default:
				term.Write(JSON.stringify(exp), "jqconsole-error");
				throw new Error(
					"Dunno how to make_js for " + JSON.stringify(exp)
				);
		}
	}
	function js_raw(exp) {
		return "(" + exp.code + ")";
	}
	function js_atom(exp) {
		return JSON.stringify(exp.value);
	}
	function make_var(name) {
		return name;
	}
	function js_var(exp) {
		return make_var(exp.value);
	}
	function js_binary(exp) {
		return "(" + js(exp.left) + exp.operator + js(exp.right) + ")";
	}
	function js_assign(exp) {
		return js_binary(exp);
	}
	function js_lambda(exp) {
		var code = "(function ";
		if (exp.name) code += make_var(exp.name);
		code += "(" + exp.vars.map(make_var).join(", ") + ") {";
		code += "return " + js(exp.body) + " })";
		return code;
	}
	function js_let(exp) {
		if (exp.vars.length == 0) return js(exp.body);
		var iife = {
			type: "call",
			func: {
				type: "lambda",
				vars: [exp.vars[0].name],
				body: {
					type: "let",
					vars: exp.vars.slice(1),
					body: exp.body,
				},
			},
			args: [exp.vars[0].def || FALSE],
		};
		return "(" + js(iife) + ")";
	}
	function js_if(exp) {
		return (
			"(" +
			js(exp.cond) +
			" !== false" +
			" ? " +
			js(exp.then) +
			" : " +
			js(exp.else || FALSE) +
			")"
		);
	}
	function js_prog(exp) {
		return "(" + exp.prog.map(js).join(", ") + ")";
	}
	function js_call(exp) {
		return js(exp.func) + "(" + exp.args.map(js).join(", ") + ")";
	}
}
var STACKLEN;
function GUARD(f, args) {
	if (--STACKLEN < 0) throw new Continuation(f, args);
}
function Continuation(f, args) {
	this.f = f;
	this.args = args;
}

function Execute(f, args) {
	// eslint-disable-next-line no-constant-condition
	while (true)
		try {
			STACKLEN = 200;
			return f?.apply(null, args);
		} catch (ex) {
			if (ex instanceof Continuation) (f = ex.f), (args = ex.args);
			else throw ex;
		}
}
function Environment(parent) {
	this.vars = Object.create(parent ? parent.vars : null);
	this.parent = parent;
}
Environment.prototype = {
	extend: function() {
		return new Environment(this);
	},
	lookup: function(name) {
		var scope = this;
		while (scope) {
			if (Object.prototype.hasOwnProperty.call(scope.vars, name))
				return scope;
			scope = scope.parent;
		}
	},
	get: function(name) {
		if (name in this.vars) return this.vars[name];
		term.Write("ያልተሰየመ ስም " + name + "\n", "jqconsole-error");
		throw new Error("Undefined variable " + name);
	},
	set: function(name, value) {
		var scope = this.lookup(name);
		// let's not allow defining globals from a nested environment
		if (!scope && this.parent) {
			term.Write("ያልተሰየመ ስም" + name + "\n", "jqconsole-error");

			throw new Error("Undefined variable " + name);
		}
		return ((scope || this).vars[name] = value);
	},
	def: function(name, value) {
		return (this.vars[name] = value);
	},
};

function evaluate(exp, env, callback) {
	GUARD(evaluate, arguments);
	switch (exp.type) {
		case "num":
		case "str":
		case "bool":
			callback(exp.value);
			return;

		case "var":
			callback(env.get(exp.value));
			return;

		case "assign":
			if (exp.left.type != "var")
				throw new Error("Cannot assign to " + JSON.stringify(exp.left));
			evaluate(exp.right, env, function CC(right) {
				GUARD(CC, arguments);
				callback(env.set(exp.left.value, right));
			});
			return;

		case "binary":
			evaluate(exp.left, env, function CC(left) {
				GUARD(CC, arguments);
				evaluate(exp.right, env, function CC(right) {
					GUARD(CC, arguments);
					callback(apply_op(exp.operator, left, right));
				});
			});
			return;

		case "let":
			(function loop(env, i) {
				GUARD(loop, arguments);
				if (i < exp.vars.length) {
					var v = exp.vars[i];
					if (v.def)
						evaluate(v.def, env, function CC(value) {
							GUARD(CC, arguments);
							var scope = env.extend();
							scope.def(v.name, value);
							loop(scope, i + 1);
						});
					else {
						var scope = env.extend();
						scope.def(v.name, false);
						loop(scope, i + 1);
					}
				} else {
					evaluate(exp.body, env, callback);
				}
			})(env, 0);
			return;

		case "lambda":
			callback(make_lambda(env, exp));
			return;

		case "if":
			evaluate(exp.cond, env, function CC(cond) {
				GUARD(CC, arguments);
				if (cond !== false) evaluate(exp.then, env, callback);
				else if (exp.else) evaluate(exp.else, env, callback);
				else callback(false);
			});
			return;

		case "prog":
			(function loop(last, i) {
				GUARD(loop, arguments);
				if (i < exp.prog.length)
					evaluate(exp.prog[i], env, function CC(val) {
						GUARD(CC, arguments);
						loop(val, i + 1);
					});
				else {
					callback(last);
				}
			})(false, 0);
			return;

		case "call":
			evaluate(exp.func, env, function CC(func) {
				GUARD(CC, arguments);
				(function loop(args, i) {
					GUARD(loop, arguments);
					if (i < exp.args.length)
						evaluate(exp.args[i], env, function CC(arg) {
							GUARD(CC, arguments);
							args[i + 1] = arg;
							loop(args, i + 1);
						});
					else {
						func.apply(null, args);
					}
				})([callback], 0);
			});
			return;

		default:
			term.Write("ማስተናገድ አልተቻለም ፥ " + exp.type, "jqconsole-error");
			throw new Error("ማስተናገድ አልተቻለም ፥ " + exp.type);
	}
}

function make_lambda(env, exp) {
	if (exp.name) {
		env = env.extend();
		env.def(exp.name, lambda);
	}
	function lambda(callback) {
		GUARD(lambda, arguments);

		var names = exp.vars;
		var scope = env.extend();
		for (var i = 0; i < names.length; ++i)
			scope.def(
				names[i],
				i + 1 < arguments.length ? arguments[i + 1] : false
			);

		evaluate(exp.body, scope, callback);
	}
	return lambda;
}

function apply_op(op, a, b) {
	function num(x) {
		if (typeof x != "number") {
			term.Write(
				"ቁጥር በመጠበቅ ላይ ግን የቀረበው ፦ " + x + "\n",
				"jqconsole-error"
			);
			throw new Error("Expected number but got " + x);
		}
		return x;
	}
	function div(x) {
		if (num(x) == 0) {
			term.Write("ቁጥር በ 0 ማካፈል አይቻልም" + "\n", "jqconsole-error");
			throw new Error("Divide by zero");
		}
		return x;
	}
	switch (op) {
		case "+":
			return num(a) + num(b);
		case "-":
			return num(a) - num(b);
		case "*":
			return num(a) * num(b);
		case "/":
			return num(a) / div(b);
		case "%":
			return num(a) % div(b);
		case "&&":
			return a !== false && b;
		case "||":
			return a !== false ? a : b;
		case "<":
			return num(a) < num(b);
		case ">":
			return num(a) > num(b);
		case "<=":
			return num(a) <= num(b);
		case "<<":
			return num(a) << num(b);
		case ">>":
			return num(a) >> num(b);
		case ">>>":
			return num(a) >>> num(b);
		case ">=":
			return num(a) >= num(b);
		case "==":
			return a === b;
		case "!=":
			return a !== b;
	}
	throw new Error("Can't apply operator " + op);
}
export {
	Environment,
	parse,
	TokenStream,
	StreamObject,
	evaluate,
	Execute,
	GUARD,
};
