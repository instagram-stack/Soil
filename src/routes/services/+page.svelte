<script>
	import { onMount } from "svelte";
	import gsap from "gsap";
	import ScrollTrigger from "gsap/ScrollTrigger";
	import ArrowUpRight from "@lucide/svelte/icons/arrow-up-right";
	import ArrowLeft from "@lucide/svelte/icons/arrow-left";
	import Sparkles from "@lucide/svelte/icons/sparkles";
	import Code from "@lucide/svelte/icons/code";
	import Compass from "@lucide/svelte/icons/compass";
	import Cpu from "@lucide/svelte/icons/cpu";
	import CheckCircle2 from "@lucide/svelte/icons/check-circle-2";
	import Plus from "@lucide/svelte/icons/plus";
	import Minus from "@lucide/svelte/icons/minus";

	let titleRef = $state();
	let activeFaq = $state(null);

	const capabilities = [
		{
			id: "01",
			title: "Spatial & WebGL Experience",
			subtitle: "Real-time 3D, Custom Shaders & Canvas Worlds",
			description:
				"We transform ordinary flat browser windows into multi-dimensional playgrounds. Utilizing raw WebGL, GLSL compute shaders, and optimized Three.js scenes that run seamlessly at 60 FPS across desktop and mobile devices.",
			deliverables: [
				"Custom GLSL shader development",
				"Procedural 3D asset optimization & caustics",
				"Interactive product configurators",
				"Physics-governed camera trajectories",
			],
			stack: ["WebGL 2.0", "Three.js", "GLSL", "GSAP Physics"],
			icon: Sparkles,
		},
		{
			id: "02",
			title: "Next-Gen Flagships & E-Commerce",
			subtitle: "Sub-Second TTFB & Headless Architecture",
			description:
				"We build lightning-fast web flagships for boundary-pushing brands. Zero bloated templates, zero unrendered placeholder boxes. Clean, reactive state architectures that turn visitor interest into uncompromising conversion rates.",
			deliverables: [
				"Bespoke SvelteKit / SSR architectures",
				"Headless commerce integrations (Shopify, Stripe)",
				"Edge caching & zero-layout-shift pipelines",
				"Real-time reactive user state systems",
			],
			stack: ["Svelte 5", "Vite", "Tailwind CSS", "Edge CDN"],
			icon: Code,
		},
		{
			id: "03",
			title: "Kinetic Motion & Interaction Design",
			subtitle: "Fluid Physics & Scroll-Driven Choreography",
			description:
				"Motion is not visual decoration—it is the pulse of user trust and tactile feedback. We choreograph every button hover, section reveal, and scroll transition using mathematical spring dampening and GSAP timelines.",
			deliverables: [
				"ScrollTrigger multi-layered choreography",
				"Spring-physics micro-interactions",
				"Cursor tracking & magnetic elements",
				"View Transitions API seamless routing",
			],
			stack: ["GSAP 3", "Lenis Smooth", "Web Animations API"],
			icon: Cpu,
		},
		{
			id: "04",
			title: "Brand Systems & Identity Architecture",
			subtitle: "Typographic Tension & Design Tokens",
			description:
				"We build enduring visual identities rooted in distinctive display typography, sophisticated dark atmospheric schemes, and electric Acid Lime accents designed to instantly separate you from corporate monotony.",
			deliverables: [
				"Mathematical typography hierarchies",
				"Design token system specifications",
				"Bespoke iconography & SVG assets",
				"Interactive brand guidelines & rulebooks",
			],
			stack: ["Instrument Serif", "Tailwind Tokens", "Figma", "SVG"],
			icon: Compass,
		},
	];

	const engagementModels = [
		{
			title: "Full Digital Flagship",
			duration: "6 — 10 Weeks",
			bestFor: "Brands ready to disrupt their category with a bespoke site",
			features: [
				"End-to-end creative direction & UX",
				"Custom WebGL & GSAP motion choreography",
				"SvelteKit high-velocity engineering",
				"Full SEO & Performance audit (100 Lighthouse)",
				"Post-launch telemetry & ongoing support",
			],
			highlight: true,
		},
		{
			title: "Kinetic Motion Sprint",
			duration: "3 — 4 Weeks",
			bestFor: "Existing products needing a world-class motion & interaction overhaul",
			features: [
				"Audit of existing user journey bottlenecks",
				"Bespoke interactive shaders & transitions",
				"Implementation of Lenis & GSAP physics",
				"60 FPS mobile optimization review",
			],
			highlight: false,
		},
		{
			title: "Design & Technology Advisory",
			duration: "Monthly Retainer",
			bestFor: "High-growth scale-ups requiring embedded design engineering leadership",
			features: [
				"Dedicated senior technologist allocation",
				"Weekly interaction prototyping & code reviews",
				"Design system governance",
				"Continuous feature rollout & edge speed monitoring",
			],
			highlight: false,
		},
	];

	const faqs = [
		{
			q: "What makes Soil's technical execution different?",
			a: "We do not use bloated multi-purpose themes, generic CMS templates, or heavy page builders. Everything we engineer is custom-coded using Svelte 5 and GSAP, resulting in instant load times, zero layout shifts, and locked 60 FPS interactions.",
		},
		{
			q: "How does the design & engineering process work?",
			a: "We work directly in code and high-fidelity motion prototypes alongside visual exploration. This eliminates the gap between static design files and real-world browser execution.",
		},
		{
			q: "Do you collaborate with internal engineering teams?",
			a: "Yes. We frequently build the interactive design system, spatial WebGL layers, and front-end architectures, then cleanly hand off modular components with comprehensive documentation.",
		},
		{
			q: "What is your typical project timeline?",
			a: "Most flagship digital projects run between 6 to 10 weeks from initial discovery through to deployment and global edge hardening.",
		},
	];

	function toggleFaq(index) {
		activeFaq = activeFaq === index ? null : index;
	}

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
	<title>Services & Capabilities — Soil Creative Engineering</title>
	<meta
		name="description"
		content="Explore Soil's technical disciplines: Spatial WebGL, high-velocity digital flagships, kinetic motion design, and brand identity systems."
	/>
</svelte:head>

<div class="relative w-full overflow-hidden pt-28 md:pt-36">
	<!-- Background Glow -->
	<div
		class="absolute top-20 left-1/3 -translate-x-1/2 w-[700px] h-[700px] bg-[#E6FF5A] opacity-[0.035] blur-[220px] rounded-full pointer-events-none"
	></div>

	<!-- Header -->
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
			Disciplines & Engineering Services
		</div>

		<div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">
			<div class="lg:col-span-8">
				<h1
					bind:this={titleRef}
					class="text-5xl sm:text-7xl lg:text-8xl font-serif tracking-tight leading-[0.98] text-white"
				>
					Disciplines built
					<br />
					<span class="italic text-white/40">for the next</span>
					<br />
					digital era.
				</h1>
			</div>

			<div class="lg:col-span-4 flex flex-col gap-6">
				<p
					class="text-white/60 text-lg sm:text-xl font-sans font-light leading-relaxed"
				>
					We dismantle the wall between engineering rigor and raw artistic audacity. Explore our core practice areas.
				</p>
				<div class="flex items-center gap-6 text-xs font-mono text-white/40 uppercase tracking-wider">
					<span>Delivery: Global</span>
					<span>•</span>
					<span>Stack: Custom Native</span>
				</div>
			</div>
		</div>
	</section>

	<!-- Capabilities Detailed List -->
	<section class="px-6 md:px-24 max-w-7xl mx-auto pb-32">
		<div class="space-y-12">
			{#each capabilities as cap}
				<div
					class="p-8 md:p-14 rounded-3xl bg-white/[0.02] border border-white/10 hover:border-[#E6FF5A]/30 transition-all duration-500 flex flex-col lg:flex-row justify-between gap-12"
				>
					<!-- Left info -->
					<div class="lg:max-w-xl">
						<div class="flex items-center gap-4 mb-6">
							<span class="text-xs font-mono text-[#E6FF5A] tracking-widest uppercase">
								Discipline {cap.id}
							</span>
							<span class="text-xs font-mono text-white/20">/</span>
							<span class="text-xs font-mono text-white/50">{cap.subtitle}</span>
						</div>

						<h2 class="text-3xl md:text-5xl font-serif text-white mb-6">
							{cap.title}
						</h2>

						<p class="text-white/60 text-base md:text-lg font-sans font-light leading-relaxed mb-8">
							{cap.description}
						</p>

						<!-- Tech Tags -->
						<div class="flex flex-wrap gap-2">
							{#each cap.stack as s}
								<span
									class="px-3 py-1 rounded-full text-xs font-mono bg-white/5 text-white/70 border border-white/10"
								>
									{s}
								</span>
							{/each}
						</div>
					</div>

					<!-- Right deliverables box -->
					<div
						class="lg:w-96 p-8 rounded-2xl bg-white/[0.02] border border-white/10 flex flex-col justify-between"
					>
						<div>
							<h3
								class="text-xs font-mono uppercase tracking-widest text-[#E6FF5A] mb-6 flex items-center gap-2"
							>
								<cap.icon class="w-4 h-4 text-[#E6FF5A]" />
								Key Deliverables
							</h3>
							<ul class="space-y-4">
								{#each cap.deliverables as del}
									<li class="flex items-start gap-3 text-sm font-sans text-white/70 font-light">
										<CheckCircle2 class="w-4 h-4 text-[#E6FF5A] mt-0.5 shrink-0" />
										<span>{del}</span>
									</li>
								{/each}
							</ul>
						</div>

						<div class="mt-8 pt-6 border-t border-white/10 flex justify-between items-center">
							<span class="text-xs font-mono text-white/40 uppercase">Engagement Model</span>
							<a
								href="/contact"
								class="text-xs font-mono text-[#E6FF5A] hover:underline flex items-center gap-1"
							>
								Inquire <ArrowUpRight class="w-3.5 h-3.5" />
							</a>
						</div>
					</div>
				</div>
			{/each}
		</div>
	</section>

	<!-- Engagement Models -->
	<section
		class="w-full bg-[#080808] py-28 md:py-36 px-6 md:px-24 border-t border-b border-white/10"
	>
		<div class="max-w-7xl mx-auto">
			<div class="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
				<div>
					<span
						class="text-xs font-mono uppercase tracking-widest text-[#E6FF5A] block mb-2"
						>Collaboration Frameworks</span
					>
					<h2 class="text-4xl md:text-6xl font-serif text-white tracking-tight">
						Partnership Models
					</h2>
				</div>
				<p class="text-white/50 text-sm md:text-base font-sans font-light max-w-md">
					Transparent, focused delivery engagements tailored to your stage of growth and speed requirements.
				</p>
			</div>

			<div class="grid grid-cols-1 md:grid-cols-3 gap-8">
				{#each engagementModels as model}
					<div
						class="p-8 md:p-10 rounded-3xl flex flex-col justify-between transition-all duration-300 relative {model.highlight
							? 'bg-white/[0.04] border-2 border-[#E6FF5A]/60 shadow-[0_0_50px_rgba(230,255,90,0.06)]'
							: 'bg-white/[0.02] border border-white/10 hover:border-white/20'}"
					>
						<div>
							{#if model.highlight}
								<div class="mb-4">
									<span
										class="px-3 py-1 rounded-full text-[10px] font-mono uppercase tracking-widest bg-[#E6FF5A] text-black font-semibold"
									>
										Flagship Standard
									</span>
								</div>
							{/if}

							<h3 class="text-2xl font-serif text-white mb-2">
								{model.title}
							</h3>
							<div class="text-xs font-mono text-[#E6FF5A] uppercase tracking-wider mb-4">
								Timeline: {model.duration}
							</div>
							<p class="text-white/50 text-sm font-sans font-light mb-8">
								{model.bestFor}
							</p>

							<ul class="space-y-3 mb-8">
								{#each model.features as f}
									<li class="flex items-start gap-2.5 text-xs md:text-sm font-sans text-white/70">
										<span class="w-1.5 h-1.5 rounded-full bg-[#E6FF5A] mt-1.5 shrink-0"></span>
										<span>{f}</span>
									</li>
								{/each}
							</ul>
						</div>

						<a
							href="/contact"
							class="w-full py-3.5 rounded-full text-center text-xs font-mono uppercase tracking-wider font-semibold transition-all {model.highlight
								? 'bg-[#E6FF5A] text-black hover:scale-[1.02]'
								: 'bg-white/5 hover:bg-white/10 text-white border border-white/10'}"
						>
							Select Model
						</a>
					</div>
				{/each}
			</div>
		</div>
	</section>

	<!-- Interactive Services FAQ -->
	<section class="py-28 md:py-36 px-6 md:px-24 max-w-7xl mx-auto">
		<div class="grid grid-cols-1 lg:grid-cols-12 gap-12">
			<div class="lg:col-span-4">
				<span
					class="text-xs font-mono uppercase tracking-widest text-[#E6FF5A] block mb-2"
					>Inquiry Answers</span
				>
				<h2 class="text-4xl md:text-5xl font-serif text-white tracking-tight mb-6">
					Common Questions
				</h2>
				<p class="text-white/50 text-sm font-sans font-light leading-relaxed mb-8">
					Everything you need to know about our technology choices, design philosophy, and sprint velocity.
				</p>
				<a
					href="/contact"
					class="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#E6FF5A] hover:underline"
				>
					Need custom consultation &rarr;
				</a>
			</div>

			<div class="lg:col-span-8 divide-y divide-white/10 border-t border-b border-white/10">
				{#each faqs as faq, i}
					<div class="py-6">
						<button
							type="button"
							onclick={() => toggleFaq(i)}
							class="w-full text-left flex items-center justify-between gap-4 cursor-pointer group"
						>
							<span
								class="text-lg sm:text-xl font-serif text-white/90 group-hover:text-white transition-colors"
							>
								{faq.q}
							</span>
							<div
								class="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-white/60 group-hover:text-[#E6FF5A] group-hover:bg-white/10 transition-colors shrink-0"
							>
								{#if activeFaq === i}
									<Minus class="w-4 h-4" />
								{:else}
									<Plus class="w-4 h-4" />
								{/if}
							</div>
						</button>

						{#if activeFaq === i}
							<div class="pt-4 pr-12 text-white/50 text-sm font-sans font-light leading-relaxed">
								{faq.a}
							</div>
						{/if}
					</div>
				{/each}
			</div>
		</div>
	</section>

	<!-- Call to Action Banner -->
	<section class="pb-28 md:pb-36 px-6 md:px-24 max-w-7xl mx-auto">
		<div
			class="p-10 md:p-14 rounded-3xl bg-linear-to-br from-white/[0.04] to-transparent border border-white/10 flex flex-col md:flex-row items-center justify-between gap-8"
		>
			<div>
				<span class="text-xs font-mono text-[#E6FF5A] uppercase tracking-widest block mb-2"
					>Start Building</span
				>
				<h3 class="text-3xl md:text-4xl font-serif text-white mb-2">
					Ready to define your digital benchmark?
				</h3>
				<p class="text-white/50 font-sans text-sm font-light">
					Let's engineer a solution that sets your enterprise apart.
				</p>
			</div>
			<a
				href="/contact"
				class="px-8 py-4 rounded-full bg-[#E6FF5A] text-black font-medium text-sm hover:scale-105 transition-all text-center whitespace-nowrap"
			>
				Schedule Consultation
			</a>
		</div>
	</section>
</div>
