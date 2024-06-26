<script>
	import '../app.css';
	import { Button, Input, MegaMenu, Navbar, NavBrand, NavHamburger, NavLi, NavUl, Search } from 'flowbite-svelte';
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



<Navbar class="max-w-[1024px] mx-auto ">
	<NavBrand href="/">
		<img src="/logo-stack.svg" class="me-3 h-6" alt="XYZ Logo" />
	</NavBrand>
	<div class="flex md:order-2">
		<Button color="none" data-collapse-toggle="mobile-menu-3" aria-controls="mobile-menu-3" aria-expanded="false" class="md:hidden text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5 me-1">
			<SearchOutline class="w-5 h-5" />
		</Button>
		<div class="hidden relative md:block">
			<div class="flex absolute inset-y-0 start-0 items-center ps-3 pointer-events-none">
				<SearchOutline class="w-4 h-4" />
			</div>
			<Input id="search-navbar" class="ps-10" placeholder="Search..." />
		</div>
		<NavHamburger />
	</div>
	<NavUl>
		<NavLi href="/">UK</NavLi>
		{#each getCountries() as country}
			<NavLi class="cursor-pointer">
				{country} <ChevronDownOutline class="w-6 h-6 ms-2 text-primary-800 dark:text-white inline" />
		</NavLi>
		<MegaMenu items={getSubregions(country)} let:item>
			<a href={item.href} class="hover:text-primary-600 dark:hover:text-primary-500">{item.name}</a>
		</MegaMenu>
		{/each}
		<NavLi href="/services">Services</NavLi>
		<NavLi href="/services">Products</NavLi>
		<NavLi href="/services">Contact</NavLi>
	</NavUl>
</Navbar>

<slot />
