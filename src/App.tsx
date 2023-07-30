// style
import './index.css'
// theme
import 'primereact/resources/themes/lara-light-indigo/theme.css'
// css-core
import 'primereact/resources/primereact.min.css'
// router
import {
	BrowserRouter,
	Navigate,
	Outlet,
	Route,
	Routes
} from 'react-router-dom'
// react-query
import {
	QueryClient,
	QueryClientProvider
} from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import {
	ReactNode,
	Suspense
} from 'react'
import { ErrorBoundary } from 'react-error-boundary'
// constants
import { EUrls } from '~/constants/EUrls.ts'
// pages
import Layout from '~/shared/layout/Layout.tsx'
import Home from '~/pages/home/Home.tsx'
import Login from '~/pages/login/Login.tsx'
import ChattyList from '~/pages/chatty-list/ChattyList.tsx'
import Users from '~/pages/users/Users.tsx'
import PageSpinner from '~/shared/table/PageSpinner.tsx'
import H1 from '~/shared/typo/Heading.tsx'
import {
	AuthProvider,
	useAuth
} from './context/authContext.tsx'
import ReportStatus from '~/pages/report-status/ReportStatus.tsx'

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			retry: false,
			refetchOnMount: false
		},
	},
})

function App()
{
	return (
		<ErrorBoundary fallback={<div>Uncaught Runtime Error</div>}>
			<QueryClientProvider client={queryClient}>
				<ReactQueryDevtools initialIsOpen={false}/>
				<AuthProvider>
					<BrowserRouter>
						
						<Routes>
							<Route path={EUrls['login']} element={<Login/>}/>
							
							<Route path={'/'} element={<PrivateRoutes/>}>
								<Route path={EUrls['home']} element={<Home/>}/>
								
								<Route path={EUrls['chatty-list']} element={
									<ErrorBoundary fallback={<div>Request Error</div>}>
										<Suspense fallback={<PageSpinner/>}>
											<H1 title={'질문 리스트'}/>
											<ChattyList/>
										</Suspense>
									</ErrorBoundary>}
								/>
								
								<Route path={EUrls['users']} element={
									<ErrorBoundary fallback={<div>Request Error</div>}>
										<Suspense fallback={<PageSpinner/>}>
											<H1 title={'사용자 조회'}/>
											<Users/>
										</Suspense>
									</ErrorBoundary>}
								/>
								
								<Route path={EUrls['report-status']} element={
									<ErrorBoundary fallback={<div>Request Error</div>}>
										<Suspense fallback={<PageSpinner/>}>
											<H1 title={'신고 현황'}/>
											<ReportStatus/>
										</Suspense>
									</ErrorBoundary>}
								/>
							</Route>
							
							<Route path={'*'} element={<h1>여기는 잘못오셨습니다</h1>} />
						</Routes>
					</BrowserRouter>
				</AuthProvider>
			</QueryClientProvider>
		</ErrorBoundary>
	)
}

export default App

function PrivateRoutes({ children }: { children?: ReactNode })
{
	const { isLogin } = useAuth()
	
	if (!isLogin)
	{
		return <Navigate to={EUrls['login']} replace/>
	}
	
	return children ? <Layout>{children}</Layout> : <Layout><Outlet/></Layout>
}
