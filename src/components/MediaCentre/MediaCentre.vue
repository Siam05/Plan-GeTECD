<template>
    <div>
        <div>
            <Galleria :value="images" :numVisible="1" :circular="true" :showItemNavigators="false" :showThumbnails="false" :autoPlay="true" :transitionInterval="4000">
                <template #item="slotProps">
                    <div class="imageStyle flex flex-col items-center" :style="{backgroundImage:`url(${slotProps.item.image})`}">
                        <div class="h-full text-left flex flex-col items-start justify-center">
                            <div class="container px-8 sm:px-14 xl:px-20 pt-20 lg:pt-0">
                                <p class="text-xl sm:text-2xl lg:text-4xl font-semibold lg:w-2/3" :class="{'text-black': slotProps.item.color == 'BLACK', 'text-white': slotProps.item.color == 'WHITE'}">{{ slotProps.item.title }}</p>
                                <p class="sm:w-2/3 xl:w-1/2 pt-4 lg:pt-6" :class="{'text-black': slotProps.item.color == 'BLACK', 'text-white': slotProps.item.color == 'WHITE'}">{{ slotProps.item.description }}</p>
                            </div>
                        </div>
                    </div> 
                </template>
            </Galleria>
        </div>

        <div class="bg-blue-gray-900 my">
            <p class="h-24 lg:h-28 flex justify-center items-center text-5xl text-white text-font-veener">MEDIA CENTRE</p>
        </div>

        <div>
            <div class="grid grid-cols-2 md:grid-cols-4">
                <button class="w-full h-20 lg:h-28 bg-primary font-semibold text-white lg:text-xl flex justify-center items-center" @click="showVideo">
                    <i class="pi pi-video pr-2 pb-0.5" style="font-size: 1.2rem;"></i>
                    VIDEO
                </button>
                <button class="w-full h-20 lg:h-28 bg-secondary font-semibold text-white lg:text-xl flex justify-center items-center" @click="showAudio">
                    <i class="pi pi-volume-down pr-2 pb-0.5" style="font-size: 1.2rem;"></i>
                    AUDIO
                </button>
                <button class="w-full h-20 lg:h-28 bg-tertiary font-semibold text-white lg:text-xl flex justify-center items-center" @click="showStories">
                    <i class="pi pi-file pr-2 pb-0.5" style="font-size: 1.2rem;"></i>
                    STORIES
                </button>
                <button class="w-full h-20 lg:h-28 bg-future font-semibold text-white lg:text-xl flex justify-center items-center" @click="showGallery">
                    <i class="pi pi-images pr-2 pb-0.5" style="font-size: 1.2rem;"></i>
                    GALLERY
                </button>
            </div>
        </div>

        <!-- For Displaying Previous Buttons -->
        <div class="bg-background py-10 lg:py-14 px-4 lg:px-12 xl:px-20 flex justify-center items-center">
            <div class="container">
                <div v-if="displayVideo">
                    <p class="text-primary text-6xl text-font-veener pb-6">VIDEO</p>

                    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                        <div v-for="(video, index) in videos" :key="index" data-aos="zoom-in">
                            <div class="w-full">
                                <div @click="showOverlay(video.keyword)" class="w-full flex flex-col flex justify-center items-center cursor-pointer thumbnail">
                                    <img class="h-60 lg:h-64 xl:h-72 w-full rounded-xl object-cover" :src="`https://img.youtube.com/vi/${video.keyword}/0.jpg`" alt="">
                                    <div class="flex items-center absolute">
                                        <img class="h-16 w-16 yt-icon" src="../../assets/icons/play-button-icon-png-18928.png" alt="">
                                    </div>
                                </div>
                            </div>

                            <div class="text-left pt-2">
                                <p class="font-semibold pb-2">{{ video.title }}</p>
                                <p class="text-gray-500 text-sm"><i class="pi pi-clock pr-1.5" style="font-size: 0.8rem;"></i>{{ video.duration }}</p>
                            </div>
                        </div>

                        <!-- For displaying Video -->
                        <div v-if="displayYtVideo" :class="{ 'search-overlay' : displayYtVideo }">
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

                    <div class="pt-10 lg:pt-14">
                        <p class="text-primary text-6xl text-font-veener pb-6">LIVE</p>
                        <div class="w-full" data-aos="zoom-in">
                            <iframe class="w-full videoHeight" src="https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2Fplaninbangladesh%2Fvideos%2F369353290857161%2F&show_text=false&width=560&t=0" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share" allowFullScreen="true"></iframe>   
                        </div>
                    </div>
                </div>

                <div v-if="displayAudio">
                    <p class="text-secondary text-6xl text-font-veener pb-6">AUDIO</p>

                    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                        <div v-for="(audio, index) in audios" :key="index" data-aos="zoom-in">
                            <img class="h-60 lg:h-64 xl:h-72 w-full rounded-xl object-cover" :src="audio.image" alt="">

                            <div class="text-left pt-2">
                                <p class="font-semibold pb-2">{{ audio.title }}</p>
                                <p class="text-gray-500 text-sm"><i class="pi pi-clock pr-1.5" style="font-size: 0.8rem;"></i>{{ audio.duration }}</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div v-if="displayStories">
                    <p class="text-tertiary text-6xl text-font-veener pb-6">STORIES</p>

                    <div class="flex flex-col lg:flex-row gap-8">
                        <div class="w-full lg:w-1/3">
                            <div class="w-full">
                                <span class="p-input-icon-left w-full">
                                    <i class="pi pi-search" />
                                    <InputText v-model="value1" placeholder="Filter your options" class="w-full" />
                                </span>
                            </div>

                            <div class="text-left grid gap-4 p-6 border border-gray-300 font-semibold rounded-md mt-4">
                                <p class="border-b border-gray-300 pb-1">Early childhood development</p>
                                <p class="border-b border-gray-300 pb-1">Education</p>
                                <p class="border-b border-gray-300 pb-1">Emergencies</p>
                                <p class="border-b border-gray-300 pb-1">Girls Get Equal</p>
                                <p class="border-b border-gray-300 pb-1">Protection from violence</p>
                                <p class="border-b border-gray-300 pb-1">Skills and work</p>
                            </div>
                        </div>

                        <div class="w-full lg:w-2/3">
                            <div class="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8">
                                <div v-for="(story, index) in stories" :key="index">
                                    <img class="h-60 lg:h-64 xl:h-72 w-full rounded-t-xl object-cover" :src="story.image" alt="">

                                    <div class="text-left p-3 border border-gray-300 bg-gray-100 rounded-b-xl">
                                        <p class="font-semibold pb-2 text-primary">{{ story.title }}</p>
                                        <p class="text-gray-500 text-sm"><i class="pi pi-clock pr-1.5" style="font-size: 0.8rem;"></i>{{ story.date }}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div v-if="displayGallery">
                    <p class="text-future text-6xl text-font-veener pb-6">GALLERY</p>

                    <div class="flex flex-col lg:flex-row gap-8">
                        <div class="w-full lg:w-1/3">
                            <div class="w-full">
                                <span class="p-input-icon-left w-full">
                                    <i class="pi pi-search" />
                                    <InputText v-model="value1" placeholder="Filter your options" class="w-full" />
                                </span>
                            </div>

                            <div class="text-left grid gap-4 p-6 border border-gray-300 font-semibold rounded-md mt-4">
                                <p class="border-b border-gray-300 pb-1">Early childhood development</p>
                                <p class="border-b border-gray-300 pb-1">Education</p>
                                <p class="border-b border-gray-300 pb-1">Emergencies</p>
                                <p class="border-b border-gray-300 pb-1">Girls Get Equal</p>
                                <p class="border-b border-gray-300 pb-1">Protection from violence</p>
                                <p class="border-b border-gray-300 pb-1">Skills and work</p>
                            </div>
                        </div>

                        <div class="w-full lg:w-2/3">
                            <div class="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8">
                                <div v-for="(gallery, index) in gallery" :key="index" data-aos="zoom-in"  @click="showImageOverlay(gallery.image)">
                                    <img class="h-60 lg:h-64 xl:h-72 w-full rounded-xl object-cover" :src="gallery.image" alt="">
                                </div>

                                <!-- For displaying Gallery -->
                                <div v-if="displayImage" :class="{ 'search-overlay' : displayImage }">
                                    <div class="flex flex-col items-center justify-center h-screen">
                                        <div class="container px-4 lg:px-12 xl:px-20">
                                            <div class="flex justify-end pb-6">
                                                <i class="pi pi-times cursor-pointer" @click="cancelImageOverlay()" style="color: white; font-size: xx-large;"></i>
                                            </div>
                                            <div class="flex justify-center">
                                                <div v-if="image">
                                                    <img class="img-size" :src="image" alt="">
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
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapState } from "vuex";
import Galleria from 'primevue/galleria';
import InputText from 'primevue/inputtext';
import AOS from 'aos'
import 'aos/dist/aos.css'

export default {
    components: {
        Galleria,
        InputText
    },

    data() {
        return {
            host: "https://api.catchbangladesh.com",

            displayVideo: true,
            displayAudio: false,
            displayStories: false,
            displayGallery: false,

            yt_link: null,
            displayYtVideo: false,
            displayImage: false
        }
    },

    created() {
        AOS.init({
            duration: 1000,
        })
    },

    computed: {
        ...mapState({
            images: (state) => state.mediaCentre.images,
            videos: (state) => state.mediaCentre.videos,
            audios: (state) => state.mediaCentre.audios,
            stories: (state) => state.mediaCentre.stories,
            gallery: (state) => state.mediaCentre.gallery
        })
    },

    mounted() {
        // this.$store.dispatch('mediaCentre/getCaseStudies')
        // this.$store.dispatch('mediaCentre/getCaseCategories')
    },

    methods: {
        showVideo() {
            this.displayVideo = true,
            this.displayAudio = false,
            this.displayStories = false,
            this.displayGallery = false
        },
        showAudio() {
            this.displayVideo = false,
            this.displayAudio = true,
            this.displayStories = false,
            this.displayGallery = false
        },
        showStories() {
            this.displayVideo = false,
            this.displayAudio = false,
            this.displayStories = true,
            this.displayGallery = false
        },
        showGallery() {
            this.displayVideo = false,
            this.displayAudio = false,
            this.displayStories = false,
            this.displayGallery = true
        },

        showOverlay(link) {
            this.displayYtVideo = true
            this.yt_link = link
        },

        cancelOverlay() {
            this.displayYtVideo = false
            this.yt_link = null
        },

        showImageOverlay(image) {
            this.displayImage = true
            this.image = image
        },

        cancelImageOverlay() {
            this.displayImage = false
            this.image = null
        }
    }
}
</script>

<style scoped>
    .imageStyle {
        background-size: cover;
        object-fit: cover;
        width: 100%;
        height: 45vh;
    }

    .search-overlay {
        height: 100vh;
        width: 100vw;
        position: fixed;
        z-index: 10000;
        top: 0;
        left: 0;
        background-color: #000000d3;
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

    /* Facebook Live */
    .videoHeight {
        height: 734px;
    }

    @media screen and (max-width: 1536px) {
        .videoHeight {
            height: 724px;
        }
    }

    @media screen and (max-width: 1400px) {
        .videoHeight {
            height: 694px;
        }
    }

    @media screen and (max-width: 1340px) {
        .videoHeight {
            height: 654px;
        }
    }

    @media screen and (max-width: 1280px) {
        .videoHeight {
            height: 574px;
        }
    }

    @media screen and (max-width: 1100px) {
        .videoHeight {
            height: 545px;
        }
    }

    @media screen and (max-width: 1024px) {
        .videoHeight {
            height: 425px;
        }
    }

    @media screen and (max-width: 768px) {
        .videoHeight {
            height: 355px;
        }
    }

    @media screen and (max-width: 640px) {
        .videoHeight {
            height: 335px;
        }

        .background {
            height: 320px
        }
    }

    @media screen and (max-width: 600px) {
        .videoHeight {
            height: 315px;
        }
    }

    @media screen and (max-width: 557px) {
        .videoHeight {
            height: 293px;
        }
    }

    @media screen and (max-width: 520px) {
        .videoHeight {
            height: 270px;
        }
    }

    @media screen and (max-width: 490px) {
        .videoHeight {
            height: 250px;
        }
    }

    @media screen and (max-width: 460px) {
        .videoHeight {
            height: 235px;
        }
    }

    @media screen and (max-width: 430px) {
        .videoHeight {
            height: 220px;
        }
    }

    @media screen and (max-width: 410px) {
        .videoHeight {
            height: 210px;
        }
    }

    @media screen and (max-width: 390px) {
        .videoHeight {
            height: 197px;
        }
    }

    @media screen and (max-width: 370px) {
        .videoHeight {
            height: 190px;
        }
    }

    @media screen and (max-width: 350px) {
        .videoHeight {
            height: 175px;
        }
    }
</style> 