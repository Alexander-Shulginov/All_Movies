<script setup lang="ts">
const props = defineProps<{
    tag: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
    size: 'large' | 'medium' | 'normal'
    weight?: 'black' | 'bold' | 'medium' | 'normal'
    text: string
}>()

const sizeClasses = {
    large: 'text-[32px] md:text-[40px] lg:text-[65px]',
    medium: 'text-[25px] md:text-[30px] lg:text-[45px]',
    normal: 'text-[24px] md:text-[28px] lg:text-[36px]',
}

const fontSize = sizeClasses[props.size || 'normal']
</script>

<template>
    <component
        :is="tag"
        class="leading-none"
        :class="[fontSize, weight ? `font-${weight}` : false]"
    >
        {{ text }}
    </component>
</template>
