import { c as head, f as pop_element, p as push_element, u as spread_props, v as attr, vt as FILENAME } from "../../chunks/index-server.js";
import { n as Logo, t as Icon } from "../../chunks/Icon.js";
import "gsap";
import "gsap/ScrollTrigger";
import "lenis";
import "gsap/ScrollToPlugin";
//#region src/lib/assets/favicon.svg
var favicon_default = "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='107'%20height='128'%20viewBox='0%200%20107%20128'%3e%3ctitle%3esvelte-logo%3c/title%3e%3cpath%20d='M94.157%2022.819c-10.4-14.885-30.94-19.297-45.792-9.835L22.282%2029.608A29.92%2029.92%200%200%200%208.764%2049.65a31.5%2031.5%200%200%200%203.108%2020.231%2030%2030%200%200%200-4.477%2011.183%2031.9%2031.9%200%200%200%205.448%2024.116c10.402%2014.887%2030.942%2019.297%2045.791%209.835l26.083-16.624A29.92%2029.92%200%200%200%2098.235%2078.35a31.53%2031.53%200%200%200-3.105-20.232%2030%2030%200%200%200%204.474-11.182%2031.88%2031.88%200%200%200-5.447-24.116'%20style='fill:%23ff3e00'/%3e%3cpath%20d='M45.817%20106.582a20.72%2020.72%200%200%201-22.237-8.243%2019.17%2019.17%200%200%201-3.277-14.503%2018%2018%200%200%201%20.624-2.435l.49-1.498%201.337.981a33.6%2033.6%200%200%200%2010.203%205.098l.97.294-.09.968a5.85%205.85%200%200%200%201.052%203.878%206.24%206.24%200%200%200%206.695%202.485%205.8%205.8%200%200%200%201.603-.704L69.27%2076.28a5.43%205.43%200%200%200%202.45-3.631%205.8%205.8%200%200%200-.987-4.371%206.24%206.24%200%200%200-6.698-2.487%205.7%205.7%200%200%200-1.6.704l-9.953%206.345a19%2019%200%200%201-5.296%202.326%2020.72%2020.72%200%200%201-22.237-8.243%2019.17%2019.17%200%200%201-3.277-14.502%2017.99%2017.99%200%200%201%208.13-12.052l26.081-16.623a19%2019%200%200%201%205.3-2.329%2020.72%2020.72%200%200%201%2022.237%208.243%2019.17%2019.17%200%200%201%203.277%2014.503%2018%2018%200%200%201-.624%202.435l-.49%201.498-1.337-.98a33.6%2033.6%200%200%200-10.203-5.1l-.97-.294.09-.968a5.86%205.86%200%200%200-1.052-3.878%206.24%206.24%200%200%200-6.696-2.485%205.8%205.8%200%200%200-1.602.704L37.73%2051.72a5.42%205.42%200%200%200-2.449%203.63%205.79%205.79%200%200%200%20.986%204.372%206.24%206.24%200%200%200%206.698%202.486%205.8%205.8%200%200%200%201.602-.704l9.952-6.342a19%2019%200%200%201%205.295-2.328%2020.72%2020.72%200%200%201%2022.237%208.242%2019.17%2019.17%200%200%201%203.277%2014.503%2018%2018%200%200%201-8.13%2012.053l-26.081%2016.622a19%2019%200%200%201-5.3%202.328'%20style='fill:%23fff'/%3e%3c/svg%3e";
//#endregion
//#region node_modules/@lucide/svelte/dist/icons/menu.svelte
Menu[FILENAME] = "node_modules/@lucide/svelte/dist/icons/menu.svelte";
function Menu($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		let { $$slots, $$events, ...props } = $$props;
		Icon($$renderer, spread_props([props, { icon: {
			"name": "menu",
			"size": 24,
			"node": [
				["path", { "d": "M4 5h16" }],
				["path", { "d": "M4 12h16" }],
				["path", { "d": "M4 19h16" }]
			]
		} }]));
	}, Menu);
}
Menu.render = function() {
	throw new Error("Component.render(...) is no longer valid in Svelte 5. See https://svelte.dev/docs/svelte/v5-migration-guide#Components-are-no-longer-classes for more information");
};
//#endregion
//#region src/lib/components/header.svelte
Header[FILENAME] = "src/lib/components/header.svelte";
function Header($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		$$renderer.push(`<div class="header opacity-0 w-0 z-60 fixed top-4 left-1/2 -translate-x-1/2 bg-[#0A0A0A]/60 border border-white/10 h-[60px] pl-6 pr-2 whitespace-nowrap flex justify-between items-center backdrop-blur-xl svelte-1apv8g3">`);
		push_element($$renderer, "div", 138, 0);
		$$renderer.push(`<a id="logo" href="#agency" class="flex-shrink-0 flex items-center justify-center w-auto cursor-pointer mix-blend-difference">`);
		push_element($$renderer, "a", 142, 4);
		Logo($$renderer, {});
		$$renderer.push(`<!----></a>`);
		pop_element();
		$$renderer.push(` <div id="nav" class="absolute left-1/2 -translate-x-1/2 hidden md:block">`);
		push_element($$renderer, "div", 153, 4);
		$$renderer.push(`<ul class="flex space-x-8 text-sm font-medium text-white/70">`);
		push_element($$renderer, "ul", 154, 8);
		$$renderer.push(`<li>`);
		push_element($$renderer, "li", 155, 12);
		$$renderer.push(`<a href="#work" class="hover:text-white transition-colors">`);
		push_element($$renderer, "a", 156, 16);
		$$renderer.push(`Work</a>`);
		pop_element();
		$$renderer.push(`</li>`);
		pop_element();
		$$renderer.push(` <li>`);
		push_element($$renderer, "li", 162, 12);
		$$renderer.push(`<a href="#services" class="hover:text-white transition-colors">`);
		push_element($$renderer, "a", 163, 16);
		$$renderer.push(`Services</a>`);
		pop_element();
		$$renderer.push(`</li>`);
		pop_element();
		$$renderer.push(` <li>`);
		push_element($$renderer, "li", 169, 12);
		$$renderer.push(`<a href="#agency" class="hover:text-white transition-colors">`);
		push_element($$renderer, "a", 170, 16);
		$$renderer.push(`Agency</a>`);
		pop_element();
		$$renderer.push(`</li>`);
		pop_element();
		$$renderer.push(`</ul>`);
		pop_element();
		$$renderer.push(`</div>`);
		pop_element();
		$$renderer.push(` <div class="flex space-x-1 sm:space-x-3 items-center z-50">`);
		push_element($$renderer, "div", 180, 4);
		$$renderer.push(`<a href="#contact" class="hidden md:flex items-center justify-center text-sm font-medium bg-white text-black hover:bg-white/80 transition-colors px-6 py-2 rounded-full">`);
		push_element($$renderer, "a", 184, 8);
		$$renderer.push(`Let's Talk</a>`);
		pop_element();
		$$renderer.push(` <button class="cursor-pointer w-10 h-10 flex justify-center items-center rounded-full text-white/80 hover:text-white hover:bg-white/10 transition-colors md:hidden">`);
		push_element($$renderer, "button", 190, 8);
		$$renderer.push("<!--[-1-->");
		Menu($$renderer, {});
		$$renderer.push(`<!--]--></button>`);
		pop_element();
		$$renderer.push(`</div>`);
		pop_element();
		$$renderer.push(`</div>`);
		pop_element();
		$$renderer.push(` <div class="fixed inset-0 z-40 bg-[#0A0A0A]/85 backdrop-blur-2xl flex flex-col justify-center invisible opacity-0 px-10 overflow-hidden">`);
		push_element($$renderer, "div", 204, 0);
		$$renderer.push(`<div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] bg-[#3B82F6] opacity-[0.08] blur-[100px] rounded-full pointer-events-none">`);
		push_element($$renderer, "div", 209, 4);
		$$renderer.push(`</div>`);
		pop_element();
		$$renderer.push(` <ul class="flex flex-col space-y-10 text-left relative z-10">`);
		push_element($$renderer, "ul", 213, 4);
		$$renderer.push(`<li class="overflow-hidden">`);
		push_element($$renderer, "li", 214, 8);
		$$renderer.push(`<a href="#work" class="block text-4xl font-sans font-light text-white/80 hover:text-white transition-colors will-change-transform">`);
		push_element($$renderer, "a", 215, 12);
		$$renderer.push(`Work</a>`);
		pop_element();
		$$renderer.push(`</li>`);
		pop_element();
		$$renderer.push(` <li class="overflow-hidden">`);
		push_element($$renderer, "li", 223, 8);
		$$renderer.push(`<a href="#services" class="block text-4xl font-sans font-light text-white/80 hover:text-white transition-colors will-change-transform">`);
		push_element($$renderer, "a", 224, 12);
		$$renderer.push(`Services</a>`);
		pop_element();
		$$renderer.push(`</li>`);
		pop_element();
		$$renderer.push(` <li class="overflow-hidden">`);
		push_element($$renderer, "li", 232, 8);
		$$renderer.push(`<a href="#agency" class="block text-4xl font-sans font-light text-white/80 hover:text-white transition-colors will-change-transform">`);
		push_element($$renderer, "a", 233, 12);
		$$renderer.push(`Agency</a>`);
		pop_element();
		$$renderer.push(`</li>`);
		pop_element();
		$$renderer.push(` <li class="overflow-hidden mt-6 pt-8 border-t border-white/10">`);
		push_element($$renderer, "li", 241, 8);
		$$renderer.push(`<a href="#contact" class="inline-block text-xl font-sans text-white hover:text-white/80 transition-colors will-change-transform">`);
		push_element($$renderer, "a", 242, 12);
		$$renderer.push(`Let's talk →</a>`);
		pop_element();
		$$renderer.push(`</li>`);
		pop_element();
		$$renderer.push(`</ul>`);
		pop_element();
		$$renderer.push(` <div class="absolute bottom-10 left-10 flex gap-6 text-xs font-mono text-white/40 uppercase tracking-widest relative z-10">`);
		push_element($$renderer, "div", 252, 4);
		$$renderer.push(`<a href="https://twitter.com">`);
		push_element($$renderer, "a", 255, 8);
		$$renderer.push(`Twitter</a>`);
		pop_element();
		$$renderer.push(` <a href="https://linkedin.com">`);
		push_element($$renderer, "a", 256, 8);
		$$renderer.push(`LinkedIn</a>`);
		pop_element();
		$$renderer.push(`</div>`);
		pop_element();
		$$renderer.push(`</div>`);
		pop_element();
	}, Header);
}
Header.render = function() {
	throw new Error("Component.render(...) is no longer valid in Svelte 5. See https://svelte.dev/docs/svelte/v5-migration-guide#Components-are-no-longer-classes for more information");
};
//#endregion
//#region src/lib/components/Cursor.svelte
Cursor[FILENAME] = "src/lib/components/Cursor.svelte";
function Cursor($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		$$renderer.push(`<!--[0--><div class="fixed top-0 left-0 w-5 h-5 bg-white mix-blend-difference rounded-full pointer-events-none z-[999] opacity-0 invisible transform-gpu">`);
		push_element($$renderer, "div", 92, 1);
		$$renderer.push(`</div>`);
		pop_element();
		$$renderer.push(`<!--]-->`);
	}, Cursor);
}
Cursor.render = function() {
	throw new Error("Component.render(...) is no longer valid in Svelte 5. See https://svelte.dev/docs/svelte/v5-migration-guide#Components-are-no-longer-classes for more information");
};
//#endregion
//#region src/routes/+layout.svelte
_layout[FILENAME] = "src/routes/+layout.svelte";
function _layout($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		let { children } = $$props;
		head("12qhfyh", $$renderer, ($$renderer) => {
			$$renderer.push(`<link rel="icon"${attr("href", favicon_default)}/>`);
			push_element($$renderer, "link", 46, 4);
			pop_element();
			$$renderer.push(` <link rel="preconnect" href="https://fonts.googleapis.com"/>`);
			push_element($$renderer, "link", 47, 4);
			pop_element();
			$$renderer.push(` <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin=""/>`);
			push_element($$renderer, "link", 48, 4);
			pop_element();
			$$renderer.push(` <link href="https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&amp;family=Inter:wght@300;400;500;600&amp;display=swap" rel="stylesheet"/>`);
			push_element($$renderer, "link", 49, 4);
			pop_element();
		});
		Cursor($$renderer, {});
		$$renderer.push(`<!----> `);
		Header($$renderer, {});
		$$renderer.push(`<!----> <main class="app-wrapper">`);
		push_element($$renderer, "main", 58, 0);
		children($$renderer);
		$$renderer.push(`<!----></main>`);
		pop_element();
	}, _layout);
}
_layout.render = function() {
	throw new Error("Component.render(...) is no longer valid in Svelte 5. See https://svelte.dev/docs/svelte/v5-migration-guide#Components-are-no-longer-classes for more information");
};
//#endregion
export { _layout as default };
