import { Sidebar } from 'primereact/sidebar'
import { useState } from 'react'

export default function Lnb()
{
	const [visible, setVisible] = useState(true)
	
	return (
		<aside className={'z-20'}>
			<Sidebar visible={visible} onHide={() => setVisible(false)} modal={false}>
				<h2>Sidebar</h2>
			</Sidebar>
		</aside>
	)
}
