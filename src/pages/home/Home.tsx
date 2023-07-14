import { Card } from 'primereact/card'
import { Link } from 'react-router-dom'
import { ReactNode } from 'react'
import { Chart } from 'primereact/chart'
import { DataTable } from 'primereact/datatable'
import { Column } from 'primereact/column'

export default function Home()
{
	const chartData = {
		labels: ['d1', 'd2', 'd3', 'd4', 'd5', 'd6', 'd7'],
		datasets: [
			{
				label: 'Sales',
				data: [540, 325, 702, 620, 325, 702, 620],
				borderWidth: 1
			}
		]
	}
	
	const options = {
		options: {
			legend: {
				display: false
			},
		},
		scales: {
			x: {
				grid: {
					display: false, // show grid lines on the x-axis
					color: 'rgba(0, 0, 0, 0.1)', // grid line color
					// drawBorder: true, // draw border around the chart
					// drawOnChartArea: true // draw grid lines on the chart area
					// more options available
				}
			},
			y: {
				grid: {
					beginWithZero: true,
					display: false, // show grid lines on the x-axis
				}
			}
		},
	}
	
	const tableData = [
		{
			pk: 1,
			author: 'aaa',
			dest: 'bbb',
			created_at: '2023-01-01',
			status: true
		},
		{
			pk: 2,
			author: 'aaa',
			dest: 'bbb',
			created_at: '2023-01-01',
			status: false
		},
		{
			pk: 3,
			author: 'aaa',
			dest: 'bbb',
			created_at: '2023-01-01',
			status: true
		},
	]
	
	return (
		<div >
			<h5 className={'font-semibold text-[1.5rem] my-[8px]'}>홈</h5>
			
			<div
				// style={{ background: 'hsla(330, 75%, 85%, 0.3)'}}
				className={'grid grid-cols-2 gap-2xl p-[16px] rounded-[12px]'}
			>
				<HomeCard title={'질문수'} href={''}>
					<Chart type="line" data={chartData} options={options} />
				</HomeCard>
				
				<HomeCard title={'최근 질문'} href={''}>
					<DataTable value={tableData}>
						<Column header={'pk'} field={'pk'} />
						<Column header={'author'} field={'author'} />
						<Column header={'dest'} field={'dest'} />
						<Column header={'status'} field={'status'} />
						<Column header={'created_at'} field={'created_at'} />
					</DataTable>
				</HomeCard>
				
				<Card/>
				<Card/>
			</div>
		</div>
	)
}

type Props = {
	title: string;
	href?: string;
	children: ReactNode;
}

function HomeCard({
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
		<Card title={Title} style={{ boxShadow: 'rgba(0, 0, 0, 0.05) 0px 2px 4px 0px'}}>
			<div>
				{children}
			</div>
		</Card>
	)
}
