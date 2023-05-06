import { HiPhotograph } from 'react-icons/hi'
import { defineField, defineType } from 'sanity'

export default defineType({
	name: 'simpleImage',
	title: 'Image',
	type: 'object',
	icon: HiPhotograph,
	options: {
		collapsible: true,
		collapsed: true,
	},
	fields: [
		defineField({
			name: 'image',
			type: 'image',
			options: {
				hotspot: true,
				metadata: ['exif', 'location', 'lqip', 'palette'],
			},
		}),
		defineField({
			name: 'alt',
			type: 'string',
			validation: (Rule) =>
				Rule.custom((value, context) => {
					const { parent } = context as any

					// Alt text only required if an image is set in the parent
					if (!parent?.image) {
						return true
					}

					return value
						? true
						: 'Alternative text is helpful for accessibility and SEO'
				}),
			hidden: ({ parent }) => !parent?.image,
		}),
	],
	preview: {
		select: {
			alt: 'alt',
			media: 'image',
		},
		prepare({ alt, media }: any) {
			return {
				title: alt || 'No Alt text!',
				media,
			}
		},
	},
})
