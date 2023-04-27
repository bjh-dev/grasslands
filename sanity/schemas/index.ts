import page from '@/sanity/schemas/documents/page'
import post from '@/sanity/schemas/documents/post'
import link from '@/sanity/schemas/objects/link'
import home from '@/sanity/schemas/singletons/home'
import settings from '@/sanity/schemas/singletons/settings'

import address from './objects/address'
import pageHeader from './objects/pageHeader'
import pageHeaderStyle from './objects/pageHeaderStyle'
import portableTextSimple from './objects/portableTextSimple'
import sectionStyle from './objects/sectionStyle'
import seo from './objects/seo'
import simpleImage from './objects/simpleImage'
import socialLinks from './objects/socialLinks'
import centeredText from './sections/centeredText'

export const PREVIEWABLE_DOCUMENT_TYPES: string[] = [
	home.name,
	page.name,
	post.name,
]

export const schemaTypes = [
	// Documents
	page,
	post,
	// Objects
	address,
	link,
	pageHeader,
	pageHeaderStyle,
	portableTextSimple,
	seo,
	sectionStyle,
	simpleImage,
	socialLinks,
	// Sections
	centeredText,
	// Singletons
	home,
	settings,
]
