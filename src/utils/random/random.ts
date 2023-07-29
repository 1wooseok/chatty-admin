import { ServerDateFormat } from '~/utils/date/type.types.ts'

export default class random
{
	public static getMockDate(): ServerDateFormat
	{
		const yyyy = new Date().getFullYear()
		const mm = this.getRandomInt(11, 0)
		
		const lastDayOfMonth = Number(new Date(yyyy, mm, 0).getDate())
		const dd = this.getRandomInt(1, lastDayOfMonth)
		
		const h = this.getRandomInt(1, 24)
		const m = this.getRandomInt(1, 60)
		const s = this.getRandomInt(1, 60)
		
		return `${yyyy}-${mm}-${dd}T${h}:${m}:${s}`
	}
	
	public static getRandomInt(min: number, max: number): number
	{
		return Math.floor(Math.random() * (max - min) + min)
	}
}


