import { CSSProperties } from 'react'
import {
	IconTypes,
	svgPaths
} from '~/constants/svgPaths.ts'

type Props = {
	fillColor?: string;
	strokeColor?: string;
	size: keyof typeof iconSizeMap;
	stroke?: number;
	icon: IconTypes;
	style?: CSSProperties;
	className?: string;
};

const iconSizeMap = {
	xs: '12px',
	s: '14px',
	m: '16px',
	l: '18px',
	xl: '20px',
	'2xl': '22px',
	'3xl': '24px'
}

export default function Icon({
	fillColor = 'black',
	strokeColor = 'black',
	size,
	stroke = 1,
	icon,
	className,
	style
}: Props)
{
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 24 24"
			fill={fillColor}
			width={iconSizeMap[size]}
			height={iconSizeMap[size]}
			className={className}
			style={{ zIndex: 10, ...style }}
			stroke={strokeColor}
			strokeWidth={stroke ?? 1}>
			<path d={svgPaths[icon]}/>
		</svg>
	)
}


