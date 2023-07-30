import {
	InfiniteData,
	QueryFunction,
	useInfiniteQuery
} from '@tanstack/react-query'
import { PagingModel } from '~/api/requests/models.type.ts'
import { ChattyModel } from '~/api/requests/chatty/model.type.ts'

interface Props<T>
{
	queryFn: QueryFunction<PagingModel<T>>;
	queryKey: (number | string | object)[];
}

export default function usePageQuery<T, >({
	queryKey,
	queryFn
}: Props<T>)
{
	let total = 0
	const cacheTime = 1000 * 60 * 0.5
	
	const {
		data,
		isFetching
	} = useInfiniteQuery({
		queryKey,
		queryFn,
		getNextPageParam: (lastPage) => lastPage.next,
		select: data =>
		{
			total = data.pages[0].count
			
			return data.pages.flatMap(p => p.results) as unknown as InfiniteData<ChattyModel>
		},
		staleTime: cacheTime,
		cacheTime: cacheTime,
		suspense: true,
	})
	
	return {
		data: data as unknown as T[],
		total,
		isFetching,
	}
}
