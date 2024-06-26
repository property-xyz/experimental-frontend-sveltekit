<script>
	import '../app.css';
	import { Input, MegaMenu, Navbar, NavBrand, NavHamburger, NavLi, NavUl } from 'flowbite-svelte';
	import { ChevronDownOutline, SearchOutline } from 'flowbite-svelte-icons';
	import { getCountries, getSubregions } from '$lib/nav';

	let searchTerm = '';
	let searchResults = [];
	let timeout = null;
	let selectedIndex = -1; // Track the currently selected index

	const handleSearch = (event) => {
		searchTerm = event.target.value;

		// Clear previous timeout if it exists
		if (timeout) {
			clearTimeout(timeout);
		}

		// Simulate server delay
		timeout = setTimeout(() => {
			if (searchTerm.length >= 3) {
				fetchSearchResults(searchTerm);
			} else {
				searchResults = [];
				selectedIndex = -1; // Reset selected index
			}
		}, 500);
	};

	const fetchSearchResults = async (term) => {
		// Simulate server response
		const fakeResults = [
			{ id: 1, description: `Result for "${term}" 1` },
			{ id: 2, description: `Result for "${term}" 2` },
			{ id: 3, description: `Result for "${term}" 3` },
			{ id: 4, description: `Result for "${term}" 4` },
			{ id: 5, description: `Result for "${term}" 5` }
		];

		searchResults = fakeResults;
		selectedIndex = -1; // Reset selected index
	};

	const selectResult = (result) => {
		// Handle result selection
		console.log('Selected result:', result);
		searchResults = [];
		searchTerm = '';
		selectedIndex = -1; // Reset selected index
		selectedResult = result.description;
	};
	let menu = [
		{ name: 'About us', href: '/about' },
		{ name: 'Blog', href: '/blog' },
		{ name: 'Contact us', href: '/contact' },
		{ name: 'Library', href: '/library' },
		{ name: 'Newsletter', href: '/news' },
		{ name: 'Support Center', href: '/support' },
		{ name: 'Resources', href: '/resource' },
		{ name: 'Playground', href: '/play' },
		{ name: 'Terms', href: '/terms' },
		{ name: 'Pro Version', href: '/pro' },
		{ name: 'License', href: '/license' }
	];
	const handleKeyDown = (event) => {
		if (event.key === 'ArrowUp') {
			event.preventDefault(); // Prevent cursor movement
			selectedIndex = Math.max(selectedIndex - 1, -1);
		} else if (event.key === 'ArrowDown') {
			event.preventDefault(); // Prevent cursor movement
			selectedIndex = Math.min(selectedIndex + 1, searchResults.length - 1);
		} else if (event.key === 'Enter') {
			if (selectedIndex !== -1) {
				selectResult(searchResults[selectedIndex]);
			}
		}
	};
	let selectedResult;

</script>


<Navbar class="max-w-[1024px] mx-auto" let:toggle let:hidden>
		<NavBrand href="/" class="flex-shrink-0">
			<img src="/logo-stack.svg" class="h-6" alt="XYZ Logo" />
		</NavBrand>

		<div class="flex items-center justify-end flex-grow md:order-2 md:hidden lg:block">
			<div class="relative w-full max-w-md mx-4 md:max-w-xs md:mx-0">
				<div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
					<SearchOutline class="w-4 h-4 text-gray-500" />
				</div>
				<Input id="search-navbar" class="w-full pl-10" placeholder="Search..." />
			</div>
			<NavHamburger on:click={toggle}/>
		</div>
		<NavUl {hidden} class="md:flex md:order-1">
			<NavLi href="/">UK</NavLi>
			{#each getCountries() as country}
				<NavLi class="cursor-pointer">
					<div class="flex items-center whitespace-nowrap">
						<span>{country}</span>
						<ChevronDownOutline class="w-4 h-4 ml-1 text-primary-800 dark:text-white flex-shrink-0" />
					</div>
				</NavLi>
				<MegaMenu items={getSubregions(country)} let:item>
					<a href={item.href} class="hover:text-primary-600 dark:hover:text-primary-500">{item.name}</a>
				</MegaMenu>
			{/each}
			<NavLi href="/services">Services</NavLi>
			<NavLi href="/products">Products</NavLi>
			<NavLi href="/contact">Contact</NavLi>
		</NavUl>
</Navbar>

<slot />
