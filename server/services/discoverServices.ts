import { tmdbFetch } from './_TMDB-client'

const defaultParams = {
    sort_by: 'popularity.desc',
    language: 'ru-RU',
    include_adult: false,
    include_video: true,
}

export const findMovies = async (params = {}) => {
    const mergedParams = { ...defaultParams, ...params }

    return tmdbFetch(`/discover/movie`, mergedParams)
}
