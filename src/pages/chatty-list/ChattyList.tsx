import {
	DataTable,
} from 'primereact/datatable'
import { Column } from 'primereact/column'
import { useChattyByPage } from '~/api/requests/chatty/queries.ts'
import {
	DateTd,
	LongTextTd,
	ProfileTd
} from '~/shared/table/Td.tsx'
import { ChattyModel } from '~/api/requests/chatty/model.type.ts'
import { Tag } from 'primereact/tag'
import usePaginator from '~/hooks/usePaginator.tsx'
import CssTableWrapper from '~/shared/table/CssTableWrapper.tsx'

export default function ChattyList()
{
	const {
		lazyState,
		onClickPage
	} = usePaginator()
	const {
		data: chattyListRes,
		isFetching,
		total
	} = useChattyByPage(lazyState)
	
	return (
		<>
			<CssTableWrapper>
				<DataTable
					value={chattyListRes as unknown as ChattyModel[]}
					lazy
					dataKey="pk"
					paginator
					first={lazyState.first}
					rows={lazyState.rows}
					totalRecords={total}
					onPage={onClickPage}
					loading={isFetching}
				>
					<Column header={'pk'} field={'pk'}/>
					<Column header={'프로필'} body={({ profile }: ChattyModel) => (
						<ProfileTd
							profile_name={profile.username}
							profile_image={profile.profile_image}
						/>)}
					/>
					<Column header={'작성일'} body={({ created_date }: ChattyModel) => <DateTd serverDate={created_date}/>}/>
					<Column header={'답변일'}
						body={({ answered_date }: ChattyModel) => answered_date ?
							<DateTd serverDate={answered_date}/> : '-'}/>
					<Column header={'작성자'} body={({ author }: ChattyModel) => author ?
						<ProfileTd profile_image={author.profile_image} profile_name={author.username}/> : '익명'}/>
					<Column
						header={'질문 내용'}
						body={({ content }: ChattyModel) => <LongTextTd content={content}/>}
					/>
					<Column
						header={'답변 내용'}
						body={({ answer_content }: ChattyModel) => (
							answer_content ? <LongTextTd content={answer_content}/> : '-'
						)}
					/>
					<Column header={'거절 상태'}
						body={({ refusal_status }: ChattyModel) => (
							refusal_status
								? <Tag severity={'warning'} value={'거절'}/>
								: '-'
						)}
					/>
					<Column header={'like'} field={'like'}/>
				</DataTable>
			</CssTableWrapper>
		</>
		
	)
}


