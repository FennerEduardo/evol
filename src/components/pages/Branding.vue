<template>
    <Menu></Menu>
    <div class="font-sans bg-web">
        <div class="min-h-screen md:flex justify-center items-center">
            <div class="w-full md:w-1/3 px-10">
                <div class="text-center md:text-right font-semibold">
                    <h1
                        class="text-3xl md:text-5xl mt-8"
                        id="tituloDesarrolloWeb"
                    >
                        <span class="text-blue-700 tracking-wide"
                            >Branding e
                        </span>
                        <span>Imagen Corporativa</span>
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
                        Te ayudaremos en la construcción del concepto de tu
                        marca, <br />el desarrollo de tu logo, manual de marca y
                        el diseño de todo tu material Publicitario y papelería
                        para impresión
                    </p>
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
                        En Evol tenemos estos 3 maravillosos planes, que te
                        ayudarán a crear una imagen que posicione tu negocio y
                        genere gran recordación. <br />
                        Si tienes una necesidad especial distinta a los planes
                        disponibles nos puedes escribir
                        <a href="#" class="text-blue-700 font-bold"
                            >mediante este enlace.</a
                        >
                    </p>
                </div>
            </div>
            <div class="w-full md:w-2/3">
                <div
                    class="p-4 md:pt-24 flex flex-col md:flex-row mt-4"
                    v-if="parrafoVisible"
                    :class="{
                        'animate__animated animate__fadeInUp animate__slow':
                            visible,
                    }"
                >
                    <!-- Básico Card -->
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
                            <span class="text-3xl font-semibold">899</span>
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
                                    Diseño de
                                    <span class="text-black">Logo</span>
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
                                    3 Propuestas de
                                    <span class="text-black">diseño</span>
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
                                        >Construcción del
                                    </span>
                                    logo
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
                                    <span class="text-black">Paleta de</span>
                                    Colores
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
                                    <span class="text-black">Entrega en</span>
                                    PNG, JPG y Vectorial
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
                                    Manual de marca
                                    <span class="text-black">Básico</span>
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
                                    Diseño de Tarjetas
                                    <span class="text-black">Corporativas</span>
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
                                    Formato para
                                    <span class="text-black">Membrete</span>
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
                            <span class="text-3xl font-semibold">1.7</span>
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
                                    Manual de marca
                                    <span class="text-white"> Medio</span>
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
                                    3 Íconos Historias
                                    <span class="text-white">Destacadas</span>
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
                                    Brochure Digital
                                    <span class="text-white"
                                        >Sencillo máx. 8 pags.</span
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
                                    Opción de portada para
                                    <span class="text-white"> Facebook</span>
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
                            <span class="text-3xl font-semibold">2.6</span>
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
                                    Manual de marca
                                    <span class="text-black">Full</span>
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
                                        >Diseño firma de</span
                                    >
                                    correo electrónico
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
                                        >Brochure Digital
                                    </span>
                                    16 páginas
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
                                        >Análisis y asesoría</span
                                    >
                                    Redes Sociales
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
                                        >Capacitación uso</span
                                    >
                                    de marca
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
                                        >500 tarjetas profesionales</span
                                    >
                                    impresas
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
                                        >Acompañamiento de 15</span
                                    >
                                    días para implementación de marca
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
    <div class="">
        <h2
            class="
                text-center
                py-3
                font-bold
                uppercase
                tracking-wider
                text-blue-700 text-3xl
                my-10
            "
        >
            Manual de Marca
        </h2>
        <div
            class="
                md:relative
                w-full md:w-3/4
                mx-auto
                bg-blue-200
                text-gray-900 text-lg
                rounded
                shadow-lg
            "
        >
            <div class="md:relative w-full md:w-10/12 bg-blue-100 rounded">
               
                <div class="md:relative w-full md:w-10/12 bg-blue-50 rounded">
                    <h4
                        class="
                            md:absolute
                            top-1
                            right-1
                            text-2xl
                            p-4
                            text-blue-600
                            font-bold
                        "
                    >
                        Básico
                    </h4>
                    <ul class="p-4 ml-6">
                        <li>
                            <check-two-circle
                                class="h-4 w-4 inline my-2 mr-3 font-bold"
                            ></check-two-circle
                            >Marca
                        </li>
                        <li>
                            <check-two-circle
                                class="h-4 w-4 inline my-2 mr-3 font-bold"
                            ></check-two-circle
                            >Construcción y aplicación del logo
                        </li>
                        <li>
                            <check-two-circle
                                class="h-4 w-4 inline my-2 mr-3 font-bold"
                            ></check-two-circle
                            >Paleta de color
                        </li>
                        <li>
                            <check-two-circle
                                class="h-4 w-4 inline my-2 mr-3 font-bold"
                            ></check-two-circle
                            >Componente tipográfico
                        </li>
                        <li>
                            <check-two-circle
                                class="h-4 w-4 inline my-2 mr-3 font-bold"
                            ></check-two-circle
                            >Usos no correctos
                        </li>
                        <li>
                            <check-two-circle
                                class="h-4 w-4 inline my-2 mr-3 font-bold"
                            ></check-two-circle
                            >Papelería
                        </li>
                    </ul>
                </div>
                <h4
                    class="
                        md:absolute
                        top-1
                        right-1
                        text-2xl
                        p-4
                        text-blue-700
                        font-bold
                    "
                >
                    Startup
                </h4>
                <ul class="p-4 ml-6">
                    <li>
                        <check-two-circle
                            class="h-4 w-4 inline my-2 mr-3 font-bold"
                        ></check-two-circle
                        >Escala mínima de reproducción
                    </li>
                    <li>
                        <check-two-circle
                            class="h-4 w-4 inline my-2 mr-3 font-bold"
                        ></check-two-circle
                        >Elementos gráficos (patrones corporativos)
                    </li>
                    <li>
                        <check-two-circle
                            class="h-4 w-4 inline my-2 mr-3 font-bold"
                        ></check-two-circle
                        >Señalización
                    </li>
                </ul>
            </div>
             <h4
                    class="
                        md:absolute
                        top-1
                        right-1
                        text-2xl
                        p-4
                        text-blue-800
                        font-bold
                    "
                >
                    Corporativo
                </h4>
            <ul class="p-4 ml-6">
                <li>
                    <check-two-circle
                        class="h-4 w-4 inline my-2 mr-3 font-bold"
                    ></check-two-circle
                    >Merchandising
                </li>
                <li>
                    <check-two-circle
                        class="h-4 w-4 inline my-2 mr-3 font-bold"
                    ></check-two-circle>
                    Material BTL (Avisos Publicitarios, Posters, Vitrinas,
                    Banners, Vallas)
                </li>
                <li>
                    <check-two-circle
                        class="h-4 w-4 inline my-2 mr-3 font-bold"
                    ></check-two-circle>
                    Aplicaciones Online ( Website, social media, apariencia
                    Facebook, twitter, Instagram, plantilla presentación power
                    point, Créditos , Mosca audiovisual)
                </li>
            </ul>
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
            parrafoVisible: false,
        }
    },
    mounted() {
        setTimeout(() => {
            this.mostrarParrafos()
        }, 1000);
    
    },
    methods: {
        mostrarParrafos() {
            const titulo = document.querySelector('#tituloDesarrolloWeb')
            const parrafo = document.querySelector('#parrafoPlanes')
            const observer = new IntersectionObserver((entries) => {
                if (entries[0].isIntersecting) {
                    this.visible = true
                    if (this.visible) {
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
