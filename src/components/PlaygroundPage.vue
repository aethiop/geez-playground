<template>
	<div class="bg-dracula-light flex flex-col h-screen">
		<!-- Navigation Bar -->
		<nav class="flex items-center justify-between m-2">
			<a
				class="flex flex-row items-center"
				href="https://www.github.com/aethiop/geez-playground"
			>
				<svg
					class="w-7 h-7 "
					viewBox="0 0 50 50"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<rect width="50" height="50" rx="9.09091" fill="#FCD34C" />
					<path
						fill-rule="evenodd"
						clip-rule="evenodd"
						d="M16.7377 15.7377V34.2623H23.2951V25.082C23.2951 23.4975 24.5795 22.2131 26.1639 22.2131C27.7484 22.2131 29.0328 23.4975 29.0328 25.082V35.3279C29.0328 37.9082 26.941 40 24.3607 40H15.6721C13.0918 40 11 37.9082 11 35.3279V14.6721C11 12.0918 13.0918 10 15.6721 10H36.3279C38.9082 10 41 12.0918 41 14.6721V25.082C41 26.6664 39.7156 27.9508 38.1311 27.9508C36.5467 27.9508 35.2623 26.6664 35.2623 25.082V15.7377H16.7377Z"
						fill="#1F2937"
					/>
				</svg>
				<h2 class="ml-2 font-bold leading-7 text-white">
					ግዕዝ
				</h2></a
			>
			<div>
				<span class="ml-3">
					<button
						id="run"
						type="button"
						@click="runCode"
						class="inline-flex items-center border p-2 border-transparent rounded-md shadow-sm text-sm font-medium text-gray-800 bg-green-400 hover:bg-green-500 focus:outline-none"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							class="w-5 h-5 fill-current text-gray-800"
							viewBox="0 0 512 512"
						>
							<title>Play</title>
							<path
								d="M133 440a35.37 35.37 0 01-17.5-4.67c-12-6.8-19.46-20-19.46-34.33V111c0-14.37 7.46-27.53 19.46-34.33a35.13 35.13 0 0135.77.45l247.85 148.36a36 36 0 010 61l-247.89 148.4A35.5 35.5 0 01133 440z"
							/>
						</svg>
					</button>
				</span>
			</div>
		</nav>

		<div class="h-full overflow-hidden p-2 flex flex-row">
			<!-- Files -->
			<div class="w-64 bg-dracula-dark rounded-md">
				<div class="flex flex-row justify-between p-4">
					<h1 class="text-white text-center text-lg font-bold">
						ፋይሎች
					</h1>
					<div class="space-x-2">
						<button
							id="run"
							type="button"
							class="focus:outline-none"
						>
							<svg
								class="w-5 h-5 mt-0.5 stroke-current text-white"
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M9 13h6m-3-3v6m-9 1V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z"
								/>
							</svg>
						</button>
						<button
							id="run"
							type="button"
							class="focus:outline-none"
						>
							<svg
								class="w-5 h-5 mt-0.5 stroke-current text-white"
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M9 13h6m-3-3v6m5 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
								/>
							</svg>
						</button>
					</div>
				</div>
				<div id="files" class="px-4">
					<ul>
						<li>
							<a
								class="inline-block p-2 bg-gray-600 rounded-md w-full"
								href="#"
							>
								<div class="flex flex-row space-x-2">
									<svg
										class="w-5 h-5 mt-0.5 stroke-current text-gray-200"
										xmlns="http://www.w3.org/2000/svg"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
									>
										<path
											stroke-linecap="round"
											stroke-linejoin="round"
											stroke-width="2"
											d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"
										/>
									</svg>
									<p class="text-gray-200">ርዕስ-አልባ.ግዝ</p>
								</div>
							</a>
						</li>
					</ul>
				</div>
			</div>
			<!-- Editor and Console -->
			<div class="flex h-full flex-col flex-auto px-2 overflow-auto">
				<!-- Open files -->
				<ul class="list-reset flex">
					<li class="mr-1">
						<a
							class="bg-dracula-dark border-dracula-dark text-white inline-block border-l border-t border-r rounded-t py-1 px-4 text-sm font-semibold"
							href="#"
							>ርዕስ-አልባ.ግዝ</a
						>
					</li>
				</ul>
				<div
					class="flex flex-auto w-full h-full overflow-y-hidden space-x-1"
				>
					<!-- Editor -->
					<div
						class="h-full box-border overflow-hidden"
						ref="codemirror"
						@keyup="transcrire"
					></div>

					<!-- Console -->
					<div
						ref="terminalContainer"
						class="flex flex-col bg-black rounded-md "
					>
						<div
							class="justify-between bg-dracula-dark flex flex-row  rounded-t-md "
						>
							<h1 class="p-2 text-sm text-gray-300">ኮንሶል</h1>
							<button
								type="button"
								id="clear"
								@click="clearConsole"
								class=" focus:outline-none p-2 ml-auto"
							>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									class="w-4 h-4 fill-current text-red-400"
									viewBox="0 0 512 512"
								>
									<title>Trash</title>
									<path
										d="M296 64h-80a7.91 7.91 0 00-8 8v24h96V72a7.91 7.91 0 00-8-8z"
										fill="none"
									/>
									<path
										d="M432 96h-96V72a40 40 0 00-40-40h-80a40 40 0 00-40 40v24H80a16 16 0 000 32h17l19 304.92c1.42 26.85 22 47.08 48 47.08h184c26.13 0 46.3-19.78 48-47l19-305h17a16 16 0 000-32zM192.57 416H192a16 16 0 01-16-15.43l-8-224a16 16 0 1132-1.14l8 224A16 16 0 01192.57 416zM272 400a16 16 0 01-32 0V176a16 16 0 0132 0zm32-304h-96V72a7.91 7.91 0 018-8h80a7.91 7.91 0 018 8zm32 304.57A16 16 0 01320 416h-.58A16 16 0 01304 399.43l8-224a16 16 0 1132 1.14z"
									/>
								</svg>
							</button>
						</div>
						<div
							class=" h-full"
							ref="terminal"
							@keyup="transcrire"
							id="console"
						></div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
<script setup>
	import { transcrire } from "../lib/transcrire.js";
	import {
		parse,
		TokenStream,
		StreamObject,
		Environment,
		evaluate,
		Execute,
	} from "../lib/geez";
	import "jq-console";
	import "../lib/geez-mode";
	import Split from "split.js";

	import { ref, onMounted } from "vue";
	const codemirror = ref(null);
	const terminalContainer = ref(null);
	const terminal = ref(null);
	var term;

	var val = "";
	function geezify(str) {
		if (typeof str == "number") {
			return str
				.toString()
				.replace(/\\1/g, "፩")
				.replace(/\\2/g, "፪")
				.replace(/\\3/g, "፫")
				.replace(/\\4/g, "፬")
				.replace(/\\5/g, "፭")
				.replace(/\\6/g, "፮")
				.replace(/\\7/g, "፯")
				.replace(/\\8/g, "፰")
				.replace(/\\9/g, "፱")
				.replace(/\\፩0/g, "፲")
				.replace(/\\፪0/g, "፳")
				.replace(/\\፫0/g, "፴")
				.replace(/\\፬0/g, "፵")
				.replace(/\\፭0/g, "፶")
				.replace(/\\፮0/g, "፷")
				.replace(/\\፯0/g, "፸")
				.replace(/\\፰0/g, "፹")
				.replace(/\\፱0/g, "፺")
				.replace(/\\፲0/g, "፻")
				.replace(/\\፳0/g, "፪፻")
				.replace(/\\፺0/g, "፱፻")
				.replace(/\\፻0/g, "፲፻")
				.replace(/\\፲፻0/g, "፼");
		} else if (str === false) {
			return "ሀሰት";
		} else {
			return str;
		}
	}
	onMounted(() => {
		Split([codemirror.value, terminalContainer.value], {
			sizes: [75, 25],
			gutterSize: 7,
			snapOffset: 0,
		});

		const _editor = new CodeMirror(codemirror.value, {
			lineNumbers: true,
			tabSize: 4,
			value: val,
			theme: "dracula",
			scrollbarStyle: "null",
			mode: "geez",
		});
		_editor.on("change", () => {
			val = _editor.getValue();
		});
		term = $(terminal.value).jqconsole();

		window.term = term;
	});

	const clearConsole = () => {
		term.Reset();
	};

	// const generateJS = (code) => {
	// 	var ast = parse(TokenStream(StreamObject(code)));

	// 	var code_js = make_js(ast);
	// 	return Function(code_js);
	// };

	const runCode = () => {
		var geezCode = val;
		var ast = parse(TokenStream(StreamObject(geezCode)));
		var globalEnv = new Environment();

		globalEnv.def("ፃፍ", function(k) {
			term.Write([].slice.call(arguments, 1).join(" ") + "\n");
			Execute(k, [false]);
		});

		globalEnv.def("ተቀበል", function(k, text) {
			term.Write(geezify(text));
			term.SetPromptLabel("");
			term.Prompt(true, function(input) {
				k(input);
			});
		});
		globalEnv.def("ተኛ", function(k, milliseconds) {
			setTimeout(function() {
				Execute(k, [false]);
			}, milliseconds);
		});
		globalEnv.def("ወደ-ቁጥር", function(k, num) {
			Execute(k(parseInt(num)), [false]);
		});

		globalEnv.def("ይህቀጥል", function(k, f) {
			f(k, function CC(discarded, ret) {
				k(ret);
			});
		});
		globalEnv.def("ርዝመት", function(k, thing) {
			k(thing.length);
		});
		globalEnv.def("ሰልፍ", function(k) {
			k([].slice.call(arguments, 1));
		});
		globalEnv.def("ከሰልፍ", function(k, array, index) {
			Execute(k(array[index]), [false]);
		});
		globalEnv.def("ሰልፍ!", function(k, array, index, val) {
			Execute(k((array[index] = val)), [false]);
		});

		function Cons(car, cdr) {
			this.car = car;
			this.cdr = cdr;
		}
		globalEnv.def("ክፍል?", function(k, thing) {
			k(thing instanceof Cons);
		});
		globalEnv.def("ክፍል", function(k, car, cdr) {
			k(new Cons(car, cdr));
		});
		globalEnv.def("ብጀ", function(k, cell) {
			k(cell.car);
		});
		globalEnv.def("ብቀ", function(k, cell) {
			k(cell.cdr);
		});
		globalEnv.def("ብጀ!", function(k, cell, car) {
			k((cell.car = car));
		});
		globalEnv.def("ብቀ!", function(k, cell, cdr) {
			k((cell.cdr = cdr));
		});
		globalEnv.def("ባዶ", function(k) {
			const NILL = {};
			NILL.car = NILL;
			NILL.cdr = NILL;
			k(NILL);
		});

		// ርዝመት
		// ሰልፍ
		// ከሰልፍ
		// ሰልፍ!
		// ክፍል
		// ብጀ
		// ብቀ
		Execute(evaluate, [
			ast,
			globalEnv,
			function() {
				term.Write("\n");
			},
		]);
	};
</script>
<style>
	.gutter {
		margin: auto;
		height: 3rem;
		border-radius: 0.375rem;
		background-color: #eee;
		background-repeat: no-repeat;
		background-position: 80%;
	}
	.gutter.gutter-horizontal {
		width: 3px;
		height: 3rem !important;
		background: rgba(102, 113, 129, 0.6) !important;
		cursor: row-resize;
	}
	.CodeMirror {
		height: 100% !important;
		border: 1px solid #eee;
		border-bottom-left-radius: 0.375rem;
		border-bottom-right-radius: 0.375rem;
		border-top-right-radius: 0.375rem;
	}

	#console {
		position: relative;
		height: 100%;
		font-weight: bold;
		font-size: medium;
		color: azure;
		margin-top: 0.25rem;
	}
	.jqconsole::-webkit-scrollbar {
		display: none;
	}

	/* The inner console element. */
	.jqconsole {
		-ms-overflow-style: none; /* IE and Edge */
		scrollbar-width: none; /* Firefox */
		overflow: hidden;
		padding-left: 0.5rem;
		font-size: 0.875rem /* 14px */;
		line-height: 1.25rem /* 20px */;
	}
	/* The cursor. */
	.jqconsole-cursor {
		background-color: rgb(153, 153, 153);
	}
	/*The cursor color when the console looses focus. */
	.jqconsole-blurred .jqconsole-cursor {
		background-color: rgb(119, 119, 119);
	}
	/* The current prompt text color */
	.jqconsole-prompt {
		font-size: 0.875rem /* 14px */;
		line-height: 1.25rem /* 20px */;
		color: rgb(247, 255, 247);
	}
	/* The command history */
	.jqconsole-old-prompt {
		color: rgb(134, 134, 134);
		font-weight: normal;
	}
	/* The text color when in input mode. */
	.jqconsole-input {
		color: #dd0;
	}
	/* Previously entered input. */
	.jqconsole-old-input {
		color: #bb0;
		font-weight: normal;
	}
	/* The text color of the output. */
	.jqconsole-output {
		color: white;
	}

	.jqconsole-error {
		color: tomato;
	}
</style>
