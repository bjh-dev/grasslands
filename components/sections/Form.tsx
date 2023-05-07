import FormBuilder from '@/components/shared/FormBuilder'
import SectionHeader from '@/components/shared/SectionHeader'
import Wrapper from '@/components/shared/Wrapper'
import { IForm, StyleType } from '@/lib/types'

type FormProps = {
	formReference: IForm
	sectionStyle: StyleType
}

const Form = (props: FormProps) => {
	const { formReference, sectionStyle } = props
	// console.log('formProps :', props)
	return (
		<Wrapper style={sectionStyle} title={'Form'}>
			<div className='container'>
				<div className='flex flex-col space-y-6 lg:grid lg:grid-cols-2 lg:gap-x-12 lg:space-y-0'>
					<div className='col-span-1'>
						<SectionHeader
							title={formReference.title}
							heading={formReference.heading}
							text={formReference.text}
							style={sectionStyle}
						/>
					</div>
					<div className='col-span-1'>
						<FormBuilder {...formReference} />
					</div>
				</div>
			</div>
		</Wrapper>
	)
}

export default Form
