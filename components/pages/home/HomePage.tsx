import ContentSections from '@/components/shared/ContentSections'
import PageHeader from '@/components/shared/PageHeader'
import ScrollUp from '@/components/shared/ScrollUp'
import type { HomePagePayload } from '@/lib/types'

export function HomePage({ data }: { data: HomePagePayload }) {
	// Default to an empty object to allow previews on non-existent documents
	const { pageHeader, pageContent } = data
	// console.log('HomePageData: ', data)
	return (
		<div>
			{/* Header */}
			<PageHeader {...pageHeader} />
			{/* Sections */}
			<ContentSections content={pageContent} />
			{/* Workaround: scroll to top on route change */}
			<ScrollUp />
		</div>
	)
}
