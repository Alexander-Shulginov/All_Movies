<script setup lang="ts">
const navItems = [
    {
        name: 'Афиша',
        to: '/',
    },
    {
        name: 'Медиа',
        to: '/',
    },
    {
        name: 'Фильмы',
        to: '/',
    },
    {
        name: 'Актеры',
        to: '/',
    },
    {
        name: 'Новости',
        to: '/',
    },
    {
        name: 'Подборки',
        to: '/',
    },
    {
        name: 'Категории',
        to: '/',
    },
]
</script>

<template>
    <nav class="mb-6 lg:mb-10">
        <ul class="flex flex-col items-center justify-center gap-4 sm:flex-row md:flex">
            <li
                v-for="(item, index) in navItems"
                :key="index"
                class="hover:border-accent border-b-2 border-transparent text-[13px] font-bold duration-200 lg:text-[15px] xl:text-[17px]"
            >
                <RouterLink :to="item.to">{{ item.name }}</RouterLink>
            </li>
        </ul>
    </nav>
</template>

<style lang="scss" scoped></style>
