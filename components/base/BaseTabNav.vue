<script setup lang="ts">
import type { ITabMenu } from '@/components/ActualFilms/ActualFilms.vue';


defineProps<{
    items: ITabMenu[]
}>()

const activeIndex = ref<number | null>(0)

const setActive = (index: number) => {
    activeIndex.value = index
}
</script>

<template>
    <nav>
        <ul
            class="flex flex-wrap gap-x-8 gap-y-1 text-[15px] font-bold md:flex-nowrap lg:text-[18px]"
        >
            <li v-for="(item, index) in items" :key="index">
                <button
                    class="cursor-pointer transition-colors"
                    :class="{
                        'text-white': activeIndex === index,
                        'text-white/35': activeIndex !== index,
                    }"
                    @click="[setActive(index), item.fetch()]"
                    type="button"
                >
                    {{ item.name }}
                </button>
            </li>
        </ul>
    </nav>
</template>

<style lang="scss" scoped></style>
