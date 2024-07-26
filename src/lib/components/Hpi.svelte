<script lang="ts">
	import { Chart, Card, Button, Dropdown, DropdownItem } from 'flowbite-svelte';
	import { ChevronRightOutline, ChevronDownOutline } from 'flowbite-svelte-icons';
	import { fragment, graphql } from '$houdini';
	import { type Hpi } from '$houdini';

	export let hpi: Hpi;
	export let country: string

	$: hpiData = fragment(hpi, graphql(`
				fragment Hpi on query_root @arguments(countries: {type: "[String!]!"}) {
						uk_data_house_price_index (
								where: {regionname: {_in: $countries}},
								order_by: {date: desc}
						) {
                    averageprice
                    averagepricesa
                    cashindex
                    cashonemonthpercentchange
                    cashprice
                    cashsalesvolume
                    cashtwelvemonthpercentchange
                    detachedindex
                    detachedonemonthpercentchange
                    detachedprice
                    detachedtwelvemonthpercentchange
                    flatindex
                    flatonemonthpercentchange
                    flatprice
                    flattwelvemonthpercentchange
                    fooindex
                    fooonemonthpercentchange
                    fooprice
                    footwelvemonthpercentchange
                    ftbindex
                    ftbonemonthpercentchange
                    ftbprice
                    ftbtwelvemonthpercentchange
                    index
                    indexsa
                    last_update
                    mortgageindex
                    mortgageonemonthpercentchange
                    mortgageprice
                    mortgagesalesvolume
                    mortgagetwelvemonthpercentchange
                    newindex
                    newonemonthpercentchange
                    newprice
                    newsalesvolume
                    newtwelvemonthpercentchange
                    oldindex
                    oldonemonthpercentchange
                    oldprice
                    oldsalesvolume
                    oldtwelvemonthpercentchange
                    onemonthpercentchange
                    salesvolume
                    semidetachedindex
                    semidetachedonemonthpercentchange
                    semidetachedprice
                    semidetachedtwelvemonthpercentchange
                    terracedindex
                    terracedonemonthpercentchange
                    terracedprice
                    terracedtwelvemonthpercentchange
                    twelvemonthpercentchange
                    date
                    regionname
		}}`));

	const categories = [
		{
			id: 'property_type',
			name: 'Property Type',
			metrics: ['averageprice', 'detachedprice', 'semidetachedprice', 'terracedprice', 'flatprice']
		},
		{ id: 'buyer', name: 'Buyer Status', metrics: ['ftbprice', 'fooprice'] },
		{ id: 'funding', name: 'Funding Status', metrics: ['cashprice', 'mortgageprice'] },
		{ id: 'volume', name: 'Sales Volume', metrics: ['salesvolume', 'cashsalesvolume', 'mortgagesalesvolume'] },
		{ id: 'property_status', name: 'Property Status', metrics: ['newprice', 'oldprice'] }
	];

	let selectedMetrics = ['averageprice'];
	let timeRange = 'Last 12 months';

	function getChartSeries(metrics) {
		const colors = ['#1A56DB', '#10B981', '#F59E0B', '#EF4444', '#8B5CF6', '#EC4899', '#14B8A6', '#6366F1'];
		const series = metrics.map((metric, index) => ({
			name: getMetricDisplayName(metric),
			data: data.map(d => d[metric]).reverse(),
			color: colors[index % colors.length]
		}));

		// Add hidden series only if there's a single visible series
		if (series.length === 1) {
			series.push({
				name: 'Hidden',
				data: Array(data.length).fill(null),
				color: 'transparent'
			});
		}

		return series;
	}

	function getMetricDisplayName(metric) {
		const specialCases = {
			'ftbprice': 'First-time Buyers Price',
			'fooprice': 'Former Owner-occupiers Price'
		};

		if (metric in specialCases) {
			return specialCases[metric];
		}

		return metric.charAt(0).toUpperCase() + metric.slice(1).replace('price', ' Price').replace('volume', ' Volume');
	}

	$: options = {
		chart: {
			height: 400,
			type: 'line',
			fontFamily: 'Inter, sans-serif',
			toolbar: {
				show: true
			}
		},
		colors: ['#1A56DB', '#10B981', '#F59E0B', '#EF4444', '#8B5CF6', '#EC4899', '#14B8A6', '#6366F1'],
		dataLabels: { enabled: false },
		stroke: {
			width: 6,
			curve: 'smooth'
		},
		grid: {
			show: true,
			strokeDashArray: 4,
			padding: {
				left: 2,
				right: 2,
				top: 0
			}
		},
		xaxis: {
			categories: data.map(d => d.date).reverse(),
			labels: { show: true },
			axisBorder: { show: true },
			axisTicks: { show: true }
		},
		yaxis: [
			{
				title: { text: 'Price (£)' },
				labels: {
					formatter: (value) => '£' + (value / 1000).toFixed(0) + 'k'
				}
			},
			{
				title: { text: 'Volume' },
				opposite: true,
				show: selectedMetrics.some(m => m.includes('volume')),
				labels: {
					formatter: (value) => value.toLocaleString()
				}
			}
		],
		tooltip: {
			shared: true,
			intersect: false,
			y: {
				formatter: (value, { seriesIndex, dataPointIndex, w }) => {
					const metric = w.config.series[seriesIndex].name.toLowerCase().replace(' ', '');
					if (metric === 'hidden') return '';
					return metric.includes('volume') ?
						(value === null ? 'N/A' : value.toLocaleString()) :
						`£${value.toLocaleString()}`;
				}
			}
		},
		legend: {
			show: true,
			position: 'bottom',
			onItemClick: {
				toggleDataSeries: true
			},
			formatter: function(seriesName, opts) {
				return seriesName !== 'Hidden' ? seriesName : '';
			},
			markers: {
				fillColors: ['#1A56DB', '#10B981', '#F59E0B', '#EF4444', '#8B5CF6', '#EC4899', '#14B8A6', '#6366F1']
			}
		},
		noData: {
			text: 'No data to display',
			align: 'center',
			verticalAlign: 'middle',
			offsetX: 0,
			offsetY: 0,
			style: {
				color: '#6B7280',
				fontSize: '14px',
				fontFamily: 'Inter, sans-serif'
			}
		},
		series: getChartSeries(selectedMetrics)
	};

	$: latestData = data[0];

	function toggleMetric(metric) {
		if (selectedMetrics.includes(metric)) {
			selectedMetrics = selectedMetrics.filter(m => m !== metric);
		} else {
			selectedMetrics = [...selectedMetrics, metric];
		}
		selectedMetrics = [...selectedMetrics]; // Trigger reactivity
	}

	function updateTimeRange(range) {
		timeRange = range;
		// Here you would typically update the data based on the selected time range
	}

	$: averagePriceChange = ((latestData.averageprice - data[1].averageprice) / data[1].averageprice * 100).toFixed(1);

	$: options = { ...options, series: getChartSeries(selectedMetrics) };
</script>

<Card class="w-full max-w-4xl mx-auto">
	<div class="flex justify-between mb-4">
		<div>
			<h5 class="leading-none text-3xl font-bold text-gray-900 dark:text-white pb-2">
				£{latestData.averageprice.toLocaleString()}</h5>
			<p class="text-base font-normal text-gray-500 dark:text-gray-400">Average price in England</p>
		</div>
		<div
			class="flex items-center px-2.5 py-0.5 text-base font-semibold text-{averagePriceChange >= 0 ? 'green' : 'red'}-500 dark:text-{averagePriceChange >= 0 ? 'green' : 'red'}-500 text-center">
			{averagePriceChange}%
			<ChevronRightOutline class="w-6 h-6 ms-1" />
		</div>
	</div>

	<div class="mb-4">
		{#each categories as category}
			<div class="mb-2">
				<h3 class="font-semibold mb-1">{category.name}</h3>
				<div class="flex flex-wrap gap-2">
					{#each category.metrics as metric}
						<Button
							color={selectedMetrics.includes(metric) ? 'blue' : 'light'}
							size="xs"
							on:click={() => toggleMetric(metric)}
						>
							{getMetricDisplayName(metric)}
						</Button>
					{/each}
				</div>
			</div>
		{/each}
	</div>

	<Chart {options} />

	<div class="flex justify-between items-center pt-5">
		<Button
			class="text-sm font-medium text-gray-500 dark:text-gray-400 hover:text-gray-900 text-center inline-flex items-center dark:hover:text-white bg-transparent hover:bg-transparent dark:bg-transparent dark:hover:bg-transparent focus:ring-transparent dark:focus:ring-transparent py-0">
			{timeRange}
			<ChevronDownOutline class="w-2.5 m-2.5 ms-1.5" />
		</Button>
		<Dropdown class="w-40" offset="-6">
			<DropdownItem on:click={() => updateTimeRange('Last 7 days')}>Last 7 days</DropdownItem>
			<DropdownItem on:click={() => updateTimeRange('Last 30 days')}>Last 30 days</DropdownItem>
			<DropdownItem on:click={() => updateTimeRange('Last 90 days')}>Last 90 days</DropdownItem>
			<DropdownItem on:click={() => updateTimeRange('Last 12 months')}>Last 12 months</DropdownItem>
		</Dropdown>
	</div>
</Card>


