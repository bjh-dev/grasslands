import type { Image, PortableTextBlock } from 'sanity'
type Reference = {
	_type: 'reference'
	_ref: string
	title?: string
	slug?: any
}

type SimpleImageType = {
	_type: 'simpleImage'
	image: Image
	alt?: string
}
type CtaType = {
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

export interface SettingsPayload {
	footer?: PortableTextBlock[]
	menuItems?: CtaType[]
	ogImage?: Image
}
