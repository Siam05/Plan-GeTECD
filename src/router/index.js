import { createRouter, createWebHistory } from "vue-router";
import Home from "../pages/home/index.vue";

import MediaCentre from "../pages/mediaCentre/index.vue";
import MediaCentreDetails from "../pages/mediaCentre/mediaCentreDetails/[id].vue";
import MediaCentreByCategory from "../pages/mediaCentre/mediaCentreByCategory/[id].vue";
import Contact from "../pages/contact/index.vue";

import Training from "../pages/training/index.vue"

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },

    {
        path: '/media-centre',
        name: 'MediaCentre',
        component: MediaCentre,
        meta: {
            isAllActive: true
        }
    },

    {
        path: '/media-centre-details/:id',
        name: 'MediaCentreDetails',
        component: MediaCentreDetails,
        meta: {
            isCategoryActive: true
        }
    },

    {
        path: '/media-centre/:id',
        name: 'MediaCentreByCategory',
        component: MediaCentreByCategory,
        meta: {
            isCategoryActive: true
        }
    },

    {
        path: '/contact',
        name: 'Contact',
        component: Contact
    },

    {
        path: '/training',
        name: 'Training',
        component: Training
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
    scrollBehavior(to, from, savedPosition) {
        // return desired position
        if (savedPosition) return savedPosition;
        else return { top: 0 };
    }
})

export default router