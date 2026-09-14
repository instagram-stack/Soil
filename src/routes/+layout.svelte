<script>
	import "./layout.css";
	import Header from "$lib/components/header.svelte";
	import Footer from "$lib/components/Footer.svelte";
	import Cursor from "$lib/components/Cursor.svelte";
	import Seo from "$lib/components/Seo.svelte";
	import { onMount } from "svelte";
	import { onNavigate, afterNavigate } from "$app/navigation";
	import Lenis from "lenis";
	import gsap from "gsap";
	import ScrollTrigger from "gsap/ScrollTrigger";

	let { children } = $props();

	let lenisInstance = $state(null);
	let pageContentRef = $state(null);
	let curtainRef = $state(null);
	let beamRef = $state(null);
	let isNavigating = $state(false);

	// Seamless Single-Page Transition Orchestration
	// Guarantees zero scroll jerk, zero page flicker, and gives the feeling that it is ONE continuous application canvas
	onNavigate((navigation) => {
		// If navigating to the exact same page, let browser handle smoothly
		if (navigation.from?.url.pathname === navigation.to?.url.pathname) {
			return;
		}

		return new Promise((resolve) => {
			isNavigating = true;

			// 1. Immediately freeze Lenis so momentum scroll doesn't interfere
			if (lenisInstance) {
				lenisInstance.stop();
			}

			// 2. Play subtle cinematic exit animation
			const exitTl = gsap.timeline({
				defaults: { ease: "power2.inOut" }
			});

			if (pageContentRef) {
				exitTl.to(pageContentRef, {
					opacity: 0,
					y: -14,
					scale: 0.997,
					duration: 0.22,
					ease: "power2.in"
				}, 0);
			}

			if (curtainRef) {
				exitTl.to(curtainRef, {
					opacity: 1,
					duration: 0.20,
					ease: "power2.inOut"
				}, 0.02);
			}

			if (beamRef) {
				exitTl.fromTo(beamRef, 
					{ scaleX: 0, transformOrigin: "0% 50%" },
					{ scaleX: 0.85, duration: 0.22, ease: "power2.out" },
					0
				);
			}

			exitTl.add(async () => {
				// 3. Reset scroll seamlessly while covered by the curtain
				window.scrollTo({ top: 0, left: 0, behavior: "instant" });
				if (lenisInstance) {
					lenisInstance.scrollTo(0, { immediate: true });
				}

				// 4. Resolve navigation promise to mount the new page
				resolve();

				// 5. Wait for new page DOM to mount completely
				await navigation.complete;

				// 6. Ensure scroll is pinned at top for new page
				window.scrollTo({ top: 0, left: 0, behavior: "instant" });
				if (lenisInstance) {
					lenisInstance.scrollTo(0, { immediate: true });
				}
				ScrollTrigger.refresh();

				// 7. Play entrance animation smoothly
				const enterTl = gsap.timeline({
					defaults: { ease: "power3.out" },
					onComplete: () => {
						isNavigating = false;
						if (lenisInstance) {
							lenisInstance.start();
						}
						ScrollTrigger.refresh();
					}
				});

				if (beamRef) {
					enterTl.to(beamRef, {
						scaleX: 1,
						duration: 0.15,
						ease: "power2.out"
					}, 0);
				}

				if (curtainRef) {
					enterTl.to(curtainRef, {
						opacity: 0,
						duration: 0.30,
						ease: "power2.out"
					}, 0.06);
				}

				if (pageContentRef) {
					// Position new content slightly lower and glide up
					gsap.set(pageContentRef, { opacity: 0, y: 18, scale: 0.997 });
					enterTl.to(pageContentRef, {
						opacity: 1,
						y: 0,
						scale: 1,
						duration: 0.38,
						ease: "power3.out"
					}, 0.08);
				}
			});
		});
	});

	afterNavigate(() => {
		// Fallback scroll sanity check
		if (!isNavigating) {
			window.scrollTo({ top: 0, left: 0, behavior: "instant" });
			if (lenisInstance) {
				lenisInstance.scrollTo(0, { immediate: true });
			}
			setTimeout(() => {
				ScrollTrigger.refresh();
			}, 60);
		}
	});

	onMount(() => {
		gsap.registerPlugin(ScrollTrigger);

		const lenis = new Lenis({
			duration: 1.2,
			smoothWheel: true,
		});
		lenisInstance = lenis;
		if (typeof window !== "undefined") {
			window.__lenis = lenis;
		}

		lenis.on("scroll", ScrollTrigger.update);

		const updateTicker = (time) => {
			lenis.raf(time * 1000);
		};

		gsap.ticker.add(updateTicker);
		gsap.ticker.lagSmoothing(0);

		return () => {
			gsap.ticker.remove(updateTicker);
			lenis.destroy();
			if (typeof window !== "undefined") {
				window.__lenis = null;
			}
		};
	});
</script>

<Seo />
<Cursor />

<!-- Continuous Seamless Page Transition Curtain -->
<div 
	bind:this={curtainRef} 
	class="page-transition-curtain" 
	aria-hidden="true"
>
	<div bind:this={beamRef} class="page-transition-beam"></div>
	<div class="page-transition-glow"></div>
</div>

<div class="app-wrapper bg-[#050505] text-white min-h-screen relative">
	<!-- Persistent Header -->
	<Header />

	<!-- Dynamic Page Content -->
	<main 
		bind:this={pageContentRef} 
		class="page-content-wrapper"
	>
		{@render children()}
	</main>

	<!-- Persistent Footer -->
	<Footer />
</div>
