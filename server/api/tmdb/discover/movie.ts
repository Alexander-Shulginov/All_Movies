import { findMovies } from '~/server/services/discoverServices'

// export default defineEventHandler(async () => {
//     return await findMovies()
// })
export default defineEventHandler(async (event) => {
    const query = getQuery(event)
    const data = await findMovies(query)
    return data
})