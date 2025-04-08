import { api } from '~/api/api'

export const fetchMovieById = async (id: number) => {
    const response = api(`/movie/${id}`, {
        method: 'GET',
    })
    return response
}
