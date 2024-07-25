<script lang="ts">
	import type { Snippet } from 'svelte';
	import '../app.css';
	import { NavBar, NavMenu, NavPanel } from '$lib/Nav/index.js';
	let { children }: { children: Snippet } = $props();
</script>

<NavBar>
	{#snippet icon()}
		🍺
	{/snippet}
	<NavMenu>
		<NavPanel index={0} link="/" label="hello">
			<div class="nav-panel absolute grid grid-cols-2 gap-6 bg-white p-3">
				{#each new Array(6) as _, i}
					<a href="link-{i}">link-{i}</a>
				{/each}
			</div>
		</NavPanel>
		<NavPanel index={1} link="/" label="gello">
			<div class="nav-panel absolute grid grid-cols-2 gap-6 bg-white p-3">
				{#each new Array(6) as _, i}
					<a href="link-{i}">link-{i}</a>
				{/each}
			</div>
		</NavPanel>
	</NavMenu>
	<div class="cta"></div>
	<div class="settings">
		<button> ⚙️ </button>
	</div>
</NavBar>

{@render children()}

<!-- 
	<NavBar>
		<NavIcon></NavBar>
		<NavMenu>
			<NavPanel>Products</NavPanel>
			<NavPanel>Solutions</NavPanel>
			<NavPanel>Resources</NavPanel>
			<NavLink>Pricing</NavLink>
		</NavMenu>
		<NavCta></NavCta>
		<NavSettings></NavSettings>
	</NavBar>
-->
