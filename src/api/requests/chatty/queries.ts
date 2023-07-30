import { chattyApi } from '~/api/requests/chatty/apis.ts'
import { ChattyModel } from '~/api/requests/chatty/model.type.ts'
import { LazyTableState } from '~/hooks/usePaginator.tsx'
import usePageQuery from '~/hooks/usePageQuery.tsx'

const chattyKeys = {
	all: ['chatty'],
	byPage: (page: number) => [...chattyKeys.all, 'infinite', page]
} as const


export function useChattyByPage({ page }: LazyTableState)
{
	return usePageQuery<ChattyModel>({
		queryKey: chattyKeys.byPage(page),
		queryFn: () => chattyApi.getByPage({ page }),
	})
}
