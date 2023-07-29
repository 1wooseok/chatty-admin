import { userApi } from '~/api/requests/users/apis.ts'
import { PagingParams } from '~/api/requests/models.type.ts'
import { useQuery } from '@tanstack/react-query'

const userKeys = {
	all: ['users'] as const,
	byPage: (params: PagingParams) => [...userKeys.all, params] as const,
}

export function useUsersByPage(params: PagingParams)
{
	return useQuery({
		queryKey: userKeys.byPage(params),
		queryFn: () => userApi.getByPage(params),
		suspense: true
	})
}
