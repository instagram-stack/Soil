<script>
    import { onMount } from "svelte";
    import gsap from "gsap";
    import ScrollToPlugin from "gsap/ScrollToPlugin";
    import { goto } from "$app/navigation";
    import { page } from "$app/state";
    import Logo from "./logo.svelte";
    import Menu from "@lucide/svelte/icons/menu";
    import X from "@lucide/svelte/icons/x";

    let headerRef = $state();
    let navItemsRef = $state([]);
    let iconsRef = $state();
    let logoRef = $state();
    let mobileMenuRef = $state();
    let mobileLinksRef = $state([]);
    let isMenuOpen = $state(false);

    function toggleMenu() {
        isMenuOpen = !isMenuOpen;
        if (isMenuOpen) {
            const tl = gsap.timeline();
            tl.to(mobileMenuRef, {
                autoAlpha: 1,
                clipPath: "inset(0% 0% 0% 0%)",
                duration: 0.8,
                ease: "power2.inOut",
            }).fromTo(
                mobileLinksRef,
                { y: 20, autoAlpha: 0 },
                {
                    y: 0,
                    autoAlpha: 1,
                    duration: 0.8,
                    stagger: 0.1,
                    ease: "power2.out",
                },
                "-=0.4",
            );
        } else {
            gsap.to(mobileMenuRef, {
                autoAlpha: 0,
                clipPath: "inset(0% 100% 0% 0%)",
                duration: 0.6,
                ease: "power2.inOut",
            });
        }
    }

    // Seamless Page Navigation
    function handleNav(evt, destination) {
        evt.preventDefault();
        if (isMenuOpen) toggleMenu();

        if (page.url.pathname === destination) {
            if (typeof window !== "undefined" && window.__lenis) {
                window.__lenis.scrollTo(0, { 
                    duration: 1.0, 
                    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)) 
                });
            } else if (typeof window !== "undefined") {
                window.scrollTo({ top: 0, behavior: "smooth" });
            }
            return;
        }

        goto(destination);
    }


    onMount(() => {
        gsap.registerPlugin(ScrollToPlugin);
        let mm = gsap.matchMedia();

        mm.add(
            {
                isMobile: "(max-width: 767px)",
                isDesktop: "(min-width: 768px)",
            },
            (context) => {
                let { isMobile, isDesktop } = context.conditions;
                const tl = gsap.timeline({ delay: 0.2 });

                gsap.set(headerRef, {
                    width: "0px",
                    opacity: 0,
                    overflow: "hidden",
                });

                gsap.set(logoRef, { autoAlpha: 0, y: 15, scale: 0.95 });
                gsap.set(iconsRef, { autoAlpha: 0, x: 10 });
                gsap.set(mobileMenuRef, { clipPath: "inset(0% 100% 0% 0%)" });

                if (isDesktop) {
                    gsap.set(navItemsRef, { autoAlpha: 0, y: 15 });
                }

                tl.to(headerRef, {
                    width: isMobile ? "calc(100% - 2rem)" : "100%",
                    maxWidth: "896px",
                    opacity: 1,
                    duration: 1.2,
                    ease: "expo.inOut",
                }).to(
                    logoRef,
                    {
                        autoAlpha: 1,
                        y: 0,
                        scale: 1,
                        duration: 1.2,
                        ease: "expo.out",
                    },
                    "-=0.2",
                );

                if (isDesktop) {
                    tl.to(
                        navItemsRef,
                        {
                            autoAlpha: 1,
                            y: 0,
                            duration: 0.6,
                            stagger: 0.08,
                            ease: "power3.out",
                        },
                        "-=0.5",
                    );
                }

                tl.to(
                    iconsRef,
                    {
                        autoAlpha: 1,
                        x: 0,
                        duration: 0.5,
                        stagger: 0.1,
                        ease: "power2.out",
                    },
                    "-=0.5",
                );

                return () => tl.kill();
            },
        );

        return () => mm.revert();
    });
</script>

<div
    bind:this={headerRef}
    class="header opacity-0 w-0 z-60 fixed top-4 left-1/2 -translate-x-1/2 bg-[#0A0A0A]/60 border border-white/10 h-[60px] pl-6 pr-2 whitespace-nowrap flex justify-between items-center backdrop-blur-xl"
>
    <a
        id="logo"
        href="/"
        onclick={(e) => handleNav(e, "/")}
        bind:this={logoRef}
        class="flex-shrink-0 flex items-center justify-center w-auto cursor-pointer mix-blend-difference"
    >
        <Logo />
    </a>

    <!-- Desktop Nav -->
    <div id="nav" class="absolute left-1/2 -translate-x-1/2 hidden md:block">
        <ul class="flex space-x-8 text-sm font-medium">
            <li bind:this={navItemsRef[0]}>
                <a
                    href="/about"
                    onclick={(e) => handleNav(e, "/about")}
                    class={page.url.pathname === "/about"
                        ? "text-[#E6FF5A] font-medium flex items-center gap-1.5"
                        : "text-white/70 hover:text-white transition-colors flex items-center gap-1.5"}
                >
                    {#if page.url.pathname === "/about"}
                        <span class="w-1.5 h-1.5 rounded-full bg-[#E6FF5A]"></span>
                    {/if}
                    About
                </a>
            </li>
            <li bind:this={navItemsRef[1]}>
                <a
                    href="/work"
                    onclick={(e) => handleNav(e, "/work")}
                    class={page.url.pathname === "/work"
                        ? "text-[#E6FF5A] font-medium flex items-center gap-1.5"
                        : "text-white/70 hover:text-white transition-colors flex items-center gap-1.5"}
                >
                    {#if page.url.pathname === "/work"}
                        <span class="w-1.5 h-1.5 rounded-full bg-[#E6FF5A]"></span>
                    {/if}
                    Work
                </a>
            </li>
            <li bind:this={navItemsRef[2]}>
                <a
                    href="/services"
                    onclick={(e) => handleNav(e, "/services")}
                    class={page.url.pathname === "/services"
                        ? "text-[#E6FF5A] font-medium flex items-center gap-1.5"
                        : "text-white/70 hover:text-white transition-colors flex items-center gap-1.5"}
                >
                    {#if page.url.pathname === "/services"}
                        <span class="w-1.5 h-1.5 rounded-full bg-[#E6FF5A]"></span>
                    {/if}
                    Services
                </a>
            </li>
            <li bind:this={navItemsRef[3]}>
                <a
                    href="/agency"
                    onclick={(e) => handleNav(e, "/agency")}
                    class={page.url.pathname === "/agency"
                        ? "text-[#E6FF5A] font-medium flex items-center gap-1.5"
                        : "text-white/70 hover:text-white transition-colors flex items-center gap-1.5"}
                >
                    {#if page.url.pathname === "/agency"}
                        <span class="w-1.5 h-1.5 rounded-full bg-[#E6FF5A]"></span>
                    {/if}
                    Agency
                </a>
            </li>
        </ul>
    </div>

    <!-- Right Controls -->
    <div
        bind:this={iconsRef}
        class="flex space-x-1 sm:space-x-3 items-center z-50"
    >
        <a
            href="/contact"
            onclick={(e) => handleNav(e, "/contact")}
            class="hidden md:flex items-center justify-center text-sm font-medium {page.url.pathname === '/contact' ? 'bg-[#E6FF5A] text-black font-semibold' : 'bg-white text-black hover:bg-white/80'} transition-colors px-6 py-2 rounded-full"
            >Let's Talk</a
        >
        <button
            onclick={toggleMenu}
            class="cursor-pointer w-10 h-10 flex justify-center items-center rounded-full text-white/80 hover:text-white hover:bg-white/10 transition-colors md:hidden"
        >
            {#if isMenuOpen}
                <X />
            {:else}
                <Menu />
            {/if}
        </button>
    </div>
</div>

<!-- Extra Soft Glassmorphism Mobile Menu Overlay -->
<div
    bind:this={mobileMenuRef}
    class="fixed inset-0 z-40 bg-[#0A0A0A]/85 backdrop-blur-2xl flex flex-col justify-center invisible opacity-0 px-10 overflow-hidden"
>
    <!-- Soft background glow -->
    <div
        class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] bg-[#E6FF5A] opacity-[0.08] blur-[100px] rounded-full pointer-events-none"
    ></div>

    <ul class="flex flex-col space-y-10 text-left relative z-10">
        <li class="overflow-hidden">
            <a
                bind:this={mobileLinksRef[0]}
                href="/about"
                onclick={(e) => handleNav(e, "/about")}
                class="block text-4xl font-sans font-light {page.url.pathname === '/about' ? 'text-[#E6FF5A]' : 'text-white/80 hover:text-white'} transition-colors will-change-transform"
                >About</a
            >
        </li>
        <li class="overflow-hidden">
            <a
                bind:this={mobileLinksRef[1]}
                href="/work"
                onclick={(e) => handleNav(e, "/work")}
                class="block text-4xl font-sans font-light {page.url.pathname === '/work' ? 'text-[#E6FF5A]' : 'text-white/80 hover:text-white'} transition-colors will-change-transform"
                >Work</a
            >
        </li>
        <li class="overflow-hidden">
            <a
                bind:this={mobileLinksRef[2]}
                href="/services"
                onclick={(e) => handleNav(e, "/services")}
                class="block text-4xl font-sans font-light {page.url.pathname === '/services' ? 'text-[#E6FF5A]' : 'text-white/80 hover:text-white'} transition-colors will-change-transform"
                >Services</a
            >
        </li>
        <li class="overflow-hidden">
            <a
                bind:this={mobileLinksRef[3]}
                href="/agency"
                onclick={(e) => handleNav(e, "/agency")}
                class="block text-4xl font-sans font-light {page.url.pathname === '/agency' ? 'text-[#E6FF5A]' : 'text-white/80 hover:text-white'} transition-colors will-change-transform"
                >Agency</a
            >
        </li>
        <li class="overflow-hidden mt-6 pt-8 border-t border-white/10">
            <a
                bind:this={mobileLinksRef[4]}
                href="/contact"
                onclick={(e) => handleNav(e, "/contact")}
                class="inline-block text-xl font-sans {page.url.pathname === '/contact' ? 'text-[#E6FF5A]' : 'text-white hover:text-white/80'} transition-colors will-change-transform"
                >Let's talk &rarr;</a
            >
        </li>
    </ul>

    <div
        class="absolute bottom-10 left-10 flex gap-6 text-xs font-mono text-white/40 uppercase tracking-widest relative z-10"
    >
        <a href="https://twitter.com">Twitter</a>
        <a href="https://linkedin.com">LinkedIn</a>
    </div>
</div>

<style>
    .header {
        border-radius: 100px;
    }
</style>
