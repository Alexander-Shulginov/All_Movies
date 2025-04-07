<script setup lang="ts"></script>

<template>
    <nuxt-link to="/" class="group ">
        <div class="relative mb-2.5 rounded-[10px] overflow-hidden">
            <NuxtImg
                src="/card-test.jpg"
                width="340"
                height="480"
                alt="Card img"
                class="rounded-xl object-cover duration-500 transition-transform group-hover:scale-104"
            />
            <div
                class="absolute top-3 right-3 rounded-sm bg-green-400 px-3 py-1 text-[12px] lg:text-[16px] font-bold"
            >
                6.90
            </div>
        </div>
        <p class="line-clamp-2 text-[12px] font-bold md:text-[18px]">
            Побег из Претории
        </p>
        <ul
            class="text-accent-second line-clamp-2 flex gap-2 text-[12px] md:text-[15px]"
        >
            <li>Триллер</li>
            <li>Драма</li>
        </ul>
    </nuxt-link>
</template>
