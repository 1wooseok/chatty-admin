import { rest } from 'msw'
import { userApi } from '~/api/requests/users/apis.ts'

const background_image = 'https://plus.unsplash.com/premium_photo-1666900440561-94dcb6865554?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=654&q=80'
export const handlers = [
	rest.get(userApi.path.user, (_, res, ctx) =>
	{
		const json = {
			username: 'peQl35M5',
			background_image,
			date_joined: 'zz',
		}
		
		return res(ctx.status(200), ctx.json(json))
	}),
]
