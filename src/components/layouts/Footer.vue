<template>
    <!-- component -->
    <div
        class="
            w-full
            min-h-screen
            flex
            items-center
            justify-center
            bg-indigo-900
        "
    >
        <div class="md:w-2/3 w-full px-4 text-white flex flex-col">
            <div class="w-full text-5xl font-bold">
                <h2 class="w-full md:w-2/3">Iniciemos el trabajo juntos</h2>
            </div>
            <div class="flex mt-8 flex-col md:flex-row md:justify-between">
                <p class="w-full md:w-2/3 text-blue-50">
                    En Evol, estamos listos para iniciar una alianza contigo,
                    sabemos de emprendimiento y queremos llevar tu proyecto a
                    otro nivel
                </p>
                <div class="w-44 pt-6 md:pt-0">
                    <a
                        class="
                            bg-white
                            justify-center
                            text-center
                            rounded-lg
                            shadow
                            px-10
                            py-3
                            flex
                            items-center
                            text-blue-900
                        "
                    >
                        <whats-app class="mr-2"></whats-app>
                        Escríbenos</a
                    >
                </div>
            </div>
            <div class="flex flex-col">
                <div class="flex mt-24 mb-12 flex-row justify-between">
                    <div class="">
                        <img
                            src="/img/logo-prueba.png"
                            alt="logo Evol"
                            class="w-40"
                        />
                    </div>
                     <router-link
                        :to="{ name: 'Nosotros' }"
                        class="
                            tmd:block
                            cursor-pointer
                            text-blue-50
                            hover:text-white
                            uppercase
                        "
                    >
                        Nosotros
                    </router-link>                    
                     <a
                        href="/#subtituloServices"
                        class="
                            tmd:block
                            cursor-pointer
                            text-blue-50
                            hover:text-white
                            uppercase
                        "
                    >
                        Servicios
                    </a>  
                    <a
                        class="
                            hidden
                            md:block
                            cursor-pointer
                            text-blue-50
                            hover:text-white
                            uppercase
                        "
                        >Contacto</a
                    >
                    <div
                        class="
                            flex flex-row
                            space-x-8
                            items-center
                            justify-between
                        "
                    >
                        <a>
                             <Facebook class="h-5 w-5"></Facebook>
                        </a>
                        <a>
                          <Instagram class="h-5 w-5"></Instagram>
                        </a>
                        <a
                            href="https://www.youtube.com/channel/UCjtCbnkIaiCJgj13sEZ9iqw"
                        >
                         <YouTube class="h-7 w-7"></YouTube>   
                        </a>
                    </div>
                </div>
                <hr class="border-gray-600" />
                <p class="w-full text-center my-12 text-blue-100">
                    Todos los Derechos Reservados ©
                    {{ new Date().getFullYear() }} Evol - Diseño y Desarrollo Web
                </p>
            </div>
        </div>
    </div>
</template>
<script>
import WhatsApp from '../icons/WhatsApp.vue'
import YouTube from '../icons/YouTube.vue'
import Instagram from '../icons/Instagram.vue'
import Facebook from '../icons/Facebook.vue'
export default {
    components:{
        WhatsApp, YouTube, Instagram, Facebook
    }
}
</script>
