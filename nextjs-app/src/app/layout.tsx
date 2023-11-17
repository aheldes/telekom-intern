import type { Metadata } from 'next';
import './globals.css';
import SideBar from '../components/side-bar';
import { teleGrotesk } from './font';
import SupportBox from '@/components/support-box';

export const metadata: Metadata = {
	title: 'Create Next App',
	description: 'Generated by create next app'
};

export default function RootLayout({
	children
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en" className=" scroll-smooth">
			<body className={`${teleGrotesk.variable} relative font-teleGrotesk`}>
				<SideBar />
				<SupportBox />
				{children}
			</body>
		</html>
	);
}
