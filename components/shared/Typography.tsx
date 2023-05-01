export const PageTitle = ({ title }: { title: string }) => {
	return (
		<h1 className='text-5xl font-bold sm:text-6xl md:text-7xl lg:text-7xl'>
			{title}
		</h1>
	)
}

export const SectionTitle = ({ title }: { title: string }) => {
	return <h2 className='text-5xl font-bold md:text-6xl lg:text-5xl'>{title}</h2>
}
