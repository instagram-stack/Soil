<script>
	import { onMount } from "svelte";
	import gsap from "gsap";
	import ScrollTrigger from "gsap/ScrollTrigger";
	import ArrowUpRight from "@lucide/svelte/icons/arrow-up-right";
	import ArrowLeft from "@lucide/svelte/icons/arrow-left";
	import Sparkles from "@lucide/svelte/icons/sparkles";
	import Code from "@lucide/svelte/icons/code";
	import Compass from "@lucide/svelte/icons/compass";
	import Layers from "@lucide/svelte/icons/layers";
	import ShieldCheck from "@lucide/svelte/icons/shield-check";
	import Zap from "@lucide/svelte/icons/zap";
	import Award from "@lucide/svelte/icons/award";
	import Globe from "@lucide/svelte/icons/globe";

	let heroRef = $state();
	let titleRef = $state();
	let pillarsRef = $state([]);
	let teamRef = $state([]);
	let processRef = $state([]);

	const corePillars = [
		{
			num: "01",
			title: "Spatial Kinetics & Physics",
			summary:
				"We reject rigid, static layouts. Every interaction is calculated with real-world physics, fluid mass, and GSAP timeline choreography that feels intuitive under your fingertips.",
			icon: Sparkles,
			tags: ["GSAP 3", "60 FPS Strict", "Lenis Smooth"],
		},
		{
			num: "02",
			title: "Radical Creative Engineering",
			summary:
				"Zero boilerplate. We build on lean, reactive frameworks like Svelte 5 with custom shaders and micro-optimized DOM trees to guarantee instantaneous load and execution speeds.",
			icon: Code,
			tags: ["Svelte 5 Runes", "Tailwind CSS", "Zero Bloat"],
		},
		{
			num: "03",
			title: "Anti-Generic Visual Direction",
			summary:
				"Modern web design has grown predictable and homogenized. We carve distinct typographic tensions, dark atmospheric depth, and signature Acid Lime electric accents that refuse to blend in.",
			icon: Compass,
			tags: ["Instrument Serif", "Dark Luxury", "Acid Accent"],
		},
		{
			num: "04",
			title: "Enduring Cultural Permanence",
			summary:
				"We do not build disposable marketing sites. We engineer digital flagships that command respect, survive ephemeral trend cycles, and scale effortlessly alongside category leaders.",
			icon: Layers,
			tags: ["Brand Architecture", "Long-term Value", "Global Reach"],
		},
	];

	const collective = [
		{
			name: "Neeraj Verma",
			role: "Founder & Creative Technologist",
			focus: "Creative Direction, High-Performance Interaction Architecture, GSAP Systems",
			tag: "Leadership",
		},
		{
			name: "Elena Rostova",
			role: "Head of Spatial Design",
			focus: "Design Systems, Typographic Tension, Dimensional Aesthetics",
			tag: "Design",
		},
		{
			name: "Marcus Thorne",
			role: "Lead Systems Engineer",
			focus: "Reactive Runtime Optimization, WebGL Shaders, Edge Infrastructure",
			tag: "Engineering",
		},
		{
			name: "Chloe Saint-Laurent",
			role: "Editorial & Strategy Director",
			focus: "Brand Narratives, Category Positioning, Cultural Research",
			tag: "Strategy",
		},
	];

	const executionPipeline = [
		{
			step: "Phase 01",
			title: "Anatomy of Intent",
			detail:
				"We dissect your brand's uncompromising truth, competitive landscape, and audience psyche to formulate an airtight creative premise.",
		},
		{
			step: "Phase 02",
			title: "Kinetic Code Prototyping",
			detail:
				"Rather than lingering in static canvas mockups, we prototype directly inside high-frame-rate code to test physics and micro-interactions early.",
		},
		{
			step: "Phase 03",
			title: "Typographic & Spatial Choreography",
			detail:
				"Harmonizing display typography, atmospheric radial gradients, and fluid layout scaling across the entire spectrum of viewport sizes.",
		},
		{
			step: "Phase 04",
			title: "Edge Hardening & Deployment",
			detail:
				"Rigorous performance profiling, zero-layout-shift audits, and global edge caching to ensure sub-second global interaction times.",
		},
	];

	onMount(() => {
		gsap.registerPlugin(ScrollTrigger);

		// Animate hero elements
		if (titleRef) {
			gsap.fromTo(
				titleRef,
				{ opacity: 0, y: 30 },
				{ opacity: 1, y: 0, duration: 1.1, ease: "power3.out" },
			);
		}

		// Animate pillars
		if (pillarsRef.length > 0) {
			gsap.fromTo(
				pillarsRef,
				{ opacity: 0, y: 40 },
				{
					opacity: 1,
					y: 0,
					duration: 0.9,
					stagger: 0.12,
					ease: "power3.out",
					scrollTrigger: {
						trigger: "#about-pillars",
						start: "top 75%",
					},
				},
			);
		}

		// Animate team cards
		if (teamRef.length > 0) {
			gsap.fromTo(
				teamRef,
				{ opacity: 0, y: 30 },
				{
					opacity: 1,
					y: 0,
					duration: 0.8,
					stagger: 0.1,
					ease: "power3.out",
					scrollTrigger: {
						trigger: "#about-collective",
						start: "top 80%",
					},
				},
			);
		}

		ScrollTrigger.refresh();
	});
</script>

<svelte:head>
	<title>About Soil — The Creative Engineering Studio</title>
	<meta
		name="description"
		content="Discover the philosophy, engineering standards, and team behind Soil — an independent creative agency crafting high-velocity digital experiences."
	/>
</svelte:head>

<div class="relative w-full overflow-hidden pt-28 md:pt-36">
	<!-- Ambient Background Glows -->
	<div
		class="absolute top-20 left-1/4 -translate-x-1/2 w-[700px] h-[700px] bg-[#E6FF5A] opacity-[0.035] blur-[220px] rounded-full pointer-events-none"
	></div>
	<div
		class="absolute top-1/2 right-0 translate-x-1/3 w-[600px] h-[600px] bg-[#E6FF5A] opacity-[0.025] blur-[200px] rounded-full pointer-events-none"
	></div>

	<!-- Hero Section -->
	<section
		bind:this={heroRef}
		class="px-6 md:px-24 max-w-7xl mx-auto pb-24 md:pb-36"
	>
		<!-- Breadcrumb / Back Link -->
		<div class="mb-12">
			<a
				href="/"
				class="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-white/50 hover:text-[#E6FF5A] transition-colors group"
			>
				<ArrowLeft
					class="w-4 h-4 transform group-hover:-translate-x-1 transition-transform"
				/>
				Back to Overview
			</a>
		</div>

		<!-- Chip -->
		<div
			class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-[#E6FF5A] uppercase tracking-widest mb-8"
		>
			<span class="w-2 h-2 rounded-full bg-[#E6FF5A] animate-pulse"></span>
			The Soil Manifesto & Studio
		</div>

		<!-- Headline -->
		<div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">
			<div class="lg:col-span-8">
				<h1
					bind:this={titleRef}
					class="text-5xl sm:text-7xl lg:text-8xl font-serif tracking-tight leading-[0.98] text-white"
				>
					Digital monuments
					<br />
					<span class="italic text-white/40">engineered for</span>
					<br />
					defiant brands.
				</h1>
			</div>

			<div class="lg:col-span-4 flex flex-col gap-6">
				<p
					class="text-white/60 text-lg sm:text-xl font-sans font-light leading-relaxed"
				>
					Soil is an independent creative agency and digital engineering atelier. We exist to eradicate generic corporate templates and replace them with kinetic, razor-sharp digital art.
				</p>
				<div class="flex items-center gap-4 text-xs font-mono text-white/40 uppercase tracking-wider">
					<span>Location: Global</span>
					<span>•</span>
					<span>Engine: Svelte + GSAP</span>
				</div>
			</div>
		</div>

		<!-- Quick Metric Highlights Bar -->
		<div
			class="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 p-8 md:p-10 rounded-2xl bg-white/[0.02] border border-white/10"
		>
			<div class="flex flex-col">
				<span class="text-xs font-mono uppercase tracking-widest text-white/40 mb-1">FPS Target</span>
				<span class="text-3xl md:text-5xl font-serif text-[#E6FF5A]">60.0</span>
				<span class="text-xs text-white/50 font-sans mt-1">Locked Fluid Budget</span>
			</div>
			<div class="flex flex-col">
				<span class="text-xs font-mono uppercase tracking-widest text-white/40 mb-1">Founding</span>
				<span class="text-3xl md:text-5xl font-serif text-white">2024</span>
				<span class="text-xs text-white/50 font-sans mt-1">Autonomous Studio</span>
			</div>
			<div class="flex flex-col">
				<span class="text-xs font-mono uppercase tracking-widest text-white/40 mb-1">Impact</span>
				<span class="text-3xl md:text-5xl font-serif text-white">120M+</span>
				<span class="text-xs text-white/50 font-sans mt-1">Global Touchpoints</span>
			</div>
			<div class="flex flex-col">
				<span class="text-xs font-mono uppercase tracking-widest text-white/40 mb-1">Accolades</span>
				<span class="text-3xl md:text-5xl font-serif text-white">34+</span>
				<span class="text-xs text-white/50 font-sans mt-1">Design & Tech Honors</span>
			</div>
		</div>
	</section>

	<!-- Four Pillars of Craft -->
	<section
		id="about-pillars"
		class="w-full bg-[#080808] py-28 md:py-36 px-6 md:px-24 border-t border-b border-white/10 relative"
	>
		<div class="max-w-7xl mx-auto">
			<div class="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
				<div>
					<span
						class="text-xs font-mono uppercase tracking-widest text-[#E6FF5A] block mb-3"
						>Our Philosophy</span
					>
					<h2
						class="text-4xl md:text-6xl font-serif text-white tracking-tight"
					>
						The Pillars of Precision
					</h2>
				</div>
				<p class="text-white/50 max-w-md font-sans text-sm md:text-base font-light leading-relaxed">
					Every line of code and every optical balance decision in our studio is filtered through these four non-negotiable standards.
				</p>
			</div>

			<div class="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
				{#each corePillars as pillar, i}
					<div
						bind:this={pillarsRef[i]}
						class="group p-8 md:p-10 rounded-2xl bg-white/[0.02] hover:bg-white/[0.04] border border-white/10 hover:border-[#E6FF5A]/40 transition-all duration-500 flex flex-col justify-between"
					>
						<div>
							<div class="flex items-center justify-between mb-8">
								<span
									class="font-mono text-sm text-[#E6FF5A] font-medium tracking-widest"
									>{pillar.num}</span
								>
								<div
									class="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white/60 group-hover:text-[#E6FF5A] group-hover:border-[#E6FF5A]/30 transition-colors"
								>
									<pillar.icon class="w-5 h-5" />
								</div>
							</div>

							<h3 class="text-2xl md:text-3xl font-serif text-white mb-4">
								{pillar.title}
							</h3>
							<p
								class="text-white/50 text-sm md:text-base font-sans font-light leading-relaxed mb-8"
							>
								{pillar.summary}
							</p>
						</div>

						<div class="flex flex-wrap gap-2 pt-6 border-t border-white/5">
							{#each pillar.tags as tag}
								<span
									class="px-3 py-1 rounded-full text-xs font-mono bg-white/5 text-white/60 border border-white/10"
									>{tag}</span
								>
							{/each}
						</div>
					</div>
				{/each}
			</div>
		</div>
	</section>

	<!-- The Execution Pipeline -->
	<section class="py-28 md:py-36 px-6 md:px-24 max-w-7xl mx-auto">
		<div class="mb-20">
			<span
				class="text-xs font-mono uppercase tracking-widest text-[#E6FF5A] block mb-3"
				>The Methodology</span
			>
			<h2 class="text-4xl md:text-6xl font-serif text-white tracking-tight">
				How We Bring Visions to Life
			</h2>
		</div>

		<div class="grid grid-cols-1 md:grid-cols-4 gap-6">
			{#each executionPipeline as p, i}
				<div
					bind:this={processRef[i]}
					class="p-6 md:p-8 rounded-2xl bg-white/[0.015] border border-white/10 flex flex-col justify-between relative overflow-hidden"
				>
					<div
						class="text-xs font-mono text-[#E6FF5A] uppercase tracking-widest mb-6"
					>
						{p.step}
					</div>
					<div>
						<h3 class="text-xl font-serif text-white mb-3">{p.title}</h3>
						<p class="text-white/50 text-sm font-sans font-light leading-relaxed">
							{p.detail}
						</p>
					</div>
					<div class="mt-8 pt-4 border-t border-white/5 text-white/20 font-mono text-xs">
						0{i + 1} / 04
					</div>
				</div>
			{/each}
		</div>
	</section>

	<!-- The Collective / Leadership Section -->
	<section
		id="about-collective"
		class="w-full bg-[#080808] py-28 md:py-36 px-6 md:px-24 border-t border-b border-white/10"
	>
		<div class="max-w-7xl mx-auto">
			<div class="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
				<div>
					<span
						class="text-xs font-mono uppercase tracking-widest text-[#E6FF5A] block mb-3"
						>The Collective</span
					>
					<h2
						class="text-4xl md:text-6xl font-serif text-white tracking-tight"
					>
						Minds Behind The Machine
					</h2>
				</div>
				<p class="text-white/50 max-w-md font-sans text-sm md:text-base font-light leading-relaxed">
					A compact, elite brigade of engineers, interaction designers, and creative directors. No account managers or middle-tier dilution.
				</p>
			</div>

			<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
				{#each collective as member, i}
					<div
						bind:this={teamRef[i]}
						class="p-6 md:p-8 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-[#E6FF5A]/40 transition-all duration-300 flex flex-col justify-between"
					>
						<div>
							<div class="flex items-center justify-between mb-6">
								<span
									class="text-[11px] font-mono uppercase px-2.5 py-1 rounded bg-white/5 border border-white/10 text-white/60"
									>{member.tag}</span
								>
								<span class="w-2 h-2 rounded-full bg-[#E6FF5A]"></span>
							</div>

							<h3 class="text-2xl font-serif text-white mb-1">
								{member.name}
							</h3>
							<p class="text-xs font-mono text-[#E6FF5A] uppercase tracking-wider mb-4">
								{member.role}
							</p>
							<p class="text-white/50 text-xs font-sans font-light leading-relaxed">
								{member.focus}
							</p>
						</div>

						<div class="mt-8 pt-4 border-t border-white/5 flex items-center justify-between text-white/30 text-xs font-mono">
							<span>Soil Studio</span>
							<ArrowUpRight class="w-3.5 h-3.5 text-white/40" />
						</div>
					</div>
				{/each}
			</div>
		</div>
	</section>

	<!-- Call to Action Banner -->
	<section class="py-28 md:py-36 px-6 md:px-24 max-w-7xl mx-auto">
		<div
			class="p-10 md:p-16 rounded-3xl bg-linear-to-br from-white/[0.04] to-transparent border border-white/10 flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden"
		>
			<div
				class="absolute -right-20 -bottom-20 w-80 h-80 bg-[#E6FF5A] opacity-10 blur-[120px] rounded-full pointer-events-none"
			></div>

			<div class="max-w-xl z-10">
				<span
					class="text-xs font-mono uppercase tracking-widest text-[#E6FF5A] block mb-3"
					>Initiate Collaboration</span
				>
				<h3 class="text-3xl md:text-5xl font-serif text-white tracking-tight mb-4">
					Ready to engineer something extraordinary?
				</h3>
				<p class="text-white/50 text-sm md:text-base font-sans font-light leading-relaxed">
					We partner with ambitious enterprises and audacious founders looking to make an undeniable mark.
				</p>
			</div>

			<div class="flex flex-col sm:flex-row gap-4 z-10 w-full md:w-auto">
				<a
					href="mailto:hello@soil.agency"
					class="px-8 py-4 rounded-full bg-[#E6FF5A] text-black font-medium text-sm hover:scale-105 transition-all text-center"
				>
					Start a Conversation
				</a>
				<a
					href="/#work"
					class="px-8 py-4 rounded-full bg-white/5 hover:bg-white/10 text-white border border-white/10 font-medium text-sm transition-all text-center"
				>
					View Selected Works
				</a>
			</div>
		</div>
	</section>
</div>
