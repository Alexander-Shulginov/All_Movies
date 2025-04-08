<script setup lang="ts"></script>

<template>
    <div>
        <div class="grid grid-cols-2 gap-x-4 gap-y-8 md:grid-cols-4 lg:gap-6">
            <FilmCard />
            <FilmCard />
            <FilmCard />
            <FilmCard />
        </div>
        <div class="grid grid-cols-2 gap-x-4 gap-y-8 md:grid-cols-4 lg:gap-6">
            <FilmCardSkeleton />
            <FilmCardSkeleton />
            <FilmCardSkeleton />
            <FilmCardSkeleton />
        </div>
    </div>
</template>
