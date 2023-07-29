import {
	useCallback,
	useState
} from 'react'
import { PaginatorPageChangeEvent } from 'primereact/paginator'

type Params = {
	initialFirst: number;
	initialRows: number
};

export default function usePaginator({ initialFirst, initialRows }: Params)
{
	const [first, setFirst] = useState(initialFirst)
	const [rows, setRows] = useState(initialRows)
	
	const onPageChange = useCallback( (event: PaginatorPageChangeEvent) =>
	{
		setFirst(event.first)
		setRows(event.rows)
	}, [])
	
	return { first, rows, onPageChange }
}
