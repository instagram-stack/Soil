<script>
	import { onMount } from "svelte";
	import gsap from "gsap";
	import ScrollTrigger from "gsap/ScrollTrigger";
	import ArrowUpRight from "@lucide/svelte/icons/arrow-up-right";
	import Sparkles from "@lucide/svelte/icons/sparkles";
	import Code from "@lucide/svelte/icons/code";
	import Compass from "@lucide/svelte/icons/compass";

	let sectionRef = $state();
	let titleRef = $state();
	let cardsRef = $state([]);

	const pillars = [
		{
			number: "01",
			title: "Spatial & Motion Craft",
			description:
				"We sculpt fluid web interactions using purposeful physics and GSAP-driven choreography, creating digital artifacts that feel tactile and alive.",
			icon: Sparkles,
		},
		{
			number: "02",
			title: "Creative Engineering",
			description:
				"Bespoke architectures built on modern component frameworks, custom shaders, and strict 60fps rendering budgets with zero template bloat.",
			icon: Code,
		},
		{
			number: "03",
			title: "Enduring Identity",
			description:
				"We design brand narratives and interactive experiences built to dominate cultural consciousness, rather than chase ephemeral design trends.",
			icon: Compass,
		},
	];

	onMount(() => {
		gsap.registerPlugin(ScrollTrigger);

		if (sectionRef && titleRef) {
			gsap.fromTo(
				titleRef,
				{ y: 40, opacity: 0 },
				{
					y: 0,
					opacity: 1,
					duration: 1.2,
					ease: "power3.out",
					scrollTrigger: {
						trigger: titleRef,
						start: "top 85%",
					},
				},
			);
		}

		if (cardsRef.length > 0) {
			gsap.fromTo(
				cardsRef,
				{ y: 50, opacity: 0 },
				{
					y: 0,
					opacity: 1,
					duration: 1,
					stagger: 0.15,
					ease: "power3.out",
					scrollTrigger: {
						trigger: sectionRef,
						start: "top 70%",
					},
				},
			);
		}
	});
</script>

<section
	id="about"
	bind:this={sectionRef}
	class="w-full bg-[#050505] text-white py-32 md:py-40 px-6 md:px-24 border-t border-white/10 relative overflow-hidden"
>
	<!-- Ambient Acid Lime Glow -->
	<div
		class="absolute top-1/3 left-0 -translate-x-1/2 w-[500px] h-[500px] bg-[#E6FF5A] opacity-[0.03] blur-[180px] rounded-full pointer-events-none"
	></div>

	<div class="max-w-7xl mx-auto">
		<!-- Section Header -->
		<div class="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
			<div>
				<div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-[#E6FF5A] uppercase tracking-widest mb-6">
					<span class="w-1.5 h-1.5 rounded-full bg-[#E6FF5A] animate-pulse"></span>
					About Soil
				</div>
				<h2
					bind:this={titleRef}
					class="text-4xl sm:text-6xl md:text-7xl font-serif tracking-tight leading-[1.05] max-w-4xl"
				>
					Rooted in imagination,
					<br />
					<span class="italic text-white/40">cultivated with engineering precision.</span>
				</h2>
			</div>

			<div class="max-w-md flex flex-col items-start gap-5">
				<p class="text-white/50 text-base md:text-lg font-sans font-light leading-relaxed">
					Soil is an independent creative agency and digital engineering studio. We partner with visionaries to craft immersive, high-velocity digital experiences that redefine how modern brands exist online.
				</p>
				<a
					href="/about"
					class="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#E6FF5A] hover:text-white transition-colors group"
				>
					<span>Explore Full Studio Story & Team</span>
					<ArrowUpRight class="w-4 h-4 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
				</a>
			</div>
		</div>

		<!-- Pillars Grid -->
		<div class="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-20">
			{#each pillars as pillar, i}
				<div
					bind:this={cardsRef[i]}
					class="group relative bg-white/[0.02] hover:bg-white/[0.04] border border-white/10 hover:border-[#E6FF5A]/40 rounded-2xl p-8 transition-all duration-500 flex flex-col justify-between"
				>
					<div class="flex items-center justify-between mb-12">
						<span class="font-mono text-xs text-[#E6FF5A] tracking-widest uppercase">
							{pillar.number}
						</span>
						<div class="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/70 group-hover:text-[#E6FF5A] group-hover:border-[#E6FF5A]/30 transition-all duration-500">
							<pillar.icon class="w-5 h-5" />
						</div>
					</div>

					<div>
						<h3 class="text-2xl font-serif text-white mb-4 group-hover:text-white transition-colors">
							{pillar.title}
						</h3>
						<p class="text-white/50 text-sm font-sans leading-relaxed font-light">
							{pillar.description}
						</p>
					</div>

					<!-- Bottom Accent Line on Hover -->
					<div class="mt-8 pt-6 border-t border-white/5 flex items-center justify-between">
						<span class="text-xs font-mono text-white/30 uppercase tracking-wider">Discipline Focus</span>
						<ArrowUpRight class="w-4 h-4 text-white/30 group-hover:text-[#E6FF5A] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300" />
					</div>
				</div>
			{/each}
		</div>

		<!-- Studio Ethos & Quick Facts Bar -->
		<div class="border border-white/10 rounded-2xl p-8 md:p-12 bg-white/[0.01] grid grid-cols-2 md:grid-cols-4 gap-8">
			<div>
				<span class="block text-xs font-mono text-white/30 uppercase tracking-widest mb-2">Studio Foundation</span>
				<p class="text-xl md:text-2xl font-serif text-white">Est. 2024</p>
				<span class="text-xs text-white/50 font-sans">Autonomous Studio</span>
			</div>
			<div>
				<span class="block text-xs font-mono text-white/30 uppercase tracking-widest mb-2">Operating Base</span>
				<p class="text-xl md:text-2xl font-serif text-white">Global Remote</p>
				<span class="text-xs text-white/50 font-sans">Distributed Network</span>
			</div>
			<div>
				<span class="block text-xs font-mono text-white/30 uppercase tracking-widest mb-2">Frame Target</span>
				<p class="text-xl md:text-2xl font-serif text-[#E6FF5A]">60 FPS</p>
				<span class="text-xs text-white/50 font-sans">Zero Lag Budget</span>
			</div>
			<div>
				<span class="block text-xs font-mono text-white/30 uppercase tracking-widest mb-2">Design Doctrine</span>
				<p class="text-xl md:text-2xl font-serif text-white">Anti-Generic</p>
				<span class="text-xs text-white/50 font-sans">Custom Tailored Always</span>
			</div>
		</div>
	</div>
</section>
