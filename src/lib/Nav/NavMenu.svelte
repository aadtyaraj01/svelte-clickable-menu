<script lang="ts">
	import { type Snippet } from 'svelte';

	type Props = {
		children: Snippet;
	};

	let { children }: Props = $props();
</script>

<nav class="flex flex-1 list-none flex-row gap-4">
	{@render children()}
</nav>
