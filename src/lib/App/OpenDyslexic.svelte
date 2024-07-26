<script lang="ts">
	let openDyslexic = $state(false);

	function toggleFont() {
		openDyslexic = !openDyslexic;
		document.body.style.fontFamily = openDyslexic ? 'OpenDyslexic, sans-serif' : 'inherit';
	}
</script>

<div class="flex items-center justify-end p-2">
	<div class="group relative inline-block">
		<button
			type="button"
			class="inline-flex items-center justify-center rounded-lg p-2 text-sm font-medium text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-700"
			onclick={toggleFont}
			aria-label={openDyslexic ? 'Switch to default font' : 'Switch to OpenDyslexic font'}
		>
			<svg
				class="h-5 w-5"
				fill="currentColor"
				viewBox="0 0 20 20"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
				<path
					fill-rule="evenodd"
					d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
					clip-rule="evenodd"
				/>
			</svg>
		</button>
		<span
			class="absolute -bottom-4 left-1/2 w-max -translate-x-1/2 rounded bg-gray-800 px-2 py-1 text-xs font-medium text-white opacity-0 shadow transition-opacity group-hover:opacity-100 dark:bg-gray-700"
		>
			{openDyslexic ? 'Default font' : 'OpenDyslexic font'}
		</span>
	</div>
</div>
