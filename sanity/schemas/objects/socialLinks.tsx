import { defineField, defineType } from 'sanity'

export default defineType({
	name: 'socialLinks',
	title: 'Social Links',
	type: 'object',
	options: {
		modal: {
			type: 'popover',
			width: 'auto',
		},
		columns: 2,
	},
	fields: [
		defineField({
			name: 'network',
			title: 'Network',
			type: 'string',
			options: {
				layout: 'dropdown',
				list: [
					{ title: 'Facebook', value: 'facebook' },
					{ title: 'Instagram', value: 'instagram' },
					{ title: 'Twitter', value: 'twitter' },
					// { title: 'LinkedIn', value: 'linkedin' },
					{ title: 'YouTube', value: 'youtube' },
					// { title: 'Pinterest', value: 'pinterest' },
					{ title: 'TikTok', value: 'tiktok' },
					// { title: 'Snapchat', value: 'snapchat' },
					// { title: 'Twitch', value: 'twitch' },
					{ title: 'Vimeo', value: 'vimeo' },
					// { title: 'SoundCloud', value: 'soundcloud' },
					{ title: 'Spotify', value: 'spotify' },
					// { title: 'Apple Music', value: 'applemusic' },
					// { title: 'Bandcamp', value: 'bandcamp' },
					// { title: 'Discord', value: 'discord' },
					// { title: 'GitHub', value: 'github' },
					// { title: 'Reddit', value: 'reddit' },
					// { title: 'Tumblr', value: 'tumblr' },
					{ title: 'WhatsApp', value: 'whatsapp' },
				],
			},
		}),
		defineField({
			name: 'url',
			title: 'URL',
			type: 'url',
		}),
	],
})
