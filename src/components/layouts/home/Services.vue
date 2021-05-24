<template>
    <div
        class="
            min-w-screen min-h-screen
            bg-blue-300
            flex
            items-center
            p-5
            lg:p-8
            overflow-hidden
            relative
        "
    >
        <div
            class="
                w-full
                max-w-8xl
                rounded
                bg-white
                shadow-xl
                p-8
                lg:p-16
                mx-auto
                text-gray-800
                relative
                md:text-left
            "
        >
            <div class="p-2 w-10/12 mx-auto">
                <h2
                    id="subtituloServices"
                    class="
                        text-center
                        py-3
                        font-bold
                        uppercase
                        tracking-wider
                        text-blue-700 text-3xl
                    "
                >
                    Nuestros Servicios
                </h2>
            </div>
            <div
                class="md:flex items-center -mx-10 my-3"
                v-for="(service, index) in services"
                :key="index"
                :class=" {'bg-gray-100' : service.position} "
            >
                <div
                    class="w-full md:w-1/3 px-10 mb-10 md:mb-0"
                    v-if="service.position"
                    
                >
                    <div
                        class="relative"
                        v-if="visible"
                        :class="{
                            'animate__animated animate__fadeInDown animate__delay-2s':
                                visible,
                        }"
                    >
                        <img
                            :src="service.src"
                            class="w-full relative z-10 left-3"
                            alt=""
                        />
                        <div
                            class="
                                border-4 border-blue-200
                                absolute
                                top-10
                                bottom-10
                                left-10
                                right-10
                                z-0
                            "
                        ></div>
                    </div>
                </div>
                <div class="w-full md:w-2/3 px-10" v-else>
                    <div
                        class="mb-10"
                        v-if="visible"
                        :class="{
                            'animate__animated animate__fadeInUp animate__delay-2s':
                                visible,
                        }"
                    >
                        <h3 class="font-bold uppercase text-2xl mb-5">
                            {{ service.title }}
                        </h3>
                        <p class="text-sm">
                            {{ service.p }}
                            <router-link
                                :to="service.cta.five"
                                class="
                                    opacity-50
                                    text-gray-900
                                    hover:opacity-100
                                    inline-block
                                    text-xs
                                    leading-none
                                    border-b border-gray-900
                                "
                            >
                                Ver más <i class="mdi mdi-arrow-right"></i
                            ></router-link>
                        </p>
                    </div>
                    <div>
                        <div class="inline-block align-bottom">
                            <button
                                class="
                                    bg-blue-700
                                    opacity-75
                                    hover:opacity-100
                                    text-white
                                    hover:text-gray-900
                                    rounded-full
                                    px-10
                                    py-2
                                    font-semibold
                                "
                            >
                                <i class="mdi mdi-cart -ml-2 mr-2"></i>
                                {{ service.cta.four }}
                            </button>
                        </div>
                        <div class="inline-block align-bottom ml-5">
                            <span
                                class="text-2xl leading-none align-baseline"
                                >{{ service.cta.one }}</span
                            >
                            <span
                                class="
                                    font-bold
                                    text-5xl
                                    leading-none
                                    align-baseline
                                "
                                >{{ service.cta.two }}</span
                            >
                            <span
                                class="text-2xl leading-none align-baseline"
                                >{{ service.cta.three }}</span
                            >
                        </div>
                    </div>
                </div>
                <div class="w-full md:w-2/3 px-10" v-if="service.position">
                    <div
                        class="mb-10"
                        v-if="visible"
                        :class="{
                            'animate__animated animate__fadeInUp animate__delay-2s':
                                visible,
                        }"
                    >
                        <h3 class="font-bold uppercase text-2xl mb-5">
                            {{ service.title }}
                        </h3>
                        <p class="text-sm">
                            {{ service.p }}
                            <router-link
                                :to="service.cta.five"
                                class="
                                    opacity-50
                                    text-gray-900
                                    hover:opacity-100
                                    inline-block
                                    text-xs
                                    leading-none
                                    border-b border-gray-900
                                "
                            >
                                Ver más <i class="mdi mdi-arrow-right"></i
                            ></router-link>
                        </p>
                    </div>
                    <div>
                        <div class="inline-block align-bottom mr-5">
                            <span
                                class="text-2xl leading-none align-baseline"
                                >{{ service.cta.one }}</span
                            >
                            <span
                                class="
                                    font-bold
                                    text-5xl
                                    leading-none
                                    align-baseline
                                "
                                >{{ service.cta.two }}</span
                            >
                            <span
                                class="text-2xl leading-none align-baseline"
                                >{{ service.cta.three }}</span
                            >
                        </div>
                        <div class="inline-block align-bottom">
                            <button
                                class="
                                    bg-blue-700
                                    opacity-75
                                    hover:opacity-100
                                    text-white
                                    hover:text-gray-900
                                    rounded-full
                                    px-10
                                    py-2
                                    font-semibold
                                "
                            >
                                <i class="mdi mdi-cart -ml-2 mr-2"></i>
                                {{ service.cta.four }}
                            </button>
                        </div>
                    </div>
                </div>
                <div class="w-full md:w-1/3 px-10 mb-10 md:mb-0" v-else>
                    <div
                        class="relative"
                        v-if="visible"
                        :class="{
                            'animate__animated animate__fadeInDown animate__delay-2s':
                                visible,
                        }"
                    >
                        <img
                            :src="service.src"
                            class="w-full relative z-10 left-3"
                            alt=""
                        />
                        <div
                            class="
                                border-4 border-blue-200
                                absolute
                                top-10
                                bottom-10
                                left-10
                                right-10
                                z-0
                            "
                        ></div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- BUY ME A BEER AND HELP SUPPORT OPEN-SOURCE RESOURCES
    <div
        class="flex items-end justify-end fixed bottom-0 right-0 mb-4 mr-4 z-10"
    >
        <div>
            <a
                title="Buy me a beer"
                href="https://www.buymeacoffee.com/scottwindon"
                target="_blank"
                class="
                    block
                    w-16
                    h-16
                    rounded-full
                    transition-all
                    shadow
                    hover:shadow-lg
                    transform
                    hover:scale-110
                    hover:rotate-12
                "
            >
                <img
                    class="
                        object-cover object-center
                        w-full
                        h-full
                        rounded-full
                    "
                    src="https://i.pinimg.com/originals/60/fd/e8/60fde811b6be57094e0abc69d9c2622a.jpg"
                />
            </a>
        </div>
    </div> -->
</template>
<script>
const services = [
    {
        src: '/img/wm-05.png',
        title: 'Desarrollo & Diseño Web',
        p: 'Orientamos las necesidades de tu empresa en la web, diseñamos tu sitio web siguiendo las tendencias del mercado y desarrollamos tu vitrina online con las tecnologías necesarias para conseguir tus objetivos',
        cta: {
            one: 'Planes de Web desde: $',
            two: '399',
            three: '.990',
            four: 'Cotizar Ahora',
            five: '/desarrollo-web',
        },
        position: true,
    },
    {
        src: '/img/wm-08.png',
        title: 'Branding e Imagen Corporativa',
        p: 'Somos Especialistas en desarrollar procesos gráfica que destaquen a tu marca frente a la competencia, sintetizamos tu negocio en una imagen eficiente y con alto nivel de recordación',
        cta: {
            one: 'Logos desde: $',
            two: '249',
            three: '.990',
            four: 'REDISEÑAR MI MARCA',
            five: '/branding-imagen-corporativa',
        },
        position: false,
    },
    {
        src: '/img/wm-09.png',
        title: 'Marketing & Redes Sociales',
        p: 'Crear una comunidad debe ser el objetivo de cualquier empresa hoy en día, sabemos la importancia  de mantener un vinculo social con tus usuarios y clientes, te brindamos las estrategias más acertadas para mejorar tus ventas mediante las redes sociales',
        cta: {
            one: 'Admin RRSS desde: $',
            two: '129',
            three: '.990',
            four: 'CONTRATAR ADMINISTRACIÓN',
            five: '/marketing-redes-sociales',
        },
        position: true,
    },
    {
        src: '/img/wm-05.png',
        title: 'E-Commerce & Tienda On-Line',
        p: 'Tener una tienda online es hoy en dia una de las vitrinas más importantes para cualquier empresas, diseñamos y desarrollamos tu espacio comercial en internet de acuerdo a tus necesidades y con presupuestos ajustados a tus ventas.',
        cta: {
            one: 'Tienda On-Line desde: $',
            two: '999',
            three: '.990',
            four: '¡QUIERO MI TIENDA YA!',
            five: '/e-commerce',
        },
        position: false,
    },
    {
        src: '/img/wm-08.png',
        title: 'Papelería & Material POP',
        p: 'Te ayudamos a poner tu marca en todo aquello que pueda ayudar a lograr un posicionamiento único en la mente de tus usuarios y clientes, adicionalmente te ayudamos en el diseño de membretes, facturas, tarjetas, botones y promocionales.',
        cta: {
            one: 'Diseño de tarjetas desde $',
            two: '19',
            three: '.990',
            four: 'COTIZAR',
            five: '/papeleria-material-pop',
        },
        position: true,
    },
]
export default {
    data() {
        return {
            services,
            visible: false,
        }
    },
    mounted() {
        window.addEventListener('scroll', this.mostrarParrafos)
    },
    methods: {
        mostrarParrafos() {
            const titulo = document.querySelector('#subtituloServices')
            if (titulo) {
                const observer = new IntersectionObserver((entries) => {
                    if (entries[0].isIntersecting) {
                        this.visible = true
                    }
                })
                observer.observe(titulo)
            }
        },
    },
}
</script>

<style>
@import url(https://cdnjs.cloudflare.com/ajax/libs/MaterialDesign-Webfont/5.3.45/css/materialdesignicons.min.css);
</style>
