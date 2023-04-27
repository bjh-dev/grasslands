import 'server-only'

import { createClient } from 'next-sanity'

import { apiVersion, dataset, projectId, useCdn } from '@/lib/sanity.api'
import {
	homePageQuery,
	homePageTitleQuery,
	pagesBySlugQuery,
	postBySlugQuery,
	settingsQuery,
} from '@/lib/sanity.queries'
import type {
	HomePagePayload,
	PagePayload,
	PostPayload,
	SettingsPayload,
} from '@/lib/types'

/**
 * Checks if it's safe to create a client instance, as `@sanity/client` will throw an error if `projectId` is false
 */
const sanityClient = (token?: string) => {
	return projectId
		? createClient({ projectId, dataset, apiVersion, useCdn, token })
		: null
}

export async function getHomePage({
	token,
}: {
	token?: string
}): Promise<HomePagePayload | undefined> {
	return await sanityClient(token)?.fetch(homePageQuery, { cache: 'no-store' })
}

export async function getHomePageTitle({
	token,
}: {
	token?: string
}): Promise<string | undefined> {
	return await sanityClient(token)?.fetch(homePageTitleQuery)
}

export async function getPageBySlug({
	slug,
	token,
}: {
	slug: string
	token?: string
}): Promise<PagePayload | undefined> {
	return await sanityClient(token)?.fetch(pagesBySlugQuery, { slug })
}

export async function getPostBySlug({
	slug,
	token,
}: {
	slug: string
	token?: string
}): Promise<PostPayload | undefined> {
	return await sanityClient(token)?.fetch(postBySlugQuery, { slug })
}

export async function getSettings({
	token,
}: {
	token?: string
}): Promise<SettingsPayload | undefined> {
	return await sanityClient(token)?.fetch(settingsQuery)
}
