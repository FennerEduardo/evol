<template>
    <Menu></Menu>
    <div class="font-sans bg-web">
        <div class="min-h-screen flex justify-center items-center">
            <div class="">
                <div class="text-center font-semibold">
                    <h1 class="text-5xl mt-8" id="tituloDesarrolloWeb">
                        <span class="text-blue-700 tracking-wide"
                            >Planes Web
                        </span>
                        <span>Flexibles</span>
                    </h1>
                    <p
                        class="
                            pt-6
                            text-xl text-gray-800
                            font-normal
                            w-full
                            px-8
                            md:w-full
                        "
                    >
                        En Evol tenemos diversas opciones a la hora de trabajar
                        la web<br />
                        para tu emprendimiento.
                    </p>
                    <p
                        class="
                            pt-6
                            text-xl text-blue-700
                            font-normal
                            w-full
                            px-8
                            md:w-full
                        "
                    >
                        Todos nuestros desarrollos web, está fundamentados en 4
                        pilares que les permiten ser competitivos y eficientes
                    </p>
                </div>
                <div class="flex items-center justify-center mt-14 my-8">
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
                            'animate__animated animate__fadeInDown animate__slow':
                                visible,
                        }"
                    >
                        <!-- 1 card -->
                        <div
                            v-for="(pilar, i) in pilares"
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
                                    py-4
                                    px-4
                                    shadow-xl
                                    right-4
                                    -top-6
                                "
                                :class="pilar.class"
                            >
                                <!-- svg  -->
                                <Phone v-if="i === 0"></Phone>
                                <HandsThumbsUp v-if="i === 1"></HandsThumbsUp>
                                <Google v-if="i === 2"></Google>
                                <PersonLines v-if="i === 3"></PersonLines>
                            </div>
                            <div class="mt-8">
                                <p class="text-xl font-semibold my-2">
                                    {{ pilar.title }}
                                </p>
                                <div
                                    class="flex space-x-2 text-gray-900 text-sm"
                                >
                                    <!-- svg  -->
                                    <check-two-circle
                                        class="h-5 w-5"
                                    ></check-two-circle>
                                    <p>{{ pilar.item1 }}</p>
                                </div>
                                <div
                                    class="
                                        flex
                                        space-x-2
                                        text-gray-900 text-sm
                                        my-3
                                    "
                                >
                                    <!-- svg  -->
                                    <check-two-circle
                                        class="h-5 w-5"
                                    ></check-two-circle>
                                    <p>{{ pilar.item2 }}</p>
                                </div>
                                <div
                                    class="
                                        flex
                                        space-x-2
                                        text-gray-900 text-sm
                                        my-3
                                    "
                                >
                                    <!-- svg  -->
                                    <check-two-circle
                                        class="h-5 w-5"
                                    ></check-two-circle>
                                    <p>{{ pilar.item3 }}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="">
                    <div class="text-center font-semibold">
                        <p
                            id="parrafoPlanes"
                            class="
                                pt-6
                                text-xl text-gray-800
                                font-normal
                                w-full
                                px-8
                                md:w-full
                            "
                        >
                            Te ofrecemos 3 opciones pre-configuradas para que
                            puedas iniciar con tu Web sin tanto papeleo.<br />
                            Sin embargo puedes pedirnos atención personalizada
                            <a href="#" class="text-blue-700 font-bold"> Aquí</a
                            >.
                        </p>
                    </div>
                </div>
                <div class="p-4 md:pt-24 flex flex-col md:flex-row mt-4"  v-if="parrafoVisible"
                        :class="{
                            'animate__animated animate__fadeInUp animate__delay-2s':
                                visible,
                        }">
                    <!-- Basic Card -->
                    <div
                        class="
                            w-300
                            md:w-96
                            p-8
                            bg-white
                            text-center
                            rounded-3xl
                            md:pr-16
                            shadow-xl
                        "
                        v-if="visible"
                        :class="{
                            'animate__animated animate__fadeInLeft animate__slow':
                                visible,
                        }"
                    >
                        <h2 class="text-black font-semibold text-2xl">
                            Básico
                        </h2>
                        <p class="pt-2 tracking-wide">
                            <span class="text-gray-400 align-top">$ </span>
                            <span class="text-3xl font-semibold">400</span>
                            <span class="text-gray-400 font-medium">mil</span>
                        </p>
                        <hr class="mt-4 border-1" />
                        <div class="pt-8">
                            <p class="font-semibold text-gray-400 text-left">
                                <span class="align-middle">
                                    <check-two-circle
                                        class="h-5 w-5 inline mb-2"
                                    ></check-two-circle>
                                </span>
                                <span class="pl-2">
                                    Landing Page
                                    <span class="text-black">Sencillo</span>
                                </span>
                            </p>
                            <p
                                class="
                                    font-semibold
                                    text-gray-400 text-left
                                    pt-5
                                "
                            >
                                <span class="align-middle">
                                    <check-two-circle
                                        class="h-5 w-5 inline mb-2"
                                    ></check-two-circle>
                                </span>
                                <span class="pl-2">
                                    Formulario de
                                    <span class="text-black">contacto</span>
                                </span>
                            </p>
                            <p
                                class="
                                    font-semibold
                                    text-gray-400 text-left
                                    pt-5
                                "
                            >
                                <span class="align-middle">
                                    <check-two-circle
                                        class="h-5 w-5 inline mb-2"
                                    ></check-two-circle>
                                </span>
                                <span class="pl-2">
                                    <span class="text-black">Hasta 5</span>
                                    Secciones
                                </span>
                            </p>
                            <p
                                class="
                                    font-semibold
                                    text-gray-400 text-left
                                    pt-5
                                "
                            >
                                <span class="align-middle">
                                    <check-two-circle
                                        class="h-5 w-5 inline mb-2"
                                    ></check-two-circle>
                                </span>
                                <span class="pl-2">
                                    <span class="text-black">Contenido</span>
                                    Animado
                                </span>
                            </p>
                            <p
                                class="
                                    font-semibold
                                    text-gray-400 text-left
                                    pt-5
                                "
                            >
                                <span class="align-middle">
                                    <check-two-circle
                                        class="h-5 w-5 inline mb-2"
                                    ></check-two-circle>
                                </span>
                                <span class="pl-2">
                                    <span class="text-black"
                                        >Diseño profesional</span
                                    >
                                    Corporativo
                                </span>
                            </p>
                            <p
                                class="
                                    font-semibold
                                    text-gray-400 text-left
                                    pt-5
                                "
                            >
                                <span class="align-middle">
                                    <check-two-circle
                                        class="h-5 w-5 inline mb-2"
                                    ></check-two-circle>
                                </span>
                                <span class="pl-2">
                                    Diseño en Prototipo
                                    <span class="text-black">Funcional</span>
                                </span>
                            </p>
                            <p
                                class="
                                    font-semibold
                                    text-gray-400 text-left
                                    pt-5
                                "
                            >
                                <span class="align-middle">
                                    <check-two-circle
                                        class="h-5 w-5 inline mb-2"
                                    ></check-two-circle>
                                </span>
                                <span class="pl-2">
                                    Hasta 10 botones
                                    <span class="text-black">de contacto</span>
                                </span>
                            </p>
                            <p
                                class="
                                    font-semibold
                                    text-gray-400 text-left
                                    pt-5
                                "
                            >
                                <span class="align-middle">
                                    <check-two-circle
                                        class="h-5 w-5 inline mb-2"
                                    ></check-two-circle>
                                </span>
                                <span class="pl-2">
                                    Sección de
                                    <span class="text-black"
                                        >testimoniales</span
                                    >
                                </span>
                            </p>

                            <a href="#" class="">
                                <p
                                    class="
                                        w-full
                                        py-4
                                        bg-blue-600
                                        mt-8
                                        rounded-xl
                                        text-white
                                    "
                                >
                                    <span class="font-medium"> Iniciar </span>
                                    <span class="align-middle">
                                        <check-two-circle
                                            class="h-5 w-5 inline mb-2"
                                        ></check-two-circle>
                                    </span>
                                </p>
                            </a>
                        </div>
                    </div>
                    <!-- StartUp Card -->
                    <div
                        class="
                            w-300
                            md:w-80
                            p-8
                            bg-gray-900
                            text-center
                            rounded-3xl
                            text-white
                            border-4
                            shadow-xl
                            border-white
                            transform
                            md:scale-125
                        "
                    >
                        <h2 class="text-white font-semibold text-2xl">
                            Startup
                        </h2>
                        <p class="pt-2 tracking-wide">
                            <span class="text-gray-400 align-top">$ </span>
                            <span class="text-3xl font-semibold">1.5</span>
                            <span class="text-gray-400 font-medium"
                                >millones</span
                            >
                        </p>
                        <hr class="mt-4 border-1 border-gray-600" />
                        <div class="pt-8">
                            <p
                                class="
                                    font-semibold
                                    text-gray-400 text-left
                                    pt-5
                                "
                            >
                                <span class="align-middle">
                                    <check-two-circle
                                        class="h-5 w-5 inline mb-2"
                                    ></check-two-circle>
                                </span>
                                <span class="pl-2">
                                    Todo el plan
                                    <span class="text-white">Básico, </span>
                                </span>
                            </p>

                            <p class="font-semibold text-gray-400 text-left">
                                <span class="pl-8 py-2 pt-4">
                                    <span class="text-white"> Más: </span>
                                </span>
                            </p>
                            <p class="font-semibold text-gray-400 text-left">
                                <span class="align-middle">
                                    <check-two-circle
                                        class="h-5 w-5 inline mb-2"
                                    ></check-two-circle>
                                </span>
                                <span class="pl-2">
                                    Base de datos
                                    <span class="text-white"> Normalizada</span>
                                </span>
                            </p>

                            <p
                                class="
                                    font-semibold
                                    text-gray-400 text-left
                                    pt-5
                                "
                            >
                                <span class="align-middle">
                                    <check-two-circle
                                        class="h-5 w-5 inline mb-2"
                                    ></check-two-circle>
                                </span>
                                <span class="pl-2">
                                    Hasta 20 secciones
                                    <span class="text-white">en el sitio</span>
                                </span>
                            </p>

                            <p
                                class="
                                    font-semibold
                                    text-gray-400 text-left
                                    pt-5
                                "
                            >
                                <span class="align-middle">
                                    <check-two-circle
                                        class="h-5 w-5 inline mb-2"
                                    ></check-two-circle>
                                </span>
                                <span class="pl-2">
                                    Login y registro
                                    <span class="text-white">de Usuarios</span>
                                </span>
                            </p>
                            <p
                                class="
                                    font-semibold
                                    text-gray-400 text-left
                                    pt-5
                                "
                            >
                                <span class="align-middle">
                                    <check-two-circle
                                        class="h-5 w-5 inline mb-2"
                                    ></check-two-circle>
                                </span>
                                <span class="pl-2">
                                    Orientación
                                    <span class="text-white"> Hosting</span>
                                </span>
                            </p>
                            <p
                                class="
                                    font-semibold
                                    text-gray-400 text-left
                                    pt-5
                                "
                            >
                                <span class="align-middle">
                                    <check-two-circle
                                        class="h-5 w-5 inline mb-2"
                                    ></check-two-circle>
                                </span>
                                <span class="pl-2">
                                    <span class="text-white"
                                        >Inclusión de
                                    </span>
                                    Chat Facebook
                                </span>
                            </p>
                            <p
                                class="
                                    font-semibold
                                    text-gray-400 text-left
                                    pt-5
                                "
                            >
                                <span class="align-middle">
                                    <check-two-circle
                                        class="h-5 w-5 inline mb-2"
                                    ></check-two-circle>
                                </span>
                                <span class="pl-2">
                                    <span class="text-white"
                                        >Contenedor de</span
                                    >
                                    Archivos
                                </span>
                            </p>

                            <a href="#" class="">
                                <p
                                    class="
                                        w-full
                                        py-4
                                        bg-blue-600
                                        mt-8
                                        rounded-xl
                                        text-white
                                    "
                                >
                                    <span class="font-medium">
                                        Seleccionar
                                    </span>
                                    <span class="align-middle">
                                        <check-two-circle
                                            class="h-5 w-5 inline mb-2"
                                        ></check-two-circle>
                                    </span>
                                </p>
                            </a>
                        </div>
                        <div class="absolute top-4 right-4">
                            <p
                                class="
                                    bg-blue-700
                                    font-semibold
                                    px-4
                                    py-1
                                    rounded-full
                                    uppercase
                                    text-xs
                                "
                            >
                                Popular
                            </p>
                        </div>
                    </div>
                    <!-- Enterprise Card -->
                    <div
                        class="
                            w-300
                            md:w-96
                            p-8
                            bg-white
                            text-center
                            rounded-3xl
                            md:pl-16
                            shadow-xl
                        "
                    >
                        <h2 class="text-black font-semibold text-2xl">
                            Corporativo
                        </h2>
                        <p class="pt-2 tracking-wide">
                            <span class="text-gray-400 align-top"
                                >Desde: $
                            </span>
                            <span class="text-3xl font-semibold">3.5</span>
                            <span class="text-gray-400 font-medium"
                                >millones</span
                            >
                        </p>
                        <hr class="mt-4 border-1" />
                        <div class="pt-8">
                            <p class="font-semibold text-gray-400 text-left">
                                <span class="align-middle">
                                    <check-two-circle
                                        class="h-5 w-5 inline mb-2"
                                    ></check-two-circle>
                                </span>
                                <span class="pl-2">
                                    Todo el plan
                                    <span class="text-black">Startup</span>
                                </span>
                            </p>
                            <p
                                class="
                                    font-semibold
                                    text-gray-400 text-left
                                    pt-5
                                "
                            >
                                <span class="align-middle">
                                    <check-two-circle
                                        class="h-5 w-5 inline mb-2"
                                    ></check-two-circle>
                                </span>
                                <span class="pl-2">
                                    Funcionalidades
                                    <span class="text-black"
                                        >Avanzadas, como:</span
                                    >
                                </span>
                            </p>
                            <p
                                class="
                                    font-semibold
                                    text-gray-400 text-left
                                    pt-5
                                "
                            >
                                <span class="align-middle">
                                    <check-two-circle
                                        class="h-5 w-5 inline mb-2"
                                    ></check-two-circle>
                                </span>
                                <span class="pl-2">
                                    <span class="text-black"
                                        >Roles, perfiles</span
                                    >
                                    y permisos
                                </span>
                            </p>
                            <p
                                class="
                                    font-semibold
                                    text-gray-400 text-left
                                    pt-5
                                "
                            >
                                <span class="align-middle">
                                    <check-two-circle
                                        class="h-5 w-5 inline mb-2"
                                    ></check-two-circle>
                                </span>
                                <span class="pl-2">
                                    <span class="text-black"
                                        >Creación de documentos</span
                                    >
                                    y archivos
                                </span>
                            </p>
                            <p
                                class="
                                    font-semibold
                                    text-gray-400 text-left
                                    pt-5
                                "
                            >
                                <span class="align-middle">
                                    <check-two-circle
                                        class="h-5 w-5 inline mb-2"
                                    ></check-two-circle>
                                </span>
                                <span class="pl-2">
                                    <span class="text-black">Envío de</span>
                                    email
                                </span>
                            </p>
                            <p
                                class="
                                    font-semibold
                                    text-gray-400 text-left
                                    pt-5
                                "
                            >
                                <span class="align-middle">
                                    <check-two-circle
                                        class="h-5 w-5 inline mb-2"
                                    ></check-two-circle>
                                </span>
                                <span class="pl-2">
                                    <span class="text-black">Informes</span>
                                    y control de Usuarios
                                </span>
                            </p>
                            <p
                                class="
                                    font-semibold
                                    text-gray-400 text-left
                                    pt-5
                                "
                            >
                                <span class="align-middle">
                                    <check-two-circle
                                        class="h-5 w-5 inline mb-2"
                                    ></check-two-circle>
                                </span>
                                <span class="pl-2">
                                    <span class="text-black">Doble factor</span>
                                    de autenticación
                                </span>
                            </p>
                            <p
                                class="
                                    font-semibold
                                    text-gray-400 text-left
                                    pt-5
                                "
                            >
                                <span class="align-middle">
                                    <check-two-circle
                                        class="h-5 w-5 inline mb-2"
                                    ></check-two-circle>
                                </span>
                                <span class="pl-2">
                                    <span class="text-black"
                                        >Módulos a la medida</span
                                    >
                                    de tu empresa
                                </span>
                            </p>

                            <a href="#" class="">
                                <p
                                    class="
                                        w-full
                                        py-4
                                        bg-blue-600
                                        mt-8
                                        rounded-xl
                                        text-white
                                    "
                                >
                                    <span class="font-medium">
                                        Avancemos juntos
                                    </span>
                                    <span class="align-middle">
                                        <check-two-circle
                                            class="h-5 w-5 inline mb-2"
                                        ></check-two-circle>
                                    </span>
                                </p>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
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
                        Tenemos gran experiencia desarrollando soluciones web a
                        la medida de tus necesidades.<br />
                        Entendemos la lógica de tu negocio y de la mano ponemos
                        tu sitio web, aplicación o plataforma para que se
                        convierta en un activo de tu empresa.
                    </p>
                </div>
            </div>
        </div>
    </div>
    <Testimonials></Testimonials>
    <Footer></Footer>
</template>
<script>
import Menu from '../layouts/Menu.vue'
import Footer from '../layouts/Footer.vue'
import CheckTwoCircle from '../icons/CheckTwoCircle.vue'
import Google from '../icons/Google.vue'
import CodeSlash from '../icons/CodeSlash.vue'
import PersonLines from '../icons/PersonLines.vue'
import HandsThumbsUp from '../icons/HandsThumbsUp.vue'
import Phone from '../icons/Phone.vue'
import Testimonials from '../miscellaneous/Testimonials.vue'

const pilares = [
    {
        title: 'Diseño Adaptable',
        item1: 'Versión móvil',
        item2: 'Tabletas',
        item3: 'Pantallas Full-HD',
        class: 'bg-pink-700',
    },
    {
        title: 'Conexión a RRSS',
        item1: 'Facebook',
        item2: 'Instagram',
        item3: 'YouTube',
        class: 'bg-blue-700',
    },
    {
        title: 'Google Analitycs',
        item1: 'Metricas',
        item2: 'Tráfico',
        item3: 'Audiencias',
        class: 'bg-indigo-700',
    },
    {
        title: 'Soporte Técnico',
        item1: 'Capacitación',
        item2: 'Acompañamiento',
        item3: 'Servicio al cliente',
        class: 'bg-green-700',
    },
]

export default {
    components: {
        Menu,
        Footer,
        CheckTwoCircle,
        Google,
        CodeSlash,
        PersonLines,
        HandsThumbsUp,
        Phone,
        Testimonials,
    },
    data() {
        return {
            pilares,
            visible: false,
            parrafoVisible: false
        }
    },
    mounted() {
        window.addEventListener('scroll', this.mostrarParrafos)
    },
    methods: {
        mostrarParrafos() {
            const titulo = document.querySelector('#tituloDesarrolloWeb')
            const parrafo = document.querySelector('#parrafoPlanes')
            const observer = new IntersectionObserver((entries) => {
                if (entries[0].isIntersecting) {
                    this.visible = true
                    if(this.visible){
                        this.parrafoVisible = true
                    }
                }
            })
            if (titulo) {
                observer.observe(titulo)
            }
            if (parrafo) {
                observer.observe(parrafo)
            }
        },
    },
}
</script>
