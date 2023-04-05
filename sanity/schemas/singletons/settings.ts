import { CogIcon } from '@sanity/icons'
import { defineField, defineType } from 'sanity'

export default defineType({
	name: 'settings',
	title: 'Settings',
	type: 'document',
	icon: CogIcon,
	// Uncomment below to have edits publish automatically as you type
	// liveEdit: true,
	fields: [
		defineField({
			name: 'menuItems',
			title: 'Menu Item list',
			description: 'Links displayed on the header of your site.',
			type: 'array',
			of: [{ type: 'link' }],
		}),
	],
	preview: {
		prepare() {
			return {
				title: 'Menu Items',
			}
		},
	},
})
