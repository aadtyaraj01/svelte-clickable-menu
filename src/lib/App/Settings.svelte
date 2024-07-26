<script lang="ts">
	import DarkMode from './DarkMode.svelte';

	import OpenDyslexic from './OpenDyslexic.svelte';

	import Toggle from '$lib/Toggle.svelte';
	import { fade } from 'svelte/transition';

	// settings
	let isSettingsOpen = $state(false);
	function toggleSettings() {
		isSettingsOpen = !isSettingsOpen;
	}

	//theme

	let darkMode = $state(false);
	function toggleTheme() {
		//darkMode = !darkMode;
	}

	let openDyslexic = $state(false);
	$effect(() => {
		document.body.style.fontFamily = openDyslexic ? 'OpenDyslexic' : 'inherit';
	});
	//
</script>

<div class="settings flex select-none flex-row flex-nowrap gap-4">
	<OpenDyslexic></OpenDyslexic>
	<DarkMode></DarkMode>
</div>
