<script lang="ts">
	import { getContext, setContext, type Snippet } from 'svelte';
	import { setMenuState } from './navState.svelte.js';

	type Props = {
		children: Snippet;
	};

	let { children }: Props = $props();

	setMenuState();
</script>

<nav class="flex flex-1 list-none flex-row gap-4">
	{@render children()}
</nav>
