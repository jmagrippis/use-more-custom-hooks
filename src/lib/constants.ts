const protocol = process.env.NODE_ENV === 'production' ? 'https' : 'http'
const host =
	process.env.NEXT_PUBLIC_ROOT_URL || process.env.NEXT_PUBLIC_VERCEL_URL

export const rootUrl = `${protocol}://${host}`
