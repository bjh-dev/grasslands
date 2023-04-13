import { FaFacebook } from 'react-icons/fa'

import Animation from '@/components/shared/Animation'
const LandingPage = () => {
	return (
		<section className='flex h-screen w-screen flex-col items-center justify-center space-y-12 bg-gray-200'>
			<div className='text-center text-green-800'>
				<Animation fade slideInTop delay={2} duration={1}>
					<p className='mb-2 text-xs uppercase text-gray-400'>
						website coming soon
					</p>
				</Animation>
				<Animation fade delay={0.5} duration={3}>
					<h1 className='font-serif text-6xl font-bold tracking-tight'>
						Grasslands Church
					</h1>
				</Animation>
				<Animation fade slideInBottom delay={1} duration={1}>
					<p className='mt-4 font-serif text-xl text-yellow-700'>launching</p>
					<h2 className='mt-1 font-sans text-4xl font-thin text-yellow-700'>
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
						className='text-center transition-colors duration-300 ease-in-out hover:text-green-800'
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
