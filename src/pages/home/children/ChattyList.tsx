import { useChattyByPage } from '~/api/requests/chatty/queries.ts'
import { DataTable } from 'primereact/datatable'
import { Column } from 'primereact/column'
import {
	ChattyModel,
} from '~/api/requests/chatty/model.type.ts'
import { Tag } from 'primereact/tag'
import { Paginator } from 'primereact/paginator'
import usePaginator from '~/hooks/usePaginator.tsx'
import styled from '@emotion/styled'
import { Skeleton } from 'primereact/skeleton'
import { VirtualScrollerLoadingTemplateOptions } from 'primereact/virtualscroller'
import {
	DateTd,
	ProfileTd
} from '~/shared/table/Td.tsx'

export default function ChattyList()
{
	const ITEM_SIZE = 10
	
	const {
		first,
		rows,
		onPageChange
	} = usePaginator({
		initialFirst: 0,
		initialRows: ITEM_SIZE
	})
	const
		{
			chattyListRes,
			isFetchingNextPage,
			onFetchNext
		}
			= useChattyByPage({
				offset: 0,
				limit: ITEM_SIZE
			})
	
	if (!onFetchNext)
	{
		return null
	}
	
	const loadingTemplate = (options: VirtualScrollerLoadingTemplateOptions) =>
	{
		return (
			<div className="flex align-items-center" style={{
				height: '17px',
				flexGrow: '1',
				overflow: 'hidden'
			}}>
				<Skeleton width={options.cellEven ? (options.field === 'year' ? '30%' : '40%') : '60%'} height="1rem"/>
			</div>
		)
	}
	// return null
	
	return (
		<CssDataTableWrapper>
			<DataTable
				value={chattyListRes}
				scrollable
				scrollHeight="400px"
				virtualScrollerOptions={{
					lazy: true,
					onLazyLoad: onFetchNext,
					itemSize: 10,
					delay: 200,
					showLoader: true,
					loading: isFetchingNextPage,
					loadingTemplate
				}}
				tableStyle={{ minWidth: '50rem' }}
				size={'small'}
			>
				<Column header={'pk'} field={'pk'}/>
				<Column header={'프로필'} body={({ profile }: ChattyModel) => <ProfileTd profile_image={profile.profile_image}  profile_name={profile.profile_name} />}/>
				<Column header={'작성일'} body={({ created_date }: ChattyModel) => <DateTd serverDate={created_date}/>}/>
				<Column header={'답변일'}
					body={({ answered_date }: ChattyModel) => answered_date ? <DateTd serverDate={answered_date}/> : '-'}/>
				<Column header={'작성자'} body={({ author }: ChattyModel) => author ? <ProfileTd profile_image={author.profile_image} profile_name={author.profile_name} /> : '익명'}/>
				<Column header={'질문 내용'} field={'content'}/>
				<Column header={'답변 내용'} field={'answer_content'}/>
				<Column header={'거절 상태'}
					body={({ refusal_status }: ChattyModel) => (
						refusal_status
							? <Tag severity={'warning'} value={'거절'}/>
							: '-'
					)}
				/>
				<Column header={'like'} field={'like'}/>
			</DataTable>
			
			<Paginator first={first} rows={rows} onPageChange={onPageChange}/>
		</CssDataTableWrapper>
	)
}

const CssDataTableWrapper = styled.div`
  .p-column-header-content {
    justify-content: center;
  }

  .p-datatable-tbody > tr > td[role="cell"] {
    text-align: center;
  }

  .p-datatable-tbody > tr > td[role="cell"] > div {
    display: flex;
    align-items: center;
    justify-content: center;
  }

`
