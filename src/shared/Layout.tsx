import React from 'react'
import Gnb from '~/shared/Gnb.tsx'
// import Lnb from '~/shared/Lnb.tsx'

type Props = {
	children: React.ReactNode
};

const Layout = ({ children }: Props) =>
{
	return (
		<div className={'min-w-[1440px] min-h-screen'}>
			<Gnb />
			{/*<Lnb />*/}
			<main className={'max-w-[1788px] mx-auto mt-[36px] px-[40px] mb-2xl'}>
				{children}
			</main>
		</div>
	)
}

export default Layout
