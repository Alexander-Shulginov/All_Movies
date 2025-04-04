<script setup lang="ts">
const currentYear = new Date().getFullYear()
</script>

<template>
    <div class="text-center text-xs text-gray-400 sm:text-sm">
        <p class="mb-1">Released under the MIT License.</p>
        <p>
            Copyright © {{ currentYear }}
            <a
                class="underline"
                href="https://github.com/Alexander-Shulginov"
                target="_blank"
                >Alexander-Shulginov</a
            >
        </p>
    </div>
</template>
