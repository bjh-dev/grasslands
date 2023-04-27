import { CogIcon } from '@sanity/icons'
import { defineField, defineType } from 'sanity'

export default defineType({
	name: 'settings',
	title: 'Settings',
	type: 'document',
	icon: CogIcon,
	groups: [
		{
			title: 'Navigation',
			name: 'navigation',
			default: true,
		},
		{
			title: 'Footer',
			name: 'footer',
		},
		{
			name: 'contact',
			title: 'Contact',
		},
		{
			name: 'social',
			title: 'Social',
		},
	],
	// Uncomment below to have edits publish automatically as you type
	// liveEdit: true,
	fields: [
		defineField({
			name: 'siteLogo',
			title: 'Site Logo',
			description: 'The logo displayed on the header of your site.',
			type: 'simpleImage',
			group: 'navigation',
		}),
		defineField({
			name: 'menuItems',
			title: 'Menu Item list',
			description: 'Links displayed on the header of your site.',
			type: 'array',
			of: [{ type: 'link' }],
			group: 'navigation',
		}),
		defineField({
			name: 'menuCta',
			title: 'Menu Call To Action',
			description: 'The call to action displayed on the header of your site.',
			type: 'link',
			group: 'navigation',
		}),
		defineField({
			name: 'footerLogo',
			title: 'Footer Logo',
			description: 'The logo displayed on the footer of your site.',
			type: 'simpleImage',
			group: 'footer',
		}),
		defineField({
			name: 'footerMenuItems',
			title: 'Footer Menu Item list',
			description: 'Links displayed on the footer of your site.',
			type: 'array',
			of: [{ type: 'link' }],
			group: 'footer',
		}),
		defineField({
			name: 'footerText',
			title: 'Footer Text',
			description: 'The text displayed on the footer of your site.',
			type: 'portableTextSimple',
			group: 'footer',
		}),
		defineField({
			name: 'footerLegal',
			title: 'Footer Legal',
			description: 'Copywrite and other legal info.',
			type: 'portableTextSimple',
			group: 'footer',
		}),
		defineField({
			name: 'postalAddress',
			title: 'Postal Address',
			group: 'contact',
			type: 'address',
		}),
		defineField({
			name: 'physicalAddress',
			title: 'Physical Address',
			group: 'contact',
			type: 'address',
		}),
		defineField({
			name: 'geolocation',
			title: 'Geolocation',
			description: 'Used for Google Maps',
			type: 'geopoint',
			group: 'contact',
			options: {
				geocoding: true,
			},
		}),
		defineField({
			name: 'phone',
			title: 'Phone',
			description: 'Your primary phone number',
			type: 'string',
			group: 'contact',
		}),
		defineField({
			name: 'email',
			title: 'Email',
			description: 'Your primary email address',
			type: 'string',
			group: 'contact',
		}),
		defineField({
			name: 'socialLinks',
			title: 'Social Links',
			description: 'Links to your social media profiles',
			type: 'array',
			group: 'social',
			of: [{ type: 'socialLinks' }],
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
