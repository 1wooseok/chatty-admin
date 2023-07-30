import React, {
	createContext,
	useCallback,
	useContext,
	useState
} from 'react'
import { EUrls } from '~/constants/EUrls.ts'

const AuthContext = createContext<{ isLogin: boolean; logout: () => void; login: (Token: string) => void }>({
	isLogin: false,
	login: () => null,
	logout: () => null,
})
export const AuthProvider = ({ children }: { children: React.ReactNode }) =>
{
	const Token = localStorage.getItem('CHATTY_ADMIN_ACCESS')
	const [isLogin, setIsLogin] = useState(Boolean(Token))
	
	const logout = useCallback(() =>
	{
		localStorage.removeItem('CHATTY_ADMIN_ACCESS')
		setIsLogin(false)
		window.location.href = EUrls['login']
	}, [])
	
	const login = useCallback((Token: string) =>
	{
		window.localStorage.setItem('CHATTY_ADMIN_ACCESS', Token)
		setIsLogin(true)
	}, [])
	
	return (
		<AuthContext.Provider value={{
			isLogin,
			login,
			logout
		}}>
			{children}
		</AuthContext.Provider>
	)
}

export function useAuth()
{
	const context = useContext(AuthContext)
	
	if (context === undefined)
	{
		throw new Error('useLogin must be used within a LoginContext.Provider')
	}
	
	return context
}
