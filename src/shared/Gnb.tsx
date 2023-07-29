import { Menubar } from 'primereact/menubar'
import Logo from '~/shared/Logo.tsx'

export default function Gnb()
{
	// const item = [
	// 	{
	// 		label: '',
	// 		icon: 'pi pi-fw pi-calendar',
	// 	},
	// 	{
	// 		label: 'Quit',
	// 		icon: 'pi pi-fw pi-power-off'
	// 	}
	// ]
	// const items = []
	//
	return (
		<header>
			<nav>
				<Menubar start={<Logo size={40}/>} className={'min-h-[52px]'} style={{ padding: '0 24px'}} />
			</nav>
		</header>
	)
}
