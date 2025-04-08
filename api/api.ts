import type { FetchOptions } from 'ofetch'

export const api = <T>(url: string, options?: FetchOptions): Promise<T> => {
    const config = useRuntimeConfig()
    // @ts-ignore
    return $fetch<T>(url, {
        baseURL: config.public.tmdbBaseUrl,
        headers: {
            Accept: 'application/json',
            Authorization: `Bearer ${config.tmdbApiKey}`,
        },
        ...options,
    })
}
