import { useReportsByPage } from '~/api/requests/report/queries.ts'
import usePaginator from '~/hooks/usePaginator.tsx'
import { DataTable } from 'primereact/datatable'
import { Column } from 'primereact/column'
import { UserModel } from '~/api/requests/users/models.type.ts'

export default function ReportList()
{
	const { first, rows, onPageChange } = usePaginator({
		initialFirst: 0,
		initialRows: 10,
	})
	const { data } = useReportsByPage({ offset: 0, limit: 10 })
	
	console.log('d :', data)
	
	return <>
		<DataTable>
			<Column header="사용자" body={({ username, profile_image }: UserModel) => null} />
			<Column header="@Chatty ID" field={'profile_name'} />
			<Column header="email" field={'email'} />
			<Column header="가입 날짜" body={({ date_joined }: UserModel) => null} />
			<Column header="최근 접속 ip" field={'recent_access_ip'} />
			<Column header="비활성화 날짜" body={({ deactivation_date }: UserModel) => null} />
			<Column header="활동중" body={({ is_active }: UserModel) => null} />
		</DataTable>
	</>
}
