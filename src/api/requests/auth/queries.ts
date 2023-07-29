import { useNavigate } from 'react-router-dom'
import { useMutation } from '@tanstack/react-query'
import { LoginPayload } from '~/api/requests/auth/model.type.ts'
import { authApi } from '~/api/requests/auth/apis.ts'

export function useLogin()
{
	const navigate = useNavigate()
	
	return useMutation({
		mutationFn: (payload: LoginPayload) => authApi.login(payload),
		onSuccess: ({ data: { token } }) =>
		{
			if (!token)
			{
				throw Error('token이 없습니다.')
			}
			
			window.localStorage.setItem('CHATTY_ADMIN_ACCESS', token)
			navigate('/home')
		},
	})
}
