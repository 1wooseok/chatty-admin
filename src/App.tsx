// style
import './index.css'
// theme
import 'primereact/resources/themes/lara-light-indigo/theme.css'
// core
import 'primereact/resources/primereact.min.css'
// Components
import Layout from './shared/Layout.tsx'
import {
	BrowserRouter,
	Route,
	Routes
} from 'react-router-dom'
import Home from '~/pages/home/Home.tsx'
import Login from '~/pages/login/Login.tsx'
import {
	QueryClient,
	QueryClientProvider
} from '@tanstack/react-query'
import { ErrorBoundary } from 'react-error-boundary'

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
				<BrowserRouter>
					<Layout>
						<Routes>
							<Route path="/login" element={<Login />}/>
							<Route path="/home" element={<Home />}/>
						</Routes>
					</Layout>
				</BrowserRouter>
			</QueryClientProvider>
		</ErrorBoundary>
	)
}

export default App

// admin
// todo: 게시물 전체 조회 / 수정 / 삭제
// todo: 가입자 전체 조회/ 수정 / 삭제
// todo: 신고 현황 조회 / 삭제
// todo: 활동 로그 조회
// todo: 가입자 일자별 그래프
// todo: 질문 일자별 그래프
// todo: 사단 현황 조회 / 삭제
// todo: api 응답 상태
