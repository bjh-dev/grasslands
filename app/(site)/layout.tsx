import { Footer } from '@/components/global/Footer'
import { Navbar } from '@/components/global/Navbar'
import { PreviewBanner } from '@/components/preview/PreviewBanner'
import { getSettings } from '@/lib/sanity.client'
import { getPreviewToken } from '@/lib/sanity.server.preview'

export default async function IndexRoute({
	children,
}: {
	children: React.ReactNode
}) {
	const token = getPreviewToken()
	const settings = (await getSettings({ token })) || {
		menuItems: [],
	}
	return (
		<>
			<div className='bg-white text-black flex min-h-screen flex-col'>
				{token && <PreviewBanner />}
				<Navbar menuItems={settings.menuItems} />
				<div>{children}</div>
				<Footer footer={settings.footer} />
			</div>
		</>
	)
}
