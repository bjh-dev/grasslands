export const PageTitle = ({ title }: { title: string }) => {
	return (
		<h1 className='font-sans font-semibold uppercase tracking-[.5rem]'>
			{title}
		</h1>
	)
}
export const PageHeading = ({ heading }: { heading: string }) => {
	return (
		<h2 className='font-serif text-6xl font-semibold sm:text-6xl md:text-7xl lg:text-7xl'>
			{heading}
		</h2>
	)
}

export const SectionTitle = ({ title }: { title: string }) => {
	return (
		<h2 className='font-sans font-semibold uppercase tracking-[.5rem]'>
			{title}
		</h2>
	)
}

export const SectionHeading = ({ heading }: { heading: string }) => {
	return (
		<h3 className='font-serif text-5xl font-semibold md:text-7xl'>{heading}</h3>
	)
}
