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
import { PortableTextBlock } from 'sanity'

import { CustomPortableText } from '@/components/shared/CustomPortableText'
import { formatPhoneNumber, slugify } from '@/lib/helpers'
import {
	Address,
	Geolocation,
	LinkType,
	SimpleImageType,
	SocialLink,
} from '@/lib/types'

type FooterProps = {
	socialLinks: SocialLink[]
	email: string
	phone: string
	postalAddress: Address
	footerMenuItems: LinkType[]
	footerText: PortableTextBlock[]
	geolocation: Geolocation
	siteLogo: SimpleImageType
}
const Footer = (props: FooterProps) => {
	const {
		socialLinks,
		email,
		phone,
		postalAddress,
		footerMenuItems = [],
		footerText,
		geolocation,
		siteLogo,
	} = props

	// console.log('footerProps: ', props)
	// console.log(siteLogo.image)

	return (
		<footer className='z-30 bg-satin-linen px-6 py-24 text-sm'>
			<div className='container'>
				{siteLogo && (
					<div>
						<Link
							href='/'
							className='inline-block w-48 text-axolotl-700 transition-all duration-300 ease-in-out hover:text-rope-900'
						>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								id='grasslandsLogo'
								data-name='Grasslands Church Cairnlea Logo'
								viewBox='0 0 54.51 11.5'
							>
								<defs></defs>
								<g id='Icon'>
									<path
										d='M7.17 7.99c-.7.58-1.73 1.02-3.17 1.02-2.19 0-4-1.78-4-4.27C0 2.05 1.74.18 3.86.18c1.1 0 2 .63 2.33.63.25 0 .36-.16.36-.38h.22v2.76h-.22C6.38 1.77 5.49.4 3.95.4S2.02 2.17 2.02 4.6c0 3.73.82 4.2 1.96 4.2.79 0 1.4-.4 1.4-1.28V6.19h-.89v-.22h3.38v.22h-.7V8Z'
										fill='currentColor'
									/>
									<path
										d='M7.82 8.6h.83V3.75h-.83v-.22h.83c.49 0 1.38 0 1.63-.31v1.22h.02c.23-.6.82-1.13 1.58-1.13.56 0 .95.35.95.92 0 .46-.34.88-.91.88-.47 0-.82-.31-.82-.78 0-.3.08-.49.29-.71h-.05c-.76.34-1.04.98-1.04 1.91v3.06h1.1v.22H7.81v-.22ZM17.88 7.86c0 .37.06.6.28.6.29 0 .42-.36.42-.67h.22c0 .71-.5 1.17-1.28 1.17-.54 0-.98-.25-1.2-.75-.31.58-1.14.75-1.61.75-.92 0-1.86-.42-1.86-1.46 0-1.25 1.19-1.54 2.28-1.62l1.17-.1V4.77c0-.72-.12-1.16-1.02-1.16-.41 0-1.1.1-1.09.36.01.2.61.17.61.74 0 .42-.28.72-.73.72-.54 0-.78-.36-.78-.78 0-.67.88-1.26 2.07-1.26s2.52.34 2.52 1.7v2.76ZM16.3 6l-.95.1c-.78.08-.85.5-.85 1.14s.04 1.37.85 1.37c.56 0 .92-.58.95-1.21V6.01ZM19.2 6.94h.22c.22.88.96 1.8 1.87 1.8.65 0 1.18-.4 1.18-1.03 0-.55-.36-.64-1.22-.74-.91-.11-2.09-.24-2.09-1.79 0-.77.59-1.79 1.79-1.79.55 0 .86.26 1.25.26.23 0 .37-.12.37-.26h.18l.07 1.7h-.19c-.3-.78-.78-1.49-1.68-1.49-.65 0-1.14.34-1.14.9 0 .53.42.64 1.09.73 1.28.18 2.29.29 2.29 1.75 0 .98-.78 1.97-1.92 1.97-.67 0-1.04-.29-1.36-.29-.24 0-.43.1-.49.29h-.22V6.94ZM23.69 6.94h.22c.22.88.96 1.8 1.87 1.8.65 0 1.18-.4 1.18-1.03 0-.55-.36-.64-1.22-.74-.91-.11-2.09-.24-2.09-1.79 0-.77.59-1.79 1.79-1.79.55 0 .86.26 1.25.26.23 0 .37-.12.37-.26h.18l.07 1.7h-.19c-.3-.78-.78-1.49-1.68-1.49-.65 0-1.14.34-1.14.9 0 .53.42.64 1.09.73 1.28.18 2.29.29 2.29 1.75 0 .98-.78 1.97-1.92 1.97-.67 0-1.04-.29-1.36-.29-.24 0-.43.1-.49.29h-.22V6.94Z'
										fill='currentColor'
									/>
									<path
										d='M27.53 8.6h.83V.59h-.83V.37h.76c.85 0 1.51 0 1.73-.36V8.6h.83v.22h-3.31V8.6ZM35.89 7.86c0 .37.06.6.28.6.29 0 .42-.36.42-.67h.22c0 .71-.5 1.17-1.28 1.17-.54 0-.98-.25-1.2-.75-.31.58-1.14.75-1.61.75-.92 0-1.86-.42-1.86-1.46 0-1.25 1.19-1.54 2.28-1.62l1.17-.1V4.77c0-.72-.12-1.16-1.02-1.16-.41 0-1.1.1-1.09.36.01.2.61.17.61.74 0 .42-.28.72-.73.72-.54 0-.78-.36-.78-.78 0-.67.88-1.26 2.07-1.26s2.52.34 2.52 1.7v2.76ZM34.31 6l-.95.1c-.78.08-.85.5-.85 1.14s.04 1.37.85 1.37c.56 0 .92-.58.95-1.21V6.01Z'
										fill='currentColor'
									/>
									<path
										d='M36.77 8.6h.83V3.75h-.83v-.22h.85c.49 0 1.38 0 1.63-.31V4.5h.02c.32-.7 1.12-1.12 1.92-1.12 1.14 0 1.69.56 1.69 1.86v3.35h.83v.22h-3.17v-.22h.68V4.8c0-.84-.36-.98-.71-.98-.67 0-1.27.88-1.27 1.49V8.6h.71v.22h-3.19V8.6ZM46.62.37h.92c.85 0 1.51 0 1.73-.37v8.6h.83v.22h-.83c-.43 0-1.24 0-1.65.14v-.88h-.02c-.29.54-.72.88-1.51.88-1.2 0-2.53-1.02-2.53-2.69 0-1.54.95-2.88 2.55-2.88.76 0 1.21.34 1.49.92h.02V.59h-1V.37Zm1 4.76c0-.67-.48-1.45-1.3-1.45-.77 0-.97.67-.97 1.49V6.9c0 1.22.3 1.78 1.02 1.78.79 0 1.25-.74 1.25-1.44v-2.1ZM50.53 6.94h.22c.22.88.96 1.8 1.87 1.8.65 0 1.18-.4 1.18-1.03 0-.55-.36-.64-1.22-.74-.91-.11-2.09-.24-2.09-1.79 0-.77.59-1.79 1.79-1.79.55 0 .86.26 1.25.26.23 0 .37-.12.37-.26h.18l.07 1.7h-.19c-.3-.78-.78-1.49-1.68-1.49-.65 0-1.14.34-1.14.9 0 .53.42.64 1.09.73 1.28.18 2.29.29 2.29 1.75 0 .98-.78 1.97-1.92 1.97-.67 0-1.04-.29-1.36-.29-.24 0-.43.1-.49.29h-.22V6.94ZM38.72 11.5c-.14 0-.26-.03-.35-.09a.541.541 0 0 1-.22-.27c-.05-.12-.08-.27-.08-.44s.03-.32.08-.44.12-.21.22-.27c.1-.06.22-.09.35-.09a.578.578 0 0 1 .49.25c.05.07.08.16.09.25h-.18a.51.51 0 0 0-.07-.17.374.374 0 0 0-.13-.12.423.423 0 0 0-.2-.05c-.1 0-.19.02-.25.07-.07.05-.12.12-.16.21-.03.1-.05.22-.05.37 0 .22.04.39.12.49.08.11.19.16.35.16.08 0 .14-.02.2-.05.05-.03.1-.08.13-.13a.51.51 0 0 0 .07-.17h.18c0 .06-.03.13-.05.19-.03.06-.07.11-.11.16a.605.605 0 0 1-.42.15ZM40.96 11.48V9.92h.17v.68h.89v-.68h.17v1.56h-.17v-.73h-.89v.73h-.17ZM44.49 11.5a.73.73 0 0 1-.32-.06.414.414 0 0 1-.18-.19.762.762 0 0 1-.06-.32V9.92h.18v1.05c0 .13.03.23.1.29.06.07.16.1.28.1.08 0 .15-.01.21-.04s.1-.07.13-.13.04-.13.04-.22V9.92h.17v1.04c0 .12-.02.22-.06.3-.04.08-.1.14-.18.19a.73.73 0 0 1-.32.06ZM46.78 11.48V9.92h.59c.11 0 .2.02.28.05.08.03.13.08.17.14.04.06.06.14.06.23s-.02.16-.05.21c-.03.06-.07.1-.12.13-.05.03-.1.06-.15.08l.31.72h-.18l-.29-.69h-.45v.69h-.17Zm.17-.84h.36c.13 0 .22-.02.29-.07.07-.05.1-.12.1-.22s-.03-.17-.09-.22-.14-.07-.25-.07h-.41v.58ZM50.12 11.5c-.14 0-.26-.03-.35-.09a.541.541 0 0 1-.22-.27c-.05-.12-.08-.27-.08-.44s.03-.32.08-.44.12-.21.22-.27c.1-.06.22-.09.35-.09a.578.578 0 0 1 .49.25c.05.07.08.16.09.25h-.18a.51.51 0 0 0-.07-.17.374.374 0 0 0-.13-.12.423.423 0 0 0-.2-.05c-.1 0-.19.02-.25.07-.07.05-.12.12-.16.21-.03.1-.05.22-.05.37 0 .22.04.39.12.49.08.11.19.16.35.16.08 0 .14-.02.2-.05.05-.03.1-.08.13-.13a.51.51 0 0 0 .07-.17h.18c0 .06-.03.13-.05.19-.03.06-.07.11-.11.16a.605.605 0 0 1-.42.15ZM52.36 11.48V9.92h.17v.68h.89v-.68h.17v1.56h-.17v-.73h-.89v.73h-.17Z'
										fill='currentColor'
									/>
								</g>
							</svg>
						</Link>
					</div>
				)}
				<div className='mt-12 flex flex-col items-start justify-between space-y-6 md:grid md:grid-cols-2 md:gap-x-12 md:space-y-0 lg:grid-cols-3 lg:space-y-0'>
					{/* About */}
					<div className='col-span-1 flex flex-col space-y-2 md:order-1'>
						<h3 className='text-lg font-semibold text-rope'>About Us</h3>
						{footerText && (
							<div className='footer-cutomportabletext max-w-sm'>
								<CustomPortableText value={footerText} />
							</div>
						)}
						{socialLinks && (
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
													className='text-axolotl transition-all duration-300 ease-in-out hover:text-rope'
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
													className='text-axolotl transition-all duration-300 ease-in-out hover:text-rope'
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
													className='text-axolotl transition-all duration-300 ease-in-out hover:text-rope'
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
													className='text-axolotl transition-all duration-300 ease-in-out hover:text-rope'
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
													className='text-axolotl transition-all duration-300 ease-in-out hover:text-rope'
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
													className='text-axolotl transition-all duration-300 ease-in-out hover:text-rope'
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
													className='text-axolotl transition-all duration-300 ease-in-out hover:text-rope'
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
													className='text-axolotl transition-all duration-300 ease-in-out hover:text-rope'
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
						)}
					</div>
					{/* Links */}
					<div className='col-span-1 flex flex-col space-y-2 md:order-3'>
						<h3 className='text-lg font-semibold text-rope'>Quick Links</h3>
						{footerMenuItems && (
							<div className='flex flex-col space-y-1'>
								{footerMenuItems.map((link, i) => {
									return (
										<div key={i}>
											{link.reference ? (
												<Link
													className='text-axolotl underline transition-all duration-300 ease-in-out hover:text-rope'
													href={link.reference.slug}
												>
													{link.title || link.reference.title}
												</Link>
											) : (
												<a
													className='text-axolotl underline transition-all duration-300 ease-in-out hover:text-rope'
													href={link.url}
													target='_blank'
													rel='noopener noreferrer'
												>
													<div>{link.title}</div>
													<HiArrowTopRightOnSquare className='h-4 w-6' />
												</a>
											)}
										</div>
									)
								})}
							</div>
						)}
					</div>
					{/* Contact */}
					<div className='cols-span-1 flex flex-col space-y-4 md:order-2'>
						<h3 className='text-lg font-semibold text-rope'>Contact</h3>
						{postalAddress.address && (
							<div itemScope itemType='https://schema.org/Organization'>
								<h4 className='font-semibold'>Postal Address</h4>
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
										<span itemProp='postalCode'>{postalAddress.postcode}</span>
									)}
									.
								</div>
							</div>
						)}
						{(phone || email) && (
							<div>
								{phone && (
									<p>
										<a
											itemProp='telephone'
											className='group flex flex-row space-x-2'
											href={`tel://${slugify(phone)}`}
										>
											<span className='pr-2 font-semibold'>Phone:</span>
											<span className='text-axolotl underline group-hover:text-rope'>{`${formatPhoneNumber(
												phone
											)}`}</span>
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
											<span className='pr-2 font-semibold'>Email:</span>
											<span className='text-axolotl underline group-hover:text-rope'>
												{email}
											</span>
										</a>
									</p>
								)}
							</div>
						)}
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
									className='transition-color flex flex-row items-center space-x-1 font-semibold text-axolotl duration-300 ease-in-out hover:text-rope hover:underline'
								>
									<FaMapMarkerAlt className='h-4 w-4' />
									<div>Get Directions</div>
								</a>
							</div>
						)}

						<div>
							<p className='mt-4 text-xs'>
								Copyright © Grasslands Church {new Date().getFullYear()}. All
								Rights Reserved.
							</p>
						</div>
					</div>
				</div>
			</div>
		</footer>
	)
}

export default Footer
