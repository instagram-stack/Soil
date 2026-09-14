<script>
	import { onMount } from "svelte";
	import gsap from "gsap";
	import ScrollTrigger from "gsap/ScrollTrigger";
	import ArrowUpRight from "@lucide/svelte/icons/arrow-up-right";
	import ArrowLeft from "@lucide/svelte/icons/arrow-left";
	import Sparkles from "@lucide/svelte/icons/sparkles";
	import Award from "@lucide/svelte/icons/award";
	import Globe from "@lucide/svelte/icons/globe";
	import Shield from "@lucide/svelte/icons/shield";
	import Quote from "@lucide/svelte/icons/quote";

	let titleRef = $state();

	const commandments = [
		{
			id: "I",
			title: "60 FPS Is Non-Negotiable",
			desc: "If an interaction drops frames, it is a defect. We budget every millisecond of GPU and CPU cycles to ensure buttery fluid physics.",
		},
		{
			id: "II",
			title: "Rejection of the Disposable",
			desc: "The web is clogged with cookie-cutter SaaS templates that look indistinguishable. We build digital flagships with distinct cultural permanence.",
		},
		{
			id: "III",
			title: "Code Is Our Direct Canvas",
			desc: "Designers who cannot reason in code produce static illusions. We engineer directly in high-refresh-rate browsers to test weight and velocity.",
		},
		{
			id: "IV",
			title: "Radical Focus Over Volume",
			desc: "We deliberately take on a strict maximum of four client engagements concurrently, guaranteeing executive attention from our senior partners.",
		},
	];

	const timeline = [
		{
			year: "2024",
			title: "Studio Inception",
			desc: "Soil founded as an autonomous design-engineering collective to challenge corporate agency bureaucracy and slow turnaround cycles.",
		},
		{
			year: "2024",
			title: "First Global Awwwards SOTD",
			desc: "Recognized internationally for breakthrough spatial WebGL architecture and lightweight Svelte state management.",
		},
		{
			year: "2025",
			title: "Open Source Engine Launch",
			desc: "Released the Aura interaction scaffolding to 18,000+ developers worldwide, standardizing 60 FPS motion guidelines.",
		},
		{
			year: "2026",
			title: "Global Distributed Flagship",
			desc: "Partnering with Fortune 100 technology enterprises, independent fashion houses, and cutting-edge decentralized protocols.",
		},
	];

	const awards = [
		{ name: "Awwwards Site of the Day", count: "12x", year: "2024 — 2026" },
		{ name: "FWA of the Day", count: "8x", year: "2024 — 2026" },
		{ name: "CSS Design Awards (Best UI/UX/Innov)", count: "14x", year: "2024 — 2026" },
		{ name: "Tokyo TDC Typographic Honor", count: "2x", year: "2025" },
	];

	const testimonials = [
		{
			quote:
				"Soil didn't simply redesign our site; they radically elevated how our entire brand is perceived globally. Our conversion jumped 180% within forty-eight hours.",
			author: "Sarah Jenkins",
			company: "CMO, Lumina Intelligence",
		},
		{
			quote:
				"Working with Neeraj Verma and the Soil studio felt like working with engineers from the next decade. No fluff, no account managers—just breathtaking speed and taste.",
			author: "Marcus Thorne",
			company: "Founder, Nexal Web3",
		},
	];

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
	<title>Agency & Culture — Soil Creative Engineering</title>
	<meta
		name="description"
		content="Explore Soil's agency history, culture, operating principles, awards, and our relentless dedication to digital craftsmanship."
	/>
</svelte:head>

<div class="relative w-full overflow-hidden pt-28 md:pt-36">
	<!-- Background Glow -->
	<div
		class="absolute top-20 right-1/4 translate-x-1/2 w-[700px] h-[700px] bg-[#E6FF5A] opacity-[0.035] blur-[220px] rounded-full pointer-events-none"
	></div>

	<!-- Hero -->
	<section class="px-6 md:px-24 max-w-7xl mx-auto pb-20 md:pb-28">
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
			The Agency — Heritage & Philosophy
		</div>

		<div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">
			<div class="lg:col-span-8">
				<h1
					bind:this={titleRef}
					class="text-5xl sm:text-7xl lg:text-8xl font-serif tracking-tight leading-[0.98] text-white"
				>
					Engineered with
					<br />
					<span class="italic text-white/40">unyielding</span>
					<br />
					conviction.
				</h1>
			</div>

			<div class="lg:col-span-4 flex flex-col gap-6">
				<p
					class="text-white/60 text-lg sm:text-xl font-sans font-light leading-relaxed"
				>
					Soil is built on the belief that digital interfaces should provoke emotion and command genuine cultural reverence.
				</p>
				<div class="flex items-center gap-6 text-xs font-mono text-white/40 uppercase tracking-wider">
					<span>Team: Compact & Senior</span>
					<span>•</span>
					<span>Active Projects: Max 4</span>
				</div>
			</div>
		</div>
	</section>

	<!-- The Manifesto Section -->
	<section class="w-full bg-[#080808] py-28 md:py-36 px-6 md:px-24 border-t border-b border-white/10">
		<div class="max-w-5xl mx-auto">
			<span class="text-xs font-mono uppercase tracking-widest text-[#E6FF5A] block mb-8">
				The Studio Creed
			</span>

			<blockquote class="text-3xl sm:text-5xl md:text-6xl font-serif text-white/90 leading-tight mb-12">
				"We refuse to build disposable websites that vanish into obscurity after three months. We sculpt digital monuments engineered with architectural permanence."
			</blockquote>

			<div class="flex items-center gap-4 text-xs font-mono uppercase tracking-widest text-white/40">
				<span>Engineered by Neeraj Verma</span>
				<span>/</span>
				<span>Soil Creative Agency</span>
			</div>
		</div>
	</section>

	<!-- The Operating Principles (Commandments) -->
	<section class="py-28 md:py-36 px-6 md:px-24 max-w-7xl mx-auto">
		<div class="mb-16">
			<span class="text-xs font-mono uppercase tracking-widest text-[#E6FF5A] block mb-2">
				Core Operating Principles
			</span>
			<h2 class="text-4xl md:text-6xl font-serif text-white tracking-tight">
				The Non-Negotiables
			</h2>
		</div>

		<div class="grid grid-cols-1 md:grid-cols-2 gap-8">
			{#each commandments as cmd}
				<div
					class="p-8 md:p-10 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-[#E6FF5A]/40 transition-all duration-300"
				>
					<div class="text-sm font-mono text-[#E6FF5A] font-bold mb-4">
						{cmd.id}
					</div>
					<h3 class="text-2xl font-serif text-white mb-3">{cmd.title}</h3>
					<p class="text-white/50 text-sm md:text-base font-sans font-light leading-relaxed">
						{cmd.desc}
					</p>
				</div>
			{/each}
		</div>
	</section>

	<!-- Timeline / Milestones -->
	<section class="w-full bg-[#080808] py-28 md:py-36 px-6 md:px-24 border-t border-b border-white/10">
		<div class="max-w-7xl mx-auto">
			<div class="mb-16">
				<span class="text-xs font-mono uppercase tracking-widest text-[#E6FF5A] block mb-2">
					Evolution
				</span>
				<h2 class="text-4xl md:text-6xl font-serif text-white tracking-tight">
					Studio Milestones
				</h2>
			</div>

			<div class="grid grid-cols-1 md:grid-cols-4 gap-8">
				{#each timeline as t}
					<div class="border-t border-white/10 pt-6">
						<span class="text-2xl md:text-3xl font-serif text-[#E6FF5A] block mb-2">
							{t.year}
						</span>
						<h3 class="text-xl font-serif text-white mb-3">{t.title}</h3>
						<p class="text-white/50 text-xs md:text-sm font-sans font-light leading-relaxed">
							{t.desc}
						</p>
					</div>
				{/each}
			</div>
		</div>
	</section>

	<!-- Awards & Accolades -->
	<section class="py-28 md:py-36 px-6 md:px-24 max-w-7xl mx-auto">
		<div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
			<div class="lg:col-span-5">
				<span class="text-xs font-mono uppercase tracking-widest text-[#E6FF5A] block mb-2">
					Recognition
				</span>
				<h2 class="text-4xl md:text-6xl font-serif text-white tracking-tight mb-6">
					Awards & Recognition
				</h2>
				<p class="text-white/50 text-base font-sans font-light leading-relaxed mb-8">
					Honors collected across the international design and technological landscape for pushing front-end engineering boundaries.
				</p>
				<div class="flex items-center gap-3 text-xs font-mono text-white/40 uppercase">
					<Award class="w-4 h-4 text-[#E6FF5A]" />
					<span>34 Total Honors Since Inception</span>
				</div>
			</div>

			<div class="lg:col-span-7 divide-y divide-white/10 border-t border-b border-white/10">
				{#each awards as a}
					<div class="py-6 flex items-center justify-between">
						<div>
							<h3 class="text-xl md:text-2xl font-serif text-white">{a.name}</h3>
							<span class="text-xs font-mono text-white/40">{a.year}</span>
						</div>
						<div class="text-2xl font-serif text-[#E6FF5A] font-light">
							{a.count}
						</div>
					</div>
				{/each}
			</div>
		</div>
	</section>

	<!-- Client Endorsements -->
	<section class="w-full bg-[#080808] py-28 md:py-36 px-6 md:px-24 border-t border-b border-white/10">
		<div class="max-w-7xl mx-auto">
			<div class="mb-16">
				<span class="text-xs font-mono uppercase tracking-widest text-[#E6FF5A] block mb-2">
					Client Perspectives
				</span>
				<h2 class="text-4xl md:text-6xl font-serif text-white tracking-tight">
					Voices of Partnership
				</h2>
			</div>

			<div class="grid grid-cols-1 md:grid-cols-2 gap-8">
				{#each testimonials as item}
					<div class="p-10 rounded-3xl bg-white/[0.02] border border-white/10 flex flex-col justify-between">
						<Quote class="w-8 h-8 text-[#E6FF5A] mb-6 opacity-60" />
						<p class="text-xl md:text-2xl font-serif text-white/90 leading-snug mb-8 font-light italic">
							"{item.quote}"
						</p>
						<div class="pt-6 border-t border-white/5">
							<span class="text-base font-sans font-medium text-white block">{item.author}</span>
							<span class="text-xs font-mono text-[#E6FF5A] uppercase tracking-wider">{item.company}</span>
						</div>
					</div>
				{/each}
			</div>
		</div>
	</section>

	<!-- Call to Action Banner -->
	<section class="py-28 md:py-36 px-6 md:px-24 max-w-7xl mx-auto">
		<div
			class="p-10 md:p-14 rounded-3xl bg-linear-to-br from-white/[0.04] to-transparent border border-white/10 flex flex-col md:flex-row items-center justify-between gap-8"
		>
			<div>
				<span class="text-xs font-mono text-[#E6FF5A] uppercase tracking-widest block mb-2"
					>Join The Frontier</span
				>
				<h3 class="text-3xl md:text-4xl font-serif text-white mb-2">
					Ready to collaborate with Soil?
				</h3>
				<p class="text-white/50 font-sans text-sm font-light">
					We evaluate each potential partnership based on creative vision and category audacity.
				</p>
			</div>
			<a
				href="/contact"
				class="px-8 py-4 rounded-full bg-[#E6FF5A] text-black font-medium text-sm hover:scale-105 transition-all text-center whitespace-nowrap"
			>
				Initiate Conversation
			</a>
		</div>
	</section>
</div>
