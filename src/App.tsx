import Layout from './shared/Layout.tsx'
import {
	BrowserRouter,
	Route,
	Routes
} from 'react-router-dom'
import Home from '~/pages/home/Home.tsx'
// admin
// todo: 게시물 전체 조회 / 수정 / 삭제
// todo: 가입자 전체 조회/ 수정 / 삭제
// todo: 신고 현황 조회 / 삭제
// todo: 활동 로그 조회
// todo: 가입자 일자별 그래프
// todo: 질문 일자별 그래프
// todo: 사단 현황 조회 / 삭제
// todo: api 응답 상태
function App()
{
	return (
		<BrowserRouter>
			<Layout>
				<Routes>
					<Route path="/" element={<Home/>}/>
				</Routes>
			</Layout>
		</BrowserRouter>
	)
}

export default App
