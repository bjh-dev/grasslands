import { PortableTextBlock } from 'sanity'

import FormBuilder from '@/components/shared/FormBuilder'
import SectionHeader from '@/components/shared/SectionHeader'
import Wrapper from '@/components/shared/Wrapper'
import { StyleType } from '@/lib/types'

type FormProps = {
	title: string
	heading?: string
	text: PortableTextBlock[]
	formBuilder: any
	sectionStyle: StyleType
}

const Form = (props: FormProps) => {
	const { title, heading, text, formBuilder, sectionStyle } = props
	console.log('formProps :', props)
	return (
		<Wrapper style={sectionStyle} title={'Form'}>
			<div className='container'>
				<div className='flex flex-col space-y-6 lg:grid lg:grid-cols-2 lg:space-y-0'>
					<div className='col-span-1'>
						<SectionHeader
							title={title}
							heading={heading}
							text={text}
							style={sectionStyle}
						/>
					</div>
					<div className='col-span-1'>
						<FormBuilder {...formBuilder} />
					</div>
				</div>
			</div>
		</Wrapper>
	)
}

export default Form
