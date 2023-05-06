import page from '@/sanity/schemas/documents/page'
import post from '@/sanity/schemas/documents/post'
import address from '@/sanity/schemas/objects/address'
import formBuilder from '@/sanity/schemas/objects/formBuilder'
import link from '@/sanity/schemas/objects/link'
import pageHeader from '@/sanity/schemas/objects/pageHeader'
import pageHeaderStyle from '@/sanity/schemas/objects/pageHeaderStyle'
import portableTextSimple from '@/sanity/schemas/objects/portableTextSimple'
import sectionStyle from '@/sanity/schemas/objects/sectionStyle'
import seo from '@/sanity/schemas/objects/seo'
import simpleImage from '@/sanity/schemas/objects/simpleImage'
import socialLinks from '@/sanity/schemas/objects/socialLinks'
import video from '@/sanity/schemas/objects/video'
import boxedTextWithImages from '@/sanity/schemas/sections/boxedTextWithImages'
import centeredText from '@/sanity/schemas/sections/centeredText'
import form from '@/sanity/schemas/sections/form'
import steps from '@/sanity/schemas/sections/steps'
import textWithVideo from '@/sanity/schemas/sections/textWithVideo'
import home from '@/sanity/schemas/singletons/home'
import settings from '@/sanity/schemas/singletons/settings'

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
	formBuilder,
	link,
	pageHeader,
	pageHeaderStyle,
	portableTextSimple,
	seo,
	sectionStyle,
	simpleImage,
	socialLinks,
	video,
	// Sections
	boxedTextWithImages,
	centeredText,
	form,
	steps,
	textWithVideo,
	// Singletons
	home,
	settings,
]
