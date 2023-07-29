import { ReportModel } from '~/api/requests/report/models.type.ts'
import http from '~/api/requests/http.ts'
import {
	PagingModel,
	PagingParams
} from '~/api/requests/models.type.ts'

export const reportApi = {
	path: {
		report: '/report',
	},
	getByPage: (params: PagingParams) => http.get<PagingModel<ReportModel>>(reportApi.path.report, {
		params
	})
}

