import { getPopularPerson } from '~/server/services/personServices'

export default defineEventHandler(async () => {
    return await getPopularPerson()
})
