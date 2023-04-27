import { FaFacebook } from 'react-icons/fa'

import Animation from '@/components/shared/Animation'
const LandingPage = () => {
	return (
		<section className='bg-gray-200 flex h-screen w-screen flex-col items-center justify-center space-y-12'>
			<div className='text-green-800 text-center'>
				<Animation fade slideInTop delay={2} duration={1}>
					<p className='text-gray-400 mb-2 text-xs uppercase'>coming soon</p>
				</Animation>
				<Animation fade delay={0.5} duration={3}>
					<h1 className='font-serif text-6xl font-bold tracking-tight'>
						Grasslands Church
					</h1>
				</Animation>
				<Animation fade slideInBottom delay={1} duration={1}>
					<p className='text-yellow-700 mt-4 font-serif text-xl'>launching</p>
					<h2 className='text-yellow-700 mt-1 font-sans text-4xl font-thin'>
						May 2023
					</h2>
				</Animation>
			</div>
			<Animation fade delay={2} duration={1}>
				<div className='text-gray-400'>
					<a
						href='https://m.facebook.com/grasslandschurch/'
						target='_blank'
						rel='noreferrer noopener'
						className='hover:text-green-800 text-center transition-colors duration-300 ease-in-out'
					>
						<FaFacebook className='mx-auto mb-2 h-9 w-8' />
						<p className='text-sm'>Follow us on Facebook for updates</p>
					</a>
				</div>
			</Animation>
		</section>
	)
}

export default LandingPage
