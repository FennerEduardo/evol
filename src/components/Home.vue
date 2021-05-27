<template>
    <header class="bg-header-home">
        <Menu></Menu>
        <div class="grid grid-cols-1 md:grid-cols-3 w-10/12 mx-auto">
            <div class="col-span-2">
                <div
                    id="up"
                    class="
                        md:py-40
                        bg-center bg-fixed bg-no-repeat bg-center bg-cover
                        my-16
                        relative
                    "
                >
                    <!-- Overlay Background + Center Control -->
                    <div
                        class="
                            h-1/2
                            md:min-h-full                            
                            flex
                            items-center
                            justify-center
                        "
                        style=""
                    >
                        <div class="mx-2 text-center">
                            <h1
                                class="
                                    text-blue-700
                                    font-extrabold
                                    text-2xl
                                    xs:text-3xl
                                    md:text-4xl
                                "
                            >
                                <span class="text-blue-900">El socio </span>
                                Perfecto para
                            </h1>
                            <h2
                                class="
                                    text-blue-700
                                    font-extrabold
                                    text-2xl
                                    xs:text-3xl
                                    md:text-4xl
                                    leading-tight
                                "
                            >
                                Iniciar,
                                <span class="text-blue-900">Impulsar</span> o
                                mejorar
                                <span class="text-blue-900">tu imagen</span>
                                Digital
                            </h2>
                            <div class="inline-flex">
                                <button
                                    class="
                                        p-2
                                        my-5
                                        mx-2
                                        bg-indigo-700
                                        hover:bg-indigo-800
                                        font-bold
                                        text-white
                                        rounded
                                        border-2 border-transparent
                                        hover:border-indigo-800
                                        shadow-md
                                        transition
                                        duration-500
                                        md:text-xl
                                    "
                                >
                                    ¡Iniciemos!
                                </button>
                                <a href="#about"
                                    ><button
                                        class="
                                            p-2
                                            my-5
                                            mx-2
                                            bg-transparent
                                            border-2
                                            bg-indigo-200 bg-opacity-75
                                            hover:bg-opacity-100
                                            border-indigo-700
                                            rounded
                                            hover:border-indigo-800
                                            font-bold
                                            text-indigo-800
                                            shadow-md
                                            transition
                                            duration-500
                                            md:text-lg
                                        "
                                    >
                                        Quiero Conocerlos Mejor
                                    </button></a
                                >
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="md:py-40">
                <Carousel></Carousel>
            </div>
        </div>
    </header>
    <Services></Services>
    <Team></Team>
    <Tech></Tech>
    <SliderClients></SliderClients>
    <Testimonials></Testimonials>
    <Footer></Footer>
</template>
<script>
import Menu from './layouts/Menu.vue'
import Footer from './layouts/Footer.vue'
import Carousel from './miscellaneous/Carousel.vue'
import SliderClients from './layouts/home/SliderClients.vue'
import Team from './layouts/home/Team.vue'
import Services from './layouts/home/Services.vue'
import Tech from './layouts/home/Tech.vue'
import Testimonials from './miscellaneous/Testimonials.vue'
export default {
    components: {
        Menu,
        Footer,
        Carousel,
        SliderClients,
        Team, 
        Services,
        Tech,
        Testimonials
    },
}
</script>
