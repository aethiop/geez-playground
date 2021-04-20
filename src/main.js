/* eslint-disable no-undef */
import { createApp } from "vue";
import App from "./App.vue";
import "./index.css";
import VueCodemirror from "vue-codemirror";
import "codemirror/lib/codemirror.css";
import VueSplit from "vue-split-panel";
import "./lib/jqconsole";
createApp(App)
	.use(VueCodemirror)
	.use(VueSplit)
	.mount("#app");
