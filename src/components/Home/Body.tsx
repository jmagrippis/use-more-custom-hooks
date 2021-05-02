export type Props = {
	episodes: any[]
}

export const Body = ({episodes}: Props) => (
	<main className="w-full flex-grow flex items-center flex-col">
		{JSON.stringify(episodes)}
	</main>
)
