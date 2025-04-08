<script setup lang="ts"></script>

<template>
    <div>
        <div class="animate-pulse">
            <div
                class="mb-4 flex aspect-video items-center justify-center rounded-[10px] bg-gray-300 dark:bg-gray-700"
            >
                <svg
                    class="h-20 w-20 text-gray-200 dark:text-gray-600"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 16 20"
                >
                    <path
                        d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.98 2.98 0 0 0 .13 5H5Z"
                    />
                    <path
                        d="M14.066 0H7v5a2 2 0 0 1-2 2H0v11a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.934-2ZM9 13a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-2a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2Zm4 .382a1 1 0 0 1-1.447.894L10 13v-2l1.553-1.276a1 1 0 0 1 1.447.894v2.764Z"
                    />
                </svg>
            </div>
            <div class="flex items-center justify-between gap-3">
                <div class="h-10 w-75 rounded-sm bg-gray-700"></div>
                <div class="h-5 w-40 rounded-sm bg-gray-700"></div>
            </div>
        </div>
        <br />
        <iframe class="mb-3 aspect-video w-full rounded-[10px]"></iframe>
        <div class="flex items-center justify-between gap-3">
            <p
                class="text-[25px] font-black sm:text-[30px] md:text-[35px] lg:text-[45px]"
            >
                Форсаж 9
            </p>
            <p class="font-bold">03.33.2333</p>
        </div>
    </div>
</template>

