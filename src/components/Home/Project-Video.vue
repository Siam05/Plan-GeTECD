<template>
    <div class="py-10 lg:py-14">
        <div class="flex justify-center">
            <div class="container px-4 lg:px-12 xl:px-20">
                <!-- Mobile -->
                <div class="flex md:hidden">
                    <div class="flex flex-col xl:flex-row gap-6 lg:gap-10 xl:gap-14">
                        <div class="w-full xl:w-2/3"  data-aos="zoom-in">
                            <iframe class="w-full videoHeight rounded-xl" src="https://www.youtube.com/embed/-Il43Fgc-1M" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                        </div>

                        <div class="w-full xl:w-1/3 flex flex-col items-start justify-center" data-aos="zoom-in">
                            <p class="uppercase text-primary text-4xl text-font-veener">About The Project</p>
                            <p class="text-left pt-6">Gender transformative education moves beyond simply improving access to education for girls and women. It equips and empowers stakeholders to examine, challenge, and change harmful gender norms and imbalances of power that advantage boys and men over girls and women.</p>
                            <p class="text-left pt-4">Plan International, Transform Education, UNGEI and UNICEF Education are calling for this critical reset in education. Important work on this has already begun with the support of Global Affairs Canada and Dubai Cares and in this short brief, we explain how to “do” gender-transformative education: what it means, why it’s important and how to make it happen.</p>
                        </div>
                    </div>
                </div>

                <!-- Desktop -->
                <div class="hidden md:flex">
                    <div class="flex flex-col xl:flex-row gap-6 lg:gap-10 xl:gap-14">
                        <div class="w-full xl:w-2/3" data-aos="fade-right">
                            <iframe class="w-full videoHeight rounded-xl" src="https://www.youtube.com/embed/-Il43Fgc-1M" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                        </div>

                        <div class="w-full xl:w-1/3 flex flex-col items-start justify-center" data-aos="fade-left">
                            <p class="uppercase text-primary text-4xl text-font-veener">About The Project</p>
                            <p class="text-left pt-6">Gender transformative education moves beyond simply improving access to education for girls and women. It equips and empowers stakeholders to examine, challenge, and change harmful gender norms and imbalances of power that advantage boys and men over girls and women.</p>
                            <p class="text-left pt-4">Plan International, Transform Education, UNGEI and UNICEF Education are calling for this critical reset in education. Important work on this has already begun with the support of Global Affairs Canada and Dubai Cares and in this short brief, we explain how to “do” gender-transformative education: what it means, why it’s important and how to make it happen.</p>
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
            host: "https://api.catchbangladesh.com"
        }
    },

    created() {
        AOS.init({
            duration: 1000,
        })
    },

    // computed: {
    //     ...mapState({
    //         services: (state) => state.services.services
    //     })
    // },

    // mounted() {
    //     this.$store.dispatch('services/getServicesList')
    // }
}
</script>

<style scoped>
.videoHeight {
    height: 520px;
}

@media screen and (max-width: 1280px) {
    .videoHeight {
        height: 530px;
    }
}

@media screen and (max-width: 1024px) {
    .videoHeight {
        height: 420px;
    }
}

@media screen and (max-width: 768px) {
    .videoHeight {
        height: 350px;
    }
}

@media screen and (max-width: 600px) {
    .videoHeight {
        height: 310px;
    }
}

@media screen and (max-width: 550px) {
    .videoHeight {
        height: 290px;
    }
}

@media screen and (max-width: 480px) {
    .videoHeight {
        height: 255px;
    }
}
</style> 