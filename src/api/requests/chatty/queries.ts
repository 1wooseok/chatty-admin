import { chattyApi } from '~/api/requests/chatty/apis.ts'
import { PagingParams } from '~/api/requests/models.type.ts'
import {
	InfiniteData,
	useInfiniteQuery,
} from '@tanstack/react-query'
import { ChattyModel } from '~/api/requests/chatty/model.type.ts'

const chattyKeys = {
	all: ['chatty'] as const,
	byPage: (params: PagingParams) => [...chattyKeys.all, params] as const
}

export function useChattyByPage(params: PagingParams)
{
	const {
		data,
		fetchNextPage,
		hasNextPage,
		isFetchingNextPage,
	} = useInfiniteQuery({
		queryKey: chattyKeys.byPage(params),
		queryFn: ({ pageParam = 0 }) =>
		{
			console.log({ pageParam })
			return chattyApi.getByPage(params)
		},
		getNextPageParam: (lastPage) =>
		{
			console.log({ lastPage })
			return lastPage.next
		},
		select: data => (
			data?.pages?.flatMap(page => page?.results) as unknown as InfiniteData<ChattyModel>
		),
	})
	
	function onFetchNext()
	{
		if (!hasNextPage)
		{
			return
		}
		
		fetchNextPage()
	}
	
	return {
		chattyListRes: data as unknown as ChattyModel[],
		isFetchingNextPage,
		onFetchNext,
	}
}
