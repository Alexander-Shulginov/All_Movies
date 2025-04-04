<template>
    <header
        class="container mx-auto grid grid-cols-[auto_1fr_auto] items-center justify-between gap-4 px-2 pt-3 pb-10 md:pt-6 md:pb-13"
    >
        <BaseLogo />
        <AppHeaderNav
            class="col-span-3 row-start-2 row-end-3 justify-self-center lg:col-start-2 lg:col-end-3 lg:row-auto"
        />
        <div class="flex items-center gap-3 justify-self-end">
            <AppHeaderSearchBtn />
            <AppHeaderSignIn />
        </div>
    </header>
</template>
