<script setup lang="ts">
defineProps<{
    name?: string
    img?: string
}>()
</script>

<template>
    <nuxt-link to="/" class="group">
        <div class="relative mb-2.5  overflow-hidden rounded-[10px]">
            <NuxtImg
                :src="`https://image.tmdb.org/t/p/w500/${img}`"
                width="340"
                height="480"
                alt="Card img"
                class="w-100 rounded-xl object-cover transition-transform duration-500 group-hover:scale-104"
            />
            <div
                class="absolute top-3 right-3 rounded-sm bg-green-400 px-3 py-1 text-[12px] font-bold lg:text-[16px]"
            >
                6.90
            </div>
        </div>
        <p class="line-clamp-2 text-[12px] font-bold md:text-[18px]">
            {{ name }}
        </p>
        <ul
            class="text-accent-second line-clamp-2 flex gap-2 text-[12px] md:text-[15px]"
        >
            <li>Триллер</li>
            <li>Драма</li>
        </ul>
    </nuxt-link>
</template>
