import { defineField, defineType } from 'sanity'

export default defineType({
	name: 'pageHeader',
	title: 'Page Header',
	type: 'object',
	fields: [
		defineField({
			name: 'title',
			title: 'Title',
			description: 'The title for the page header',
			type: 'string',
			validation: (Rule) => Rule.required(),
		}),
		defineField({
			name: 'description',
			title: 'Description',
			description: 'The description for the page header',
			type: 'portableTextSimple',
		}),
		defineField({
			name: 'image',
			title: 'Image',
			type: 'simpleImage',
			validation: (Rule) => Rule.required(),
		}),
		defineField({
			name: 'cta',
			title: 'Call to Action',
			type: 'link',
		}),
		defineField({
			name: 'pageHeaderStyle',
			title: 'Page Header Style',
			type: 'pageHeaderStyle',
		}),
	],
	preview: {
		select: {
			title: 'title',
			subtitle: 'subtitle',
			media: 'image',
		},
	},
})
