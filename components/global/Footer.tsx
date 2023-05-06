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
import { PortableTextBlock } from 'sanity'

import { CustomPortableText } from '@/components/shared/CustomPortableText'
import { formatPhoneNumber, slugify } from '@/lib/helpers'
import { urlForImage } from '@/lib/sanity.image'
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
						<Link href='/'>
							<>
								<span className='sr-only'>{siteLogo?.alt}</span>
								<Image
									src={urlForImage(siteLogo?.image).url()}
									className='w-48'
									alt={siteLogo?.alt}
									priority
									width={300}
									height={300}
								/>
							</>
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
									console.log('link: ', link)
									return (
										<div key={i}>
											{link.reference ? (
												<Link
													className='text-axolotl underline transition-all duration-300 ease-in-out hover:text-rope'
													href={link.reference.slug}
												>
													{link.text || link.reference.title}
												</Link>
											) : (
												<a
													className='text-axolotl underline transition-all duration-300 ease-in-out hover:text-rope'
													href={link.url}
													target='_blank'
													rel='noopener noreferrer'
												>
													<div>{link.text}</div>
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
