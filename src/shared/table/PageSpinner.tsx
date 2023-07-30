import { ProgressSpinner } from 'primereact/progressspinner'

export default function PageSpinner()
{
	return (
		<div className={'fixed top-1/2 left-1/2 translate-x-[-50%] translate-y-[-45%] z-50'}>
			<ProgressSpinner />
		</div>
	)
}


