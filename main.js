import "./style.css";
import "./lib/translitration-input-bundle";
import "jq-console";

const editor = $("#editor");
enableTransliteration(editor[0], "am");

var jqconsole = $("#console").jqconsole();
window.jqconsole = jqconsole;

$(function () {
	jqconsole.Clear();
	$("#run").on("click", function () {
		var ast = parse(TokenStream(StreamObject(editor.val())));
		var code_js = make_js(ast);

		var result = new Function(code_js);
		console.log(code_js);
		result();
	});

	$("#clear").on("click", function () {
		jqconsole.Clear();
	});
});
