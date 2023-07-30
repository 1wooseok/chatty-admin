import { reportApi } from '~/api/requests/report/apis.ts'
import { PagingParams } from '~/api/requests/models.type.ts'
import usePageQuery from '~/hooks/usePageQuery.tsx'
import { ReportModel } from '~/api/requests/report/models.type.ts'

const reportKeys = {
	all: ['reports'],
	byPage: (params: PagingParams) => [...reportKeys.all, params],
} as const

export function useReportsByPage(params: PagingParams)
{
	return usePageQuery<ReportModel>({
		queryKey: reportKeys.byPage(params),
		queryFn: () => reportApi.getByPage(params),
	})
}
