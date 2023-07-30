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

const CHATTY_CLIENT_DOMAIN = 'https://chatty.kr'

export const ProfileTd = ({ profile_name, profile_image }: { profile_name: string; profile_image: string;  }) =>
{
	return (
		<div className={'flex justify-items-start gap-xs'}>
			<Avatar image={profile_image} shape="circle" size={'normal'}/>
			<p className={'text-sm'}>
				<a
					target={'_blank'}
					href={`${CHATTY_CLIENT_DOMAIN}/${profile_name}`}
					className={'text-black hover:cursor-pointer hover:text-blue-500'}
				>
					{profile_name}
				</a>
			</p>
		</div>
	)
}

export const LongTextTd = ({ content }: { content: string; }) =>
{
	return (
		<div className={'flex justify-items-start gap-xs max-w-[200px]'}>
			<p className={'text-sm text-ellipsis whitespace-nowrap overflow-hidden'}>{content}</p>
		</div>
	)
}


