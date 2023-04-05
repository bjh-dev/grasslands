import './globals.css'

import { Playfair_Display, Public_Sans } from 'next/font/google'

const playfair = Playfair_Display({
	variable: '--playfair',
	subsets: ['latin-ext'],
	display: 'swap',
})

const public_sans = Public_Sans({
	variable: '--public_sans',
	subsets: ['latin-ext'],
	display: 'swap',
})

export const metadata = {
	title: 'Grasslands Church | Cairnlea',
	description:
		'You can grow in faith, hope & love with a Missional Community at Grasslands Church',
}
export default async function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html
			lang='en'
			className={`${playfair.variable} ${public_sans.variable} font-sans text-gray-800`}
		>
			<body>{children}</body>
		</html>
	)
}
