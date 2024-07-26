<script>
	import { Button, Card, Heading, Hr, Img, Input, Label, Li, List, Mark, P, Span, Toggle } from 'flowbite-svelte';
	import { ArrowRightOutline, EnvelopeSolid } from 'flowbite-svelte-icons';
	import { Footer, FooterLinkGroup, FooterLink, FooterIcon, FooterCopyright } from 'flowbite-svelte';
	import { FacebookSolid, GithubSolid, DiscordSolid, TwitterSolid } from 'flowbite-svelte-icons';
	import { Section, Faq, FaqItem } from 'flowbite-svelte-blocks';
</script>


<div class="mt-4 bg-primary-900 p-6 sm:p-8 md:p-12 lg:p-16 text-center col-span-full">
	<Heading tag="h1" class="mb-4 text-white" customSize="text-3xl font-extrabold sm:text-4xl md:text-5xl lg:text-6xl">
		Detailed Property Data In Seconds
	</Heading>
	<P class="text-lg sm:text-xl md:text-2xl lg:text-3xl mb-6 text-white text-center">
		Search 28+ million UK residential properties
		<Mark class="bg-active-red-dark px-1"> absolutely free</Mark>
	</P>
	<Button href="/" class="bg-active-red-dark max-w-sm sm:w-auto px-6 sm:text-lg">
		Learn more
		<ArrowRightOutline class="w-5 h-5 ms-2 inline-block" />
	</Button>
</div>

<div class="col-span-full justify-self-center">
	<Heading tag="h2" class="mt-10 mb-9 text-2xl" customSize="lg:text-3xl font-bold">
		How our information helps you
	</Heading>
</div>

<div class="col-span-full flex flex-wrap justify-center gap-16 mb-12">
	<Card padding="sm" class=" text-center" shadow={true}>
		<Img src="/logo/icon.svg" alt="Property search" class="mx-auto h-1/6 w-1/6" />
		<div class="mb-4">
		</div>
		<h5 class="mb-2 text-xl font-bold tracking-tight uppercase text-gray-900 dark:text-white">Search any property</h5>
		<p class="mb-3 text-sm text-gray-700 dark:text-gray-400">Accurate, uncomplicated, deep knowledge provided instantly. Your complete property profile in one page</p>
		<Button class="w-full">
			Read more
			<ArrowRightOutline class="w-4 h-4 ms-2" />
		</Button>
	</Card>
	<Card padding="sm" class=" text-center" shadow={true}>
		<Img src="/logo/icon.svg" alt="Property search" class="mx-auto h-1/6 w-1/6" />
		<div class="mb-4">
		</div>
		<h5 class="mb-2 text-xl font-bold tracking-tight uppercase text-gray-900 dark:text-white">Research any area</h5>
		<p class="mb-3 text-sm text-gray-700 dark:text-gray-400">Discover counties, cities and postcode statistics from across the nation</p>
		<Button class="w-full">
			Read more
			<ArrowRightOutline class="w-4 h-4 ms-2" />
		</Button>
	</Card>
	<Card padding="sm" class=" text-center" shadow={true}>
		<Img src="/logo/icon.svg" alt="Property search" class="mx-auto h-1/6 w-1/6" />
		<div class="mb-4">
		</div>
		<h5 class="mb-2 text-xl font-bold tracking-tight uppercase text-gray-900 dark:text-white">Verified data providers</h5>
		<p class="mb-3 text-sm text-gray-700 dark:text-gray-400">Explore 100+ items from verified sources including facts, statistics and mapping. Updated monthly</p>
		<Button class="w-full">
			Read more
			<ArrowRightOutline class="w-4 h-4 ms-2" />
		</Button>
	</Card>
</div>

<div class="col-start-3 col-span-8 flex flex-col md:flex-row items-start justify-between">
	<!-- Left column: Text content -->
	<div class="w-full md:w-1/2 mb-6 md:mb-0">
		<P class="text-sm uppercase text-cool-grey mb-2">Empowering</P>
		<Heading tag="h4" class="text-4xl font-bold mb-4 leading-tight uppercase">
			Make informed decisions and secure your investments
		</Heading>
		<P class="text-gray-600 mb-6">
			Our service provides you with essential information and insights to make informed decisions and secure your
			investments. With access to comprehensive datasets, you can confidently evaluate properties and assess their
			potential.
		</P>
		<List class="space-y-2 mb-8">
			<Li class="flex items-center">
				<Img src="home/list-icon.svg" alt="list icon" class="mr-2" />
				Informed Decision-Making
			</Li>
			<Li class="flex items-center">
				<Img src="home/list-icon.svg" alt="list icon" class="mr-2" />
				Investment Security
			</Li>
			<Li class="flex items-center">
				<Img src="home/list-icon.svg" alt="list icon" class="mr-2" />
				Comprehensive Datasets
			</Li>
		</List>
		<Button class="bg-primary-900 text-white">
			Discover more
			<ArrowRightOutline class="w-4 h-4 ms-2" />
		</Button>
	</div>
	<!-- Right column: Image placeholder -->
	<div class="w-full md:w-1/2 mb-6 md:mb-0">
		<div class="bg-gray-200 w-full h-full flex items-center justify-center">
			<Img src="home/insight.png" alt="NG5 house market data example" class="shadow-2xl" />
		</div>
	</div>
</div>
<div class="col-start-3 col-span-8">
	<Hr hrClass="my-8" />
</div>
<div class="col-start-3 col-span-8 flex flex-col md:flex-row items-start justify-between">
	<div class="w-full md:w-1/2 mb-6 md:mb-0 pl-2">
		<p class="text-sm uppercase text-cool-grey mb-2">Insights</p>
		<h4 class="text-4xl font-bold mb-4 leading-tight uppercase">
			Discover Essential Information for
			<br />
			<span class="bg-active-red-dark text-white">Prospective Buyers</span>
		</h4>
	</div>
	<div class="w-full md:w-1/2 self-center mt-4">
		<p class="text-gray-600">
			Our services provide valuable insights and information to help prospective buyers make informed decisions. We
			offer location details, crime rates, and certification insights to give you a comprehensive understanding of the
			properties you're interested in. With our data, you can find the perfect property that meets your needs and
			preferences.
		</p>
	</div>
</div>
<div class="col-start-3 col-span-8 mt-16 flex md:flex-row flex-col justify-center gap-16">
	<Card padding="sm" class="" shadow={true}>
		<Img src="/logo/icon.svg" alt="Property search" class="mx-auto w-1/12 mb-4 ml-0" />
		<h5 class="mb-2 text-xl font-bold tracking-tight uppercase text-gray-900 dark:text-white">Location details </h5>
		<p class="mb-3 text-sm text-gray-700 dark:text-gray-400">Get detailed information about the location of each
			property.</p>
	</Card>
	<Card padding="sm" class="" shadow={true}>
		<Img src="/logo/icon.svg" alt="Property search" class="mx-auto w-1/12 mb-4 ml-0" />
		<h5 class="mb-2 text-xl font-bold tracking-tight uppercase text-gray-900 dark:text-white">Crime Rates </h5>
		<p class="mb-3 text-sm text-gray-700 dark:text-gray-400">Find out the crime rates in the area to ensure your
			safety.</p>
	</Card>
	<Card padding="sm" class="" shadow={true}>
		<Img src="/logo/icon.svg" alt="Property search" class="mx-auto w-1/12 mb-4 ml-0" />
		<h5 class="mb-2 text-xl font-bold tracking-tight uppercase text-gray-900 dark:text-white">Certification
			Insights </h5>
		<p class="mb-3 text-sm text-gray-700 dark:text-gray-400">Learn about the certifications and compliance of each
			property.</p>
	</Card>
</div>
<div class="col-start-3 col-span-8">
	<Hr hrClass="my-8" />
</div>
<div
	class="col-start-3 col-span-8  md:col-start-4 md:col-span-6 flex flex-col md:flex-row overflow-hidden border-2 rounded-3xl border-active-red">
	<div class="flex-1 py-8 px-6 flex flex-col justify-between">
		<div>
			<h4 class="text-3xl md:text-4xl font-bold mb-4 leading-tight uppercase">
				Stay Updated with <br />
				<span class="bg-active-red-dark text-white px-1">Property Insights</span>
			</h4>
			<p class="mb-6">Subscribe to our newsletter for the latest property insights and market trends.</p>
		</div>
		<div class="space-y-4">
			<div class="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2">
				<div class="flex-grow">
					<Label for="email" class="sr-only">Email address</Label>
					<Input id="email" type="email" placeholder="name@flowbite.com" size="md" class="w-full">
						<EnvelopeSolid slot="left" class="w-4 h-4" />
					</Input>
				</div>
				<Button class="bg-active-red-dark text-white whitespace-nowrap">
					Subscribe
				</Button>
			</div>
			<p class="text-gray-500 text-xs italic">
				By clicking Subscribe, you agree to our Terms and Conditions.
			</p>
		</div>
	</div>
	<div class="hidden md:block w-1/3 relative">
		<Img
			src="/home/newsletter.webp"
			alt="Property search newsletter"
			class="absolute inset-0 w-full h-full "
		/>
	</div>
</div>

<div class="col-start-3 col-span-8">
	<Section name="faq">
		<h2 class="mb-8 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Frequently asked questions</h2>
		<Faq>
			<div>
				<FaqItem>
					<svelte:fragment slot="h3">What is property.xyz?</svelte:fragment>
					<p class="text-gray-500 dark:text-gray-400">property.xyz is a platform that provides instant access to detailed property information, making your home buying and selling experience more efficient. We offer this information upfront and for free, with no signup required.</p>
				</FaqItem>
				<FaqItem>
					<svelte:fragment slot="h3">What kind of property information do you provide?</svelte:fragment>
					<p class="text-gray-500 dark:text-gray-400">We offer a wide range of data including property boundaries, energy efficiency ratings, local school ratings, council tax bands, local crime rates, and proximity to amenities like airports and train stations.</p>
				</FaqItem>
				<FaqItem>
					<svelte:fragment slot="h3">Where does your data come from?</svelte:fragment>
					<p class="text-gray-500 dark:text-gray-400">Our data is collated from reputable sources such as the Ordnance Survey, Office of National Statistics, and HM Land Registry. We also provide postcode statistics and location insights from nationwide data.</p>
				</FaqItem>
			</div>
			<div>
				<FaqItem>
					<svelte:fragment slot="h3">How can this information benefit me?</svelte:fragment>
					<p class="text-gray-500 dark:text-gray-400">Our detailed property information can help streamline the home-buying process, which typically takes 4-6 months. By providing crucial details upfront, we aim to make the experience less time-consuming, exhausting, and expensive.</p>
				</FaqItem>
				<FaqItem>
					<svelte:fragment slot="h3">What services do you offer beyond property research?</svelte:fragment>
					<p class="text-gray-500 dark:text-gray-400">Once you've completed your research, our platform can connect you with top estate agents and service providers, helping you buy or sell your home with confidence.</p>
				</FaqItem>
				<FaqItem>
					<svelte:fragment slot="h3">Is there a cost to use property.xyz?</svelte:fragment>
					<p class="text-gray-500 dark:text-gray-400">Our basic property information service is completely free to use. For more advanced features or services, please check our website for current offerings and pricing.</p>
				</FaqItem>
			</div>
		</Faq>
	</Section>
</div>

<div class="col-span-full mt-12 bg-primary-900">
	<div class="grid grid-cols-12">
		<div class=" col-start-3 col-span-8">
			<Footer footerType="sitemap">
				<div class="grid grid-cols-2 py-8 px-6 md:grid-cols-4">
					<div>
						<h2 class="mb-6 text-sm font-semibold text-gray-400 uppercase">Explore</h2>
						<FooterLinkGroup ulClass="text-gray-300">
							<FooterLink liClass="mb-4" href="/">Get started</FooterLink>
							<FooterLink liClass="mb-4" href="/">About Us</FooterLink>
							<FooterLink liClass="mb-4" href="/">Get in touch</FooterLink>
						</FooterLinkGroup>
					</div>
					<div>
						<h2 class="mb-6 text-sm font-semibold uppercase text-gray-400">Services</h2>
						<FooterLinkGroup ulClass="text-gray-300">
							<FooterLink liClass="mb-4" href="/">Find a location</FooterLink>
							<FooterLink liClass="mb-4" href="/">For investors</FooterLink>
							<FooterLink liClass="mb-4" href="/">Sell a property</FooterLink>
						</FooterLinkGroup>
					</div>
					<div>
						<h2 class="mb-6 text-sm font-semibold uppercase text-gray-400">Legal</h2>
						<FooterLinkGroup ulClass="text-gray-300">
							<FooterLink liClass="mb-4" href="/">Data Sources</FooterLink>
							<FooterLink liClass="mb-4" href="/">Privacy policy</FooterLink>
							<FooterLink liClass="mb-4" href="/">Cookies policy</FooterLink>
							<FooterLink liClass="mb-4" href="/">Terms & Conditions</FooterLink>
						</FooterLinkGroup>
					</div>
					<div>
						<h2 class=" text-sm font-semibold uppercase text-gray-400">Find us</h2>
						<div class="relative h-[200px] w-[200px] rounded-full overflow-hidden">
							<iframe
								allowfullscreen="{false}"
								height="200" loading="lazy" referrerpolicy="no-referrer-when-downgrade"
								src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d9562.820784394115!2d-2.892428!3d53.187268!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487add4a33d041c7%3A0x9b51d7e7f106ba8!2sGrosvenor%20St%2C%20Chester%20CH1%202DD!5e0!3m2!1sen!2suk!4v1693949125097!5m2!1sen!2suk"
								style="border:0;"
								width="200" title="find us" />
						</div>
						<P class="text-cool-grey text-xs mt-4">Military House, 24 Castle Street. Chester</P>
					</div>
					<div class="col-span-2 space-y-3 mt-3">
						<h2 class=" text-sm font-semibold uppercase text-gray-400">About the site</h2>
						<P class="text-cool-grey text-xs">Founded by property investor, educator and owner of Property Investments
							UK, Robert
							Jones and
							technologist, author and systems architect, Simone Di Cola, property xyz is a research portal for
							anyone interested in the UK's residential property market.</P>
					</div>
					<div class="col-span-2 space-y-3 mt-3">
						<h2 class=" text-sm font-semibold uppercase text-gray-400">Disclaimer</h2>
						<P class="text-cool-grey text-xs">Our purpose is to help homeowners, property investors and landlords
							research the
							market with a mind
							to purchasing property. Buying property is a big commitment and we strongly advise anyone doing so
							to seek out professional advice before making any decisions.</P>
					</div>
				</div>
				<div class="py-6 px-4 bg-gray-700 md:flex md:items-center md:justify-between">
					<FooterCopyright spanClass="text-sm text-gray-300 sm:text-center" href="/" by="Property.xyz™" />
					<div class="flex mt-4 space-x-6 rtl:space-x-reverse sm:justify-center md:mt-0">
						<FooterIcon href="/">
							<FacebookSolid
								class="w-5 h-5 text-gray-500 dark:text-gray-500 hover:text-gray-900 dark:hover:text-white" />
						</FooterIcon>
						<FooterIcon href="/">
							<DiscordSolid
								class="w-5 h-5 text-gray-500 dark:text-gray-500 hover:text-gray-900 dark:hover:text-white" />
						</FooterIcon>
						<FooterIcon href="/">
							<TwitterSolid
								class="w-5 h-5 text-gray-500 dark:text-gray-500 hover:text-gray-900 dark:hover:text-white" />
						</FooterIcon>
						<FooterIcon href="/">
							<GithubSolid class="w-5 h-5 text-gray-500 dark:text-gray-500 hover:text-gray-900 dark:hover:text-white" />
						</FooterIcon>
						<FooterIcon href="/">
						</FooterIcon>
					</div>
				</div>
			</Footer>
		</div>
	</div>
</div>