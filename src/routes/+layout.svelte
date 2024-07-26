<script lang="ts">
	import type { Snippet } from 'svelte';
	import '../app.css';
	import { NavBar, NavMenu, NavPanel } from '$lib/Nav/index.js';
	import Settings from '$lib/App/Settings.svelte';
	// import { setTheme, getTheme } from './mode.svelte.js';

	// setTheme();

	let { children }: { children: Snippet } = $props();
</script>

<NavBar>
	{#snippet icon()}
		🍺
	{/snippet}
	<NavMenu>
		<NavPanel index={0} link="/" label="hello">
			<div class="nav-panel grid grid-cols-2 gap-6 bg-slate-500 p-3 dark:bg-black dark:text-white">
				{#each new Array(6) as _, i}
					<a href="link-{i}">link-{i}</a>
				{/each}
			</div>
		</NavPanel>
		<NavPanel index={1} link="/" label="gello">
			<div class="nav-panel grid grid-cols-2 gap-6 bg-white p-3">
				{#each new Array(6) as _, i}
					<a href="link-{i}">link-{i}</a>
				{/each}
			</div>
		</NavPanel>
		<NavPanel index={3} link="/" label="kello">
			<div class="nav-panel grid grid-cols-2 gap-6 bg-white p-3">
				{#each new Array(6) as _, i}
					<a href="link-{i}">link-{i}</a>
				{/each}
			</div>
		</NavPanel>
	</NavMenu>
	<div class="cta"></div>
	<Settings />
</NavBar>
<main>
	<h1 class="text-4xl">hi</h1>
	{@render children()}
</main>

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

<style>
	:global(:root) {
		--color-theme: #fff;
	}
	:global(body) {
		background-color: var(--color-theme) !important;
	}
</style>
