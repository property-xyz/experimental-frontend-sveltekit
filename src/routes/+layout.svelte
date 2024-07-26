<script>
	import '../app.css';
	import { Input, MegaMenu, Navbar, NavBrand, NavHamburger, NavLi, NavUl } from 'flowbite-svelte';
	import { ChevronDownOutline, SearchOutline } from 'flowbite-svelte-icons';
	import { getCountries, getSubregions } from '$lib/nav';
</script>

<div class="grid grid-cols-12 min-w-[375px]">
	<div class="col-span-full md:col-start-2 md:col-end-12">
		<Navbar class="flex">
			<NavBrand href="/" class="flex-shrink-0">
				<img src="/logo/logo-stack.svg" class="hidden sm:block h-20 w-20" alt="XYZ Logo" />
				<img src="/logo/icon-black.jpg" class="block sm:hidden h-8 w-8" alt="XYZ Logo" />
			</NavBrand>

			<div class="flex-grow ml-4 md:hidden xl:block xl:max-w-4xl xl:px-12">
				<div class="relative">
					<div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
						<SearchOutline class="w-4 h-4 text-gray-500" />
					</div>
					<Input id="search-navbar" class="pl-10" placeholder="e.g. York, M21 or 1 High Street" />
				</div>
			</div>
			<NavHamburger />
			<NavUl>
				<NavLi href="/">UK</NavLi>
				{#each getCountries() as country}
					<NavLi class="cursor-pointer">
						<div class="flex items-center whitespace-nowrap">
							<span>{country}</span>
							<ChevronDownOutline class="w-4 h-4 ml-1 text-primary-800 dark:text-white flex-shrink-0" />
						</div>
					</NavLi>
					<MegaMenu items={getSubregions(country)} let:item
										class="grid grid-flow-row gap-y-4 md:gap-x-0 auto-col-max auto-row-max">
						<a href={item.href}
							 class="hover:text-primary-600 dark:hover:text-primary-500 space-x-6 mr-4">{item.name}</a>
					</MegaMenu>
				{/each}
				<NavLi href="/services">Invest</NavLi>
				<NavLi href="/products">Sell</NavLi>
			</NavUl>
		</Navbar>
	</div>
		<slot />
</div>
