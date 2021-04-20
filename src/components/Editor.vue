<template>
	<div
		class="h-full overflow-hidden pb-1"
		ref="codemirror"
		@keyup="transcrire"
	></div>
</template>
<script setup>
	import { ref, onMounted } from "vue";
	const codemirror = ref(null);
	onMounted(() => {
		const _editor = new CodeMirror(codemirror.value, {
			lineNumbers: true,
			tabSize: 4,
			value: val,
			theme: "dracula",
			scrollbarStyle: "null",
			viewportMargin: Infinity,
		});
		_editor.on("change", () => {
			val = _editor.getValue();
		});
	});
</script>
