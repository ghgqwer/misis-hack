import { ConfigProvider, theme } from 'antd'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import LoginPage from './pages/authPages.tsx/LoginPage'
import RegisterPage from './pages/authPages.tsx/RegisterPage'
import MainPage from './pages/mainPages.tsx/MainPage'
import UserFilesPage from './pages/mainPages.tsx/manuPages/UserFilesPage'



createRoot(document.getElementById('root')!).render(
	<ConfigProvider
		theme={{
			algorithm: theme.darkAlgorithm,
			token: {
				colorBgContainer: '#17191b',
			},
		}}
	>
		<BrowserRouter>
			<Routes>
				<Route path='/register' element={<RegisterPage />} />
				<Route path='/login' element={<LoginPage />} />
				<Route path='/*' element={<MainPage />} >
					<Route path='files' element={<UserFilesPage />} />
				</Route>
			</Routes>
		</BrowserRouter>
	</ConfigProvider>
)

