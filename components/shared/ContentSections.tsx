import BoxedTextWithImages from '@/components/sections/BoxedTextWithImages'
import CenteredText from '@/components/sections/CenteredText'
import Form from '@/components/sections/Form'
import Steps from '@/components/sections/Steps'
import TextWithVideo from '@/components/sections/TextWithVideo'

const ContentSections = ({ content }: { content: any }) => {
	// console.log('ContentSections: ', content)
	return (
		<>
			<section className='sections flex flex-col'>
				{content &&
					content.map((s, i) => {
						let el: any = null
						switch (s._type) {
							case 'centeredText':
								el = <CenteredText key={i} {...s} />
								break
							case 'boxedTextWithImages':
								el = <BoxedTextWithImages key={i} {...s} />
								break
							case 'textWithVideo':
								el = <TextWithVideo key={i} {...s} />
								break
							case 'steps':
								el = <Steps key={i} {...s} />
								break
							case 'formSection':
								el = <Form key={i} {...s} />
								break
							default:
								el = null
						}
						return el
					})}
			</section>
		</>
	)
}

export default ContentSections
