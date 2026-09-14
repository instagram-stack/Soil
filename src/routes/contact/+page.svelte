<script>
	import { onMount } from "svelte";
	import gsap from "gsap";
	import ArrowUpRight from "@lucide/svelte/icons/arrow-up-right";
	import ArrowLeft from "@lucide/svelte/icons/arrow-left";
	import CheckCircle2 from "@lucide/svelte/icons/check-circle-2";
	import Clock from "@lucide/svelte/icons/clock";
	import MapPin from "@lucide/svelte/icons/map-pin";
	import Send from "@lucide/svelte/icons/send";
	import Mail from "@lucide/svelte/icons/mail";

	let titleRef = $state();
	let selectedService = $state("Interactive Flagship");
	let selectedBudget = $state("$40k – $75k");
	let selectedTimeline = $state("6 – 8 Weeks");

	let formSubmitted = $state(false);
	let isSubmitting = $state(false);

	let name = $state("");
	let email = $state("");
	let company = $state("");
	let details = $state("");

	const services = [
		"Interactive Flagship",
		"Spatial 3D & WebGL",
		"Kinetic Motion Sprint",
		"Brand System & Tokens",
	];

	const budgets = [
		"$25k – $40k",
		"$40k – $75k",
		"$75k – $150k",
		"$150k+",
	];

	const timelines = [
		"Immediate (< 4 Wks)",
		"6 – 8 Weeks",
		"8 – 12 Weeks",
		"Flexible / Retainer",
	];

	const hubs = [
		{ city: "London", region: "Europe", tz: "GMT+1", status: "Active" },
		{ city: "New York", region: "Americas", tz: "EST", status: "Active" },
		{ city: "Tokyo", region: "Asia Pacific", tz: "JST", status: "Active" },
		{ city: "Mumbai", region: "South Asia", tz: "IST", status: "Active" },
	];

	function handleSubmit(e) {
		e.preventDefault();
		isSubmitting = true;
		setTimeout(() => {
			isSubmitting = false;
			formSubmitted = true;
		}, 750);
	}

	function resetForm() {
		formSubmitted = false;
		name = "";
		email = "";
		company = "";
		details = "";
	}

	onMount(() => {
		if (titleRef) {
			gsap.fromTo(
				titleRef,
				{ opacity: 0, y: 30 },
				{ opacity: 1, y: 0, duration: 1.1, ease: "power3.out" },
			);
		}
	});
</script>

<svelte:head>
	<title>Initiate Project — Soil Creative Agency</title>
	<meta
		name="description"
		content="Initiate a project with Soil. Inquire about bespoke digital flagships, spatial WebGL engineering, and motion systems."
	/>
</svelte:head>

<div class="relative w-full overflow-hidden pt-28 md:pt-36">
	<!-- Background Ambient Glow -->
	<div
		class="absolute top-20 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-[#E6FF5A] opacity-[0.035] blur-[240px] rounded-full pointer-events-none"
	></div>

	<!-- Header -->
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
			New Business & Partnership Inquiries
		</div>

		<div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">
			<div class="lg:col-span-8">
				<h1
					bind:this={titleRef}
					class="text-5xl sm:text-7xl lg:text-8xl font-serif tracking-tight leading-[0.98] text-white"
				>
					Let's build
					<br />
					<span class="italic text-white/40">something that</span>
					<br />
					cannot be ignored.
				</h1>
			</div>

			<div class="lg:col-span-4 flex flex-col gap-6">
				<p
					class="text-white/60 text-lg sm:text-xl font-sans font-light leading-relaxed"
				>
					We accept a maximum of four engagements concurrently to preserve deep focus and uncompromised senior craftsmanship.
				</p>
				<div class="flex items-center gap-6 text-xs font-mono text-white/40 uppercase tracking-wider">
					<span>Response Window: &lt; 24 Hrs</span>
					<span>•</span>
					<span>NDA Available</span>
				</div>
			</div>
		</div>
	</section>

	<!-- Main Form & Contact Info -->
	<section class="px-6 md:px-24 max-w-7xl mx-auto pb-32">
		<div class="grid grid-cols-1 lg:grid-cols-12 gap-12">
			<!-- Form Column (8 cols) -->
			<div class="lg:col-span-8">
				<div class="p-8 md:p-12 rounded-3xl bg-white/[0.02] border border-white/10">
					{#if formSubmitted}
						<div class="py-16 text-center flex flex-col items-center">
							<div
								class="w-16 h-16 rounded-full bg-[#E6FF5A]/10 border border-[#E6FF5A]/30 flex items-center justify-center text-[#E6FF5A] mb-6"
							>
								<CheckCircle2 class="w-8 h-8" />
							</div>
							<h3 class="text-3xl font-serif text-white mb-3">
								Inquiry Dispatched Successfully
							</h3>
							<p class="text-white/60 font-sans font-light max-w-md mb-8 leading-relaxed">
								Thank you, {name || "partner"}. Our creative partners review incoming submissions daily. Expect our tailored response within 24 hours.
							</p>
							<button
								type="button"
								onclick={resetForm}
								class="px-6 py-3 rounded-full text-xs font-mono uppercase tracking-wider bg-white/5 hover:bg-white/10 text-white border border-white/10 transition-colors"
							>
								Send Another Message
							</button>
						</div>
					{:else}
						<form onsubmit={handleSubmit} class="space-y-10">
							<!-- 1. Discipline Selection -->
							<div>
								<label
									class="block text-xs font-mono uppercase tracking-widest text-[#E6FF5A] mb-4"
								>
									01 / What can we engineer for you?
								</label>
								<div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
									{#each services as svc}
										<button
											type="button"
											onclick={() => (selectedService = svc)}
											class="p-4 rounded-xl text-left text-xs font-mono uppercase tracking-wider border transition-all cursor-pointer {selectedService ===
											svc
												? 'bg-[#E6FF5A] text-black font-semibold border-[#E6FF5A]'
												: 'bg-white/[0.02] text-white/70 border-white/10 hover:border-white/20'}"
										>
											{svc}
										</button>
									{/each}
								</div>
							</div>

							<!-- 2. Budget Selection -->
							<div>
								<label
									class="block text-xs font-mono uppercase tracking-widest text-[#E6FF5A] mb-4"
								>
									02 / Anticipated Investment Tier
								</label>
								<div class="grid grid-cols-2 sm:grid-cols-4 gap-3">
									{#each budgets as b}
										<button
											type="button"
											onclick={() => (selectedBudget = b)}
											class="py-3 px-4 rounded-xl text-center text-xs font-mono tracking-wider border transition-all cursor-pointer {selectedBudget ===
											b
												? 'bg-[#E6FF5A] text-black font-semibold border-[#E6FF5A]'
												: 'bg-white/[0.02] text-white/70 border-white/10 hover:border-white/20'}"
										>
											{b}
										</button>
									{/each}
								</div>
							</div>

							<!-- 3. Timeline Selection -->
							<div>
								<label
									class="block text-xs font-mono uppercase tracking-widest text-[#E6FF5A] mb-4"
								>
									03 / Target Delivery Velocity
								</label>
								<div class="grid grid-cols-2 sm:grid-cols-4 gap-3">
									{#each timelines as tl}
										<button
											type="button"
											onclick={() => (selectedTimeline = tl)}
											class="py-3 px-4 rounded-xl text-center text-xs font-mono tracking-wider border transition-all cursor-pointer {selectedTimeline ===
											tl
												? 'bg-[#E6FF5A] text-black font-semibold border-[#E6FF5A]'
												: 'bg-white/[0.02] text-white/70 border-white/10 hover:border-white/20'}"
										>
											{tl}
										</button>
									{/each}
								</div>
							</div>

							<!-- 4. Text Inputs -->
							<div class="space-y-6 pt-4 border-t border-white/10">
								<label
									class="block text-xs font-mono uppercase tracking-widest text-[#E6FF5A]"
								>
									04 / Your Particulars
								</label>

								<div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
									<div>
										<label
											for="contact-name"
											class="block text-xs font-mono text-white/40 uppercase mb-2"
											>Your Name *</label
										>
										<input
											id="contact-name"
											type="text"
											required
											bind:value={name}
											placeholder="e.g. Alex Vance"
											class="w-full px-4 py-3.5 rounded-xl bg-white/[0.03] border border-white/10 focus:border-[#E6FF5A] text-white font-sans text-sm outline-none transition-colors"
										/>
									</div>

									<div>
										<label
											for="contact-email"
											class="block text-xs font-mono text-white/40 uppercase mb-2"
											>Work Email *</label
										>
										<input
											id="contact-email"
											type="email"
											required
											bind:value={email}
											placeholder="alex@enterprise.com"
											class="w-full px-4 py-3.5 rounded-xl bg-white/[0.03] border border-white/10 focus:border-[#E6FF5A] text-white font-sans text-sm outline-none transition-colors"
										/>
									</div>
								</div>

								<div>
									<label
										for="contact-org"
										class="block text-xs font-mono text-white/40 uppercase mb-2"
										>Organization / Venture</label
									>
									<input
										id="contact-org"
										type="text"
										bind:value={company}
										placeholder="e.g. Acme Space Labs"
										class="w-full px-4 py-3.5 rounded-xl bg-white/[0.03] border border-white/10 focus:border-[#E6FF5A] text-white font-sans text-sm outline-none transition-colors"
									/>
								</div>

								<div>
									<label
										for="contact-details"
										class="block text-xs font-mono text-white/40 uppercase mb-2"
										>Project Synopsis & Ambition</label
									>
									<textarea
										id="contact-details"
										rows="4"
										bind:value={details}
										placeholder="Tell us about the current digital challenge, audience expectations, and what winning looks like for this engagement..."
										class="w-full px-4 py-3.5 rounded-xl bg-white/[0.03] border border-white/10 focus:border-[#E6FF5A] text-white font-sans text-sm outline-none transition-colors resize-none"
									></textarea>
								</div>
							</div>

							<!-- Submit Button -->
							<button
								type="submit"
								disabled={isSubmitting}
								class="w-full py-4 rounded-full bg-[#E6FF5A] text-black font-semibold text-sm hover:scale-[1.01] transition-all cursor-pointer flex items-center justify-center gap-2"
							>
								{#if isSubmitting}
									<span class="w-4 h-4 border-2 border-black border-t-transparent rounded-full animate-spin"></span>
									<span>Encrypting & Sending...</span>
								{:else}
									<Send class="w-4 h-4" />
									<span>Transmit Project Brief</span>
								{/if}
							</button>
						</form>
					{/if}
				</div>
			</div>

			<!-- Sidebar Info Column (4 cols) -->
			<div class="lg:col-span-4 space-y-8">
				<!-- Direct Lines -->
				<div class="p-8 rounded-3xl bg-white/[0.02] border border-white/10">
					<div class="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#E6FF5A] mb-6">
						<Mail class="w-4 h-4" />
						Direct Communications
					</div>

					<div class="space-y-6 text-sm">
						<div>
							<span class="block text-xs font-mono text-white/40 uppercase mb-1">New Business</span>
							<a
								href="mailto:hello@soil.agency"
								class="text-white hover:text-[#E6FF5A] transition-colors font-mono text-base"
							>
								hello@soil.agency
							</a>
						</div>

						<div>
							<span class="block text-xs font-mono text-white/40 uppercase mb-1">Careers & Collective</span>
							<a
								href="mailto:talent@soil.agency"
								class="text-white hover:text-[#E6FF5A] transition-colors font-mono"
							>
								talent@soil.agency
							</a>
						</div>

						<div>
							<span class="block text-xs font-mono text-white/40 uppercase mb-1">Press & Speaking</span>
							<a
								href="mailto:press@soil.agency"
								class="text-white hover:text-[#E6FF5A] transition-colors font-mono"
							>
								press@soil.agency
							</a>
						</div>
					</div>
				</div>

				<!-- Distributed Presence -->
				<div class="p-8 rounded-3xl bg-white/[0.02] border border-white/10">
					<div class="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#E6FF5A] mb-6">
						<MapPin class="w-4 h-4" />
						Distributed Studio Hubs
					</div>

					<div class="space-y-4">
						{#each hubs as h}
							<div class="flex items-center justify-between py-2 border-b border-white/5 last:border-0">
								<div>
									<span class="text-white font-sans text-sm font-medium block">{h.city}</span>
									<span class="text-xs font-mono text-white/40">{h.region} • {h.tz}</span>
								</div>
								<span class="flex items-center gap-1.5 text-xs font-mono text-[#E6FF5A]">
									<span class="w-1.5 h-1.5 rounded-full bg-[#E6FF5A] animate-ping"></span>
									{h.status}
								</span>
							</div>
						{/each}
					</div>
				</div>

				<!-- Quality Guarantee -->
				<div class="p-8 rounded-3xl bg-white/[0.02] border border-white/10">
					<span class="text-xs font-mono uppercase tracking-widest text-[#E6FF5A] block mb-2">
						The Studio Standard
					</span>
					<p class="text-white/50 text-xs font-sans font-light leading-relaxed">
						Every project is personally spearheaded by Neeraj Verma and principal engineers. We maintain strict confidentiality under mutual NDA.
					</p>
				</div>
			</div>
		</div>
	</section>
</div>
