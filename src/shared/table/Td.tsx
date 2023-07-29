import { ServerDateFormat } from '~/utils/date/type.types.ts'
import date from '~/utils/date/date.ts'
import { Avatar } from 'primereact/avatar'

export const DateTd = ({ serverDate }: { serverDate: ServerDateFormat }) =>
{
	const fmtDate = date.toClient(serverDate, 'yyyy.mm.dd')
	const elapsed = date.toElapsed(serverDate)
	
	return (
		<div className={'flex flex-col items-center justify-center gap-[4px]'}>
			<span className={'text-xs'}>{fmtDate}</span>
			<span className={'text-xs'}>({elapsed})</span>
		</div>
	)
}

export const ProfileTd = ({ profile_name, profile_image }: { profile_name: string; profile_image: string;  }) =>
{
	return (
		<div className={'flex justify-items-start gap-xs'}>
			<Avatar image={profile_image} shape="circle" size={'normal'}/>
			<p className={'text-sm'}>{profile_name}</p>
		</div>
	)
}
