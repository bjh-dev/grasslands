import Link from 'next/link'

import { resolveHref } from '@/lib/sanity.links'
import { MenuItem } from '@/lib/types'

interface NavbarProps {
	menuItems?: MenuItem[]
}

export function Navbar({ menuItems }: NavbarProps) {
	return (
		<div className='sticky top-0 z-10 flex flex-wrap items-center justify-center gap-x-5 bg-white/80 px-4 py-4 shadow-lg backdrop-blur md:px-16 md:py-5 lg:px-32'>
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
							{item.title}
						</a>
					)
				}
				return (
					<Link href={href} key={i}>
						{item.title || item.reference.title}
					</Link>
				)
			})}
		</div>
	)
}
