import page from '@/sanity/schemas/documents/page'
import post from '@/sanity/schemas/documents/post'
import link from '@/sanity/schemas/objects/link'
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
	link,
	// Singletons
	home,
	settings,
]
