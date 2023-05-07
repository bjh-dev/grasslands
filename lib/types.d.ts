import type { Image, PortableTextBlock } from 'sanity'
type Base = {
	_type: string
	_createdAt: string
	_updatedAt: string
	_rev: string
	_id: string
}

type Reference = {
	_type: 'reference'
	_ref: string
	title?: string
	slug?: any
}
type Geolocation = {
	_type: 'geoLocation'
	lat: number
	lng: number
}

interface IForm extends Base {
	_type: 'form'
	title: string
	heading: string
	mailchimpTag: string
	text: PortableTextBlock[]
	errorMessage: PortableTextBlock[]
	successMessage: PortableTextBlock[]
	buttonLabel: string
	formFields: 'ADDRESS' | 'BDAY' | 'HOWHEARD' | 'MESSAGE' | 'PHONE'
}

type SocialLink = {
	_type: 'socialLinks'
	_key: string
	network:
		| 'facebook'
		| 'instagram'
		| 'twitter'
		| 'youtube'
		| 'tiktok'
		| 'vimeo'
		| 'spotify'
		| 'whatsapp'
	url: string
}
type SimpleImageType = {
	_type: 'simpleImage'
	image: Image
	alt?: string
}
type LinkType = {
	_type: 'link'
	_key: string
	reference?: Reference
	title?: string
	url: string
}

type StyleType = {
	_type: 'pageHeaderStyle' | 'sectionStyle'
	selectedStyle: 'normal' | 'colour' | 'image'
	backgroundColour?: string
	backgroundImage?: Image
}

type SectionType = {
	_type: 'section'
}

type Address = {
	_type: 'Address'
	address: string
	postcode: string
	suburb: string
	state: 'VIC' | 'NSW' | 'QLD' | 'SA' | 'WA' | 'TAS' | 'ACT' | 'NT'
}
// Page payloads

export interface HomePagePayload {
	overview?: PortableTextBlock[]
	title?: string
	pageHeader?: pageHeaderType
	pageContent?: CenteredTextType[]
}

export interface PagePayload {
	overview?: PortableTextBlock[]
	title?: string
	pageHeader?: pageHeaderType
	pageContent?: CenteredTextType[]
}

export interface PostPayload {
	overview?: PortableTextBlock[]
	title?: string
}

export interface SettingsPayload extends Base {
	_type: 'settings'
	socialLinks: SocialLink[]
	email: string
	phone: string
	postalAddress: Address
	footerMenuItems: LinkType[]
	footerText: PortableTextBlock[]
	geolocation: Geolocation
	siteLogo: SimpleImageType
	menuItems: LinkType[]
}
