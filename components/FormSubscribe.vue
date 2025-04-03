<script setup lang="ts"></script>

<template>
    <section
        class="bg-[#1D3AA0] overflow-hidden rounded-2xl pt-19 pb-26.5 px-4 flex flex-col items-center bg-[url(/assets/img/form-bg.jpg)] bg-no-repeat bg-cover custom-overlay"
    >
        <div class="max-w-[768px] text-center z-[2]">
            <div class="mb-3 flex items-center gap-2 justify-center">
                <svg-icon width="40" height="36" name="logo-second" />
                <span class="text-xl font-black">All Movies</span>
            </div>
            <h3
                class="text-[25px] md:text-[35px] lg:text-[50px] font-bold mb-6 leading-[1.1]"
            >
                Подпишитесь на E-mail рассылку
            </h3>
            <p class="text-[15px] lg:text-[22px] mb-8">
                Если хотите быть в курсе последних новостей и новинок кино -
                заполните форму ниже и оформите бесплатную E-mail рассылку!
            </p>
            <form
                type="submit"
                class="flex sm:flex-row max-w-[258px] mx-auto flex-col justify-center gap-2 mb-5.5"
            >
                <input
                    class="bg-white text-black rounded-xl p-[19px] sm:p-5.5 placeholder-black"
                    type="text"
                    name="user-mail"
                    id="mail-input"
                    placeholder="Введите свой E-mail адрес"
                />
                <button
                    class="text-dark cursor-pointer transition duration-300 bg-accent hover:bg-yellow-300 rounded-xl px-9 py-[19px] sm:py-6 font-bold"
                    type="submit"
                >
                    Подписаться
                </button>
            </form>
            <div class="flex gap-3 justify-center items-center">
                <div class="inline-flex items-center relative">
                    <input
                        type="checkbox"
                        id="form-policy"
                        name="policy"
                        class="peer h-5 w-5 cursor-pointer transition-all appearance-none rounded border border-white checked:bg-accent checked:border-accent"
                    />
                    <span
                        class="absolute pointer-events-none text-dark opacity-0 peer-checked:opacity-100 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="h-3.5 w-3.5"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            stroke="currentColor"
                            stroke-width="1"
                        >
                            <path
                                fill-rule="evenodd"
                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                clip-rule="evenodd"
                            ></path>
                        </svg>
                    </span>
                </div>
                <label
                    class="cursor-pointer sm:text-center text-left text-[14px] sm:text-[17px]"
                    for="form-policy"
                >
                    Соглашаюсь на условия
                    <a class="text-accent underline" target="_blank" href="#">
                        политики конфиденциальности
                    </a>
                </label>
            </div>
        </div>
    </section>
</template>

<style scoped>
.custom-overlay {
    position: relative;
}

.custom-overlay::after {
    content: '';
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 1;

    background: rgba(29, 58, 160, 0.9);
}
</style>
