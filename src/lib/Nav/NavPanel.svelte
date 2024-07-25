<script lang="ts">
	import { getContext, type Snippet } from 'svelte';
	import { getMenuState } from './navState.svelte.js';

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

<li>
	<a
		href={link}
		onclick={(e) => {
			e.preventDefault();
			toggleMenu(e, index);
		}}
		>{label}
		<span
			class={`inline-block origin-center transition-transform duration-100 ${openMenuIndex.value !== null && openMenuIndex.value === index ? 'rotate-180' : 'rotate-0'}`}
			>v</span
		>
	</a>
	{#if openMenuIndex.value !== null && openMenuIndex.value === index}
		{@render children()}
	{/if}
</li>
