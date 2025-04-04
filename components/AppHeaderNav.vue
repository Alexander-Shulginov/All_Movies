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
    <nav>
        <ul class="flex gap-4">
            <li
                v-for="(item, index) in navItems"
                :key="index"
                class="text-[13px] lg:text-[17px] font-bold border-b-2 border-transparent duration-200 hover:border-accent"
            >
                <RouterLink :to="item.to">{{ item.name }}</RouterLink>
            </li>
        </ul>
    </nav>
</template>

<style lang="scss" scoped></style>
