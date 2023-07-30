type Props = {
	title: string;
}
export default function H1({ title }: Props)
{
	return (
		<h1 className={'font-normal text-2xl mb-m'}>{title}</h1>
	)
}
