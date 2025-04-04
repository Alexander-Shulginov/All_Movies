<script setup lang="ts"></script>

<template>
    <div
        class="mb-10 grid grid-cols-2 gap-x-6 gap-y-8 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5"
    >
        <FilmCard v-for="i in 8" />
    </div>
</template>
