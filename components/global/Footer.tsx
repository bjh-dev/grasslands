import { PortableTextBlock } from 'sanity'

import { CustomPortableText } from '@/components/shared/CustomPortableText'

export function Footer({ footer }: { footer: PortableTextBlock[] }) {
	return (
		<footer className='bg-white bottom-0 w-full py-12 text-center md:py-20'>
			{footer && (
				<CustomPortableText
					paragraphClasses='text-md md:text-xl'
					value={footer}
				/>
			)}
		</footer>
	)
}
