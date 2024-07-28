import { setContext } from 'svelte';
import { cubicOut } from 'svelte/easing';
import { tweened } from 'svelte/motion';

export function setMenuState() {
	const openMenuIndex = $state<{ value: number | null }>({ value: null });
	setContext('openMenuIndex', openMenuIndex);
}

export function setHeightState() {
	const menuHeight = $state({ value: 0 });
	setContext('popoverHeight', menuHeight);
}

export function setMenuRefs() {
	const refs = $state<{ value: HTMLElement[] }>({ value: [] });
	setContext('refs', refs);
}

export const tweenedHeight = tweened(0, {
	duration: 200,
	easing: cubicOut
});
