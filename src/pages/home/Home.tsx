import {
	Suspense,
} from 'react'
import { DataTable } from 'primereact/datatable'
import { Column } from 'primereact/column'
import HomeCard from '~/pages/home/children/HomeCard.tsx'
import ChattyList from '~/pages/home/children/ChattyList.tsx'
import { ErrorBoundary } from 'react-error-boundary'
import UserList from '~/pages/home/children/UserList.tsx'
import ReportList from '~/pages/home/children/ReportList.tsx'

export default function Home()
{
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
				// className={'grid grid-cols-2 gap-2xl p-[16px] rounded-[12px]'}
			>
				<HomeCard title={'질문 리스트'} href={''}>
					<ErrorBoundary fallback={<div>Request Error</div>}>
						<Suspense fallback={<h1>...Loading</h1>}>
							<ChattyList />
						</Suspense>
					</ErrorBoundary>
				</HomeCard>
				
				{/*<HomeCard title={'유저 리스트'} href={''}>*/}
				{/*	<ErrorBoundary fallback={<div>Request Error</div>}>*/}
				{/*		<Suspense fallback={<h1>...Loading</h1>}>*/}
				{/*			<UserList />*/}
				{/*		</Suspense>*/}
				{/*	</ErrorBoundary>*/}
				{/*</HomeCard>*/}
				
				{/*<HomeCard title={'신고 리스트'} href={''}>*/}
				{/*	<ErrorBoundary fallback={<div>Request Error</div>}>*/}
				{/*		<Suspense fallback={<h1>...Loading</h1>}>*/}
				{/*			<ReportList />*/}
				{/*		</Suspense>*/}
				{/*	</ErrorBoundary>*/}
				{/*</HomeCard>*/}
				
				{/*<HomeCard title={'질문 리스트'} href={''}>*/}
				{/*	<DataTable value={tableData}>*/}
				{/*		<Column header={'pk'} field={'pk'} />*/}
				{/*		<Column header={'author'} field={'author'} />*/}
				{/*		<Column header={'dest'} field={'dest'} />*/}
				{/*		<Column header={'status'} field={'status'} />*/}
				{/*		<Column header={'created_at'} field={'created_at'} />*/}
				{/*	</DataTable>*/}
				{/*	*/}
				{/*</HomeCard>*/}
			</div>
		</div>
	)
}
