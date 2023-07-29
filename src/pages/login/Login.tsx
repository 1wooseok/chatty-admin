import { InputText } from 'primereact/inputtext'
import {
	FormEvent,
	useRef,
	useState
} from 'react'
import { AxiosError } from 'axios'
import { Toast } from 'primereact/toast'
import { Button } from 'primereact/button'
import { LoginPayload } from '~/api/requests/auth/model.type.ts'
import { useLogin } from '~/api/requests/auth/queries.ts'


export default function Login()
{
	const toast = useRef<Toast>(null)
	const { mutate, isLoading } = useLogin()
	const [{ username, password }, setFormData] = useState<LoginPayload>({
		username: '',
		password: '',
	})
	
	function onSubmit(e: FormEvent)
	{
		e.preventDefault()
		mutate({ username, password }, {
			onError: (error) =>
			{
				const axiosError = error as AxiosError
				let msg = '로그인중 오류가 발생했습니다.'
				
				if (axiosError?.response?.status === 404)
				{
					msg = '아이디 혹은 비밀번호를 확인하세요'
				}
				
				toast.current?.show({ severity: 'error', summary: '로그인 오류', detail: msg })
			}
		})
	}
	
	return (
		<div className={'mx-auto max-w-xl'}>
			<Toast ref={toast} />
			
			<form onSubmit={onSubmit} className={'flex flex-col items-center gap-l'}>
				<InputText value={username} onChange={e => setFormData(d => ({
					...d,
					username: e.target.value
				}))} placeholder={'username'} />
				<InputText type={'password'} value={password} onChange={e => setFormData(d => ({
					...d,
					password: e.target.value
				}))} placeholder={'password'} />
				<Button label={'login'} loading={isLoading} disabled={!username || !password} />
			</form>
		</div>
	)
}


