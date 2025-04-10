import { getMovieById } from "~/server/services/movieServices"

export default defineEventHandler(async (event) => {
    const id = getRouterParam(event, 'id')
    if (!id)
        throw createError({ statusCode: 400, statusMessage: 'ID required' })

    return await getMovieById(Number(id))
})
