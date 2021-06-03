<!-- This example requires Tailwind CSS v2.0+ -->
<template>
    <Popover open="true" class="relative bg-transparent">
        <div class="max-w-7xl md:max-w-full mx-auto  sm:px-6 md:px-20">
            <div
                class="
                    flex
                    justify-between
                    items-center
                    border-b-2 border-gray-100
                    py-2
                    md:py-6
                    md:justify-start
                    md:space-x-10
                "
            >
                <div class="flex justify-start lg:w-0 lg:flex-1">
                    <router-link :to="'/'">
                        <span class="sr-only">Evol</span>
                        <img
                            class="ml-2 h-8 w-auto sm:h-10"
                            src="/img/logotexto.png"
                            alt=""
                        />
                    </router-link>
                </div>
                <div class="mr-2 -my-2 md:hidden">
                    <PopoverButton
                        class="
                            bg-transparent
                            rounded-md
                            p-2
                            inline-flex
                            items-center
                            justify-center
                            text-gray-400
                            hover:text-gray-500
                            hover:bg-gray-100
                            focus:outline-none
                            focus:ring-2 focus:ring-inset focus:ring-blue-500
                        "
                    >
                        <span class="sr-only">Abrir menú</span>
                       
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            class="
                                bi bi-list
                                h-12
                                w-12
                                text-blue-700                                
                            "
                            viewBox="0 0 16 16"
                        >
                            <path
                                fill-rule="evenodd"
                                d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
                            />
                        </svg>
                    </PopoverButton>
                </div>
                <PopoverGroup as="nav" class="hidden md:flex space-x-10 justify-end">
                    <Popover class="relative" v-slot="{ open }">
                        <PopoverButton
                            :class="[
                                open ? 'text-gray-900' : 'text-gray-500',
                                'group bg-transparent rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-900',
                            ]"
                        >
                            <span>Servicios</span>
                            <chevron-down></chevron-down>
                        </PopoverButton>

                        <transition
                            enter-active-class="transition ease-out duration-200"
                            enter-from-class="opacity-0 translate-y-1"
                            enter-to-class="opacity-100 translate-y-0"
                            leave-active-class="transition ease-in duration-150"
                            leave-from-class="opacity-100 translate-y-0"
                            leave-to-class="opacity-0 translate-y-1"
                        >
                            <PopoverPanel
                                class="
                                    absolute
                                    z-10
                                    -ml-4
                                    mt-3
                                    transform
                                    px-2
                                    w-screen
                                    max-w-md
                                    sm:px-0
                                    lg:ml-0
                                    lg:left-1/2
                                    lg:-translate-x-1/2
                                "
                            >
                                <div
                                    class="
                                        rounded-lg
                                        shadow-lg
                                        ring-1 ring-black ring-opacity-5
                                        overflow-hidden
                                    "
                                >
                                    <div
                                        class="
                                            relative
                                            grid
                                            gap-6
                                            bg-white
                                            px-5
                                            py-6
                                            sm:gap-8
                                            sm:p-8
                                        "
                                    >
                                        <router-link
                                            v-for="item in servicios"
                                            :key="item.name"
                                            :to="item.href"
                                            class="
                                                -m-3
                                                p-3
                                                flex
                                                items-start
                                                rounded-lg
                                                hover:bg-gray-50
                                            "
                                        >
                                            <component
                                                :is="item.icon"
                                                class="
                                                    flex-shrink-0
                                                    h-6
                                                    w-6
                                                    text-blue-900
                                                "
                                                aria-hidden="true"
                                            />
                                            <div class="ml-4">
                                                <p
                                                    class="
                                                        text-base
                                                        font-medium
                                                        text-gray-900
                                                    "
                                                >
                                                    {{ item.name }}
                                                </p>
                                                <p
                                                    class="
                                                        mt-1
                                                        text-sm text-gray-500
                                                    "
                                                >
                                                    {{ item.description }}
                                                </p>
                                            </div>
                                        </router-link>
                                    </div>
                                    <div
                                        class="
                                            px-5
                                            py-5
                                            bg-gray-50
                                            space-y-6
                                            sm:flex
                                            sm:space-y-0 sm:space-x-10
                                            sm:px-8
                                        "
                                    >
                                        <div
                                            v-for="item in callsToAction"
                                            :key="item.name"
                                            class="flow-root"
                                        >
                                            <a
                                                :href="item.href"
                                                class="
                                                    -m-3
                                                    p-3
                                                    flex
                                                    items-center
                                                    rounded-md
                                                    text-base
                                                    font-medium
                                                    text-gray-900
                                                    hover:bg-gray-100
                                                "
                                            >
                                                <component
                                                    :is="item.icon"
                                                    class="
                                                        flex-shrink-0
                                                        h-6
                                                        w-6
                                                        text-gray-400
                                                    "
                                                    aria-hidden="true"
                                                />
                                                <span class="ml-3">{{
                                                    item.name
                                                }}</span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </PopoverPanel>
                        </transition>
                    </Popover>

                    <router-link
                        :to="{ name: 'Nosotros' }"
                        class="
                            text-base
                            font-medium
                            text-gray-500
                            hover:text-gray-900
                        "
                    >
                        Nosotros
                    </router-link>
                    <!-- <router-link
                        :to="'/recursos'"
                        class="
                            text-base
                            font-medium
                            text-gray-500
                            hover:text-gray-900
                        "
                    >
                        Recursos
                    </router-link> -->

                    <Popover class="relative" v-slot="{ open }">
                        <PopoverButton
                            :class="[
                                open ? 'text-gray-900' : 'text-gray-500',
                                'group rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500',
                            ]"
                        >
                            <span>Contacto</span>
                            <chevron-down></chevron-down>
                        </PopoverButton>

                        <transition
                            enter-active-class="transition ease-out duration-200"
                            enter-from-class="opacity-0 translate-y-1"
                            enter-to-class="opacity-100 translate-y-0"
                            leave-active-class="transition ease-in duration-150"
                            leave-from-class="opacity-100 translate-y-0"
                            leave-to-class="opacity-0 translate-y-1"
                        >
                            <PopoverPanel
                                class="
                                    absolute
                                    z-20
                                    -left-3/4
                                    transform
                                    -translate-x-1/2
                                    mt-3
                                    px-2
                                    w-screen
                                    max-w-md
                                    sm:px-0
                                "
                            >
                                <div
                                    class="
                                        rounded-lg
                                        shadow-lg
                                        ring-1 ring-black ring-opacity-5
                                        overflow-hidden
                                    "
                                >
                                    <div
                                        class="
                                            relative
                                            grid
                                            gap-6
                                            bg-white
                                            px-5
                                            py-6
                                            sm:gap-8
                                            sm:p-8
                                        "
                                    >
                                        <a
                                            v-for="item in resources"
                                            :key="item.name"
                                            :href="item.href"
                                            class="
                                                -m-3
                                                p-3
                                                flex
                                                items-start
                                                rounded-lg
                                                hover:bg-gray-50
                                            "
                                        >
                                            <component
                                                :is="item.icon"
                                                class="
                                                    flex-shrink-0
                                                    h-6
                                                    w-6
                                                    text-blue-600
                                                "
                                                aria-hidden="true"
                                            />
                                            <div class="ml-4">
                                                <p
                                                    class="
                                                        text-base
                                                        font-medium
                                                        text-gray-900
                                                    "
                                                >
                                                    {{ item.name }}
                                                </p>
                                                <p
                                                    class="
                                                        mt-1
                                                        text-sm text-gray-500
                                                    "
                                                >
                                                    {{ item.description }}
                                                </p>
                                            </div>
                                        </a>
                                    </div>
                                    <!-- <div
                                        class="
                                            px-5 
                                            py-5
                                            bg-gray-50
                                            sm:px-8
                                            sm:py-8
                                        "
                                    >
                                      <div>
                                            <h3
                                                class="
                                                    text-sm
                                                    tracking-wide
                                                    font-medium
                                                    text-gray-500
                                                    uppercase
                                                "
                                            >
                                                Recent Posts
                                            </h3>
                                            <ul class="mt-4 space-y-4">
                                                <li
                                                    v-for="post in recentPosts"
                                                    :key="post.id"
                                                    class="text-base truncate"
                                                >
                                                    <a
                                                        :href="post.href"
                                                        class="
                                                            font-medium
                                                            text-gray-900
                                                            hover:text-gray-700
                                                        "
                                                    >
                                                        {{ post.name }}
                                                    </a>
                                                </li>
                                            </ul>
                                        </div> 
                                         <div class="mt-5 text-sm">
                                            <a
                                                href="#"
                                                class="
                                                    font-medium
                                                    text-blue-600
                                                    hover:text-blue-500
                                                "
                                            >
                                                View all posts
                                                <span aria-hidden="true"
                                                    >&rarr;</span
                                                ></a
                                            >
                                        </div> 
                                    </div> -->
                                </div>
                            </PopoverPanel>
                        </transition>
                    </Popover>
                </PopoverGroup>
                <!-- <div
                    class="
                        hidden
                        md:flex
                        items-center
                        justify-end
                        md:flex-1
                        lg:w-0
                    "
                >
                   <a
                        href="#"
                        class="
                            whitespace-nowrap
                            text-base
                            font-medium
                            text-gray-500
                            hover:text-gray-900
                        "
                    >
                        Sign in
                    </a>
                    <a
                        href="#"
                        class="
                            ml-8
                            whitespace-nowrap
                            inline-flex
                            items-center
                            justify-center
                            px-4
                            py-2
                            border border-transparent
                            rounded-md
                            shadow-sm
                            text-base
                            font-medium
                            text-white
                            bg-blue-900
                            hover:bg-blue-700
                        "
                    >
                        Sign up
                    </a> 
                </div> -->
            </div>
        </div>

        <transition
            enter-active-class="duration-200 ease-out"
            enter-from-class="opacity-0 scale-95"
            enter-to-class="opacity-100 scale-100"
            leave-active-class="duration-100 ease-in"
            leave-from-class="opacity-100 scale-100"
            leave-to-class="opacity-0 scale-95"
        >
            <PopoverPanel
                focus
                class="
                    absolute
                    top-0
                    inset-x-0
                    p-2
                    z-20
                    transition
                    transform
                    origin-top-right
                    md:hidden
                "
            >
                <div
                    class="
                        rounded-lg
                        shadow-lg
                        ring-1 ring-black ring-opacity-5
                        bg-white
                        divide-y-2 divide-gray-50
                    "
                >
                    <div class="pt-5 pb-6 px-5">
                        <div class="flex items-center justify-between">
                            <div>
                                <img
                                    class="h-8 w-auto"
                                    src="/img/logotexto.png"
                                    alt="Evol"
                                />
                            </div>
                            <div class="-mr-2">
                                <PopoverButton
                                    class="
                                        bg-white
                                        rounded-md
                                        p-2
                                        inline-flex
                                        items-center
                                        justify-center
                                        text-gray-400
                                        hover:text-gray-500
                                        hover:bg-gray-100
                                        focus:outline-none
                                        focus:ring-2
                                        focus:ring-inset
                                        focus:ring-blue-500
                                    "
                                >
                                    <span class="sr-only">Cerrar Menú</span>                                   
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="16"
                                        height="16"
                                        fill="currentColor"
                                        class="bi bi-x-circle"
                                        viewBox="0 0 16 16"
                                    >
                                        <path
                                            d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"
                                        />
                                        <path
                                            d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"
                                        />
                                    </svg>
                                </PopoverButton>
                            </div>
                        </div>
                        <div class="mt-6">
                            <nav class="grid gap-y-8">
                                <router-link
                                    v-for="item in servicios"
                                    :key="item.name"
                                    :to="item.href"
                                    class="
                                        -m-3
                                        p-3
                                        flex
                                        items-center
                                        rounded-md
                                        hover:bg-gray-50
                                    "
                                >
                                    <component :is="item.icon" class="flex-shrink-0 h-6 w-6 text-blue-600" aria-hidden="true" />
                                    <span
                                        class="
                                            ml-3
                                            text-base
                                            font-medium
                                            text-gray-900
                                        "
                                    >
                                        {{ item.name }}
                                    </span>
                                </router-link>
                            </nav>
                        </div>
                    </div>
                    <div class="py-6 px-5 space-y-6">
                        <div class="grid grid-cols-2 gap-y-4 gap-x-8">
                            <router-link
                                :to="{ name: 'Nosotros' }"
                                class="
                                    text-base
                                    font-medium
                                    text-gray-900
                                    hover:text-gray-700
                                "
                            >
                                Nosotros
                            </router-link>
<!-- 
                            <a
                                href="#"
                                class="
                                    text-base
                                    font-medium
                                    text-gray-900
                                    hover:text-gray-700
                                "
                            >
                                Recursos
                            </a> -->
                            <a
                                v-for="item in resources"
                                :key="item.name"
                                :href="item.href"
                                class="
                                    text-base
                                    font-medium
                                    text-gray-900
                                    hover:text-gray-700
                                "
                            >
                                {{ item.name }}
                            </a>
                        </div>
                        <!-- <div>
                            <a
                                href="#"
                                class="
                                    w-full
                                    flex
                                    items-center
                                    justify-center
                                    px-4
                                    py-2
                                    border border-transparent
                                    rounded-md
                                    shadow-sm
                                    text-base
                                    font-medium
                                    text-white
                                    bg-blue-900
                                    hover:bg-blue-700
                                "
                            >
                                Sign up
                            </a>
                            <p
                                class="
                                    mt-6
                                    text-center text-base
                                    font-medium
                                    text-gray-500
                                "
                            >
                                Existing customer?
                                {{ ' ' }}
                                <a
                                    href="#"
                                    class="text-blue-600 hover:text-blue-500"
                                >
                                    Sign in
                                </a>
                            </p>
                        </div> -->
                    </div>
                </div>
            </PopoverPanel>
        </transition>
    </Popover>
</template>

<script>
import {
    Popover,
    PopoverButton,
    PopoverGroup,
    PopoverPanel,
} from '@headlessui/vue'
import { useRouter } from 'vue-router'
import ChevronDown from '../icons/ChevronDown.vue'
import Globe2 from '../icons/Globe2.vue'
import LightBulb from '../icons/LightBulb.vue'
import HandsThumbsUp from '../icons/HandsThumbsUp.vue'
import Cart3 from '../icons/Cart3.vue'
import FileEarmarkSpreadsheetFi from '../icons/FileEarmarkSpreadsheetFi.vue'
import Envelope from '../icons/Envelope.vue'
import TelephoneInbound from '../icons/TelephoneInbound.vue'
import WhatsApp from '../icons/WhatsApp.vue'
import GeoAlt from '../icons/GeoAlt.vue'

const servicios = [
    {
        name: 'Desarrollo Web',
        description:
            'Desarrollamos soluciones web a la medida de tus necesidades',
        href: '/desarrollo-web',
        icon: Globe2,
    },
    {
        name: 'Branding e Imagen Corporativa',
        description:
            'Te ayudamos a encontrar la imagen que deseas proyectar a tus clientes',
        href: '/branding-imagen-corporativa',
        icon: LightBulb,
    },
    {
        name: 'Marketing y Redes Sociales',
        description:
            'Te orientamos para que tu marca tenga reconocimiento en el mundo digital',
        href: '/marketing-redes-sociales',
        icon: HandsThumbsUp,
    },
    {
        name: 'E-Commerce',
        description:
            'Creamos tu tienda online y la acompañamos con una estrategia de marketing',
        href: '/e-commerce',
        icon: Cart3,
    },
    {
        name: 'Papelería y Material POP',
        description:
            'Ponemos tu marca en cada elemento de tu trabajo diario para afianzarla con tus clientes',
        href: '/papeleria-material-pop',
        icon: FileEarmarkSpreadsheetFi,
    },
]
const callsToAction = [
    {
        name: 'Escríbenos',
        href: '#',
        icon: Envelope,
    },
    {
        name: 'Llámanos',
        href: '#',
        icon: TelephoneInbound,
    },
]
const resources = [
    {
        name: 'Escríbenos vía Email',
        description:
            'Uno de nuestros agentes se comunicará contigo para resolver tus dudas.',
        href: '#',
        icon: Envelope,
    },
    {
        name: 'Acompañamiento Personalizado',
        description:
            'Puedes recibir atención exclusiva para tí en nuestro WhatsApp',
        href: '#',
        icon: WhatsApp,
    },
    {
        name: 'En ocasiones es mejor hablar',
        description: 'Es posible que te sientas más mejor hablando, llámanos',
        href: '#',
        icon: TelephoneInbound,
    },
    {
        name: 'Puedes visitarnos',
        description:
            'Si deseas conocernos mejor puedes visitar nuestras instalaciones',
        href: '#',
        icon: GeoAlt,
    },
]
// const recentPosts = [
//     { id: 1, name: 'Boost your conversion rate', href: '#' },
//     {
//         id: 2,
//         name: 'How to use search engine optimization to drive traffic to your site',
//         href: '#',
//     },
//     { id: 3, name: 'Improve your customer experience', href: '#' },
// ]

const router = useRouter()

export default {
    components: {
        Popover,
        PopoverButton,
        PopoverGroup,
        PopoverPanel,
        ChevronDown,
    },
    setup() {
        return {
            servicios,
            callsToAction,
            resources,
            // recentPosts,
        }
    },
}
</script>
