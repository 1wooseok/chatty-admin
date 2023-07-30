import HomeCard from '~/pages/home/children/HomeCard.tsx'

export default function Home()
{
	return (
		<div >
			<div
				// style={{ background: 'hsla(330, 75%, 85%, 0.3)'}}
				className={'grid grid-cols-2 gap-2xl p-[16px] rounded-[12px]'}
			>
				<HomeCard title={'차트 1'} >
					<></>
				</HomeCard>
				<HomeCard title={'차트 2'} >
					<></>
				</HomeCard><HomeCard title={'차트 3'} >
					<></>
				</HomeCard><HomeCard title={'차트 4'} >
					<></>
				</HomeCard>
			</div>
		</div>
	)
}
