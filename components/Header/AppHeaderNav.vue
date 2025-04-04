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
        name: 'Актёры',
        to: '/',
    },
    {
        name: 'Новости',
        to: '/news',
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
    <nav>
        <ul class="hidden flex-col gap-4 md:flex md:flex-row">
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
