<script lang="ts">
	import type { PageData } from './$houdini';
	import { Card, Heading, P } from 'flowbite-svelte';
	import { MapPin } from 'lucide-svelte';
	import Population from '$lib/components/Population.svelte';
	import Hpi from '$lib/components/Hpi.svelte';

	export let data: PageData;
	$: ({ ukGeo, UkData} = data);

	console.log(UkData);
	function splitIntoGroups(counties, groupSize = 6) {
		const groups = [];
		for (let i = 0; i < counties.length; i += groupSize) {
			groups.push(counties.slice(i, i + groupSize));
		}
		return groups;
	}
</script>

<div class="col-span-full mx-auto">
<!--		<Hpi hpi={$Hpi.data} country={country}/>-->
</div>
<!--<Card size="xl" class="col-start-3 col-end-11 shadow-lg">-->
<!--	<Heading tag="h2" class="mb-4 text-center" customSize="text-3xl font-bold">PROPERTY MARKET DATA ON EVERY AREA OF THE-->
<!--		UK-->
<!--	</Heading>-->
<!--	<P class="mb-8 text-center text-gray-600">Select an area below to explore it further. We have data on every area,-->
<!--		city, town, village, postcode and unique house and flat address in the UK.</P>-->

<!--	{#each ukGeo as area}-->
<!--		<div class="mb-8 pb-8 border-b border-gray-200 last:border-b-0">-->
<!--			<Heading tag="h3" class="mb-6 flex items-center justify-center bg-gray-100 py-2 rounded-lg"-->
<!--							 customSize="text-2xl font-bold">-->
<!--				{#if area.name === 'England'}-->
<!--					<span class="mr-2 text-2xl">🏴󠁧󠁢󠁥󠁮󠁧󠁿</span>-->
<!--				{:else if area.name === 'Wales'}-->
<!--					<span class="mr-2 text-2xl">🏴󠁧󠁢󠁷󠁬󠁳󠁿</span>-->
<!--				{:else if area.name === 'Scotland'}-->
<!--					<span class="mr-2 text-2xl">🏴󠁧󠁢󠁳󠁣󠁴󠁿</span>-->
<!--				{/if}-->
<!--				{area.name.toUpperCase()}-->
<!--			</Heading>-->

<!--			<div class="grid md:grid-cols-2 gap-6">-->
<!--				{#if area.regions}-->
<!--					{#each area.regions as region}-->
<!--						<div class="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">-->
<!--							<p class="font-semibold flex items-center mb-3 text-lg text-blue-600">-->
<!--								<MapPin class="mr-2 text-red-500" size={20} />-->
<!--								{region.name.toUpperCase()}-->
<!--							</p>-->
<!--							<p class="text-sm text-gray-600 leading-relaxed">-->
<!--								{region.counties.map(county => county.name).join(' • ')}-->
<!--							</p>-->
<!--						</div>-->
<!--					{/each}-->
<!--				{:else}-->
<!--					{#each splitIntoGroups(area.counties) as countyGroup}-->
<!--						<div class="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">-->
<!--							<p class="text-sm text-gray-600 leading-relaxed">-->
<!--								{countyGroup.map(county => county.name).join(' • ')}-->
<!--							</p>-->
<!--						</div>-->
<!--					{/each}-->
<!--				{/if}-->
<!--			</div>-->
<!--		</div>-->
<!--	{/each}-->
<!--</Card>-->
<!--{#if $PopulationData?.data}-->
<!--	<Population populationProjections={$PopulationData.data} />-->
<!--{/if}-->
