import { Header } from '@/components/shared/Header'
import ScrollUp from '@/components/shared/ScrollUp'
import type { HomePagePayload } from '@/lib/types'

export function HomePage({ data }: { data: HomePagePayload }) {
	// Default to an empty object to allow previews on non-existent documents
	const { overview, title } = data

	return (
		<div className='space-y-20'>
			{/* Header */}
			{title && <Header centered title={title} description={overview} />}
			<div className='h-[1300px] bg-blue-500' />
			{/* Workaround: scroll to top on route change */}
			<ScrollUp />
		</div>
	)
}
