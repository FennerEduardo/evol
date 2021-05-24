<template>
    <div class="w-full bg-gray-100">
        <div class="p-2 w-10/12 mx-auto">
            <h2
                id="subtituloEquipo"
                class="
                    text-center
                    py-3
                    font-bold
                    uppercase
                    tracking-wider
                    text-blue-700 text-3xl
                    mt-10
                "
            >
                Nuestro Equipo
            </h2>
            <div class="grid grid-cols-1 md:grid-cols-2">
                <p
                    class="md:p-16 text-justify text-gray-900 text-lg"
                    v-if="visible"
                    :class="{
                        'animate__animated animate__fadeInLeft animate__slow':
                            visible,
                    }"
                >
                    Somos un equipo que combina la experiencia y la creatividad
                    para encontrar soluciones innovadoras que ayudan a nuestros
                    clientes a mejorar su presencia digital. <br />
                    <br />Estamos al día con todas las tendencias del mercado en
                    diseño, marketing y desarrollo. Hoy la tecnología y el
                    mercado digital evolucionan rápidamente, por lo que estar en
                    Internet es una necesidad para cualquier empresa que quiera
                    crecer.
                </p>
                <p
                    class="md:p-16 text-justify text-gray-900 text-lg"
                    id="parrafoDosEquipo"
                    v-if="visible"
                    :class="{
                        'animate__animated animate__fadeInRight animate__slow':
                            visible,
                    }"
                >
                    Desde 2018 entramos en el mercado y hemos logrado afianzar
                    nuestro crecimiento, con los resultados obtenidos a través
                    de un trabajo responsable y enfocado en el éxito de nuestros
                    clientes.
                    <br />
                    <br />
                    Somos emprendedores por naturaleza y entendemos los desafíos
                    que trae la independencia por eso ofrecemos apoyo integral
                    en todos nuestros proyectos.
                </p>
            </div>
            <div class="mt-10 w-10/12 mx-auto grid grid-cols-1 md:grid-cols-4">
                <div v-for="(partner, index) in team" :key="index">
                    <img
                        :src="partner.src"
                        :alt="partner.alt"
                        class="block rounded-full h-40 w-40 mx-auto shadow-lg"
                        v-if="visible"
                        :class="{
                            'animate__animated animate__fadeInUp animate__delay-2s':
                                visible,
                        }"
                    />
                    <p
                        class="
                            font-bold
                            text-center text-blue-900 text-xl
                            mt-10
                        "
                        v-if="visible"
                        :class="{
                            'animate__animated animate__fadeInDown animate__delay-3s':
                                visible,
                        }"
                    >
                        {{ partner.alt }}
                    </p>
                    <p
                        class="text-center text-gray-700 mb-10"
                        v-if="visible"
                        :class="{
                            'animate__animated animate__fadeInUp animate__delay-4s':
                                visible,
                        }"
                    >
                        {{ partner.title }}
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
const team = [
    {
        src: '/img/alison.jpg',
        alt: 'Alison Lizarazo',
        title: 'Diseñadora Gráfica',
    },
    {
        src: '/img/lheo.jpg',
        alt: 'Leonardo Hernández',
        title: 'Desarrollador Web',
    },
    {
        src: '/img/lina.jpg',
        alt: 'Lina Peña',
        title: 'Directora de Marketing',
    },
    {
        src: '/img/fenner.jpg',
        alt: 'Fenner González',
        title: 'Desarrollador Web',
    },
]
export default {
    data() {
        return {
            team,
            visible: false,
        }
    },
    mounted() {
        window.addEventListener('scroll', this.mostrarParrafos)
    },
    methods: {
        mostrarParrafos() {
            const titulo = document.querySelector('#subtituloEquipo')
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
