<script setup lang="ts">
useSeoMeta({
    title: 'All Movies',
    description: 'All moves service',
})
</script>

<template>
    <AppHeader />
    <main>
        <BaseTitle
            :size="'large'"
            :tag="'h2'"
            :weight="'black'"
            :text="'Сейчас в кино'"
            class="mb-12"
        />
        <BaseTitle
            :size="'medium'"
            :tag="'h3'"
            :weight="'black'"
            :text="'Средний заголовок'"
            class="mb-12"
        />
        <FormSubscribe />
    </main>
</template>
