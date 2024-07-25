<script lang="ts">
	import { type Snippet } from 'svelte';

	type Props = {
		icon: Snippet;
		children: Snippet;
	};

	let { icon, children }: Props = $props();
</script>

<header class="flex w-full flex-row flex-nowrap gap-4 px-3 py-2">
	{@render icon()}
	<!-- children has menu items, CTAs and Settings -->
	{@render children()}
</header>
