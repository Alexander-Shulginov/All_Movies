<script setup lang="ts">
export interface ITabMenu {
    name: string
    fetch: Function
}
;[]

const tabsMenu: ITabMenu[] = [
    {
        name: 'Все',
        fetch: () => console.log(2),
    },
    {
        name: 'Боевики',
        fetch: () => console.log(1),
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

const { status, data, refresh } = await useLazyFetch<any>(
    '/api/tmdb/discover/movie',
)
</script>

<template>
    <section class="container mx-auto px-2 py-7.5 md:pb-12.5">
        <ActualFilmsTop :items="tabsMenu" />
        <ActualFilmsCards :data="data" :status="status" />
        <ActualFilmsShowMore />
    </section>
</template>

<style lang="scss" scoped></style>
