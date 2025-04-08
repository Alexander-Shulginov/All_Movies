<script setup lang="ts">
export interface ITabMenu {
    name: string
    fetch: Function
}
;[]

const tabsMenu: ITabMenu[] = [
    {
        name: 'Все время',
        fetch: () => console.log('All'),
    },
    {
        name: '2025',
        fetch: () => console.log('Action'),
    },
    {
        name: '2024',
        fetch: () => console.log('Adventure'),
    },
    {
        name: '2023',
        fetch: () => console.log(2),
    },
    {
        name: '2022',
        fetch: () => console.log(2),
    },
    {
        name: '2021',
        fetch: () => console.log(2),
    },
    {
        name: '2020',
        fetch: () => console.log(2),
    },
]

onMounted(() => {})
</script>

<template>
    <div class="container mx-auto px-2 py-7.5 md:pb-12.5">
        <PopularFilmsTop :items="tabsMenu" />
        <PopularFilmsItems class="mb-8" />
        <BaseNavigation />
    </div>
</template>

<style lang="scss" scoped></style>
