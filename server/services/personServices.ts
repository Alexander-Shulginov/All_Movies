import { tmdbFetch } from './_TMDB-client'

export const getPopularPerson = async () => {
    return tmdbFetch(`/person/popular`)
}
