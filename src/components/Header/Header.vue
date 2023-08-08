<template>
    <div id="navbar" class="w-full flex justify-center items-center" @mouseleave="hideDropdown">
        <nav class="w-full flex justify-center items-center" :class="{ 'onScroll': !view.topOfPage, 'backScroll': view.topOfPage}">
            <div class="container">
                <!-- Mobile view New  -->
                <div class="title md:hidden py-2 px-4">
                    <div class="flex justify-center">

                        <div class="flex justify-center" :class="{ 'hidden': !view.topOfPage, 'flex': view.topOfPage}">
                            <router-link to="/">
                                <img class="logo-height" src="../../assets/logo/logo-white.png" alt="">
                            </router-link>
                        </div>

                        <div class="flex justify-center" :class="{ 'flex': !view.topOfPage, 'hidden': view.topOfPage}">
                            <router-link to="/">
                                <img class="logo-height" src="../../assets/logo/logo-GeTECD.png" alt="">
                            </router-link>
                        </div>
                        
                    </div>

                    <div class="flex justify-between gap-4 pt-2" :class="{ 'header-bottom': !view.topOfPage }">
                        <div>
                            <i @click="toggleNav" class="fa-solid fa-bars" style="font-size: 1.1rem;"></i>
                        </div>
                        <div class="flex items-center gap-4 text-sm">
                            <a target="_blank" class="flex items-center" href="https://www.facebook.com/planinbangladesh/"><i class="fa-brands fa-square-facebook" style="font-size: 1.1rem;"></i></a>
                            <a target="_blank" class="flex items-center" href="https://twitter.com/PlanBangladesh"><i class="fa-brands fa-twitter" style="font-size: 1.1rem;"></i></a>
                        </div>
                        <MobileNav v-if="navToggled" @navClosed="closeNav" />
                    </div>
                </div>
                
                <!-- Desktop view -->
                <div class="title hidden md:flex justify-between items-center py-3 px-4 lg:px-12 xl:px-20">

                    <div class="flex justify-center" :class="{ 'hidden': !view.topOfPage, 'flex': view.topOfPage}">
                        <router-link to="/">
                            <img class="logo-height" src="../../assets/logo/logo-white.png" alt="">
                        </router-link>
                    </div>

                    <div class="flex justify-center" :class="{ 'flex': !view.topOfPage, 'hidden': view.topOfPage}">
                        <router-link to="/">
                            <img class="logo-height" src="../../assets/logo/logo-GeTECD.png" alt="">
                        </router-link>
                    </div>

                    <div class="flex gap-8">
                        <div class="flex items-center gap-8">
                            <router-link to="/"><P class="font-semibold">HOME</P></router-link>

                            <router-link to="/training"><P class="font-semibold">TRAINING</P></router-link>

                            <router-link to="/media-centre"><P class="font-semibold">MEDIA CENTRE</P></router-link>
                        </div>
                        
                        <div class="flex items-center gap-6 text-sm">
                            <a target="_blank" class="flex items-center" href="https://www.facebook.com/planinbangladesh/"><i class="fa-brands fa-square-facebook" style="font-size: 1.2rem;"></i></a>
                            <a target="_blank" class="flex items-center" href="https://twitter.com/PlanBangladesh"><i class="fa-brands fa-twitter" style="font-size: 1.2rem;"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    </div>
</template>

<script>
import { mapState } from "vuex";
import MobileNav from './MobileNav.vue';

export default {
    components: {
		MobileNav,
	},

    computed: {
        ...mapState({
            site_settings: (state) => state.siteSettings.site_settings
        })
    },

    mounted() {
        this.$store.dispatch('siteSettings/getSiteSettings')
    },

    data () {
        return {
            host: "https://api.catchbangladesh.com",
            navToggled: false,
            toggleCareerIcon: false,
            displayCareerDropdown: false,
            view: {
                topOfPage: true
            }
        }
    },

    beforeMount() {
        window.addEventListener('scroll', this.handleScroll)
    },

    methods: {
        handleScroll() {
            if(window.pageYOffset > 0) {
                if(this.view.topOfPage) this.view.topOfPage = false
            } else {
                if(!this.view.topOfPage) this.view.topOfPage = true
            }
        },

        toggleNav: function () {
			this.navToggled = !this.navToggled;
		},

		closeNav: function () {
			this.navToggled = false;
		},

        showCareerDropdown() {
            this.toggleCareerIcon = true
            this.displayCareerDropdown = true
        },

        hideDropdown() {
            this.toggleCareerIcon = false
            this.displayCareerDropdown = false
        },
    }
}
</script>

<style scoped>
nav {
    position: fixed;
    width: 100%;
    background-color: transparent;
    align-items: center;
    transition: all .2s ease-in-out;
    z-index: 999;
    top: 0;
    @apply text-white;
}

.logo-height {
    height: 50px;
}

.onScroll {
    top: 0;
    box-shadow: 0 0 10px #aaa;
    @apply bg-background text-primary;
}

.backScroll {
    position: fixed;
    top: 0;
    box-shadow: 0 0;
    background-color: #00000031; 
}

.title {
    transition: all .2s ease-in-out;
    transform: translateY(0);
    transition: transform 300ms linear;
}

.header-bottom {
    @apply hidden;
}

@media screen and (max-width: 1024px) {
    .logo-height {
        height: 47px;
    }
}
</style>