import PageHeader from '@/components/shared/PageHeader'
import ScrollUp from '@/components/shared/ScrollUp'
import type { PagePayload } from '@/lib/types'

export function Page({ data }: { data: PagePayload }) {
	// Default to an empty object to allow previews on non-existent documents
	const { pageHeader } = data || {}
	return (
		<div>
			<div className='mb-14'>
				{/* Header */}
				<PageHeader {...pageHeader} />

				{/* Body */}

				{/* Workaround: scroll to top on route change */}
				<ScrollUp />
			</div>
			<div className='absolute left-0 w-screen border-t' />
		</div>
	)
}
