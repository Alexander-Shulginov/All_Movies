<script setup lang="ts"></script>

<template>
    <div class="flex flex-col items-center justify-between gap-4 sm:flex-row">
        <BaseTitle
            :size="'large'"
            :weight="'black'"
            :tag="'h2'"
            :text="'Новые трейлеры'"
        />

        <RouterLink
            to="/"
            class="hover:border-accent flex items-center gap-3 border-b-2 border-transparent text-[18px] leading-none font-bold transition md:gap-7 md:mt-2 lg:text-[22px]"
        >
            <span class="group">Все трейлеры</span>
            <SvgIcon name="arrow" width="22" height="16" />
        </RouterLink>
    </div>
</template>

<style lang="scss" scoped></style>
