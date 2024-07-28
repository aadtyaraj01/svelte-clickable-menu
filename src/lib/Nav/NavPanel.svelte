<script lang="ts">
	import { getContext, type Snippet } from 'svelte';
	import { ChevronDown } from 'lucide-svelte';
	import { slide } from 'svelte/transition';
	import { quintOut } from 'svelte/easing';
	import { tweenedHeight } from './navState.svelte.js';
	import clsx from 'clsx';

	type Props = {
		children: Snippet;
		index: number;
		link: string;
		label: string;
	};

	let { children, index, link, label }: Props = $props();

	let openMenuIndex = getContext<{ value: number | null }>('openMenuIndex');
	let refs = getContext<{ value: HTMLElement[] }>('refs');

	function toggleMenu(e: Event, index: number) {
		e.stopPropagation(); // Prevent the click from immediately triggering the body click handler
		const target = e.target as HTMLElement;

		if (openMenuIndex.value === index) {
			closeMenu();
			document.removeEventListener('click', closeMenu);
		} else {
			openMenuIndex.value = index;
			if (target && refs.value[index]) {
				console.log(refs.value);
				$tweenedHeight = refs.value[index].offsetHeight;
			}

			// Add the event listener after a short delay to avoid immediate triggering
			setTimeout(() => {
				document.addEventListener('click', closeMenu, { once: true });
			}, 0);
		}
	}

	function closeMenu() {
		openMenuIndex.value = null;
		$tweenedHeight = 0;
	}
</script>

<li class="relative z-50">
	<a
		href={link}
		onclick={(e) => {
			e.preventDefault();
			toggleMenu(e, index);
		}}
		class="relative z-30 inline-flex flex-row items-center gap-1"
		>{label}
		<span
			class={`inline-block origin-center transition-transform duration-100 ${openMenuIndex.value !== null && openMenuIndex.value === index ? 'rotate-180' : 'rotate-0'}`}
		>
			<ChevronDown size="1rem" />
		</span>
	</a>
</li>
{#if openMenuIndex.value !== null}
	<!-- TODO: store height value for smoother transition b/w the menus -->
	<div
		class={clsx(
			'absolute left-0 top-[48px] z-20 w-full bg-zinc-200',
			openMenuIndex.value === index ? 'opacity-100' : 'pointer-events-none opacity-0'
		)}
		transition:slide={{ duration: 300, axis: 'y', easing: quintOut }}
	>
		<div class={`${openMenuIndex.value === index && 'fade-in'}`} bind:this={refs.value[index]}>
			{@render children()}
		</div>
	</div>
{/if}

<style>
	@keyframes fade-in {
		from {
			opacity: 0;
			transform: translateX(-10%);
		}
		to {
			opacity: 1;
			transform: translateX(0);
		}
	}
	.fade-in {
		animation: fade-in 0.2s linear;
	}
</style>
