<template>
    <div class="w-full bg-gray-100">
        <div class="container mx-auto p-5">
            <h3
                class="
                    text-center
                    md:py-3
                    font-bold
                    uppercase
                    tracking-wider
                    text-blue-700
                    md:text-3xl
                    my-10
                "
            >
                Nuestros Clientes y Aliados
            </h3>
            <carousel
                :items-to-show="1"
                :autoplay="3000"
                :wrap-around="true"
                class="w-full md:w-11/12 mx-auto pb-5"
            >
                <slide v-for="(slide, index) in slider" :key="index">
                    <div class="w-1/6">
                        <img class="w-full" :src="slide.src" :alt="slide.alt" />
                    </div>
                </slide>

                <template #addons>
                    <!-- <navigation /> -->
                    <!-- <pagination /> -->
                </template>
            </carousel>
        </div>
    </div>
</template>

<script>
// If you are using PurgeCSS, make sure to whitelist the carousel CSS classes
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'
const slider = [
    {
        src: '/img/litigius.png',
        alt: 'Litigius Estudio Juridico',
    },
    {
        src: '/img/drexstore.png',
        alt: 'Drexstore',
    },
    {
        src: '/img/mis-abogados.png',
        alt: 'Mis Abogados & Contables',
    },
    {
        src: '/img/aula-creativa.png',
        alt: 'Ediciones Aula Creativa',
    },
    {
        src: '/img/la-pinga.png',
        alt: 'La Pinga - Cerveza Artesanal',
    },
    {
        src: '/img/ziegel.png',
        alt: 'Constructora Ziegel',
    },
    {
        src: '/img/moji-shop.png',
        alt: 'Moji Shop',
    },
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
