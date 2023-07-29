import { ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { Card } from 'primereact/card'

type Props = {
	title: string;
	href?: string;
	children: ReactNode;
}

export default function HomeCard({
	title,
	href,
	children
}: Props)
{
	const Title = (
		<div className={'flex justify-between items-center'}>
			<p className={'text-[18px] text-black font-bold'}>{title}</p>
			{href ? <div className={'text-sm font-medium'}>
				<Link to={href} className={'text-[#B3B3B3]'}>더보기</Link>
			</div> : null}
		</div>
	)
	
	return (
		<Card title={Title} style={{ background: 'red', boxShadow: 'rgba(0, 0, 0, 0.05) 0px 2px 4px 0px'}}>
			<div>
				{children}
			</div>
		</Card>
	)
}
