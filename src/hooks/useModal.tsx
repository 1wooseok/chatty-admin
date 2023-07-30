import {
	useCallback,
	useState
} from 'react'

export default function useModal(initialVisibility = false)
{
	const [visible, setVisible] = useState(initialVisibility)
	
	function onOpen()
	{
		setVisible(true)
	}
	
	function onHide()
	{
		setVisible(false)
	}
	
	return {
		visible,
		onOpen: useCallback(onOpen, []),
		onHide: useCallback(onHide, [])
	}
}
