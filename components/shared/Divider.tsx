import clsx from 'clsx'

import { StyleType } from '@/lib/types'

const Divider = ({ style }: { style: StyleType }) => {
	return (
		<>
			<div
				className={clsx('mx-auto ml-0 mr-auto w-1/4 border-b-4 xl:mx-auto', {
					'border-rope': style.backgroundColour == '#ECE5D5',
					'border-satin-linen': style.backgroundColour == '#C4B08F',
					'border-satin-linen-400': style.backgroundColour == '#383637',
					'border-rope-600': style.backgroundColour == '#F7C548',
					'text-satin-linen': style.backgroundColour == '#9B5A30',
					'border-satin-linen-200': style.backgroundColour == '#48623E',
				})}
			/>
		</>
	)
}

export default Divider
