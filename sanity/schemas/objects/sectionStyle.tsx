import { defineField, defineType } from 'sanity'

import ColourSelector from '@/sanity/components/ColourSelector'
// eslint-disable-next-line import/extensions
import tailwindConfig from '@/tailwind.config.js'

const colourList = Object.keys(tailwindConfig.theme.colors)
	.map((key) => ({
		title: key,
		value: tailwindConfig.theme.colors[key][500],
	}))
	.filter((colour) => {
		return colour.title !== 'transparent' && colour.title !== 'current'
	})

export default defineType({
	name: 'sectionStyle',
	title: 'Section Styles',
	type: 'object',
	fields: [
		defineField({
			name: 'selectedStyle',
			title: 'Selected Style',
			type: 'string',
			options: {
				layout: 'radio',
				direction: 'horizontal',
				list: [
					{ title: 'Normal', value: 'normal' },
					{ title: 'Colour', value: 'colour' },
					{ title: 'Background Image', value: 'image' },
				],
			},
		}),
		defineField({
			name: 'backgroundColour',
			title: 'Background Colour',
			type: 'string',
			hidden: ({ parent }) => parent?.selectedStyle !== 'colour',
			components: {
				input: (props) => (
					<ColourSelector
						{...props}
						withHexInput
						withColourNames
						list={colourList}
					/>
				),
			},
		}),
		defineField({
			name: 'backgroundImage',
			title: 'Background Image',
			type: 'image',
			hidden: ({ parent }) => parent?.selectedStyle !== 'image',
		}),
		// defineField({
		// 	name: 'imageColourOverlay',
		// 	title: 'Image Overlay Colour',
		// 	type: 'string',
		// 	hidden: ({ parent }) => parent?.selectedStyle !== 'image',
		// 	components: {
		// 		input: (props) => (
		// 			<ColourSelector
		// 				{...props}
		// 				withHexInput
		// 				withColourNames
		// 				list={[
		// 					{ title: 'Transparent', value: 'transparent' },
		// 					{ title: 'Grey', value: '#DDDDDD' },
		// 					{ title: 'White', value: '#FFFFFF' },
		// 					{ title: 'Dark', value: '#101112' },
		// 				]}
		// 			/>
		// 		),
		// 	},
		// }),
	],
})
