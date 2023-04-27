/* eslint-disable @next/next/no-html-link-for-pages */
interface PreviewBannerProps {
	loading?: boolean
}

export function PreviewBanner({ loading }: PreviewBannerProps) {
	return (
		<div className='bg-black text-white p-3 text-center'>
			{loading ? 'Loading...' : 'Previewing draft content.'}{' '}
			<a
				className='underline transition hover:opacity-50'
				href='/api/exit-preview'
			>
				Exit preview mode
			</a>
		</div>
	)
}
