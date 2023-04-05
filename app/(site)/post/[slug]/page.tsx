import { notFound } from 'next/navigation'

import { PostPage } from '@/components/pages/post/PostPage'
import { PostPreview } from '@/components/pages/post/PostPreview'
import { PreviewSuspense } from '@/components/preview/PreviewSuspense'
import { PreviewWrapper } from '@/components/preview/PreviewWrapper'
import { getPostBySlug } from '@/lib/sanity.client'
import { getPreviewToken } from '@/lib/sanity.server.preview'

export default async function ProjectSlugRoute({
	params,
}: {
	params: { slug: string }
}) {
	// const { slug } = params
	const token = getPreviewToken()
	const data = await getPostBySlug({ slug: params.slug })

	if (!data && !token) {
		notFound()
	}

	return (
		<>
			{token ? (
				<PreviewSuspense
					fallback={
						<PreviewWrapper>
							<PostPage data={data} />
						</PreviewWrapper>
					}
				>
					<PostPreview token={token} slug={params.slug} />
				</PreviewSuspense>
			) : (
				<PostPage data={data} />
			)}
		</>
	)
}
