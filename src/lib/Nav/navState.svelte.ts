import { getContext, setContext } from 'svelte';

export function setMenuState() {
	const openMenuIndex = $state<{ value: number | null }>({ value: null });
	setContext('openMenuIndex', openMenuIndex);
}

export function getMenuState<T>(key: string) {
	return getContext<T>(key);
}
