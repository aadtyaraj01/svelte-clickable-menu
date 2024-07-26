import { getContext, setContext } from 'svelte';

type Theme = { value: 'light' | 'dark' };
export function setTheme() {
	const theme = $state<Theme>({ value: 'light' });
	setContext<Theme>('theme', theme);
}

export function getTheme() {
	return getContext<Theme>('theme');
}
