import { reportApi } from '~/api/requests/report/apis.ts'
import { PagingParams } from '~/api/requests/models.type.ts'
import { useQuery } from '@tanstack/react-query'

const reportKeys = {
	all: ['reports'] as const,
	byPage: (params: PagingParams) => [...reportKeys.all, params] as const,
}

export function useReportsByPage(params: PagingParams)
{
	return useQuery({
		queryKey: reportKeys.byPage(params),
		queryFn: () => reportApi.getByPage(params),
		suspense: true
	})
}
