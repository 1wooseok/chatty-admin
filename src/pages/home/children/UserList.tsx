import { useUsersByPage } from '~/api/requests/users/queries.ts'
import { Column } from 'primereact/column'
import { UserModel } from '~/api/requests/users/models.type.ts'
import { DataTable } from 'primereact/datatable'
import {
	DateTd,
	ProfileTd
} from '~/shared/table/Td.tsx'

export default function UserList()
{
	const OFFSET = 0
	const LIMIT = 10
	
	const { data, isError } = useUsersByPage({offset: OFFSET, limit: LIMIT})
	
	console.log('d :', data)
	console.log('err : ', isError)
	
	return (
		<DataTable>
			<Column header="사용자" body={({ profile_name , profile_image }: UserModel) => <ProfileTd profile_name={profile_name} profile_image={profile_image} />} />
			<Column header="@Chatty ID" field={'username'} />
			<Column header="email" field={'email'} />
			<Column header="가입 날짜" body={({ date_joined }: UserModel) => <DateTd serverDate={date_joined} />} />
			<Column header="최근 접속 ip" field={'recent_access_ip'} />
			<Column header="비활성화 날짜" body={({ deactivation_date }: UserModel) => deactivation_date ? <DateTd serverDate={deactivation_date} /> : '-'} />
			<Column header="활동중" body={({ is_active }: UserModel) => null} />
		</DataTable>
	)
}
