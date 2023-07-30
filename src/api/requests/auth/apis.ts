import {
	LoginPayload,
	LoginResponse
} from '~/api/requests/auth/model.type.ts'
import http from '~/api/requests/http.ts'

export const authApi = {
	path: {
		login: '/login',
	},
	login: (payload: LoginPayload) => http.post<LoginResponse>(authApi.path.login, payload)
}


