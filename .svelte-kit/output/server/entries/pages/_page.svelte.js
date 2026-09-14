import { c as head, d as stringify, f as pop_element, p as push_element, r as attr_class, s as ensure_array_like, u as spread_props, v as attr, vt as FILENAME, y as escape_html } from "../../chunks/index-server.js";
import { n as Logo, t as Icon } from "../../chunks/Icon.js";
import "gsap";
import "gsap/ScrollTrigger";
//#region src/lib/components/Hero.svelte
Hero[FILENAME] = "src/lib/components/Hero.svelte";
function Hero($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		$$renderer.push(`<section id="agency" class="w-full h-screen flex flex-col items-center justify-center relative overflow-hidden text-center pt-24 pb-12">`);
		push_element($$renderer, "section", 82, 0);
		$$renderer.push(`<div class="absolute inset-0 z-0 pointer-events-none will-change-transform">`);
		push_element($$renderer, "div", 87, 4);
		$$renderer.push(`<img src="/ascii-art.gif" alt="Ascii art background" class="w-full h-screen object-cover mix-blend-screen opacity-[0.65] block"/>`);
		push_element($$renderer, "img", 91, 8);
		pop_element();
		$$renderer.push(` <div class="absolute inset-0 bg-linear-to-b from-[#050505]/40 via-[#050505]/10 to-[#050505]">`);
		push_element($$renderer, "div", 96, 8);
		$$renderer.push(`</div>`);
		pop_element();
		$$renderer.push(` <div class="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_20%,#050505_90%)]">`);
		push_element($$renderer, "div", 99, 8);
		$$renderer.push(`</div>`);
		pop_element();
		$$renderer.push(`</div>`);
		pop_element();
		$$renderer.push(` <div class="relative z-10 w-full flex flex-col items-center justify-center px-4 h-full">`);
		push_element($$renderer, "div", 104, 4);
		$$renderer.push(`<h1 class="text-[15vw] md:text-[8vw] font-serif leading-[0.9] tracking-tight text-white max-w-[95vw] md:max-w-7xl mx-auto flex flex-col items-center mix-blend-difference mb-4">`);
		push_element($$renderer, "h1", 107, 8);
		$$renderer.push(`<div class="overflow-hidden pb-6 -mb-6">`);
		push_element($$renderer, "div", 110, 12);
		$$renderer.push(`<div class="flex items-center pt-4 will-change-transform">`);
		push_element($$renderer, "div", 111, 16);
		$$renderer.push(`We craft</div>`);
		pop_element();
		$$renderer.push(`</div>`);
		pop_element();
		$$renderer.push(` <div class="overflow-hidden pb-8 -mb-8">`);
		push_element($$renderer, "div", 118, 12);
		$$renderer.push(`<div class="flex items-center md:gap-6 will-change-transform pt-4">`);
		push_element($$renderer, "div", 119, 16);
		$$renderer.push(`<span class="italic text-white/50 mr-3 md:mr-6 font-serif">`);
		push_element($$renderer, "span", 123, 20);
		$$renderer.push(`digital</span>`);
		pop_element();
		$$renderer.push(` experiences.</div>`);
		pop_element();
		$$renderer.push(`</div>`);
		pop_element();
		$$renderer.push(`</h1>`);
		pop_element();
		$$renderer.push(` <p class="text-lg md:text-2xl text-white/50 max-w-3xl mt-12 md:mt-8 font-sans font-light leading-relaxed mix-blend-difference px-4">`);
		push_element($$renderer, "p", 130, 8);
		$$renderer.push(`Pushing the boundaries of immersive web experiences, motion design,
            and digital reality for ambitious global brands.</p>`);
		pop_element();
		$$renderer.push(` <div class="mt-8 flex gap-4 z-20">`);
		push_element($$renderer, "div", 138, 8);
		$$renderer.push(`<a href="#work" class="px-8 py-4 bg-white text-black rounded-full font-sans font-medium hover:bg-[#3B82F6] hover:text-white transition-all duration-500 cursor-pointer shadow-[0_0_40px_rgba(255,255,255,0.15)] inline-block">`);
		push_element($$renderer, "a", 139, 12);
		$$renderer.push(`View Selected Works</a>`);
		pop_element();
		$$renderer.push(` <a href="#services" class="hidden md:inline-block px-8 py-4 bg-transparent text-white border border-white/20 rounded-full font-sans font-medium hover:bg-[#3B82F6] hover:border-[#3B82F6] transition-all duration-500 cursor-pointer">`);
		push_element($$renderer, "a", 145, 12);
		$$renderer.push(`Our Services</a>`);
		pop_element();
		$$renderer.push(`</div>`);
		pop_element();
		$$renderer.push(`</div>`);
		pop_element();
		$$renderer.push(`</section>`);
		pop_element();
	}, Hero);
}
Hero.render = function() {
	throw new Error("Component.render(...) is no longer valid in Svelte 5. See https://svelte.dev/docs/svelte/v5-migration-guide#Components-are-no-longer-classes for more information");
};
//#endregion
//#region src/lib/components/Manifesto.svelte
Manifesto[FILENAME] = "src/lib/components/Manifesto.svelte";
function Manifesto($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		const words = "We believe the digital realm should not be a static canvas, but an immersive reality. We architect uncompromised spatial experiences that redefine the boundaries of human interaction, blending cutting-edge engineering precision with unapologetic visual poetry.".split(" ");
		$$renderer.push(`<section id="manifesto" class="w-full bg-[#050505] text-white py-32 md:py-48 px-6 md:px-24 flex flex-col items-center justify-center border-t border-white/5 relative">`);
		push_element($$renderer, "section", 32, 0);
		$$renderer.push(`<span class="text-xs font-mono text-white/30 uppercase tracking-widest mb-16 text-center">`);
		push_element($$renderer, "span", 36, 1);
		$$renderer.push(`Manifesto</span>`);
		pop_element();
		$$renderer.push(` <p class="text-3xl md:text-5xl lg:text-6xl font-serif text-center max-w-5xl w-full flex flex-wrap justify-center gap-x-3 gap-y-2 md:gap-y-4">`);
		push_element($$renderer, "p", 41, 1);
		$$renderer.push(`<!--[-->`);
		const each_array = ensure_array_like(words);
		for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
			let word = each_array[$$index];
			$$renderer.push(`<span class="word text-white/10 transition-colors duration-300 pointer-events-none">`);
			push_element($$renderer, "span", 47, 3);
			$$renderer.push(`${escape_html(word)}</span>`);
			pop_element();
		}
		$$renderer.push(`<!--]--></p>`);
		pop_element();
		$$renderer.push(`</section>`);
		pop_element();
	}, Manifesto);
}
Manifesto.render = function() {
	throw new Error("Component.render(...) is no longer valid in Svelte 5. See https://svelte.dev/docs/svelte/v5-migration-guide#Components-are-no-longer-classes for more information");
};
//#endregion
//#region src/lib/components/Brands.svelte
Brands[FILENAME] = "src/lib/components/Brands.svelte";
function Brands($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		const brands = [
			"Lumina",
			"Ozone",
			"Nexal",
			"Aura",
			"Vercel",
			"Stripe",
			"Linear",
			"Figma",
			"Lumina",
			"Ozone",
			"Nexal",
			"Aura",
			"Vercel",
			"Stripe",
			"Linear",
			"Figma"
		];
		$$renderer.push(`<section class="w-full bg-[#050505] py-16 md:py-24 overflow-hidden flex flex-col items-center justify-center border-t border-white/5 relative">`);
		push_element($$renderer, "section", 38, 0);
		$$renderer.push(`<div class="absolute inset-y-0 left-0 w-32 md:w-80 bg-linear-to-r from-[#050505] to-transparent z-10 pointer-events-none">`);
		push_element($$renderer, "div", 42, 1);
		$$renderer.push(`</div>`);
		pop_element();
		$$renderer.push(` <div class="absolute inset-y-0 right-0 w-32 md:w-80 bg-linear-to-l from-[#050505] to-transparent z-10 pointer-events-none">`);
		push_element($$renderer, "div", 45, 1);
		$$renderer.push(`</div>`);
		pop_element();
		$$renderer.push(` <p class="text-xs font-mono text-white/30 uppercase tracking-widest mb-10 text-center relative z-20">`);
		push_element($$renderer, "p", 49, 1);
		$$renderer.push(`We collaborate with forward-thinking teams</p>`);
		pop_element();
		$$renderer.push(` <div class="flex overflow-hidden w-full relative z-0">`);
		push_element($$renderer, "div", 56, 1);
		$$renderer.push(`<div class="flex whitespace-nowrap will-change-transform w-fit">`);
		push_element($$renderer, "div", 57, 2);
		$$renderer.push(`<div class="flex gap-16 md:gap-32 px-8 md:px-16 items-center">`);
		push_element($$renderer, "div", 61, 3);
		$$renderer.push(`<!--[-->`);
		const each_array = ensure_array_like(brands);
		for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
			let brand = each_array[$$index];
			$$renderer.push(`<div class="text-2xl md:text-4xl font-serif text-white/30 hover:text-white transition-colors duration-700 cursor-pointer select-none">`);
			push_element($$renderer, "div", 63, 5);
			$$renderer.push(`${escape_html(brand)}</div>`);
			pop_element();
		}
		$$renderer.push(`<!--]--></div>`);
		pop_element();
		$$renderer.push(`</div>`);
		pop_element();
		$$renderer.push(`</div>`);
		pop_element();
		$$renderer.push(`</section>`);
		pop_element();
	}, Brands);
}
Brands.render = function() {
	throw new Error("Component.render(...) is no longer valid in Svelte 5. See https://svelte.dev/docs/svelte/v5-migration-guide#Components-are-no-longer-classes for more information");
};
//#endregion
//#region src/lib/components/Showcase.svelte
Showcase[FILENAME] = "src/lib/components/Showcase.svelte";
function Showcase($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		const services = [
			{
				title: "Digital Strategy",
				desc: "Aligning creative vision with business objectives to architect immersive digital platforms that disrupt the market.",
				icon: "M13 10V3L4 14h7v8l9-11h-7z"
			},
			{
				title: "Space & Web3",
				desc: "Bridging the gap between hyper-complex blockchain data and stunningly simple user adoption through spatial design.",
				icon: "M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"
			},
			{
				title: "Motion Identity",
				desc: "Breathing life into static brands using hardware-accelerated fluid motion, WebGL, and advanced typography.",
				icon: "M15 12a3 3 0 11-6 0 3 3 0 016 0z M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
			}
		];
		$$renderer.push(`<section id="services" class="w-full bg-[#050505] text-white py-32 md:py-48 border-t border-white/5 relative z-10 overflow-hidden">`);
		push_element($$renderer, "section", 49, 0);
		$$renderer.push(`<div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#3B82F6] opacity-[0.02] blur-[200px] rounded-full pointer-events-none">`);
		push_element($$renderer, "div", 54, 1);
		$$renderer.push(`</div>`);
		pop_element();
		$$renderer.push(` <div class="max-w-[1400px] mx-auto px-6 md:px-12 flex flex-col items-center">`);
		push_element($$renderer, "div", 58, 1);
		$$renderer.push(`<span class="text-xs font-mono text-white/30 uppercase tracking-widest mb-16 text-center tracking-[0.3em]">`);
		push_element($$renderer, "span", 61, 2);
		$$renderer.push(`Our Core Disciplines</span>`);
		pop_element();
		$$renderer.push(` <div class="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8 w-full">`);
		push_element($$renderer, "div", 66, 2);
		$$renderer.push(`<!--[-->`);
		const each_array = ensure_array_like(services);
		for (let i = 0, $$length = each_array.length; i < $$length; i++) {
			let service = each_array[i];
			$$renderer.push(`<div class="service-grid-card group relative w-full h-[50vh] md:h-[65vh] lg:h-[75vh] rounded-3xl overflow-hidden border border-white/10 bg-[#0A0A0A] hover:bg-[#0A0A0A] transition-colors duration-700 cursor-default">`);
			push_element($$renderer, "div", 71, 4);
			$$renderer.push(`<div class="absolute inset-0 bg-linear-to-t from-black via-black/40 to-transparent z-10">`);
			push_element($$renderer, "div", 75, 5);
			$$renderer.push(`</div>`);
			pop_element();
			$$renderer.push(` <div class="absolute -top-32 -left-32 w-96 h-96 bg-[#3B82F6] opacity-[0.03] group-hover:opacity-[0.12] blur-[100px] rounded-full transition-opacity duration-700 pointer-events-none z-0">`);
			push_element($$renderer, "div", 80, 5);
			$$renderer.push(`</div>`);
			pop_element();
			$$renderer.push(` <div class="absolute top-8 left-8 z-20 font-serif text-6xl text-white/5 group-hover:text-white/10 transition-colors duration-700">`);
			push_element($$renderer, "div", 85, 5);
			$$renderer.push(`0${escape_html(i + 1)}</div>`);
			pop_element();
			$$renderer.push(` <div class="absolute top-8 right-8 z-20 text-white/20 group-hover:text-[#3B82F6] transition-colors duration-700 transform group-hover:scale-110">`);
			push_element($$renderer, "div", 92, 5);
			$$renderer.push(`<svg class="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">`);
			push_element($$renderer, "svg", 95, 6);
			$$renderer.push(`<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"${attr("d", service.icon)}>`);
			push_element($$renderer, "path", 101, 7);
			$$renderer.push(`</path>`);
			pop_element();
			$$renderer.push(`</svg>`);
			pop_element();
			$$renderer.push(`</div>`);
			pop_element();
			$$renderer.push(` <div class="absolute bottom-10 left-8 right-8 z-20 flex flex-col gap-6 transform-gpu transition-all duration-700 group-hover:-translate-y-4">`);
			push_element($$renderer, "div", 111, 5);
			$$renderer.push(`<h3 class="text-3xl lg:text-4xl xl:text-5xl font-serif text-white leading-tight tracking-tight">`);
			push_element($$renderer, "h3", 114, 6);
			$$renderer.push(`${escape_html(service.title)}</h3>`);
			pop_element();
			$$renderer.push(` <div class="w-full h-px bg-white/20 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-700 ease-out">`);
			push_element($$renderer, "div", 121, 6);
			$$renderer.push(`</div>`);
			pop_element();
			$$renderer.push(` <p class="text-sm md:text-base text-white/50 font-sans leading-relaxed md:opacity-0 group-hover:opacity-100 transition-opacity duration-700 ease-out">`);
			push_element($$renderer, "p", 126, 6);
			$$renderer.push(`${escape_html(service.desc)}</p>`);
			pop_element();
			$$renderer.push(`</div>`);
			pop_element();
			$$renderer.push(`</div>`);
			pop_element();
		}
		$$renderer.push(`<!--]--></div>`);
		pop_element();
		$$renderer.push(`</div>`);
		pop_element();
		$$renderer.push(`</section>`);
		pop_element();
	}, Showcase);
}
Showcase.render = function() {
	throw new Error("Component.render(...) is no longer valid in Svelte 5. See https://svelte.dev/docs/svelte/v5-migration-guide#Components-are-no-longer-classes for more information");
};
//#endregion
//#region src/lib/components/WorksList.svelte
WorksList[FILENAME] = "src/lib/components/WorksList.svelte";
function WorksList($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		const works = [
			{
				id: "01",
				name: "Nike Forward",
				category: "E-Commerce Experience",
				year: "2025"
			},
			{
				id: "02",
				name: "Ozone WebGL",
				category: "Interactive Architecture",
				year: "2024"
			},
			{
				id: "03",
				name: "Lumina App",
				category: "Spatial UI Design",
				year: "2024"
			},
			{
				id: "04",
				name: "Aura Engine",
				category: "Open Source Platform",
				year: "2023"
			}
		];
		$$renderer.push(`<section id="work" class="w-full bg-[#050505] text-white py-32 border-t border-white/10 min-h-screen">`);
		push_element($$renderer, "section", 30, 0);
		$$renderer.push(`<div class="px-6 md:px-24 mb-24 max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-end gap-6">`);
		push_element($$renderer, "div", 34, 1);
		$$renderer.push(`<h2 class="text-5xl md:text-8xl font-serif tracking-tight">`);
		push_element($$renderer, "h2", 37, 2);
		$$renderer.push(`Selected<br/>`);
		push_element($$renderer, "br", 38, 11);
		pop_element();
		$$renderer.push(`<span class="italic text-white/40">`);
		push_element($$renderer, "span", 38, 17);
		$$renderer.push(`Works.</span>`);
		pop_element();
		$$renderer.push(`</h2>`);
		pop_element();
		$$renderer.push(` <p class="text-white/50 font-sans max-w-sm text-lg leading-relaxed pb-2">`);
		push_element($$renderer, "p", 40, 2);
		$$renderer.push(`A curation of highly immersive projects pushing digital boundaries.
			Hover to reveal more.</p>`);
		pop_element();
		$$renderer.push(`</div>`);
		pop_element();
		$$renderer.push(` <div class="px-6 md:px-24 max-w-7xl mx-auto flex flex-col">`);
		push_element($$renderer, "div", 48, 1);
		$$renderer.push(`<div class="flex border-b border-white/20 pb-4 mb-4 text-xs font-mono text-white/40 uppercase tracking-widest px-4">`);
		push_element($$renderer, "div", 50, 2);
		$$renderer.push(`<div class="w-16">`);
		push_element($$renderer, "div", 53, 3);
		$$renderer.push(`ID</div>`);
		pop_element();
		$$renderer.push(` <div class="flex-1">`);
		push_element($$renderer, "div", 54, 3);
		$$renderer.push(`Project</div>`);
		pop_element();
		$$renderer.push(` <div class="hidden md:block w-1/3">`);
		push_element($$renderer, "div", 55, 3);
		$$renderer.push(`Role</div>`);
		pop_element();
		$$renderer.push(` <div class="w-16 text-right">`);
		push_element($$renderer, "div", 56, 3);
		$$renderer.push(`Year</div>`);
		pop_element();
		$$renderer.push(`</div>`);
		pop_element();
		$$renderer.push(` <!--[-->`);
		const each_array = ensure_array_like(works);
		for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
			let work = each_array[$$index];
			$$renderer.push(`<a href="/" class="group flex items-center border-b border-white/10 py-8 md:py-12 px-4 hover:bg-white/5 transition-colors duration-500 cursor-pointer relative overflow-hidden">`);
			push_element($$renderer, "a", 61, 3);
			$$renderer.push(`<div class="absolute inset-0 bg-linear-to-r from-[#3B82F6]/0 via-[#3B82F6]/5 to-[#3B82F6]/0 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 pointer-events-none">`);
			push_element($$renderer, "div", 65, 4);
			$$renderer.push(`</div>`);
			pop_element();
			$$renderer.push(` <div class="w-16 text-sm font-mono text-white/30 group-hover:text-white/80 transition-colors z-10">`);
			push_element($$renderer, "div", 69, 4);
			$$renderer.push(`${escape_html(work.id)}</div>`);
			pop_element();
			$$renderer.push(` <div class="flex-1 z-10">`);
			push_element($$renderer, "div", 74, 4);
			$$renderer.push(`<h3 class="text-4xl md:text-6xl font-serif text-white/70 group-hover:text-white group-hover:translate-x-4 transition-all duration-500 transform-gpu">`);
			push_element($$renderer, "h3", 75, 5);
			$$renderer.push(`${escape_html(work.name)}</h3>`);
			pop_element();
			$$renderer.push(`</div>`);
			pop_element();
			$$renderer.push(` <div class="hidden md:block w-1/3 text-lg font-sans font-light text-white/40 group-hover:text-white/80 transition-colors z-10">`);
			push_element($$renderer, "div", 81, 4);
			$$renderer.push(`${escape_html(work.category)}</div>`);
			pop_element();
			$$renderer.push(` <div class="w-16 text-right text-sm font-mono text-white/40 group-hover:text-white/90 transition-colors z-10">`);
			push_element($$renderer, "div", 86, 4);
			$$renderer.push(`${escape_html(work.year)}</div>`);
			pop_element();
			$$renderer.push(`</a>`);
			pop_element();
		}
		$$renderer.push(`<!--]--> <div class="mt-16 flex justify-center w-full">`);
		push_element($$renderer, "div", 94, 2);
		$$renderer.push(`<button class="px-8 py-3 rounded-full border border-white/20 text-white/80 hover:bg-white hover:text-black transition-colors duration-500 font-sans cursor-pointer text-sm font-medium">`);
		push_element($$renderer, "button", 95, 3);
		$$renderer.push(`View All Archives</button>`);
		pop_element();
		$$renderer.push(`</div>`);
		pop_element();
		$$renderer.push(`</div>`);
		pop_element();
		$$renderer.push(`</section>`);
		pop_element();
	}, WorksList);
}
WorksList.render = function() {
	throw new Error("Component.render(...) is no longer valid in Svelte 5. See https://svelte.dev/docs/svelte/v5-migration-guide#Components-are-no-longer-classes for more information");
};
//#endregion
//#region src/lib/components/Testimonials.svelte
Testimonials[FILENAME] = "src/lib/components/Testimonials.svelte";
function Testimonials($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		const feedbacks = [
			{
				name: "Sarah Jenkins",
				role: "CMO, Lumina",
				text: "Aura Studio didn't just build a website; they architected a digital reality. Their motion mastery and craftsmanship are unmatched."
			},
			{
				name: "Marcus Thorne",
				role: "Founder, Nexal",
				text: "Working with them felt like collaborating with a future version of ourselves. Uncompromising quality and relentless execution."
			},
			{
				name: "Elena Rostova",
				role: "Product VP, Ozone",
				text: "They completely redefined our brand identity. Client conversion and engagement skyrocketed immediately after the overhaul."
			}
		];
		let currentIndex = 0;
		$$renderer.push(`<section id="testimonials" class="w-full bg-[#050505] text-white py-32 md:py-48 flex items-center justify-center relative overflow-hidden border-t border-white/5">`);
		push_element($$renderer, "section", 74, 0);
		$$renderer.push(`<div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[800px] h-[500px] bg-[#3B82F6]/5 blur-[200px] rounded-full pointer-events-none">`);
		push_element($$renderer, "div", 79, 1);
		$$renderer.push(`</div>`);
		pop_element();
		$$renderer.push(` <div class="max-w-5xl mx-auto px-6 md:px-12 relative z-10 flex flex-col items-center text-center">`);
		push_element($$renderer, "div", 83, 1);
		$$renderer.push(`<span class="text-xs font-mono text-white/30 uppercase tracking-widest mb-16">`);
		push_element($$renderer, "span", 86, 2);
		$$renderer.push(`Client Voices</span>`);
		pop_element();
		$$renderer.push(` <h3 class="text-3xl md:text-5xl lg:text-6xl font-serif text-white/90 leading-[1.3] md:leading-[1.2] tracking-tight mb-16 flex items-center justify-center will-change-transform h-[200px] md:h-auto">`);
		push_element($$renderer, "h3", 91, 2);
		$$renderer.push(`"${escape_html(feedbacks[currentIndex].text)}"</h3>`);
		pop_element();
		$$renderer.push(` <div class="flex flex-col items-center gap-3 will-change-transform">`);
		push_element($$renderer, "div", 98, 2);
		$$renderer.push(`<h4 class="text-white font-medium text-sm md:text-base uppercase tracking-widest">`);
		push_element($$renderer, "h4", 102, 3);
		$$renderer.push(`${escape_html(feedbacks[currentIndex].name)}</h4>`);
		pop_element();
		$$renderer.push(` <span class="text-sm font-sans text-white/40">`);
		push_element($$renderer, "span", 107, 3);
		$$renderer.push(`${escape_html(feedbacks[currentIndex].role)}</span>`);
		pop_element();
		$$renderer.push(`</div>`);
		pop_element();
		$$renderer.push(` <div class="flex gap-4 mt-16">`);
		push_element($$renderer, "div", 113, 2);
		$$renderer.push(`<!--[-->`);
		const each_array = ensure_array_like(feedbacks);
		for (let i = 0, $$length = each_array.length; i < $$length; i++) {
			each_array[i];
			$$renderer.push(`<button${attr_class(`w-2 h-2 rounded-full transition-all duration-500 cursor-pointer ${currentIndex === i ? "bg-white scale-125" : "bg-white/20 hover:bg-white/50"}`)}${attr("aria-label", `Go to slide ${stringify(i + 1)}`)}>`);
			push_element($$renderer, "button", 115, 4);
			$$renderer.push(`</button>`);
			pop_element();
		}
		$$renderer.push(`<!--]--></div>`);
		pop_element();
		$$renderer.push(`</div>`);
		pop_element();
		$$renderer.push(`</section>`);
		pop_element();
	}, Testimonials);
}
Testimonials.render = function() {
	throw new Error("Component.render(...) is no longer valid in Svelte 5. See https://svelte.dev/docs/svelte/v5-migration-guide#Components-are-no-longer-classes for more information");
};
//#endregion
//#region src/lib/components/Stats.svelte
Stats[FILENAME] = "src/lib/components/Stats.svelte";
function Stats($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		const stats = [
			{
				label: "Value Created",
				limit: 200,
				suffix: "M+",
				prefix: "$"
			},
			{
				label: "Global Awards",
				limit: 45,
				suffix: "+",
				prefix: ""
			},
			{
				label: "Sprint Cycles",
				limit: 60,
				suffix: " Days",
				prefix: "<"
			},
			{
				label: "Partner Brands",
				limit: 120,
				suffix: "+",
				prefix: ""
			}
		];
		$$renderer.push(`<section class="w-full bg-[#050505] text-white py-24 md:py-32 border-t border-white/5 border-b border-b-white/5 relative z-10">`);
		push_element($$renderer, "section", 40, 0);
		$$renderer.push(`<div class="max-w-7xl mx-auto px-6 md:px-24 grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-8 text-left md:text-center">`);
		push_element($$renderer, "div", 44, 1);
		$$renderer.push(`<!--[-->`);
		const each_array = ensure_array_like(stats);
		for (let i = 0, $$length = each_array.length; i < $$length; i++) {
			let stat = each_array[i];
			$$renderer.push(`<div class="flex flex-col gap-2 md:items-center">`);
			push_element($$renderer, "div", 48, 3);
			$$renderer.push(`<h4 class="text-4xl md:text-6xl font-serif tracking-tight text-white mb-2 flex items-baseline md:justify-center">`);
			push_element($$renderer, "h4", 49, 4);
			$$renderer.push(`<span class="text-white/30 text-3xl md:text-5xl mr-1">`);
			push_element($$renderer, "span", 52, 5);
			$$renderer.push(`${escape_html(stat.prefix)}</span>`);
			pop_element();
			$$renderer.push(` <span class="counterData text-[#3B82F6]">`);
			push_element($$renderer, "span", 55, 5);
			$$renderer.push(`0</span>`);
			pop_element();
			$$renderer.push(` <span class="text-white/60">`);
			push_element($$renderer, "span", 56, 5);
			$$renderer.push(`${escape_html(stat.suffix)}</span>`);
			pop_element();
			$$renderer.push(`</h4>`);
			pop_element();
			$$renderer.push(` <p class="text-xs font-mono text-white/40 uppercase tracking-widest">`);
			push_element($$renderer, "p", 58, 4);
			$$renderer.push(`${escape_html(stat.label)}</p>`);
			pop_element();
			$$renderer.push(`</div>`);
			pop_element();
		}
		$$renderer.push(`<!--]--></div>`);
		pop_element();
		$$renderer.push(`</section>`);
		pop_element();
	}, Stats);
}
Stats.render = function() {
	throw new Error("Component.render(...) is no longer valid in Svelte 5. See https://svelte.dev/docs/svelte/v5-migration-guide#Components-are-no-longer-classes for more information");
};
//#endregion
//#region node_modules/@lucide/svelte/dist/icons/plus.svelte
Plus[FILENAME] = "node_modules/@lucide/svelte/dist/icons/plus.svelte";
function Plus($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		let { $$slots, $$events, ...props } = $$props;
		Icon($$renderer, spread_props([props, { icon: {
			"name": "plus",
			"size": 24,
			"node": [["path", { "d": "M5 12h14" }], ["path", { "d": "M12 5v14" }]]
		} }]));
	}, Plus);
}
Plus.render = function() {
	throw new Error("Component.render(...) is no longer valid in Svelte 5. See https://svelte.dev/docs/svelte/v5-migration-guide#Components-are-no-longer-classes for more information");
};
//#endregion
//#region node_modules/@lucide/svelte/dist/icons/minus.svelte
Minus[FILENAME] = "node_modules/@lucide/svelte/dist/icons/minus.svelte";
function Minus($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		let { $$slots, $$events, ...props } = $$props;
		Icon($$renderer, spread_props([props, { icon: {
			"name": "minus",
			"size": 24,
			"node": [["path", { "d": "M5 12h14" }]]
		} }]));
	}, Minus);
}
Minus.render = function() {
	throw new Error("Component.render(...) is no longer valid in Svelte 5. See https://svelte.dev/docs/svelte/v5-migration-guide#Components-are-no-longer-classes for more information");
};
//#endregion
//#region src/lib/components/Faq.svelte
Faq[FILENAME] = "src/lib/components/Faq.svelte";
function Faq($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		const faqs = [
			{
				q: "What is your typical project timeline?",
				a: "Most of our immersive web experiences take between 6 to 8 weeks from concept to deployment. Enterprise platforms and highly complex WebGL applications may require up to 4 months."
			},
			{
				q: "Do you only build with Svelte and GSAP?",
				a: "While Svelte and GSAP are our preferred tools for extreme performance and fluid motion, our engineering team is framework-agnostic. We work extensively with Next.js, Vue, and vanilla WebGL depending on architecture requirements."
			},
			{
				q: "How does the pricing structure work?",
				a: "We operate on milestone-based pricing for fixed-scope projects. For ongoing product development, we offer dedicated team retainers. Every project requires a custom quotation based on scope complexity."
			},
			{
				q: "Can you integrate with Web3 and custom backends?",
				a: "Absolutely. We specialize in building headless interfaces that seamlessly connect via modern SDKs to blockchain networks, AI models, and any custom API infrastructure."
			}
		];
		let activeIndex = null;
		$$renderer.push(`<section id="faq" class="w-full bg-[#050505] text-white py-32 border-t border-white/10 relative overflow-hidden">`);
		push_element($$renderer, "section", 36, 0);
		$$renderer.push(`<div class="absolute top-0 right-0 w-[500px] h-[500px] bg-[#3B82F6] opacity-5 blur-[150px] rounded-full pointer-events-none">`);
		push_element($$renderer, "div", 40, 1);
		$$renderer.push(`</div>`);
		pop_element();
		$$renderer.push(` <div class="px-6 md:px-24 max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-16 relative z-10">`);
		push_element($$renderer, "div", 44, 1);
		$$renderer.push(`<div class="w-full md:w-1/3">`);
		push_element($$renderer, "div", 48, 2);
		$$renderer.push(`<span class="text-sm font-mono text-white/50 uppercase tracking-widest mb-6 block">`);
		push_element($$renderer, "span", 49, 3);
		$$renderer.push(`FAQ</span>`);
		pop_element();
		$$renderer.push(` <h2 class="text-4xl md:text-5xl font-serif leading-tight">`);
		push_element($$renderer, "h2", 53, 3);
		$$renderer.push(`Frequently<br/>`);
		push_element($$renderer, "br", 54, 14);
		pop_element();
		$$renderer.push(` <span class="italic text-white/40">`);
		push_element($$renderer, "span", 55, 4);
		$$renderer.push(`Asked</span>`);
		pop_element();
		$$renderer.push(`</h2>`);
		pop_element();
		$$renderer.push(` <p class="text-white/50 mt-6 font-sans font-light">`);
		push_element($$renderer, "p", 57, 3);
		$$renderer.push(`Answers to the most common questions regarding our process,
				technology stack, and partnership models.</p>`);
		pop_element();
		$$renderer.push(` <a href="#contact" class="inline-flex items-center gap-2 mt-8 text-sm font-mono text-white/80 uppercase hover:text-white transition-colors group">`);
		push_element($$renderer, "a", 62, 3);
		$$renderer.push(`Still have questions? <span class="w-8 h-[1px] bg-white transform origin-left transition-transform duration-300 group-hover:scale-x-150">`);
		push_element($$renderer, "span", 67, 4);
		$$renderer.push(`</span>`);
		pop_element();
		$$renderer.push(`</a>`);
		pop_element();
		$$renderer.push(`</div>`);
		pop_element();
		$$renderer.push(` <div class="w-full md:w-2/3 flex flex-col">`);
		push_element($$renderer, "div", 74, 2);
		$$renderer.push(`<!--[-->`);
		const each_array = ensure_array_like(faqs);
		for (let index = 0, $$length = each_array.length; index < $$length; index++) {
			let item = each_array[index];
			$$renderer.push(`<button class="w-full border-b border-white/10 py-8 text-left flex flex-col cursor-pointer group"${attr("aria-expanded", activeIndex === index)}>`);
			push_element($$renderer, "button", 76, 4);
			$$renderer.push(`<div class="w-full flex justify-between items-center">`);
			push_element($$renderer, "div", 81, 5);
			$$renderer.push(`<span class="text-2xl md:text-3xl font-serif text-white/80 group-hover:text-white transition-colors duration-300">`);
			push_element($$renderer, "span", 82, 6);
			$$renderer.push(`${escape_html(item.q)}</span>`);
			pop_element();
			$$renderer.push(` <div class="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center transform transition-transform duration-500 group-hover:bg-white/10">`);
			push_element($$renderer, "div", 88, 6);
			if (activeIndex === index) {
				$$renderer.push("<!--[0-->");
				Minus($$renderer, { class: "w-5 h-5 text-white" });
			} else {
				$$renderer.push("<!--[-1-->");
				Plus($$renderer, { class: "w-5 h-5 text-white" });
			}
			$$renderer.push(`<!--]--></div>`);
			pop_element();
			$$renderer.push(`</div>`);
			pop_element();
			$$renderer.push(` `);
			if (activeIndex === index) {
				$$renderer.push(`<!--[0--><div class="overflow-hidden">`);
				push_element($$renderer, "div", 100, 6);
				$$renderer.push(`<p class="pt-6 text-lg text-white/50 font-sans font-light leading-relaxed max-w-2xl">`);
				push_element($$renderer, "p", 107, 7);
				$$renderer.push(`${escape_html(item.a)}</p>`);
				pop_element();
				$$renderer.push(`</div>`);
				pop_element();
			} else $$renderer.push("<!--[-1-->");
			$$renderer.push(`<!--]--></button>`);
			pop_element();
		}
		$$renderer.push(`<!--]--></div>`);
		pop_element();
		$$renderer.push(`</div>`);
		pop_element();
		$$renderer.push(`</section>`);
		pop_element();
	}, Faq);
}
Faq.render = function() {
	throw new Error("Component.render(...) is no longer valid in Svelte 5. See https://svelte.dev/docs/svelte/v5-migration-guide#Components-are-no-longer-classes for more information");
};
//#endregion
//#region src/lib/components/Footer.svelte
Footer[FILENAME] = "src/lib/components/Footer.svelte";
function Footer($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		$$renderer.push(`<footer id="contact" class="w-full bg-[#050505] text-white pt-32 pb-12 relative overflow-hidden border-t border-white/10 border-b-8 border-b-white/5">`);
		push_element($$renderer, "footer", 6, 0);
		$$renderer.push(`<div class="px-6 md:px-24 max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center mb-32 gap-12">`);
		push_element($$renderer, "div", 11, 1);
		$$renderer.push(`<h2 class="text-[12vw] md:text-[7vw] font-serif leading-[0.85] tracking-tighter mix-blend-difference z-10 w-full md:w-2/3">`);
		push_element($$renderer, "h2", 14, 2);
		$$renderer.push(`Have a project<br/>`);
		push_element($$renderer, "br", 17, 17);
		pop_element();
		$$renderer.push(` <span class="italic text-white/40">`);
		push_element($$renderer, "span", 18, 3);
		$$renderer.push(`in mind?</span>`);
		pop_element();
		$$renderer.push(`</h2>`);
		pop_element();
		$$renderer.push(` <div class="w-full md:w-1/3 flex md:justify-end z-10">`);
		push_element($$renderer, "div", 20, 2);
		$$renderer.push(`<a href="mailto:hello@aurastudio.com" class="group relative flex items-center justify-center w-40 h-40 md:w-48 md:h-48 rounded-full bg-white text-black hover:scale-105 transition-transform duration-500 cursor-pointer">`);
		push_element($$renderer, "a", 21, 3);
		$$renderer.push(`<span class="absolute inset-0 bg-[#3B82F6] rounded-full transform scale-0 group-hover:scale-100 transition-transform duration-500 ease-out z-0">`);
		push_element($$renderer, "span", 25, 4);
		$$renderer.push(`</span>`);
		pop_element();
		$$renderer.push(` <span class="font-sans font-medium text-lg relative z-10 group-hover:text-white transition-colors duration-500">`);
		push_element($$renderer, "span", 28, 4);
		$$renderer.push(`Let's Talk</span>`);
		pop_element();
		$$renderer.push(`</a>`);
		pop_element();
		$$renderer.push(`</div>`);
		pop_element();
		$$renderer.push(`</div>`);
		pop_element();
		$$renderer.push(` <div class="px-6 md:px-24 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-4 mb-24 z-10 relative">`);
		push_element($$renderer, "div", 37, 1);
		$$renderer.push(`<div class="col-span-1 md:col-span-1 flex flex-col gap-6">`);
		push_element($$renderer, "div", 40, 2);
		$$renderer.push(`<div class="opacity-80">`);
		push_element($$renderer, "div", 41, 3);
		Logo($$renderer, {});
		$$renderer.push(`<!----></div>`);
		pop_element();
		$$renderer.push(` <p class="text-white/40 font-sans text-sm leading-relaxed max-w-xs">`);
		push_element($$renderer, "p", 42, 3);
		$$renderer.push(`A globally awarded creative agency specializing in bringing
				revolutionary digital products to life.</p>`);
		pop_element();
		$$renderer.push(`</div>`);
		pop_element();
		$$renderer.push(` <div class="col-span-1 flex flex-col gap-4">`);
		push_element($$renderer, "div", 48, 2);
		$$renderer.push(`<h4 class="font-mono text-xs uppercase tracking-widest text-[#3B82F6] mb-2">`);
		push_element($$renderer, "h4", 49, 3);
		$$renderer.push(`Navigation</h4>`);
		pop_element();
		$$renderer.push(` <a href="#agency" class="text-white/60 hover:text-white font-sans text-sm transition-colors">`);
		push_element($$renderer, "a", 54, 3);
		$$renderer.push(`Home</a>`);
		pop_element();
		$$renderer.push(` <a href="#services" class="text-white/60 hover:text-white font-sans text-sm transition-colors">`);
		push_element($$renderer, "a", 59, 3);
		$$renderer.push(`Services</a>`);
		pop_element();
		$$renderer.push(` <a href="#work" class="text-white/60 hover:text-white font-sans text-sm transition-colors">`);
		push_element($$renderer, "a", 64, 3);
		$$renderer.push(`Selected Works</a>`);
		pop_element();
		$$renderer.push(` <a href="#faq" class="text-white/60 hover:text-white font-sans text-sm transition-colors">`);
		push_element($$renderer, "a", 69, 3);
		$$renderer.push(`FAQ</a>`);
		pop_element();
		$$renderer.push(`</div>`);
		pop_element();
		$$renderer.push(` <div class="col-span-1 flex flex-col gap-4">`);
		push_element($$renderer, "div", 76, 2);
		$$renderer.push(`<h4 class="font-mono text-xs uppercase tracking-widest text-[#3B82F6] mb-2">`);
		push_element($$renderer, "h4", 77, 3);
		$$renderer.push(`Socials</h4>`);
		pop_element();
		$$renderer.push(` <a href="https://twitter.com" class="text-white/60 hover:text-white font-sans text-sm transition-colors">`);
		push_element($$renderer, "a", 82, 3);
		$$renderer.push(`Twitter (X)</a>`);
		pop_element();
		$$renderer.push(` <a href="https://instagram.com" class="text-white/60 hover:text-white font-sans text-sm transition-colors">`);
		push_element($$renderer, "a", 87, 3);
		$$renderer.push(`Instagram</a>`);
		pop_element();
		$$renderer.push(` <a href="https://linkedin.com" class="text-white/60 hover:text-white font-sans text-sm transition-colors">`);
		push_element($$renderer, "a", 92, 3);
		$$renderer.push(`LinkedIn</a>`);
		pop_element();
		$$renderer.push(` <a href="https://github.com/YusufCeng1z" target="_blank" rel="noopener noreferrer" class="text-[#3B82F6] hover:text-white font-sans text-sm transition-colors">`);
		push_element($$renderer, "a", 97, 3);
		$$renderer.push(`GitHub</a>`);
		pop_element();
		$$renderer.push(`</div>`);
		pop_element();
		$$renderer.push(` <div class="col-span-1 flex flex-col gap-4">`);
		push_element($$renderer, "div", 106, 2);
		$$renderer.push(`<h4 class="font-mono text-xs uppercase tracking-widest text-[#3B82F6] mb-2">`);
		push_element($$renderer, "h4", 107, 3);
		$$renderer.push(`Newsletter</h4>`);
		pop_element();
		$$renderer.push(` <p class="text-white/40 font-sans text-sm">`);
		push_element($$renderer, "p", 112, 3);
		$$renderer.push(`Join our newsletter for insights on WebGL, Svelte, and design
				engineering.</p>`);
		pop_element();
		$$renderer.push(` <div class="mt-2 flex w-full relative">`);
		push_element($$renderer, "div", 116, 3);
		$$renderer.push(`<input type="email" placeholder="Enter your email" class="w-full bg-white/5 border border-white/10 rounded-full px-6 py-3 text-sm text-white focus:outline-none focus:border-white/40 transition-colors"/>`);
		push_element($$renderer, "input", 117, 4);
		pop_element();
		$$renderer.push(` <button class="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white text-black flex items-center justify-center hover:bg-[#3B82F6] hover:text-white transition-colors">`);
		push_element($$renderer, "button", 122, 4);
		$$renderer.push(`→</button>`);
		pop_element();
		$$renderer.push(`</div>`);
		pop_element();
		$$renderer.push(`</div>`);
		pop_element();
		$$renderer.push(`</div>`);
		pop_element();
		$$renderer.push(` <div class="px-6 md:px-24 max-w-7xl mx-auto pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6 md:gap-4 text-xs font-mono text-base tracking-wider relative z-10">`);
		push_element($$renderer, "div", 132, 1);
		$$renderer.push(`<p class="text-white/30">`);
		push_element($$renderer, "p", 135, 2);
		$$renderer.push(`© 2026 AURA Creative Studio.</p>`);
		pop_element();
		$$renderer.push(` <div class="flex flex-col md:flex-row items-center gap-4 md:gap-8">`);
		push_element($$renderer, "div", 137, 2);
		$$renderer.push(`<span class="text-white/50 text-sm font-sans font-light">`);
		push_element($$renderer, "span", 138, 3);
		$$renderer.push(`Engineered by <a href="https://github.com/YusufCeng1z" target="_blank" rel="noopener noreferrer" class="text-[#3B82F6] font-medium hover:text-white transition-colors duration-500 hover:underline underline-offset-4">`);
		push_element($$renderer, "a", 139, 18);
		$$renderer.push(`YusufCeng1z</a>`);
		pop_element();
		$$renderer.push(`</span>`);
		pop_element();
		$$renderer.push(` <div class="flex gap-6 text-white/30 hidden md:flex">`);
		push_element($$renderer, "div", 147, 3);
		$$renderer.push(`<a href="#privacy" class="hover:text-white/60 transition-colors">`);
		push_element($$renderer, "a", 148, 4);
		$$renderer.push(`Privacy Policy</a>`);
		pop_element();
		$$renderer.push(` <a href="#terms" class="hover:text-white/60 transition-colors">`);
		push_element($$renderer, "a", 151, 4);
		$$renderer.push(`Terms of Service</a>`);
		pop_element();
		$$renderer.push(`</div>`);
		pop_element();
		$$renderer.push(`</div>`);
		pop_element();
		$$renderer.push(`</div>`);
		pop_element();
		$$renderer.push(` <div class="absolute bottom-0 left-1/2 -translate-x-1/2 w-screen h-[400px] bg-[#3B82F6] opacity-5 blur-[200px] pointer-events-none">`);
		push_element($$renderer, "div", 159, 1);
		$$renderer.push(`</div>`);
		pop_element();
		$$renderer.push(`</footer>`);
		pop_element();
	}, Footer);
}
Footer.render = function() {
	throw new Error("Component.render(...) is no longer valid in Svelte 5. See https://svelte.dev/docs/svelte/v5-migration-guide#Components-are-no-longer-classes for more information");
};
//#endregion
//#region src/lib/components/Seo.svelte
Seo[FILENAME] = "src/lib/components/Seo.svelte";
function Seo($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		let { title = "AURA — Independent Creative Agency", description = "A globally awarded creative agency specializing in immersive web experiences, fluid motion design, and digital reality using SvelteKit & GSAP.", url = "https://aura-agency.vercel.app", image = "/og-image.png" } = $$props;
		head("gsrl61", $$renderer, ($$renderer) => {
			$$renderer.title(($$renderer) => {
				$$renderer.push(`<title>${escape_html(title)}</title>`);
			});
			$$renderer.push(`<meta name="title"${attr("content", title)}/>`);
			push_element($$renderer, "meta", 13, 1);
			pop_element();
			$$renderer.push(` <meta name="description"${attr("content", description)}/>`);
			push_element($$renderer, "meta", 14, 1);
			pop_element();
			$$renderer.push(` <meta name="robots" content="index, follow"/>`);
			push_element($$renderer, "meta", 15, 1);
			pop_element();
			$$renderer.push(` <meta name="theme-color" content="#050505"/>`);
			push_element($$renderer, "meta", 16, 1);
			pop_element();
			$$renderer.push(` <meta name="author" content="YusufCeng1z"/>`);
			push_element($$renderer, "meta", 17, 1);
			pop_element();
			$$renderer.push(` <meta property="og:type" content="website"/>`);
			push_element($$renderer, "meta", 20, 1);
			pop_element();
			$$renderer.push(` <meta property="og:url"${attr("content", url)}/>`);
			push_element($$renderer, "meta", 21, 1);
			pop_element();
			$$renderer.push(` <meta property="og:title"${attr("content", title)}/>`);
			push_element($$renderer, "meta", 22, 1);
			pop_element();
			$$renderer.push(` <meta property="og:description"${attr("content", description)}/>`);
			push_element($$renderer, "meta", 23, 1);
			pop_element();
			$$renderer.push(` <meta property="og:image"${attr("content", image)}/>`);
			push_element($$renderer, "meta", 24, 1);
			pop_element();
			$$renderer.push(` <meta property="twitter:card" content="summary_large_image"/>`);
			push_element($$renderer, "meta", 27, 1);
			pop_element();
			$$renderer.push(` <meta property="twitter:url"${attr("content", url)}/>`);
			push_element($$renderer, "meta", 28, 1);
			pop_element();
			$$renderer.push(` <meta property="twitter:title"${attr("content", title)}/>`);
			push_element($$renderer, "meta", 29, 1);
			pop_element();
			$$renderer.push(` <meta property="twitter:description"${attr("content", description)}/>`);
			push_element($$renderer, "meta", 30, 1);
			pop_element();
			$$renderer.push(` <meta property="twitter:image"${attr("content", image)}/>`);
			push_element($$renderer, "meta", 31, 1);
			pop_element();
		});
	}, Seo);
}
Seo.render = function() {
	throw new Error("Component.render(...) is no longer valid in Svelte 5. See https://svelte.dev/docs/svelte/v5-migration-guide#Components-are-no-longer-classes for more information");
};
//#endregion
//#region src/routes/+page.svelte
_page[FILENAME] = "src/routes/+page.svelte";
function _page($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		Seo($$renderer, {});
		$$renderer.push(`<!----> <div class="bg-[#050505] text-white">`);
		push_element($$renderer, "div", 16, 0);
		Hero($$renderer, {});
		$$renderer.push(`<!----> `);
		Manifesto($$renderer, {});
		$$renderer.push(`<!----> `);
		Brands($$renderer, {});
		$$renderer.push(`<!----> `);
		Showcase($$renderer, {});
		$$renderer.push(`<!----> `);
		WorksList($$renderer, {});
		$$renderer.push(`<!----> `);
		Testimonials($$renderer, {});
		$$renderer.push(`<!----> `);
		Stats($$renderer, {});
		$$renderer.push(`<!----> `);
		Faq($$renderer, {});
		$$renderer.push(`<!----> `);
		Footer($$renderer, {});
		$$renderer.push(`<!----></div>`);
		pop_element();
	}, _page);
}
_page.render = function() {
	throw new Error("Component.render(...) is no longer valid in Svelte 5. See https://svelte.dev/docs/svelte/v5-migration-guide#Components-are-no-longer-classes for more information");
};
//#endregion
export { _page as default };
