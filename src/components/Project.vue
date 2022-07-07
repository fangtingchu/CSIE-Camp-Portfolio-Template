<script setup>
import Typing from "@components/Typing.vue";

defineProps({
    name: { type: String, default: "Project" },
    description: { type: String, default: "" },
    image: { type: String, default: "" },
    link: { type: String, default: "" },
    tags: { type: Array, default: () => [] },
});
</script>

<template>
    <div class="group flex flex-col justify-center lg:flex-row">
        <div
            class="flex h-full w-full items-center justify-center overflow-hidden rounded-md shadow lg:shadow-lg"
        >
            <img
                :src="image"
                class="w-full transition-all duration-200 ease-in group-hover:scale-105"
            />
        </div>
        <div class="h-full w-full p-4 pb-2">
            <Typing
                class="mb-2 block text-lg md:text-xl lg:mb-4 lg:text-2xl"
                :text="name"
                :speed="60"
            ></Typing>
            <Typing
                class="mb-2 block text-sm text-gray-600 md:text-base"
                :text="description"
                :speed="40"
            ></Typing>
            <Typing
                class="block text-sm text-gray-400 md:text-base"
                :text="tags.join(', ')"
                :speed="40"
            ></Typing>

            <div class="mt-4 flex flex-col justify-center">
                <a
                    :href="link"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="inline-block"
                >
                    <Typing
                        class="w-full text-blue-400 transition-all duration-200 ease-in hover:text-blue-600"
                        :text="link"
                        :speed="40"
                    ></Typing>
                </a>
            </div>
        </div>
    </div>
</template>
