import { browser } from '$app/environment';

export const Themes = ['light', 'dark', 'Default'] as const;
export const BrowserThemes = ['light', 'dark'] as const;

export const CurrentThemeState = $state<(typeof Themes)[number]>('Default');



export const setTheme = () => {
	if (!browser) return; // localStorage isn't available on server

	const cachedTheme = localStorage.getItem('theme');

    if (!cachedTheme) return;

    if (Themes.includes(cachedTheme))
};
