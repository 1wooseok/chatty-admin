import { PagingParams } from '~/api/requests/models.type.ts'
import { UserModel } from '~/api/requests/users/models.type.ts'
import { userApi } from '~/api/requests/users/apis.ts'
import usePageQuery from '~/hooks/usePageQuery.tsx'

const userKeys = {
	all: ['users'],
	byPage: (page: number) => [...userKeys.all, page],
} as const

export function useUsersByPage({ page }: PagingParams)
{
	return usePageQuery<UserModel>({
		queryKey: userKeys.byPage(page),
		queryFn: () => userApi.getByPage({ page }),
	})
}
