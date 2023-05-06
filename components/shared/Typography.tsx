export const PageTitle = ({ title }: { title: string }) => {
	return (
		<h1 className='font-serif text-5xl font-bold sm:text-6xl md:text-7xl lg:text-7xl'>
			{title}
		</h1>
	)
}

export const SectionTitle = ({ title }: { title: string }) => {
	return (
		<h2 className='font-sans font-bold uppercase tracking-wide'>{title}</h2>
	)
}

export const SectionHeading = ({ heading }: { heading: string }) => {
	return (
		<h3 className='font-serif text-5xl font-bold md:text-7xl'>{heading}</h3>
	)
}
