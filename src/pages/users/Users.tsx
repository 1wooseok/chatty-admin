import { useUsersByPage } from '~/api/requests/users/queries.ts'
import { Column } from 'primereact/column'
import { UserModel } from '~/api/requests/users/models.type.ts'
import { DataTable } from 'primereact/datatable'
import {
	DateTd,
	ProfileTd
} from '~/shared/table/Td.tsx'
import usePaginator from '~/hooks/usePaginator.tsx'
import CssTableWrapper from '~/shared/table/CssTableWrapper.tsx'
import { Badge } from 'primereact/badge'

export default function Users()
{
	const { lazyState, onClickPage } = usePaginator()
	const {
		data: usersRes,
		total,
		isFetching
	} = useUsersByPage(lazyState)
	
	return (
		<CssTableWrapper>
			<DataTable
				value={usersRes as unknown as UserModel[]}
				lazy
				dataKey="username"
				paginator
				first={lazyState.first}
				rows={lazyState.rows}
				totalRecords={total}
				onPage={onClickPage}
				loading={isFetching}
			>
				<Column header="사용자" body={({
					username,
					profile_image
				}: UserModel) => <ProfileTd profile_name={username} profile_image={profile_image}/>}/>
				<Column header="@Chatty" field={'profile_name'}/>
				<Column header="email" field={'email'}/>
				<Column header="가입 날짜" body={({ date_joined }: UserModel) => <DateTd serverDate={date_joined}/>}/>
				<Column header="최근 접속 ip" field={'recent_access_ip'}/>
				<Column header="계정 활성화 상태"
					body={({ is_active }: UserModel) => (
						<Badge size="normal" severity={is_active ? 'success' : 'danger'} />
					)}
				/>
				<Column header="비활성화 날짜" body={({ deactivation_date }: UserModel) => deactivation_date ?
					<DateTd serverDate={deactivation_date}/> : '-'}/>
			</DataTable>
		</CssTableWrapper>
	)
}
