<template>
    <div>
        <div class="bg-primary">
            <div class="h-full w-full flex justify-center">
                <!-- Mobile -->
                <div class="flex md:hidden">
                    <div class="container xl:flex gap-6 lg:gap-10 xl:gap-14 w-full px-4 lg:px-12 xl:px-20 py-10 lg:py-14">
                        <div class="xl:w-2/5 flex flex-col items-start justify-start lg:justify-center">
                            <div data-aos="zoom-in" class="text-white uppercase">
                                <p class="text-white xl:pb-6 text-left text-4xl text-font-veener">Parenting Facilitators</p>
                            </div>
                            <div data-aos="zoom-in" class="lg:flex flex-row text-left justify-center items-center gap-6 2xl:gap-8">
                                <p class="text-white pt-6 xl:pt-0">There are no approximations, there is no lip service, there is no tokenism. Gender Transformative Education requires strategies and programmes that intentionally challenge inequalities in gender roles and power dynamics both in the education system and in communities. Given the complex causes of gender inequality, multi-sectoral approaches that work at all levels with all stakeholders will have the greatest impact. We need to ask: what are the things that affect children and young people because of gender? How can we address them? What intersectionalities are at play?</p>
                            </div>
                        </div>
                        
                        <div class="xl:w-3/5 pt-6 lg:pt-8 xl:pt-0"> 
                            <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                <div v-for="(client, index) in clients_logos" :key="index">
                                    <div class="w-full" data-aos="zoom-in">
                                        <div @click="showOverlay(client.keyword)" class="w-full flex flex-col flex justify-center items-center cursor-pointer thumbnail">
                                            <img class="h-56 sm:h-52 lg:h-64 xl:h-48 w-full object-cover rounded-xl" :src="`https://img.youtube.com/vi/${client.keyword}/0.jpg`" alt="">
                                            <div class="flex items-center absolute">
                                                <img class="h-16 w-16 yt-icon" src="../../assets/icons/play-button-icon-png-18928.png" alt="">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Desktop -->
                <div class="hidden md:flex">
                    <div class="container xl:flex gap-6 lg:gap-10 xl:gap-14 w-full px-4 lg:px-12 xl:px-20 py-10 lg:py-14">
                        <div class="xl:w-2/5 flex flex-col items-start justify-start lg:justify-center">
                            <div data-aos="slide-up" class="text-white uppercase">
                                <p class="text-white xl:pb-6 text-left text-4xl text-font-veener">Parenting Facilitators</p>
                            </div>
                            <div data-aos="slide-up" class="lg:flex flex-row text-left justify-center items-center gap-6 2xl:gap-8">
                                <p class="text-white pt-6 xl:pt-0">There are no approximations, there is no lip service, there is no tokenism. Gender Transformative Education requires strategies and programmes that intentionally challenge inequalities in gender roles and power dynamics both in the education system and in communities. Given the complex causes of gender inequality, multi-sectoral approaches that work at all levels with all stakeholders will have the greatest impact. We need to ask: what are the things that affect children and young people because of gender? How can we address them? What intersectionalities are at play?</p>
                            </div>
                        </div>
                        
                        <div class="xl:w-3/5 pt-6 lg:pt-8 xl:pt-0"> 
                            <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                <div v-for="(client, index) in clients_logos" :key="index">
                                    <div class="w-full" data-aos="zoom-in">
                                        <div @click="showOverlay(client.keyword)" class="w-full flex flex-col flex justify-center items-center cursor-pointer thumbnail">
                                            <img class="h-56 sm:h-52 lg:h-64 xl:h-48 w-full object-cover rounded-xl" :src="`https://img.youtube.com/vi/${client.keyword}/0.jpg`" alt="">
                                            <div class="flex items-center absolute">
                                                <img class="h-16 w-16 yt-icon" src="../../assets/icons/play-button-icon-png-18928.png" alt="">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div v-if="displayVideo" :class="{ 'search-overlay' : displayVideo }">
                    <div class="flex flex-col items-center justify-center h-screen">
                        <div class="container px-4 lg:px-12 xl:px-20">
                            <div class="flex justify-end pb-6">
                                <i class="pi pi-times cursor-pointer" @click="cancelOverlay()" style="color: white; font-size: xx-large;"></i>
                            </div>
                            <div class="flex justify-center">
                                <div v-if="yt_link">
                                    <iframe class="yt-video-size" :src="'https://www.youtube.com/embed/'+yt_link+'?&autoplay=1'" frameborder="0" allow="autoplay" allowfullscreen></iframe>
                                </div>
                                <div v-else>
                                    <i class="pi pi-info-circle" style="color: white; font-size: 2rem;"></i>
                                    <p class="text-2xl text-white pt-2">Something went wrong.</p>
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
// import { mapState } from "vuex";
import AOS from 'aos'
import 'aos/dist/aos.css'

export default { 
    data() {
        return {
            host: "https://api.catchbangladesh.com",
            yt_link: null,
            displayVideo: false,
            clients_logos: [
                {
                    id: 1,
                    youTube: 'https://youtu.be/0LEehNWTgvw',
                    keyword: '0LEehNWTgvw'
                },
                {
                    id: 2,
                    youTube: 'https://youtu.be/ufiwoD3qFcM',
                    keyword: 'ufiwoD3qFcM'
                },
                {
                    id: 3,
                    youTube: 'https://youtu.be/6iwQCktvxRg',
                    keyword: '6iwQCktvxRg'
                },
                {
                    id: 4,
                    youTube: 'https://youtu.be/I6npJWB6Rp8',
                    keyword: 'I6npJWB6Rp8'
                },
            ]
        }
    },

    created() {
        AOS.init({
            duration: 1000,
        })
    },

    methods: {
        showOverlay(link) {
            this.displayVideo = true
            this.yt_link = link
        },

        cancelOverlay() {
            this.displayVideo = false
            this.yt_link = null
        }
    }

    // computed: {
    //     ...mapState({
    //         clients_logo: (state) => state.clientList.clients_logo,
    //         clients_image: (state) => state.clientList.clients_image
    //     })
    // },

    // mounted() {
    //     this.$store.dispatch('clientList/getClientsLogo')
    //     this.$store.dispatch('clientList/getClientImage')
    // }
}
</script>

<style scoped>
.search-overlay {
    height: 100vh;
    width: 100vw;
    position: fixed;
    z-index: 10000;
    top: 0;
    left: 0;
    background-color: #000000d3;
}

.blur-color {
    background-color: #00000070;
}

    .yt-video-size {
        height: 600px;
        width: 1020px;
    }

    .yt-icon {
        opacity: 0.7;
    }

    .thumbnail:hover .yt-icon {
        opacity: 1;
        @apply rounded-full shadow-lg;
    }

    @media screen and (max-width: 1080px) {
        .yt-video-size {
            height: 450px;
            width: 765px;
        }
    }

    @media screen and (max-width: 820px) {
        .yt-video-size {
            height: 360px;
            width: 612px;
        }
    }

    @media screen and (max-width: 640px) {
        .yt-video-size {
            height: 320px;
            width: 544px;
        }
    }

    @media screen and (max-width: 560px) {
        .yt-video-size {
            height: 280px;
            width: 476px;
        }
    }

    @media screen and (max-width: 480px) {
        .yt-video-size {
            height: 230px;
            width: 390px;
        }
    }

    @media screen and (max-width: 400px) {
        .yt-video-size {
            height: 230px;
            width: 340px;
        }
    }
</style>