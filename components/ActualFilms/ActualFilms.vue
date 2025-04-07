<script setup lang="ts">
export interface ITabMenu {
    name: string
    fetch: Function
}
;[]

const tabsMenu: ITabMenu[] = [
    {
        name: 'Все',
        fetch: () => console.log('All'),
    },
    {
        name: 'Боевики',
        fetch: () => console.log('Action'),
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
</script>

<template>
    <section class="container mx-auto px-2 py-7.5 md:pb-12.5">
        <ActualFilmsTop :items="tabsMenu" />
        <ActualFilmsCards />
        <ActualFilmsShowMore />
    </section>
</template>

<style lang="scss" scoped></style>
