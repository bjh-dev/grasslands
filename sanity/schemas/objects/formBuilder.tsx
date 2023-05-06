//import mailchimp from '@mailchimp/mailchimp_marketing'
import { defineField, defineType } from 'sanity'

// TODO: pull fields from mailchimp API
// mailchimp.setConfig({
// 	apiKey: process.env.MAILCHIMP_API_KEY,
// 	server: process.env.MAILCHIMP_API_SERVER,
// })
// const AUDIENCE_ID = process.env.MAILCHIMP_AUDIENCE_ID

// async function getListFields() {
// 	const response = await mailchimp.lists.getListMergeFields(AUDIENCE_ID)
// 	return response
// }

// const fields = await getListFields().then((data) =>
// 	data.merge_fields.map((field) => {
// 		return {
// 			title: field.name,
// 			value: field.tag,
// 		}
// 	})
// )
// console.log(fields)

export default defineType({
	name: 'formBuilder',
	title: 'Form Builder',
	type: 'object',
	fields: [
		defineField({
			name: 'mailchimpTag',
			title: 'Mailchimp Tag',
			type: 'string',
			validation: (Rule) => Rule.required(),
			description:
				'This is the tag that will be added to the user in Mailchimp.We use this to define segments and send related emails. Use the format website-[mytag] (e.g. website-landing-page).',
		}),
		defineField({
			name: 'formFields',
			title: 'Form Fields',
			type: 'array',
			// validation: (Rule) => Rule.unique(),
			of: [
				{
					type: 'string',
					options: {
						list: [
							// TODO: pull fields from mailchimp API
							{ title: 'Address', value: 'ADDRESS' },
							{ title: 'Birthday', value: 'BDAY' },
							{ title: 'How did you hear about us?', value: 'HOWHEARD' },
							{ title: 'Message', value: 'MESSAGE' },
							{ title: 'Phone', value: 'PHONE' },
						],
					},
				},
			],
		}),
		defineField({
			name: 'buttonLabel',
			title: 'Button Label',
			type: 'string',
			initialValue: 'Submit',
			// validation: (Rule) => Rule.required(),
			description: 'This is the text that will appear on the submit button.',
		}),
	],
})
