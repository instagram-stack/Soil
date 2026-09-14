<script>
	import { onMount } from "svelte";
	import gsap from "gsap";
	import ScrollTrigger from "gsap/ScrollTrigger";
	import ArrowUpRight from "@lucide/svelte/icons/arrow-up-right";
	import ArrowLeft from "@lucide/svelte/icons/arrow-left";
	import Sparkles from "@lucide/svelte/icons/sparkles";
	import Filter from "@lucide/svelte/icons/filter";
	import ExternalLink from "@lucide/svelte/icons/external-link";

	let activeFilter = $state("All");
	let cardsRef = $state([]);
	let titleRef = $state();

	const categories = [
		"All",
		"Spatial & 3D",
		"Interactive Architecture",
		"E-Commerce",
		"Brand Systems",
	];

	const projects = [
		{
			id: "01",
			name: "Nike Forward Experience",
			client: "Nike Global Innovation",
			category: "E-Commerce",
			year: "2025",
			metric: "+180% Checkout Conversion",
			award: "FWA of the Day / Awwwards SOTD",
			description:
				"A radical rethink of digital apparel shopping utilizing procedural 3D yarn simulations, instant spatial size fitting, and sub-second checkout pipelines.",
			tech: ["SvelteKit", "Three.js", "GSAP Physics", "Tailwind"],
			color: "from-blue-500/20 to-transparent",
		},
		{
			id: "02",
			name: "Ozone Spatial WebGL",
			client: "Ozone Network",
			category: "Spatial & 3D",
			year: "2025",
			metric: "Sub-12ms Frame Rendering",
			award: "CSSDA Best Innovation",
			description:
				"Architecting a decentralized spatial canvas. Users traverse multi-layered data clusters through bespoke GLSL compute shaders and dynamic camera choreography.",
			tech: ["WebGL 2.0", "GLSL Shaders", "Lenis Smooth", "TypeScript"],
			color: "from-[#E6FF5A]/20 to-transparent",
		},
		{
			id: "03",
			name: "Lumina Intelligence UI",
			client: "Lumina Labs",
			category: "Interactive Architecture",
			year: "2024",
			metric: "4.2M Monthly Active Users",
			award: "Design Systems Excellence '24",
			description:
				"An ultra-minimalist spatial dashboard for predictive machine intelligence. Designed with deep dark mode luxury, micro-haptics, and zero cognitive friction.",
			tech: ["Svelte 5 Runes", "Tailwind CSS v4", "Lucide", "Vite SSR"],
			color: "from-purple-500/20 to-transparent",
		},
		{
			id: "04",
			name: "Aura Creative Runtime",
			client: "Open Source Collective",
			category: "Brand Systems",
			year: "2024",
			metric: "18k GitHub Stars",
			award: "Developer Ecosystem Winner",
			description:
				"A high-velocity creative agency scaffolding toolkit empowering developers to orchestrate 60 FPS motion timelines and reactive state trees effortlessly.",
			tech: ["GSAP 3", "ScrollTrigger", "Lenis Engine", "Modern CSS"],
			color: "from-emerald-500/20 to-transparent",
		},
		{
			id: "05",
			name: "Chronos Timepiece Atelier",
			client: "Chronos Swiss",
			category: "Spatial & 3D",
			year: "2024",
			metric: "94% Immersion Time Increase",
			award: "Luxury Digital Award",
			description:
				"Interactive 360-degree exploded mechanical watch movement custom-rendered in real-time browser canvas with realistic metallic caustics and sound design.",
			tech: ["WebGL", "Three.js", "Web Audio API", "SvelteKit"],
			color: "from-amber-500/20 to-transparent",
		},
		{
			id: "06",
			name: "Verve Kinetic Type System",
			client: "Verve Foundry",
			category: "Brand Systems",
			year: "2023",
			metric: "Global Type Industry Feature",
			award: "Tokyo TDC Annual Selection",
			description:
				"Variable font playground reacting in real time to mouse velocity, microphone audio pressure, and ambient device gyroscope inputs.",
			tech: ["Variable Fonts", "Canvas 2D", "GSAP Timeline", "CSS Variables"],
			color: "from-rose-500/20 to-transparent",
		},
	];

	let filteredProjects = $derived(
		activeFilter === "All"
			? projects
			: projects.filter((p) => p.category === activeFilter),
	);

	onMount(() => {
		gsap.registerPlugin(ScrollTrigger);

		if (titleRef) {
			gsap.fromTo(
				titleRef,
				{ opacity: 0, y: 30 },
				{ opacity: 1, y: 0, duration: 1.1, ease: "power3.out" },
			);
		}

		ScrollTrigger.refresh();
	});
</script>

<svelte:head>
	<title>Selected Works — Soil Creative Engineering</title>
	<meta
		name="description"
		content="Explore curated digital flagships, spatial WebGL platforms, and motion systems engineered by Soil."
	/>
</svelte:head>

<div class="relative w-full overflow-hidden pt-28 md:pt-36">
	<!-- Ambient Background Glow -->
	<div
		class="absolute top-24 right-1/4 translate-x-1/2 w-[700px] h-[700px] bg-[#E6FF5A] opacity-[0.035] blur-[220px] rounded-full pointer-events-none"
	></div>

	<!-- Hero -->
	<section class="px-6 md:px-24 max-w-7xl mx-auto pb-16 md:pb-24">
		<!-- Back breadcrumb -->
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
			Portfolio & Case Studies
		</div>

		<div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end mb-16">
			<div class="lg:col-span-8">
				<h1
					bind:this={titleRef}
					class="text-5xl sm:text-7xl lg:text-8xl font-serif tracking-tight leading-[0.98] text-white"
				>
					Curated works,
					<br />
					<span class="italic text-white/40">uncompromising</span>
					<br />
					execution.
				</h1>
			</div>

			<div class="lg:col-span-4 flex flex-col gap-6">
				<p
					class="text-white/60 text-lg sm:text-xl font-sans font-light leading-relaxed"
				>
					A deliberate selection of interactive flagships, WebGL experiences, and brand platforms built to reshape industry standards.
				</p>
				<div
					class="flex items-center gap-6 text-xs font-mono text-white/40 uppercase tracking-wider"
				>
					<span>Projects Completed: 50+</span>
					<span>•</span>
					<span>Avg FPS: 60</span>
				</div>
			</div>
		</div>

		<!-- Filter Tabs -->
		<div
			class="flex items-center gap-2 overflow-x-auto pb-4 no-scrollbar border-b border-white/10"
		>
			<div class="text-xs font-mono text-white/40 uppercase mr-3 flex items-center gap-1.5 hidden sm:flex">
				<Filter class="w-3.5 h-3.5 text-[#E6FF5A]" />
				Filter:
			</div>
			{#each categories as category}
				<button
					type="button"
					onclick={() => (activeFilter = category)}
					class="px-5 py-2 rounded-full text-xs font-mono uppercase tracking-wider transition-all whitespace-nowrap cursor-pointer {activeFilter ===
					category
						? 'bg-[#E6FF5A] text-black font-semibold'
						: 'bg-white/5 hover:bg-white/10 text-white/70 border border-white/10'}"
				>
					{category}
				</button>
			{/each}
		</div>
	</section>

	<!-- Projects Grid -->
	<section class="px-6 md:px-24 max-w-7xl mx-auto pb-32">
		<div class="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
			{#each filteredProjects as project, i}
				<article
					class="group relative bg-white/[0.02] hover:bg-white/[0.04] border border-white/10 hover:border-[#E6FF5A]/40 rounded-3xl p-8 md:p-10 transition-all duration-500 flex flex-col justify-between overflow-hidden"
				>
					<!-- Subtle Hover Linear Background Glow -->
					<div
						class="absolute inset-0 bg-linear-to-br {project.color} opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
					></div>

					<div class="relative z-10">
						<!-- Card Header -->
						<div class="flex items-center justify-between mb-8">
							<div class="flex items-center gap-3">
								<span
									class="text-xs font-mono text-[#E6FF5A] tracking-widest font-semibold"
								>
									{project.id}
								</span>
								<span class="text-xs font-mono text-white/40">•</span>
								<span
									class="text-xs font-mono text-white/50 uppercase tracking-wider"
								>
									{project.category}
								</span>
							</div>

							<span
								class="text-xs font-mono px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white/70"
							>
								{project.year}
							</span>
						</div>

						<!-- Title & Client -->
						<h2
							class="text-3xl sm:text-4xl font-serif text-white mb-2 group-hover:text-white transition-colors"
						>
							{project.name}
						</h2>
						<p
							class="text-xs font-mono text-[#E6FF5A] uppercase tracking-wider mb-6"
						>
							Client: {project.client}
						</p>

						<!-- Description -->
						<p
							class="text-white/60 text-sm md:text-base font-sans font-light leading-relaxed mb-8"
						>
							{project.description}
						</p>

						<!-- Metrics / Honor Pill -->
						<div
							class="mb-8 p-4 rounded-xl bg-white/[0.03] border border-white/5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2"
						>
							<div>
								<span
									class="block text-[10px] font-mono uppercase text-white/40 tracking-wider"
									>Measured Result</span
								>
								<span
									class="text-sm font-sans font-medium text-white"
									>{project.metric}</span
								>
							</div>
							<div class="sm:text-right">
								<span
									class="block text-[10px] font-mono uppercase text-[#E6FF5A] tracking-wider"
									>Accolade</span
								>
								<span class="text-xs font-mono text-white/70"
									>{project.award}</span
								>
							</div>
						</div>
					</div>

					<!-- Tech Stack & Action -->
					<div
						class="relative z-10 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
					>
						<div class="flex flex-wrap gap-2">
							{#each project.tech as t}
								<span
									class="px-2.5 py-1 rounded-md text-[11px] font-mono bg-white/5 text-white/60 border border-white/5"
								>
									{t}
								</span>
							{/each}
						</div>

						<a
							href="/contact"
							class="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-white/70 group-hover:text-[#E6FF5A] transition-colors"
						>
							<span>Case Study</span>
							<ArrowUpRight
								class="w-4 h-4 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
							/>
						</a>
					</div>
				</article>
			{/each}
		</div>
	</section>

	<!-- Complete Works Archive Table -->
	<section
		class="w-full bg-[#080808] py-24 md:py-32 px-6 md:px-24 border-t border-white/10"
	>
		<div class="max-w-7xl mx-auto">
			<div class="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
				<div>
					<span
						class="text-xs font-mono uppercase tracking-widest text-[#E6FF5A] block mb-2"
						>Repository</span
					>
					<h3 class="text-3xl md:text-5xl font-serif text-white">
						All Selected Engagements
					</h3>
				</div>
				<p class="text-white/50 text-sm font-sans max-w-sm font-light">
					A comprehensive chronicle of digital flagships, experimental installations, and motion frameworks.
				</p>
			</div>

			<!-- Table -->
			<div class="border border-white/10 rounded-2xl overflow-hidden bg-white/[0.01]">
				<div
					class="grid grid-cols-12 p-4 md:p-6 border-b border-white/10 text-xs font-mono uppercase tracking-widest text-white/40"
				>
					<div class="col-span-2 md:col-span-1">ID</div>
					<div class="col-span-6 md:col-span-4">Project & Client</div>
					<div class="hidden md:block md:col-span-4">Discipline</div>
					<div class="col-span-4 md:col-span-2 text-right md:text-left">Year</div>
					<div class="hidden md:block md:col-span-1 text-right">View</div>
				</div>

				{#each projects as project}
					<a
						href="/contact"
						class="grid grid-cols-12 p-4 md:p-6 border-b border-white/5 hover:bg-white/[0.03] transition-colors items-center group cursor-pointer"
					>
						<div class="col-span-2 md:col-span-1 font-mono text-xs text-[#E6FF5A]">
							{project.id}
						</div>
						<div class="col-span-6 md:col-span-4">
							<span class="text-base md:text-lg font-serif text-white block group-hover:text-[#E6FF5A] transition-colors">
								{project.name}
							</span>
							<span class="text-xs font-sans text-white/40">
								{project.client}
							</span>
						</div>
						<div class="hidden md:block md:col-span-4 text-sm text-white/50 font-sans font-light">
							{project.category}
						</div>
						<div class="col-span-4 md:col-span-2 text-right md:text-left font-mono text-xs text-white/40">
							{project.year}
						</div>
						<div class="hidden md:flex md:col-span-1 justify-end">
							<ArrowUpRight class="w-4 h-4 text-white/30 group-hover:text-[#E6FF5A] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
						</div>
					</a>
				{/each}
			</div>
		</div>
	</section>

	<!-- Call to Action -->
	<section class="py-24 md:py-32 px-6 md:px-24 max-w-7xl mx-auto">
		<div
			class="p-10 md:p-14 rounded-3xl bg-linear-to-br from-white/[0.04] to-transparent border border-white/10 flex flex-col md:flex-row items-center justify-between gap-8"
		>
			<div>
				<span class="text-xs font-mono text-[#E6FF5A] uppercase tracking-widest block mb-2"
					>Next Chapter</span
				>
				<h3 class="text-3xl md:text-4xl font-serif text-white mb-2">
					Have a visionary project in mind?
				</h3>
				<p class="text-white/50 font-sans text-sm font-light">
					Let's engineer an experience that commands the category.
				</p>
			</div>
			<a
				href="/contact"
				class="px-8 py-4 rounded-full bg-[#E6FF5A] text-black font-medium text-sm hover:scale-105 transition-all text-center whitespace-nowrap"
			>
				Initiate Your Project
			</a>
		</div>
	</section>
</div>
