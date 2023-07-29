import { UserModel } from '~/api/requests/users/models.type.ts'
import http from '~/api/requests/http.ts'
import {
	PagingModel,
	PagingParams
} from '~/api/requests/models.type.ts'

export const userApi = {
	path: {
		user: '/user'
	},
	getByPage: (params: PagingParams) => http.get<PagingModel<UserModel>>(userApi.path.user, {
		params
	})
}

