// import { CustomPortableText } from 'components/shared/CustomPortableText'

import Image from 'next/image'
import Link from 'next/link'
import {
	FaFacebook,
	FaInstagram,
	FaMapMarkerAlt,
	FaSpotify,
	FaTiktok,
	FaTwitter,
	FaVimeo,
	FaWhatsapp,
	FaYoutube,
} from 'react-icons/fa'
import { HiArrowTopRightOnSquare } from 'react-icons/hi2'

import { CustomPortableText } from '@/components/shared/CustomPortableText'
import { formatPhoneNumber, slugify } from '@/lib/helpers'
import { urlForImage } from '@/lib/sanity.image'

const Footer = (props) => {
	const {
		socialLinks,
		email,
		phone,
		postalAddress,
		footerLinks = [],
		footerText,
		geolocation,
		navLogo,
	} = props

	// console.log('footerProps: ', props)

	return (
		<footer className='z-30 bg-satin-linen px-6 py-24 text-sm'>
			<div className='container'>
				{navLogo && (
					<div>
						<Link href='/'>
							<span className='sr-only'>{navLogo?.alt}</span>
							<Image
								src={urlForImage(navLogo?.image).url()}
								className='w-36'
								alt='Logo'
								priority
								width={300}
								height={300}
							/>
						</Link>
					</div>
				)}
				<div className='mt-12 flex flex-col items-start justify-between space-y-12 md:flex-row md:space-y-0'>
					<div className='flex flex-col'>
						<div className='max-w-sm'>
							<CustomPortableText value={footerText} />
						</div>
						<div>
							{phone && (
								<p className='mt-2'>
									<a
										itemProp='telephone'
										className='group flex flex-row space-x-2'
										href={`tel://${slugify(phone)}`}
									>
										<div className='font-bold'>Phone:</div>
										<div className='group-hover:underline'>{`${formatPhoneNumber(
											phone
										)}`}</div>
									</a>
								</p>
							)}
							{email && (
								<p className='mt-2'>
									<a
										itemProp='email'
										className='group flex flex-row space-x-2'
										href={`mailto:${email}`}
									>
										<div className='font-bold'>Email:</div>
										<div className='group-hover:underline'>{email}</div>
									</a>
								</p>
							)}
						</div>
						<div className='mt-4 flex space-x-4'>
							{socialLinks.map((link, i) => {
								let el: any = null
								switch (link.network) {
									case 'facebook':
										el = (
											<a
												key={i}
												href={link.url}
												target='_blank'
												rel='noopener noopener'
												className='transition-color duration-300 ease-in-out hover:text-rope'
											>
												<FaFacebook className='h-6 w-6' />
											</a>
										)
										break
									case 'instagram':
										el = (
											<a
												key={i}
												href={link.url}
												target='_blank'
												rel='noopener noopener'
												className='transition-color duration-300 ease-in-out hover:text-rope'
											>
												<FaInstagram className='h-6 w-6' />
											</a>
										)
										break
									case 'twitter':
										el = (
											<a
												key={i}
												href={link.url}
												target='_blank'
												rel='noopener noopener'
												className='transition-color duration-300 ease-in-out hover:text-rope'
											>
												<FaTwitter className='h-6 w-6' />
											</a>
										)
										break
									case 'youtube':
										el = (
											<a
												key={i}
												href={link.url}
												target='_blank'
												rel='noopener noopener'
												className='transition-color duration-300 ease-in-out hover:text-rope'
											>
												<FaYoutube className='h-6 w-6' />
											</a>
										)
										break
									case 'tiktok':
										el = (
											<a
												key={i}
												href={link.url}
												target='_blank'
												rel='noopener noopener'
												className='transition-color duration-300 ease-in-out hover:text-rope'
											>
												<FaTiktok className='h-6 w-6' />
											</a>
										)
										break
									case 'vimeo':
										el = (
											<a
												key={i}
												href={link.url}
												target='_blank'
												rel='noopener noopener'
												className='transition-color duration-300 ease-in-out hover:text-rope'
											>
												<FaVimeo className='h-6 w-6' />
											</a>
										)
										break
									case 'spotify':
										el = (
											<a
												key={i}
												href={link.url}
												target='_blank'
												rel='noopener noopener'
												className='transition-color duration-300 ease-in-out hover:text-rope'
											>
												<FaSpotify className='h-6 w-6' />
											</a>
										)
										break
									case 'whatsapp':
										el = (
											<a
												key={i}
												href={link.url}
												target='_blank'
												rel='noopener noopener'
												className='transition-color duration-300 ease-in-out hover:text-rope'
											>
												<FaWhatsapp className='h-6 w-6' />
											</a>
										)
										break
									default:
										el = null
								}
								return el
							})}
						</div>
					</div>

					<div className='flex flex-col space-y-2'>
						<div itemScope itemType='https://schema.org/Organization'>
							{geolocation && (
								<div
									itemProp='geo'
									itemScope
									itemType='https://schema.org/GeoCoordinates'
								>
									<meta
										itemProp='latitude'
										content={geolocation?.lat.toString()}
									/>
									<meta
										itemProp='longitude'
										content={geolocation?.lng.toString()}
									/>
									<a
										href={`https://www.google.com/maps/search/?api=1&query=${geolocation?.lat},${geolocation?.lng}`}
										target='_blank'
										rel='noopener noreferrer'
										className='transition-color flex flex-row items-center space-x-2 font-bold duration-300 ease-in-out hover:text-rope hover:underline'
									>
										<div>Map Directions</div>
										<FaMapMarkerAlt className='h-6 w-6' />
									</a>
								</div>
							)}
							{postalAddress.address && (
								<>
									<h3 className={`font-bold ${geolocation ? 'mt-6' : null}`}>
										Postal Address
									</h3>
									<div
										itemProp='address'
										itemScope
										itemType='https://schema.org/PostalAddress'
									>
										{postalAddress.address && (
											<span className='block' itemProp='streetAddress'>
												{postalAddress.address}
											</span>
										)}
										{postalAddress.suburb && (
											<span itemProp='addressLocality'>
												{postalAddress.suburb}
												{postalAddress.state && ', '}
											</span>
										)}
										{postalAddress.state && (
											<span className='uppercase' itemProp='addressRegion'>
												{postalAddress.state}
												{postalAddress.postcode && ' '}
											</span>
										)}
										{postalAddress.postcode && (
											<span itemProp='postalCode'>
												{postalAddress.postcode}
											</span>
										)}
										.
									</div>
								</>
							)}
						</div>
						{footerLinks &&
							footerLinks.map((link, i) => {
								return (
									<div key={i}>
										{!link.reference ? (
											<a
												className='decoration-primary hover:text-primary-600 hover:decoration-gray-500 flex flex-row items-center space-x-1 underline decoration-2 underline-offset-2 transition-all duration-300 ease-in-out'
												href={link.url}
												target='_blank'
												rel='noopener noreferrer'
											>
												<span>{link.text}</span>
												<HiArrowTopRightOnSquare className='h-4 w-6' />
											</a>
										) : (
											<Link
												className='decoration-primary hover:text-primary-600 hover:decoration-gray-500 flex flex-row items-center space-x-1 underline decoration-2 underline-offset-2 transition-all duration-300 ease-in-out'
												href={link.reference.slug}
											>
												{link.text}
											</Link>
										)}
									</div>
								)
							})}
						<div>
							<p className='mt-4'>
								© Copyright {new Date().getFullYear()}. All Rights Reserved
							</p>
						</div>
					</div>
				</div>
			</div>
		</footer>
	)
}

export default Footer
