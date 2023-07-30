import { Menubar } from 'primereact/menubar'
import Logo from '~/shared/icon/Logo.tsx'
import { Link } from 'react-router-dom'
import { MenuItem } from 'primereact/menuitem'
import Icon from '~/shared/icon/Icon.tsx'
import { useAuth } from '../../context/authContext.tsx'
import { EUrls } from '~/constants/EUrls.ts'

export default function Gnb()
{
	const { isLogin, logout } = useAuth()
	
	const items: MenuItem[] = [
		{
			label: isLogin ? 'logout' : '',
			icon: <Icon icon={'power'} fillColor={'white'} stroke={2} size={'m'} style={{ marginRight: '6px'}} />,
			command: logout,
		}
	]
	
	return (
		<header className={'sticky top-[0px] z-50'}>
			<nav>
				<Menubar
					start={(
						<Link to={EUrls['home']}>
							<Logo size={40}/>
						</Link>
					)}
					className={'min-h-[52px]'}
					style={{
						padding: '0 16px'
					}}
					model={items}
				/>
				
			</nav>
		</header>
	)
}
