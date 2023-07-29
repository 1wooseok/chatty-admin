import {
	ClientDateFormat,
	ServerDateFormat
} from '~/utils/date/type.types.ts'

export default class date
{
	private static readonly SEPARATOR = 'T'
	private static readonly DATE_SEPARATOR = '-'
	private static readonly TIME_SEPARATOR = ':'
	
	public static toClient(serverDate: ServerDateFormat, format: ClientDateFormat): string
	{
		
		const [date, time] = serverDate.split(this.SEPARATOR)
		const [yyyy, mm, dd] = date.split(this.DATE_SEPARATOR)
		const [HH, MM, SS] = time.split(this.TIME_SEPARATOR)
		
		switch (format)
		{
		case 'yyyy/mm/dd':
			return `${yyyy}/${mm}/${dd}`
		case 'yyyy.mm.dd':
			return `${yyyy}.${mm}.${dd}`
		case 'yyyy-mm-dd':
			return `${yyyy}-${mm}-${dd}`
		case 'yyyy-mm-dd HH:MM:SS':
			return `${yyyy}-${mm}-${dd} ${HH}:${MM}:${SS}`
		default:
			throw '매개변수의 날짜 format을 확인하세요'
		}
	}
	
	public static toElapsed(date: ServerDateFormat): string
	{
		const today = new Date()
		const timeValue = new Date(date)
		// console.log({ today, timeValue });
		const NINE_HOUR = 1000 * 60 * 60 * 9
		const betweenTime = Math.floor((today.getTime() + NINE_HOUR - (timeValue.getTime() + NINE_HOUR)) / 1000 / 60)
		
		if (betweenTime < 1)
		{
			return '방금전'
		}
		if (betweenTime < 60)
		{
			return `${betweenTime}분전`
		}
		
		const betweenTimeHour = Math.floor(betweenTime / 60)
		if (betweenTimeHour < 24)
		{
			return `${betweenTimeHour}시간전`
		}
		
		const betweenTimeDay = Math.floor(betweenTime / 60 / 24)
		if (betweenTimeDay < 365)
		{
			return `${betweenTimeDay}일전`
		}
		
		return `${Math.floor(betweenTimeDay / 365)}년전`
	}
	//
	// public static getYmd(): [string, string, string]
	// {
	// 	return new Date().toISOString().split(this.SEPARATOR)[0].split(this.DATE_SEPARATOR) as [string, string, string]
	// }
	//
	// public static getHms(): [string, string, string]
	// {
	// 	return new Date().toISOString().split(this.SEPARATOR)[1].split(this.TIME_SEPARATOR) as [string, string, string]
	// }
}
