import { createRouter, createWebHistory } from 'vue-router'
import Home from '/src/components/Home.vue'
import Nosotros from '/src/components/pages/Nosotros.vue'
import DesarrolloWeb from '/src/components/pages/DesarrolloWeb.vue'
import Branding from '/src/components/pages/Branding.vue'
import MarketingRRSS from '/src/components/pages/MarketingRRSS.vue'
import ECommerce from '/src/components/pages/ECommerce.vue'
import Papeleria from '/src/components/pages/Papeleria.vue'
import Recursos from '/src/components/pages/Recursos.vue'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
    },
    {
        path: '/nosotros',
        name: 'Nosotros',
        component: Nosotros,
    },
    {
        path: '/desarrollo-web',
        name: 'DesarrolloWeb',
        component: DesarrolloWeb,
    },
    {
        path: '/branding-imagen-corporativa',
        name: 'Branding',
        component: Branding,
    },
    {
        path: '/marketing-redes-sociales',
        name: 'MarketingRRSS',
        component: MarketingRRSS,
    },
    {
        path: '/e-commerce',
        name: 'ECommerce',
        component: ECommerce,
    },
    {
        path: '/papeleria-material-pop',
        name: 'Papeleria',
        component: Papeleria,
    },
    {
        path: '/recursos',
        name: 'Recursos',
        component: Recursos,
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router