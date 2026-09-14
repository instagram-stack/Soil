<script>
	import { onMount } from "svelte";
	import Logo from "./logo.svelte";
	import X from "@lucide/svelte/icons/x";

	let email = $state("");
	let subscribed = $state(false);
	let activeModal = $state(null); // 'privacy' | 'terms' | null

	function handleSubscribe(e) {
		e.preventDefault();
		if (email && email.includes("@")) {
			subscribed = true;
			email = "";
			setTimeout(() => {
				subscribed = false;
			}, 4000);
		}
	}
</script>

<footer
	id="contact"
	class="w-full bg-[#050505] text-white pt-32 pb-12 relative overflow-hidden border-t border-white/10 border-b-8 border-b-white/5"
>
	<!-- CTA Section -->
	<div
		class="px-6 md:px-24 max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center mb-32 gap-12"
	>
		<h2
			class="text-[12vw] md:text-[7vw] font-serif leading-[0.85] tracking-tighter mix-blend-difference z-10 w-full md:w-2/3"
		>
			Have a project<br />
			<span class="italic text-white/40">in mind?</span>
		</h2>
		<div class="w-full md:w-1/3 flex md:justify-end z-10">
			<a
				href="/contact"
				class="group relative flex items-center justify-center w-40 h-40 md:w-48 md:h-48 rounded-full bg-white text-black hover:scale-105 transition-transform duration-500 cursor-pointer"
			>
				<span
					class="absolute inset-0 bg-[#E6FF5A] rounded-full transform scale-0 group-hover:scale-100 transition-transform duration-500 ease-out z-0"
				></span>
				<span
					class="font-sans font-medium text-lg relative z-10 group-hover:text-black transition-colors duration-500"
					>Let's Talk</span
				>
			</a>
		</div>
	</div>

	<!-- Multi-Column Links Section -->
	<div
		class="px-6 md:px-24 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-4 mb-24 z-10 relative"
	>
		<div class="col-span-1 md:col-span-1 flex flex-col gap-6">
			<div class="opacity-80"><Logo /></div>
			<p class="text-white/40 font-sans text-sm leading-relaxed max-w-xs">
				A globally awarded creative agency specializing in bringing
				revolutionary digital products to life.
			</p>
		</div>

		<div class="col-span-1 flex flex-col gap-4">
			<h4
				class="font-mono text-xs uppercase tracking-widest text-[#E6FF5A] mb-2"
			>
				Navigation
			</h4>
			<a
				href="/"
				class="text-white/60 hover:text-white font-sans text-sm transition-colors"
				>Home</a
			>
			<a
				href="/about"
				class="text-white/60 hover:text-white font-sans text-sm transition-colors"
				>About</a
			>
			<a
				href="/work"
				class="text-white/60 hover:text-white font-sans text-sm transition-colors"
				>Work</a
			>
			<a
				href="/services"
				class="text-white/60 hover:text-white font-sans text-sm transition-colors"
				>Services</a
			>
			<a
				href="/agency"
				class="text-white/60 hover:text-white font-sans text-sm transition-colors"
				>Agency</a
			>
			<a
				href="/contact"
				class="text-white/60 hover:text-white font-sans text-sm transition-colors"
				>Contact</a
			>
		</div>

		<div class="col-span-1 flex flex-col gap-4">
			<h4
				class="font-mono text-xs uppercase tracking-widest text-[#E6FF5A] mb-2"
			>
				Socials
			</h4>
			<a
				href="https://twitter.com"
				class="text-white/60 hover:text-white font-sans text-sm transition-colors"
				>Twitter (X)</a
			>
			<a
				href="https://instagram.com"
				class="text-white/60 hover:text-white font-sans text-sm transition-colors"
				>Instagram</a
			>
			<a
				href="https://linkedin.com"
				class="text-white/60 hover:text-white font-sans text-sm transition-colors"
				>LinkedIn</a
			>
			<a
				href="https://github.com"
				target="_blank"
				rel="noopener noreferrer"
				class="text-[#E6FF5A] hover:text-white font-sans text-sm transition-colors"
				>GitHub</a
			>
		</div>

		<div class="col-span-1 flex flex-col gap-4">
			<h4
				class="font-mono text-xs uppercase tracking-widest text-[#E6FF5A] mb-2"
			>
				Newsletter
			</h4>
			<p class="text-white/40 font-sans text-sm">
				Join our newsletter for insights on WebGL, Svelte, and design
				engineering.
			</p>
			<form class="mt-2 flex w-full relative" onsubmit={handleSubscribe}>
				<input
					type="email"
					bind:value={email}
					required
					placeholder="Enter your email"
					class="w-full bg-white/5 border border-white/10 rounded-full px-6 py-3 text-sm text-white focus:outline-none focus:border-white/40 transition-colors"
				/>
				<button
					type="submit"
					class="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white text-black flex items-center justify-center hover:bg-[#E6FF5A] hover:text-black transition-colors cursor-pointer"
					aria-label="Subscribe to newsletter"
				>
					&rarr;
				</button>
			</form>
			{#if subscribed}
				<p class="text-xs font-mono text-[#E6FF5A] transition-opacity">
					Thank you for subscribing!
				</p>
			{/if}
		</div>
	</div>

	<!-- Copyright & Author Bar -->
	<div
		class="px-6 md:px-24 max-w-7xl mx-auto pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6 md:gap-4 text-xs font-mono text-base tracking-wider relative z-10"
	>
		<p class="text-white/30">&copy; 2026 Soil Creative Studio.</p>

		<div class="flex flex-col md:flex-row items-center gap-4 md:gap-8">
			<span class="text-white/50 text-sm font-sans font-light">
				Engineered by <span
					class="text-[#E6FF5A] font-medium hover:underline underline-offset-4 cursor-default"
					>Neeraj Verma</span
				>
			</span>
			<div class="flex gap-6 text-white/30 hidden md:flex">
				<button
					id="privacy"
					type="button"
					onclick={() => (activeModal = "privacy")}
					class="hover:text-white/60 transition-colors cursor-pointer bg-transparent border-0 p-0 text-xs font-mono"
				>
					Privacy Policy
				</button>
				<button
					id="terms"
					type="button"
					onclick={() => (activeModal = "terms")}
					class="hover:text-white/60 transition-colors cursor-pointer bg-transparent border-0 p-0 text-xs font-mono"
				>
					Terms of Service
				</button>
			</div>
		</div>
	</div>

	{#if activeModal}
		<div
			class="fixed inset-0 bg-black/80 backdrop-blur-md z-[100] flex items-center justify-center p-6"
			role="dialog"
			aria-modal="true"
		>
			<div
				class="bg-[#0A0A0A] border border-white/10 rounded-2xl max-w-lg w-full p-8 relative shadow-2xl"
			>
				<button
					onclick={() => (activeModal = null)}
					class="absolute top-6 right-6 text-white/40 hover:text-white cursor-pointer transition-colors"
					aria-label="Close modal"
				>
					<X class="w-5 h-5" />
				</button>

				{#if activeModal === "privacy"}
					<h3 class="text-2xl font-serif text-white mb-4">Privacy Policy</h3>
					<p class="text-sm font-sans text-white/60 leading-relaxed">
						We respect your privacy. All user information provided is used exclusively for project inquiry communication and agency updates. We never share or sell personal data to third parties.
					</p>
				{:else if activeModal === "terms"}
					<h3 class="text-2xl font-serif text-white mb-4">Terms of Service</h3>
					<p class="text-sm font-sans text-white/60 leading-relaxed">
						All creative deliverables, spatial designs, and proprietary templates are provided under agency agreement standards. Unauthorized reproduction or redistribution is strictly prohibited.
					</p>
				{/if}

				<div class="mt-8 flex justify-end">
					<button
						onclick={() => (activeModal = null)}
						class="px-6 py-2 bg-white text-black rounded-full text-xs font-mono uppercase tracking-wider hover:bg-[#E6FF5A] hover:text-black transition-colors cursor-pointer"
					>
						Close
					</button>
				</div>
			</div>
		</div>
	{/if}

	<!-- Giant background glow -->
	<div
		class="absolute bottom-0 left-1/2 -translate-x-1/2 w-screen h-[400px] bg-[#E6FF5A] opacity-5 blur-[200px] pointer-events-none"
	></div>
</footer>
