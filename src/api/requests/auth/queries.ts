import { useNavigate } from 'react-router-dom'
import { useMutation } from '@tanstack/react-query'
import { LoginPayload } from '~/api/requests/auth/model.type.ts'
import { authApi } from '~/api/requests/auth/apis.ts'
import { EUrls } from '~/constants/EUrls.ts'
import { useAuth } from '../../../context/authContext.tsx'

export function useLogin()
{
	const navigate = useNavigate()
	const { login } = useAuth()
	
	return useMutation({
		mutationFn: (payload: LoginPayload) => authApi.login(payload),
		onSuccess: ({ Token }) =>
		{
			if (!Token)
			{
				throw Error('token이 없습니다.')
			}
			
			login(Token)
			navigate(EUrls['home'])
		},
	})
}
