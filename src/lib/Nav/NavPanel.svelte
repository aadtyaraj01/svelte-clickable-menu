<script lang="ts">
	import { getContext, type Snippet } from 'svelte';
	import { getMenuState } from './navState.svelte.js';
	import { ChevronDown, Triangle } from 'lucide-svelte';
	import { fade, fly, slide } from 'svelte/transition';
	import { quintOut } from 'svelte/easing';
	type Props = {
		children: Snippet;
		index: number;
		link: string;
		label: string;
	};

	let { children, index, link, label }: Props = $props();

	let openMenuIndex = getMenuState<{ value: number | null }>('openMenuIndex');

	function toggleMenu(e: Event, index: number) {
		e.stopPropagation(); // Prevent the click from immediately triggering the body click handler

		if (openMenuIndex.value === index) {
			closeMenu();
			document.removeEventListener('click', closeMenu);
		} else {
			openMenuIndex.value = index;
			// Add the event listener after a short delay to avoid immediate triggering
			setTimeout(() => {
				document.addEventListener('click', closeMenu, { once: true });
			}, 0);
		}
	}

	function closeMenu() {
		openMenuIndex.value = null;
		// console.log('closing');
	}
</script>

<li class="relative z-50">
	<a
		href={link}
		onclick={(e) => {
			e.preventDefault();
			toggleMenu(e, index);
		}}
		class="relative z-30 inline-flex flex-row items-center gap-1"
		>{label}
		<span
			class={`inline-block origin-center transition-transform duration-100 ${openMenuIndex.value !== null && openMenuIndex.value === index ? 'rotate-180' : 'rotate-0'}`}
		>
			<ChevronDown size="1rem" />
		</span>
	</a>
</li>
{#if openMenuIndex.value !== null && openMenuIndex.value === index}
	<!-- TODO: store height value for smoother transition b/w the menus -->
	<div
		class="absolute left-0 top-[48px] z-20 w-full"
		transition:slide={{ duration: 300, axis: 'y', easing: quintOut }}
	>
		{@render children()}
	</div>
{/if}
