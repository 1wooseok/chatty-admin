import { Menubar } from 'primereact/menubar'
import Logo from '~/shared/Logo.tsx'

export default function Gnb()
{
	const items = [
		{
			label: 'Users',
			icon: 'pi pi-fw pi-user',
			items: [
				{
					label: 'New',
					icon: 'pi pi-fw pi-user-plus',
					
				},
				{
					label: 'Delete',
					icon: 'pi pi-fw pi-user-minus',
					
				},
				{
					label: 'Search',
					icon: 'pi pi-fw pi-users',
					items: [
						{
							label: 'Filter',
							icon: 'pi pi-fw pi-filter',
							items: [
								{
									label: 'Print',
									icon: 'pi pi-fw pi-print'
								}
							]
						},
						{
							icon: 'pi pi-fw pi-bars',
							label: 'List'
						}
					]
				}
			]
		},
		{
			label: 'Events',
			icon: 'pi pi-fw pi-calendar',
		},
		{
			label: 'Quit',
			icon: 'pi pi-fw pi-power-off'
		}
	]
	
	return (
		<header>
			<nav>
				<Menubar model={items} start={<Logo size={40}/>} className={'min-h-[52px]'} style={{ padding: '0 24px'}} />
			</nav>
		</header>
	)
}
