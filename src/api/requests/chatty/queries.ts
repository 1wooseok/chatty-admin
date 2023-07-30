import { chattyApi } from '~/api/requests/chatty/apis.ts'
import {
	InfiniteData,
	useInfiniteQuery,
} from '@tanstack/react-query'
import { ChattyModel } from '~/api/requests/chatty/model.type.ts'

const chattyKeys = {
	all: ['chatty'] as const,
	byPage: () => [...chattyKeys.all, 'infinite'] as const
}

export function useChattyByPage()
{
	const {
		data,
		fetchNextPage,
		hasNextPage,
		isFetchingNextPage,
		
	} = useInfiniteQuery({
		queryKey: chattyKeys.byPage(),
		queryFn: ({ pageParam = 1 }) => chattyApi.getByPage({ page: pageParam }),
		getNextPageParam: (lastPage) => lastPage.next,
		select: data => (
			data?.pages?.flatMap(page => page?.results) as unknown as InfiniteData<ChattyModel>
		),
	})
	
	function onFetchNext()
	{
		console.log({hasNextPage})
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
