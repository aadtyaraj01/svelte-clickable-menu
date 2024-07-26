<script lang="ts">
	import { getContext, setContext, type Snippet } from 'svelte';
	import { getMenuState, setMenuState } from './navState.svelte.js';
	import { fade } from 'svelte/transition';

	type Props = {
		children: Snippet;
	};

	let { children }: Props = $props();

	setMenuState();
	let openMenuIndex = getMenuState<{ value: number | null }>('openMenuIndex');
</script>

<nav class="flex flex-1 list-none flex-row gap-4">
	{@render children()}
	{#if openMenuIndex.value !== null}
		<div
			transition:fade={{ duration: 200 }}
			class="absolute left-0 top-[48px] z-10 h-[calc(100vh-48px)] w-full overflow-hidden bg-slate-950/70"
		></div>
	{/if}
</nav>
