# useMoreCustomHooks

A repo to accompany thoughts on how you should be writing more custom hooks, when you're doing React ⚛️

Check out the [YouTube Video rundown!]

[youtube video rundown]: https://www.youtube.com/watch?v=1YwO2xacLKI 'Hey, the floating head is me!'

Let's do more of this:

```tsx
export const EpisodesList = () => {
	const episodes = useEpisodes()

	return <div>our ui...</div>
}
```

Less of this!

```tsx
export const EpisodesList = () => {
	const [episodes, setEpisodes] = useState<Episode[] | null>(null)
	useEffect(() => {
		fetch('/api/episodes')
			.then((response) => {
				if (!response.ok) {
					throw new Error(`error fetching episodes: ${response.statusText}`)
				}

				return response.json()
			})
			.then(setEpisodes)
	}, [])

	return <div>our ui...</div>
}
```

😄
