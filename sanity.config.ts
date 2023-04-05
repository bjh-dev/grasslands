/**
 * This config is used to set up Sanity Studio that's mounted on the `/pages/studio/[[...index]].tsx` route
 */

import { visionTool } from '@sanity/vision'
import { defineConfig } from 'sanity'
import { deskTool } from 'sanity/desk'
import { unsplashImageAsset } from 'sanity-plugin-asset-source-unsplash'

import {
	apiVersion,
	dataset,
	previewSecretId,
	projectId,
} from '@/lib/sanity.api'
import { previewDocumentNode } from '@/sanity/plugins/previewPane'
import { productionUrl } from '@/sanity/plugins/productionUrl'
import { pageStructure, singletonPlugin } from '@/sanity/plugins/settings'
import { PREVIEWABLE_DOCUMENT_TYPES, schemaTypes } from '@/sanity/schemas'
import home from '@/sanity/schemas/singletons/home'
import settings from '@/sanity/schemas/singletons/settings'

const title =
	process.env.NEXT_PUBLIC_SANITY_PROJECT_TITLE ||
	'A starter for Next.js 13 and Sanity.io'

export default defineConfig({
	basePath: '/studio',
	projectId: projectId || '',
	dataset: dataset || '',
	title,
	schema: {
		// If you want more content types, you can add them to this array
		types: schemaTypes,
	},
	plugins: [
		deskTool({
			structure: pageStructure([home, settings]),
			// `defaultDocumentNode` is responsible for adding a “Preview” tab to the document pane
			defaultDocumentNode: previewDocumentNode({ apiVersion, previewSecretId }),
		}),
		// Configures the global "new document" button, and document actions, to suit the Settings document singleton
		singletonPlugin([home.name, settings.name]),
		// Add the "Open preview" action
		productionUrl({
			apiVersion,
			previewSecretId,
			types: PREVIEWABLE_DOCUMENT_TYPES,
		}),
		// Add an image asset source for Unsplash
		unsplashImageAsset(),
		// Vision lets you query your content with GROQ in the studio
		// https://www.sanity.io/docs/the-vision-plugin
		visionTool({ defaultApiVersion: apiVersion }),
	],
})
