import Wrapper from '@/components/shared/Wrapper'

const items = [
	{
		heading: 'Visit this Sunday',
		content:
			'Come along to one of our Sunday gatherings. Every Sunday the MCs that meet together throughout the week come together for gathered worship. We pray, open the bible, hear a sermon and sing together and share communion.',
	},
	{
		heading: 'Coffee with Us',
		content:
			'Grab a coffee with one of our leaders. This is your opportunity to ask questions, raise concerns or find out more about Grasslands and joining and MC.',
	},
	{
		heading: 'Experience Real Community',
		content: `You've had a visit and drank coffee, what's next? Become a part of a rich rewarding faith journey by joining an MC.  You won't get the real benefits of Grasslands unless you join a Missional Community. If you're not ready to join an MC just yet you're welcome to continue visiting on Sundays.`,
	},
]
const NumberedItems = () => {
	return (
		<Wrapper style={{ selectedStyle: 'normal', _type: 'sectionStyle' }}>
			<div className='container'>
				<div className='mx-auto flex max-w-xl flex-col space-y-12 lg:grid lg:max-w-none lg:grid-cols-3 lg:gap-x-6 lg:space-y-0 xl:gap-x-24'>
					{items.map((item, i) => {
						return (
							<div key={i} className='item'>
								<div className='flex flex-row content-start space-x-12 lg:space-x-6 xl:space-x-8'>
									<div>
										<div className='flex h-16 w-16 items-center justify-center rounded-full border-2 border-rope font-sans text-xl leading-none text-rope'>
											{i + 1}
										</div>
									</div>
									<div>
										<h3 className='font-sans text-lg font-bold'>
											{item.heading}
										</h3>
										<p className=''>{item.content}</p>
									</div>
								</div>
							</div>
						)
					})}
				</div>
			</div>
		</Wrapper>
	)
}

export default NumberedItems
