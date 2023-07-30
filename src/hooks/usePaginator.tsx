import {
	useState
} from 'react'
import { DataTablePageEvent } from 'primereact/datatable'

export type LazyTableState = {
	first: number;
	rows: number;
	page: number;
}

export default function usePaginator()
{
	const [lazyState, setLazyState] = useState<LazyTableState>({
		first: 0,
		rows: 10,
		page: 1,
	})
	
	function onClickPage({
		page,
		rows,
		first
	}: DataTablePageEvent)
	{
		if (page === undefined)
		{
			return
		}
		
		setLazyState({
			page: page + 1,
			rows,
			first
		})
	}
	
	return {
		lazyState,
		onClickPage,
	}
}
