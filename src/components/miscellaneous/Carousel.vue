<template>
    <carousel :items-to-show="1" :autoplay="8000" :wrap-around="true">
        <slide v-for="(slide, index) in slider" :key="index">
            <div class="mx-10">
            <img class="w-full" :src="slide.src" :alt="slide.alt" />
            </div>
        </slide>

        <template #addons>
            <!-- <navigation /> -->
            <pagination />
        </template>
    </carousel>
</template>

<script>
// If you are using PurgeCSS, make sure to whitelist the carousel CSS classes
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'
const slider = [
    {
        src: '/img/slider-1.png',
        alt: 'Slider 1',
    },
    {
        src: '/img/slider-2.png',
        alt: 'Slider 2',
    },
    {
        src: '/img/wm-09.png',
        alt: 'Slider 3',
    }
]

export default {
    data() {
        return {
            slider,
        }
    },
    components: {
        Carousel,
        Slide,
        Pagination,
        Navigation,
    },
}
</script>
