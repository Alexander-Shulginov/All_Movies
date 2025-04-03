<script setup lang="ts"></script>

<template>
    <main class="container mx-auto px-3 text-white py-6">
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
