<template>
    <div class="w-full bg-two">
        <div class="p-2 w-10/12 mx-auto bg-white">
            <h2
                class="
                    text-center
                    py-3
                    font-bold
                    uppercase
                    tracking-wider
                    text-blue-700 text-3xl
                    mt-10
                "
                v-if="visible"
                :class="{
                    'animate__animated animate__fadeInDown animate__faster':
                        visible,
                }"
            >
                Conoce más sobre nosotros
            </h2>
            <div class="grid grid-cols-1 md:grid-cols-2 bg-white">
                <p
                    class="md:p-16 text-justify text-gray-900 text-lg"
                    v-if="visible"
                    :class="{
                        'animate__animated animate__fadeInUp animate__fast':
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
                    v-if="visible"
                    :class="{
                        'animate__animated animate__fadeInUp animate__fast':
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
            <h3
                id="subtituloUno"
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
                ¿Qué nos <span class="text-gray-600">identifica?</span>
            </h3>
            <div class="grid grid-cols-1 md:grid-cols-3 bg-white">
                <div
                    class="md:p-16 text-center text-gray-900 text-lg"
                    v-if="visible2"
                    :class="{
                        'animate__animated animate__fadeInUp animate__fast':
                            visible2,
                    }"
                >
                    <Puzzle
                        class="block mx-auto h-20 w-20 text-blue-900"
                    ></Puzzle>

                    <h4
                        class="
                            text-blue-700 text-2xl text-center
                            font-bold
                            my-4
                        "
                    >
                        Acompañamiento
                    </h4>
                    <p>
                        Ejecutamos un plan de asistencia y seguimiento continuo
                        en el desarrollo de los proyectos, <br />
                        generando un lazo de confianza y apoyo incesante a las
                        inquietudes y opiniones de nuestros clientes a lo largo
                        del progreso y resultado del proceso.
                    </p>
                </div>
                <div
                    class="md:p-16 text-center text-gray-900 text-lg"
                    v-if="visible2"
                    :class="{
                        'animate__animated animate__fadeInUp animate__fast':
                            visible2,
                    }"
                >
                    <Watch
                        class="block mx-auto h-20 w-20 text-blue-900"
                    ></Watch>
                    <h4
                        class="
                            text-blue-700 text-2xl text-center
                            font-bold
                            my-4
                        "
                    >
                        Responsabilidad
                    </h4>
                    <p>
                        Asumimos con objetividad y compromiso cada uno de los
                        retos que conllevan a la implementación de recursividad
                        y mejora continua. <br />
                        El cumplimiento de nuestra palabra y/o acuerdo generado
                        con los clientes nos permite destacarnos dentro del
                        mercado
                    </p>
                </div>
                <div
                    class="md:p-16 text-center text-gray-900 text-lg"
                    v-if="visible2"
                    :class="{
                        'animate__animated animate__fadeInUp animate__fast':
                            visible2,
                    }"
                >
                    <ClipboardCheck
                        class="block mx-auto h-20 w-20 text-blue-900"
                    ></ClipboardCheck>
                    <h4
                        class="
                            text-blue-700 text-2xl text-center
                            font-bold
                            my-4
                        "
                    >
                        Calidad
                    </h4>
                    <p>
                        El excelente desempeño en el desarrolo de cada producto
                        y servicio brindado proporciona características únicas
                        para cada cliente, <br />
                        ya que en el proceso de creación y diseño se materializa
                        la idea a un nivel memorable y satisfactorio.
                    </p>
                </div>
            </div>
            <div class="mt-10 w-10/12 mx-auto grid grid-cols-1 md:grid-cols-4" id="partners">
                <div v-for="(partner, index) in team" :key="index">
                    <img
                        :src="partner.src"
                        :alt="partner.alt"
                        class="block rounded-full h-40 w-40 mx-auto shadow-lg"
                    />
                    <p
                        class="
                            font-bold
                            text-center text-blue-900 text-xl
                            mt-10
                        "
                    >
                        {{ partner.alt }}
                    </p>
                    <p class="text-center text-gray-700 mb-10">
                        {{ partner.title }}
                    </p>
                </div>
            </div>
            <Tech></Tech>
            <div class="grid grid-cols-1 md:grid-cols-2 bg-white">
                <div class="md:p-16 text-center text-gray-900 text-lg">
                    <Bullseye
                        class="block mx-auto h-20 w-20 text-blue-900"
                    ></Bullseye>
                    <h4
                        class="
                            text-blue-700 text-2xl text-center
                            font-bold
                            my-4
                        "
                    >
                        ¿A dónde llegaremos?
                    </h4>
                    <p>
                        Ser un referente en sector de desarrollo web y diseño de
                        marca en el país, acompañando en su proceso de
                        posicionamiento digital y monetario a todo tipo de
                        emprendimiento en crecimiento para el año 2026.
                    </p>
                </div>
                <div class="md:p-16 text-center text-gray-900 text-lg">
                    <CompassFill
                        class="block mx-auto h-20 w-20 text-blue-900"
                    ></CompassFill>
                    <h4
                        class="
                            text-blue-700 text-2xl text-center
                            font-bold
                            my-4
                        "
                    >
                        ¿Cómo lo haremos?
                    </h4>
                    <p>
                        Diariamente seguiremos en constante actualización de
                        herramientas tecnológicas físicas y digitales necesarias
                        para la formación y aprendizaje continuo de las
                        tendencias que marcan y llegan al cliente de manera
                        asertiva, lo que nos llevará al éxito de nuestra visión.
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import Puzzle from '../../icons/Puzzle.vue'
import Watch from '../../icons/Watch.vue'
import ClipboardCheck from '../../icons/ClipboardCheck.vue'
import Bullseye from '../../icons/Bullseye.vue'
import CompassFill from '../../icons/CompassFill.vue'
import Tech from '../home/Tech.vue'

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
    components: {
        Puzzle,
        Watch,
        ClipboardCheck,
        Tech,
        Bullseye,
        CompassFill,
    },
    data() {
        return {
            team,
            visible: false,
            visible2: false,
        }
    },
    mounted() {
        this.animacionInicial()
        window.addEventListener('scroll', this.animaciones)
    },
    methods: {
        animacionInicial() {
            setTimeout(() => {
                this.visible = true
            }, 1000)
        },
        animaciones() {
            const subtituloUno = document.querySelector('#subtituloUno')
            const partners = document.querySelector('#partners')
            const observer = new IntersectionObserver((entries) => {              
                if (entries[0].isIntersecting) {
                    this.visible2 = true
                }
            })
            observer.observe(subtituloUno) 
        },
    },
}
</script>
