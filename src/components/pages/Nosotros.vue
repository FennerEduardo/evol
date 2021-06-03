<template>
    <Menu></Menu>
    <Team></Team>
     <Testimonials></Testimonials>
    <Footer></Footer>
</template>
<script>
import Menu from '../layouts/Menu.vue'
import Footer from '../layouts/Footer.vue'
import Team from '../layouts/nosotros/Team.vue'
import Testimonials from '../miscellaneous/Testimonials.vue'
export default {
    components:{
        Menu, Footer, Team, Testimonials
    }
}
</script>