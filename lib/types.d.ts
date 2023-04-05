import type { Image, PortableTextBlock } from 'sanity'
type Reference = {
	_type: 'reference'
	_ref: string
	title?: string
	slug?: any
}
export interface MenuItem {
	_type: 'link'
	_key: string
	reference?: Reference
	title?: string
	url: string
}

// Page payloads

export interface HomePagePayload {
	overview?: PortableTextBlock[]
	title?: string
}

export interface PagePayload {
	overview?: PortableTextBlock[]
	title?: string
}

export interface PostPayload {
	overview?: PortableTextBlock[]
	title?: string
}

export interface SettingsPayload {
	footer?: PortableTextBlock[]
	menuItems?: MenuItem[]
	ogImage?: Image
}
