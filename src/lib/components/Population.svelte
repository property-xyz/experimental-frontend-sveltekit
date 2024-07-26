<script lang="ts">
	import { Chart, Card } from 'flowbite-svelte';
	import { ChevronRightOutline } from 'flowbite-svelte-icons';
	import { type CountryPopulationProjection, fragment, graphql } from '$houdini';

	export let populationProjections: CountryPopulationProjection;

	$: populationData = fragment(populationProjections, graphql(`
	 fragment CountryPopulationProjection on query_root{
	 uk_data_population_projection_by_country {
	 			year_2020
        year_2025
        year_2030
        year_2035
        year_2040
        year_2045
        country
	 }}`));


	function prepareChartOptions(countryData) {
		const years = Object.keys(countryData).filter(key => key.startsWith('year_'));
		const populations = years.map(year => countryData[year]);

		return {
			chart: {
				height: '400px',
				maxWidth: '100%',
				type: 'area',
				fontFamily: 'Inter, sans-serif',
				dropShadow: { enabled: false },
				toolbar: { show: false }
			},
			tooltip: { enabled: true, x: { show: false } },
			fill: {
				type: 'gradient',
				gradient: {
					opacityFrom: 0.55,
					opacityTo: 0,
					shade: '#1C64F2',
					gradientToColors: ['#1C64F2']
				}
			},
			dataLabels: { enabled: false },
			stroke: { width: 6 },
			grid: {
				show: false,
				strokeDashArray: 4,
				padding: { left: 2, right: 2, top: 0 }
			},
			series: [
				{
					name: 'Population',
					data: populations,
					color: '#1A56DB'
				}
			],
			xaxis: {
				categories: years.map(year => year.replace('year_', '')),
				labels: { show: true },
				axisBorder: { show: false },
				axisTicks: { show: false }
			},
			yaxis: {
				show: true,
				labels: {
					formatter: function(value) {
						return value + 'M';
					}
				}
			}
		};
	}
</script>

<div class="col-span-full">
	<h1 class="text-2xl font-bold mb-6">UK Population Projections (2020-2045)</h1>
	<div class=" p-4 flex">
		{#each $populationData.uk_data_population_projection_by_country as countryData}
			<Card class="mb-6">
				<div class="flex justify-between mb-4">
					<div>
						<h5 class="leading-none text-3xl font-bold text-gray-900 dark:text-white pb-2">
							{countryData.country}
						</h5>
						<p class="text-base font-normal text-gray-500 dark:text-gray-400">
							Population projection
						</p>
					</div>
					<div
						class="flex items-center px-2.5 py-0.5 text-base font-semibold text-green-500 dark:text-green-500 text-center">
						{((countryData.year_2045 - countryData.year_2020) / countryData.year_2020 * 100).toFixed(1)}%
						<ChevronRightOutline class="w-6 h-6 ms-1" />
					</div>
				</div>
				<Chart options={prepareChartOptions(countryData)} />
			</Card>
		{/each}
	</div>
</div>