'use client'

import { usePreview } from '@/lib/sanity.preview'
import { postBySlugQuery } from '@/lib/sanity.queries'
import type { PostPayload } from '@/lib/types'

import { PostPage } from './PostPage'

export function PostPreview({
	token,
	slug,
}: {
	token: null | string
	slug: string
}) {
	const post: PostPayload = usePreview(token, postBySlugQuery, {
		slug: slug,
	})

	return <PostPage data={post} />
}
