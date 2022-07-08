import { createRouter, createWebHistory } from 'vue-router'
import About from '../components/About.vue'
import Computer from '../components/Computer.vue'
import Contact from '../components/Contact.vue'
import Home from '../components/Home.vue'
import Laptop from '../components/Laptop.vue'
import Product from '../components/Product.vue'

const router = createRouter({
    history: createWebHistory(
        import.meta.env.BASE_URL),
    routes: [{
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/about',
            name: 'about',
            component: About
        },
        {
            path: '/computer',
            name: 'computer',
            component: Computer
        },
        {
            path: '/contact',
            name: 'contact',
            component: Contact
        },
        {
            path: '/laptop',
            name: 'laptop',
            component: Laptop
        },
        {
            path: '/product',
            name: 'product',
            component: Product
        }
    ]
})

export default router