import ScrollUp from '@/components/shared/ScrollUp'
import type { PostPayload } from '@/lib/types'

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function PostPage({ data }: { data: PostPayload }) {
	// Default to an empty object to allow previews on non-existent documents
	// const { overview, title } = data || {}

	return (
		<div>
			<div className='mb-20 space-y-6'>
				{/* Header */}
				{/* Workaround: scroll to top on route change */}
				<ScrollUp />
			</div>
		</div>
	)
}
