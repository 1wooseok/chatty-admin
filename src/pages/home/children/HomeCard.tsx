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
		<Card title={Title}  style={{ border: '1px solid #dadce0', boxShadow: 'none'}}>
			<div>
				{children}
			</div>
		</Card>
	)
}
