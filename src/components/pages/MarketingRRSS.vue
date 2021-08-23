<template>
    <Menu></Menu>
    <main class="bg-web pt-4">
        <div class="text-center font-semibold">
            <div class="w-1/4 md:w-1/6 mx-auto">
                <img
                    class="w-full"
                    src="/img/slider-2.png"
                    alt="Redes sociales"
                />
            </div>
            <h1 class="text-5xl">
                <span class="text-blue-700 tracking-wide">Planes RRSS </span>
                <span>Flexibles</span>
            </h1>
            <p
                class="
                    pt-6
                    text-xl text-gray-700
                    font-normal
                    w-full
                    px-8
                    md:w-full
                "
            >
                Selecciona tu plan y comencemos a trabajar en tu emprendimiento.
            </p>
        </div>
        <div class="flex items-center justify-center mt-10">
            <div
                class="
                    grid grid-cols-1
                    gap-6
                    sm:grid-cols-2
                    md:grid-cols-2
                    lg:grid-cols-4
                    xl:grid-cols-4
                "
                v-if="visible"
                :class="{
                    'animate__animated animate__fadeInUp animate__slow':
                        visible,
                }"
            >
                <!-- 1 card -->
                <div
                    v-for="(plan, i) in planes"
                    :key="i"
                    class="
                        relative
                        bg-white
                        py-6
                        px-6
                        rounded-3xl
                        w-64
                        my-4
                        shadow-xl
                    "
                >
                    <div
                        class="
                            text-white
                            flex
                            items-center
                            absolute
                            rounded-full
                            py-5
                            px-5
                            shadow-xl
                            left-4
                            -top-6
                        "
                        :class="plan.color"
                    >
                        <div class="h-8 w-8 text-center font-bold text-2xl">
                            {{ i + 1 }}
                        </div>
                    </div>
                    <div class="mt-8">
                        <p class="text-xl font-semibold my-2 text-blue-700">
                            {{ plan.title }}
                        </p>
                        <div
                            class="flex space-x-2 text-gray-600 text-sm"
                            v-for="(item, index) in plan.items"
                            :key="index"
                        >
                            <!-- svg  -->
                            <CheckTwoCircle />
                            <p>{{ item }}</p>
                        </div>
                        <div class="border-t-2 my-6"></div>
                        <p class="pt-2 tracking-wide text-center">
                            <span class="text-gray-400 align-top">$ </span>
                            <span class="text-4xl font-bold text-blue-700">{{
                                plan.prize
                            }}</span>
                            <span class="text-gray-400 font-medium">mil</span>
                        </p>
                        <a href="#" class="">
                            <p
                                class="
                                    w-full
                                    py-4
                                    bg-blue-600
                                    mt-8
                                    rounded-xl
                                    text-white text-center
                                "
                            >
                                <span class="font-medium"> </span>
                                <span class="align-middle">
                                    <check-two-circle
                                        class="h-5 w-5 inline mb-2"
                                    ></check-two-circle>
                                    Seleleccionar
                                </span>
                            </p>
                        </a>
                    </div>
                </div>
            </div>
        </div>
        <div class="text-center font-semibold">
            <h2 class="text-4xl py-6">
                <span class="text-blue-700 tracking-wide">Plantillas creativas </span>
                <span>para tu negocio</span>
            </h2>
        </div>
        <div class="font-sans bg-gray-100">
        <div class="flex justify-center items-center">
            <div class="my-20 w-3/4">
                <div class="text-center font-semibold">
                    <p
                        class="
                            pt-6
                            text-xl text-gray-900
                            font-normal
                            w-full
                            px-8
                            md:w-full
                        "
                    >
                        Tenemos más de 6 años de experiencia creando marcas, dando identidad a nuestros clientes a través de la conjución de elementos únicos en una pieza gráfica relevante.
                    </p>
                </div>
            </div>
        </div>
    </div>
    </main>
    <Testimonials></Testimonials>
    <Footer></Footer>
</template>
<script>
import Menu from '../layouts/Menu.vue'
import Footer from '../layouts/Footer.vue'
import CheckTwoCircle from '../icons/CheckTwoCircle.vue'
import Testimonials from '../miscellaneous/Testimonials.vue'

const planes = [
    {
        title: 'PARA INICIAR',
        icon: '',
        items: [
            'Asesoria Inicial',
            '1 Red Social',
            '8 Imágenes para el feed',
            '4 Imágenes para historias',
            '3 Highlights',
            '1 Video de 60 segundos, sin voz',
        ],
        prize: '349',
        color: 'bg-pink-500',
    },
    {
        title: 'EMPRESAS PEQUEÑAS',
        icon: '',
        items: [
            '2 Redes Sociales',
            '12 Imágenes para el feed',
            '6 Imágenes para historias',
            '3 Highlights',
            '2 Video de 60 seg, sin voz',
            '1 Portada o video para Facebook',
        ],
        prize: '499',
        color: 'bg-green-500',
    },
    {
        title: 'EMPRESAS MEDIANAS',
        icon: '',
        items: [
            '2 Redes Sociales',
            '20 Imágenes para el feed',
            '10 Imágenes para historias',
            '4 Highlights',
            '3 Video de 60 seg, sin voz',
            '1 Portada o video para Facebook',
        ],
        prize: '799',
        color: 'bg-blue-500',
    },
    {
        title: 'EMPRESAS GRANDES',
        icon: '',
        items: [
            '3 Redes Sociales',
            '30 Imágenes para el feed',
            '15 Imágenes para historias',
            '5 Highlights',
            '4 Videos de 60 seg, sin voz',
            '2 Portada o video para Facebook',
        ],
        prize: '999',
        color: 'bg-yellow-500',
    },
]

export default {
    components: {
        Menu,
        Footer,
        CheckTwoCircle,
        Testimonials
    },
    data() {
        return {
            planes,
            visible: false,
        }
    },
    mounted() {
        setTimeout(() => {
            this.visible = true
        }, 1000)
    },
}
</script>
