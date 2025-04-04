<script setup lang="ts"></script>

<template>
    <section class="container mx-auto px-2">
        <BaseTitle
            :size="'large'"
            :tag="'h2'"
            :weight="'black'"
            :text="'Сейчас в кино'"
            class="mb-12"
        />

        <ActualFilmsCards />
    </section>
</template>

<style lang="scss" scoped></style>
