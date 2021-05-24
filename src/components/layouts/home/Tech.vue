<template>
    <div class="p-2 w-full mx-auto bg-white my-8">
        <h2
            id="subtituloTech"
            class="
                text-center
                py-3
                font-bold
                uppercase
                tracking-wider
                text-blue-700 text-3xl
            "
        >
            Tecnologías con las que trabajamos
        </h2>
    </div>
    <div
        class="min-w-screen bg-white flex items-center justify-center"
        :class="{
            'animate__animated animate__fadeInDown animate__delay-2s': visible,
        }"
    >
        <div class="max-w-7xl w-full mx-auto py-6 sm:px-6 lg:px-8">
            <div
                class="
                    flex flex-col
                    lg:flex-row
                    w-full
                    lg:space-x-2
                    space-y-2
                    lg:space-y-0
                    mb-2
                    lg:mb-4
                "
            >
                <div
                    class="w-full lg:w-1/5"
                    v-for="(item, i) in technologies.desing"
                    :key="i"
                >
                    <div
                        class="widget w-full p-4 rounded-lg bg-white border-l-4"
                        :class="item.bg"
                    >
                        <div class="flex items-center">
                            <div
                                class="
                                    icon
                                    w-14
                                    p-3.5
                                    text-white
                                    rounded-full
                                    mr-3
                                "
                                :class="item.border"
                            >
                                <img :src="item.src" :alt="item.title" />
                            </div>
                            <div class="flex flex-col justify-center">
                                <div class="text-lg">{{ item.title }}</div>
                                <div class="text-sm text-gray-400">
                                    {{ item.text }}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div
        class="min-w-screen bg-white flex items-center justify-center"
        :class="{
            'animate__animated animate__fadeInDown animate__delay-3s': visible,
        }"
    >
        <div class="max-w-7xl w-full mx-auto py-6 sm:px-6 lg:px-8">
            <div
                class="
                    flex flex-col
                    lg:flex-row
                    w-full
                    lg:space-x-2
                    space-y-2
                    lg:space-y-0
                    mb-2
                    lg:mb-4
                "
            >
                <div
                    class="w-full lg:w-1/5"
                    v-for="(item, i) in technologies.frontend"
                    :key="i"
                >
                    <div
                        class="widget w-full p-4 rounded-lg bg-white border-l-4"
                        :class="item.bg"
                    >
                        <div class="flex items-center">
                            <div
                                class="
                                    icon
                                    w-14
                                    p-3.5
                                    text-white
                                    rounded-full
                                    mr-3
                                "
                                :class="item.border"
                            >
                                <img :src="item.src" :alt="item.title" />
                            </div>
                            <div class="flex flex-col justify-center">
                                <div class="text-lg">{{ item.title }}</div>
                                <div class="text-sm text-gray-400">
                                    {{ item.text }}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div
        class="min-w-screen bg-white flex items-center justify-center"
        :class="{
            'animate__animated animate__fadeInDown animate__delay-4s': visible,
        }"
    >
        <div class="max-w-7xl w-full mx-auto py-6 sm:px-6 lg:px-8">
            <div
                class="
                    flex flex-col
                    lg:flex-row
                    w-full
                    lg:space-x-2
                    space-y-2
                    lg:space-y-0
                    mb-2
                    lg:mb-4
                "
            >
                <div
                    class="w-full lg:w-1/5"
                    v-for="(item, i) in technologies.backend"
                    :key="i"
                >
                    <div
                        class="widget w-full p-4 rounded-lg bg-white border-l-4"
                        :class="item.bg"
                    >
                        <div class="flex items-center">
                            <div
                                class="
                                    icon
                                    w-14
                                    p-3.5
                                    text-white
                                    rounded-full
                                    mr-3
                                "
                                :class="item.border"
                            >
                                <img :src="item.src" :alt="item.title" />
                            </div>
                            <div class="flex flex-col justify-center">
                                <div class="text-lg">{{ item.title }}</div>
                                <div class="text-sm text-gray-400">
                                    {{ item.text }}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
const technologies = {
    desing: [
        {
            title: 'PhotoShop',
            src: '/img/photoshop.png',
            text: 'Edición Fotográfica',
            bg: 'border-blue-400',
            border: 'bg-blue-400',
        },
        {
            title: 'Illustrator',
            src: '/img/illustrator.png',
            text: 'Diseño Vectorial',
            bg: 'border-yellow-400',
            border: ' bg-yellow-400',
        },
        {
            title: 'Adobe XD',
            src: '/img/xd.png',
            text: 'Prototipado Web',
            bg: 'border-purple-400',
            border: ' bg-purple-400',
        },
        {
            title: 'After Effects',
            src: '/img/after-effects.png',
            text: 'Edición Profesional de Vídeo',
            bg: 'border-purple-700',
            border: ' bg-purple-700',
        },
        {
            title: 'Camtasia',
            src: '/img/camtasia.png',
            text: 'Edición Rápida de Vídeo',
            bg: 'border-green-400',
            border: ' bg-green-400',
        },
    ],
    frontend: [
        {
            title: 'HTML',
            src: '/img/html.png',
            text: 'Maquetación Web',
            bg: 'border-red-400',
            border: 'bg-red-400',
        },
        {
            title: 'CSS3',
            src: '/img/css.png',
            text: 'Estilos Web',
            bg: 'border-blue-200',
            border: 'bg-blue-200',
        },
        {
            title: 'SASS',
            src: '/img/sass.png',
            text: 'Preprocesamiento de estilos',
            bg: 'border-pink-200',
            border: ' bg-pink-200',
        },
        {
            title: 'JavaScript',
            src: '/img/javascript.png',
            text: 'Funcionalidad Web',
            bg: 'border-yellow-500',
            border: ' bg-yellow-500',
        },
        {
            title: 'VueJs',
            src: '/img/vue.png',
            text: 'Componentes e interfaces web',
            bg: 'border-green-200',
            border: ' bg-green-200',
        },
    ],
    backend: [
        {
            title: 'MySQL',
            src: '/img/mysql.png',
            text: 'Gestión de Bases de Datos',
            bg: 'border-blue-100',
            border: ' bg-blue-100',
        },
        {
            title: 'PHP',
            src: '/img/php.png',
            text: 'Lógica Web en el servidor',
            bg: 'border-indigo-300',
            border: ' bg-indigo-300',
        },
        {
            title: 'Laravel',
            src: '/img/laravel.png',
            text: 'Framework PHP',
            bg: 'border-purple-100',
            border: ' bg-purple-100',
        },
        {
            title: 'Worpress',
            src: '/img/wordpress.png',
            text: 'CMS y gestión de Contenido',
            bg: 'border-gray-300',
            border: ' bg-gray-300',
        },
        {
            title: 'NodeJs',
            src: '/img/node.png',
            text: 'Lógica en el servidor con Js',
            bg: 'border-green-100',
            border: ' bg-green-100',
        },
    ],
}
export default {
    data() {
        return {
            technologies,
            visible: false,
        }
    },
    mounted() {
        window.addEventListener('scroll', this.mostrarParrafos)
    },
    methods: {
        mostrarParrafos() {
            const titulo = document.querySelector('#subtituloTech')
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
