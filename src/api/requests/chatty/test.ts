import React, { useState } from 'react'
import { DataTable } from 'primereact/datatable'
import { Column } from 'primereact/column'
import { Skeleton } from 'primereact/skeleton'
import {
	VirtualScrollerLazyEvent,
	VirtualScrollerLoadingTemplateOptions
} from 'primereact/virtualscroller'

export const CarService = {
	brands: ['Vapid', 'Carson', 'Kitano', 'Dabver', 'Ibex', 'Morello', 'Akira', 'Titan', 'Dover', 'Norma'],
	
	colors: ['Black', 'White', 'Red', 'Blue', 'Silver', 'Green', 'Yellow'],
	
	generateCar(id)
	{
		return {
			id,
			vin: this.generateVin(),
			brand: this.generateBrand(),
			color: this.generateColor(),
			year: this.generateYear()
		}
	},
	
	generateVin()
	{
		let text = ''
		const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
		
		for (let i = 0; i < 5; i++)
		{
			text += possible.charAt(Math.floor(Math.random() * possible.length))
		}
		
		return text
	},
	
	generateBrand()
	{
		return this.brands[Math.floor(Math.random() * Math.floor(10))]
	},
	
	generateColor()
	{
		return this.colors[Math.floor(Math.random() * Math.floor(7))]
	},
	
	generateYear()
	{
		return 2000 + Math.floor(Math.random() * Math.floor(19))
	}
}


interface Car
{
	id: number;
	vin: string;
	brand: string;
	color: string;
	year: number;
}

export default function ChattyList()
{
	const cars: Car[] = Array.from({ length: 100000 }).map((_, i) => CarService.generateCar(i + 1))
	const [virtualCars, setVirtualCars] = useState<Car[]>(Array.from({ length: 100000 }))
	const [lazyLoading, setLazyLoading] = useState<boolean>(false)
	let loadLazyTimeout = null
	
	const loadCarsLazy = (event: VirtualScrollerLazyEvent) =>
	{
		!lazyLoading && setLazyLoading(true)
		
		if (loadLazyTimeout)
		{
			clearTimeout(loadLazyTimeout)
		}
		
		//simulate remote connection with a timeout
		loadLazyTimeout = setTimeout(() =>
		{
			const _virtualCars = [...virtualCars]
			const {
							first,
							last
						} = event
			
			//load data of required page
			const loadedCars = cars.slice(first, last)
			
			//populate page of virtual cars
			Array.prototype.splice.apply(_virtualCars, [...[first, last - first], ...loadedCars])
			
			setVirtualCars(_virtualCars)
			setLazyLoading(false)
		}, Math.random() * 1000 + 250)
	}
	
	const loadingTemplate = (options: VirtualScrollerLoadingTemplateOptions) =>
	{
		return (
			<div className="flex align-items-center" style={{
		height: '17px',
			flexGrow: '1',
			overflow: 'hidden'
	}}>
		<Skeleton width={options.cellEven ? (options.field === 'year' ? '30%' : '40%') : '60%'} height="1rem"/>
		</div>
	)
	}
	
	return (
		<div className="card">
		<DataTable value={virtualCars} scrollable scrollHeight="400px"
	virtualScrollerOptions={{
	lazy: true,
		onLazyLoad: loadCarsLazy,
		itemSize: 46,
		delay: 200,
		showLoader: true,
		loading: lazyLoading,
		loadingTemplate
}}
	tableStyle={{ minWidth: '50rem' }}>
	<Column field="id" header="Id" style={{ width: '20%' }}></Column>
<Column field="vin" header="Vin" style={{ width: '20%' }}></Column>
<Column field="year" header="Year" style={{ width: '20%' }}></Column>
<Column field="brand" header="Brand" style={{ width: '20%' }}></Column>
<Column field="color" header="Color" style={{ width: '20%' }}></Column>
</DataTable>
</div>
)
}

