<script setup lang="ts">
export interface ITabMenu {
    name: string
    fetch: Function
}
;[]

const tabsMenu: ITabMenu[] = [
    {
        name: 'Все',
        fetch: () => getAllMovie(),
    },
    {
        name: 'Боевики',
        fetch: () => getAllMovie2(),
    },
    {
        name: 'Приключения',
        fetch: () => console.log('Adventure'),
    },
    {
        name: 'Комедии',
        fetch: () => console.log(2),
    },
    {
        name: 'Фантастика',
        fetch: () => console.log(2),
    },
    {
        name: 'Триллеры',
        fetch: () => console.log(2),
    },
    {
        name: 'Драма',
        fetch: () => console.log(2),
    },
]

const datas = ref([])
let statusValue = ref<any>('')

const { status, data, refresh } = await useLazyFetch<any>(
    '/api/tmdb/discover/movie',
)
datas.value = data.value.results

const getAllMovie = async () => {
    const { status, data, refresh } = await useLazyFetch<any>(
        '/api/tmdb/discover/movie?with_genres=27',
    )
    datas.value = data.value.results
}

const getAllMovie2 = async () => {
    const { status, data, refresh } = await useLazyFetch<any>(
        '/api/tmdb/discover/movie?with_genres=28',
    )
    datas.value = data.value.results
}
</script>

<template>
    <section class="container mx-auto px-2 py-7.5 md:pb-12.5">
        <ActualFilmsTop :items="tabsMenu" />
        <ActualFilmsCards :data="datas" :status="statusValue" />
        <ActualFilmsShowMore />
    </section>
</template>

<style lang="scss" scoped></style>
