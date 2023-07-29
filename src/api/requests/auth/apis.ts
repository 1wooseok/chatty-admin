import axios from 'axios'
import {
	LoginPayload,
	LoginResponse
} from '~/api/requests/auth/model.type.ts'

export const authApi = {
	path: {
		login: '/login',
	},
	login: (payload: LoginPayload) => axios.post<LoginResponse>(authApi.path.login, payload)
}


