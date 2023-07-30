import { ChattyModel } from '~/api/requests/chatty/model.type.ts'
import http from '~/api/requests/http.ts'
import {
	PagingModel,
	PagingParams,
} from '~/api/requests/models.type.ts'

// https://admin.chatty.kr/api/v1/chatty?limit=2&offset=2
export const chattyApi = {
	path: {
		chatty: '/chatty',
	},
	getByPage: (params: PagingParams) => http.get<PagingModel<ChattyModel>>(chattyApi.path.chatty, { params })
}


