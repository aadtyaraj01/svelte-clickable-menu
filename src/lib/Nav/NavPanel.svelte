<script lang="ts">
	import { type Snippet } from 'svelte';

	type Props = {
		children: Snippet;
		index: number;
	};

	let { children, index }: Props = $props();

	let openMenuIndex = $state<number | null>(null);

	function toggleMenu(e: Event, index: number) {
		e.stopPropagation(); // Prevent the click from immediately triggering the body click handler

		if (openMenuIndex === index) {
			closeMenu();
			document.removeEventListener('click', closeMenu);
		} else {
			openMenuIndex = index;
			// Add the event listener after a short delay to avoid immediate triggering
			setTimeout(() => {
				document.addEventListener('click', closeMenu, { once: true });
			}, 0);
		}
	}

	function closeMenu() {
		openMenuIndex = null;
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
			class={`inline-block origin-center transition-transform duration-100 ${openMenuIndex !== null && openMenuIndex === index ? 'rotate-180' : 'rotate-0'}`}
			>v</span
		>
	</a>
	{#if openMenuIndex !== null && openMenuIndex === index}
		{@render children()}
	{/if}
</li>
