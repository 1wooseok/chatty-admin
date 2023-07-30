import React from 'react'
import Gnb from '~/shared/layout/Gnb.tsx'
import Lnb from '~/shared/layout/Lnb.tsx'

type Props = {
	children: React.ReactNode
};

const Layout = ({ children }: Props) =>
{
	return (
		<div className={'min-w-[1440px] min-h-screen'}>
			<Gnb />
			<Lnb />
			<main className={'max-w-[1788px] mx-auto mt-[36px] px-[40px] pl-[80px] mb-2xl'}>
				{children}
			</main>
		</div>
	)
}

export default Layout
