import { useReportsByPage } from '~/api/requests/report/queries.ts'
import usePaginator from '~/hooks/usePaginator.tsx'
import { DataTable } from 'primereact/datatable'
import { Column } from 'primereact/column'
import CssTableWrapper from '~/shared/table/CssTableWrapper.tsx'
import {
	LongTextTd,
	ProfileTd
} from '~/shared/table/Td.tsx'
import { ReportModel } from '~/api/requests/report/models.type.ts'
import { Button } from 'primereact/button'
import useModal from '~/hooks/useModal.tsx'
import { Dialog } from 'primereact/dialog'

export default function ReportStatus()
{
	const { visible, onOpen, onHide } = useModal()
	const {
		lazyState,
		onClickPage
	} = usePaginator()
	const {
		data: reportListRes,
		isFetching,
		total
	} = useReportsByPage(lazyState)
	
	if (reportListRes === undefined)
	{
		return
	}
	
	return (
		<>
			<Dialog visible={visible} onHide={onHide}>
				<p>여기서 바로 메일?</p>
			</Dialog>
			
			<CssTableWrapper>
				<DataTable
					value={reportListRes}
					lazy
					dataKey="question.pk"
					paginator
					first={lazyState.first}
					rows={lazyState.rows}
					totalRecords={total}
					onPage={onClickPage}
					loading={isFetching}
				>
					<Column header={'pk'} body={({ question }: ReportModel) => question.pk} />
					<Column
						header="신고자"
						body={({ reporter }: ReportModel) => (
							<ProfileTd
								profile_name={reporter.username}
								profile_image={reporter.profile_image}
							/>
						)}
					/>
					<Column header="피신고자" body={({
						question: {
							anonymous_status,
							profile
						}
					}: ReportModel) => (
						anonymous_status
							? '익명'
							: (
								<ProfileTd
									profile_name={profile.username}
									profile_image={profile.profile_image}
								/>
							)
					)
					}
					/>
					<Column header="질문 내용" body={({ question: { content } }: ReportModel) => <LongTextTd content={content}/>}/>
					<Column header="신고자 email" body={({ reporter }: ReportModel) => reporter.email} />
					
					<Column header="신고 대응" body={() => <Button label={'메일 보내기'} onClick={onOpen} />} />
				</DataTable>
			</CssTableWrapper>
		</>
	)
}
