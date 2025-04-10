const config = useRuntimeConfig()
const baseUrl = config.public.tmdbBaseUrl
const token = config.tmdbApiKey

const headers = {
    Authorization: `Bearer ${token}`,
    Accept: 'application/json',
}

export async function tmdbFetch<T>(
    endpoint: string,
    params?: Record<string, any>,
): Promise<T> {
    const url = new URL(`${baseUrl}${endpoint}`)

    if (params) {
        Object.entries(params).forEach(([key, value]) => {
            url.searchParams.append(key, String(value))
        })
    }

    try {
        return await $fetch<T>(url.toString(), { headers })
    } catch (err) {
        console.error('[TMDB ERROR]', err)
        throw createError({
            statusCode: 502,
            statusMessage: 'External API error',
        })
    }
}
