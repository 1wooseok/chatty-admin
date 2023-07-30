import styled from '@emotion/styled'
import Icon from '~/shared/icon/Icon.tsx'
import {
	Link,
	useLocation
} from 'react-router-dom'
import { EUrls } from '~/constants/EUrls.ts'
import { IconTypes } from '~/constants/svgPaths.ts'

export default function Lnb()
{
	const { pathname } = useLocation()
	
	const ITEMS: Omit<LnbItemProps, 'isCurrent'>[] = [
		{
			url: 'chatty-list',
			title: '질문 리스트',
			icon: 'chatty'
		},
		{
			url: 'users',
			title: '사용자 조회',
			icon: 'users'
		},
		{
			url: 'report-status',
			title: '신고 현황',
			icon: 'report'
		}
	]
	
	return (
		<aside>
			<CssLnbWrapper>
				<ul className={'my-[12px]'}>
					{ITEMS.map(({
						url,
						title,
						icon
					}) => (
						<LnbItem
							key={url}
							url={url}
							title={title}
							icon={icon}
							isCurrent={pathname.includes(url)}
						/>
					))}
				</ul>
			</CssLnbWrapper>
		</aside>
	)
}

type LnbItemProps = {
	url: keyof typeof EUrls,
	title: string,
	icon: IconTypes,
	isCurrent: boolean
}

function LnbItem({
	url,
	title,
	icon,
	isCurrent
}: LnbItemProps)
{
	return <Link to={EUrls[url]}>
		<CssLnbItemWrapper isCurrent={isCurrent}>
			<div>
				<Icon icon={icon} size={'3xl'} fillColor={isCurrent ? SKY_BLUE : 'white'} stroke={1.5}
					strokeColor={isCurrent ? BLUE : 'black'}/>
			</div>
			<span className={'NAV_LINK'}>{title}</span>
		</CssLnbItemWrapper>
	</Link>
}

const BLUE = 'rgb(0, 101, 255)'
const SKY_BLUE = 'rgb(235, 243, 255)'

const CssLnbWrapper = styled.div`
  z-index: 50;
  position: fixed;
  top: 58px;
  left: 0;
  transition: width 0.25s;

  width: 52px;
  height: 100vh;

  overflow-x: hidden;

  //box-shadow: rgba(0, 0, 0, 0.05) 3px 0 5px -2px;
  
  background: #f8f9fa;
  border-right: 1px solid #dadce0;

  .NAV_LINK {
    height: 20px;
    overflow: hidden;
    visibility: hidden;
  }

  &:hover {
    .NAV_LINK {
      visibility: visible;
    }

    width: 300px;
  }
`

const CssLnbItemWrapper = styled.li<{ isCurrent: boolean }>`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 0 12px;
  width: 100%;
  height: 42px;

  color: ${props => props.isCurrent ? BLUE : 'black'};
  background: ${props => props.isCurrent ? SKY_BLUE : 'inherit'};

  transition: opacity 0.15s;

  &:hover {
    //background: white;
    opacity: 0.3;
  }
`
