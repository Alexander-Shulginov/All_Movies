import { tmdbFetch } from './_TMDB-client'

export const getMovieById = async (id: number) => {
    return tmdbFetch(`/movie/${id}`)
}
