import { defineField, defineType } from 'sanity'

export default defineType({
	name: 'form',
	title: 'Form',
	type: 'object',
	fields: [
		defineField({
			name: 'title',
			title: 'Title',
			type: 'string',
		}),
		defineField({
			name: 'heading',
			title: 'Heading',
			type: 'string',
		}),
		defineField({
			name: 'text',
			title: 'Text',
			type: 'portableTextSimple',
		}),
		defineField({
			name: 'formBuilder',
			title: 'Form Builder',
			type: 'formBuilder',
		}),
		defineField({
			name: 'sectionStyle',
			title: 'Section Styles',
			type: 'sectionStyle',
		}),
	],
})
