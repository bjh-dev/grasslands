import Link from 'next/link'

import { resolveHref } from '@/lib/sanity.links'
import { LinkType } from '@/lib/types'

interface NavbarProps {
	menuItems?: LinkType[]
}

export function Navbar({ menuItems }: NavbarProps) {
	return (
		<div className='sticky top-0 z-10 flex flex-wrap items-center justify-center gap-x-5 bg-satin-linen-50 px-4 py-4 opacity-95 shadow-lg backdrop-blur md:px-16 md:py-5 lg:px-32'>
			{menuItems.map((item, i) => {
				const href = resolveHref(item?.reference?._type, item?.reference?.slug)
				if (!href) {
					return (
						<a
							key={item._key}
							href={item.url}
							target='_blank'
							rel='norefereer noopener noreferrer'
						>
							{item.text}
						</a>
					)
				}
				return (
					<Link href={href} key={i}>
						{item.text || item.reference.title}
					</Link>
				)
			})}
		</div>
	)
}
