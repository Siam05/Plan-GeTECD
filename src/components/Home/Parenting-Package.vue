<template>
    <div class="py-10 lg:py-14">
        <div class="flex justify-center">
            <div class="container px-4 lg:px-12 xl:px-20">

                <p class="text-4xl uppercase text-primary text-font-veener">Parenting Messages</p>
                <i class="pi pi-minus text-primary text-left py-4" style="font-size: 2rem;;"></i>

                <div>
                    <div class="flex flex-col sm:flex-row mb-8 lg:mb-12">
                        <button class="w-full h-20 lg:h-28 bg-secondary font-semibold text-white text-xl uppercase" @click="showParents">
                            Parents
                        </button>
                        <button class="w-full h-20 lg:h-28 bg-tertiary font-semibold text-white text-xl uppercase" @click="showGrandParents">
                            Grandparents
                        </button>
                        <button class="w-full h-20 lg:h-28 bg-future font-semibold text-white text-xl uppercase" @click="showCaregivers">
                            Caregivers
                        </button>
                    </div>
                </div>

                <!-- Mobile -->
                <div class="flex md:hidden">
                    <div v-if="displayParents" class="flex flex-col lg:flex-row gap-6 lg:gap-10 xl:gap-14">
                        <div data-aos="zoom-in" class="lg:w-1/2">
                            <div>
                                <img class="w-full h-96" src="../../assets/animations/kite.svg" alt="">
                            </div>
                        </div> 

                        <div data-aos="zoom-in" class="lg:w-1/2 text-left flex flex-col items-start justify-center">
                            <p class="text-4xl text-secondary uppercase text-font-veener">Parents</p>

                            <p class="pt-6 pb-3">Gender transformative education moves beyond simply improving access to education for girls and women. It equips and empowers stakeholders to examine, challenge, and change harmful gender norms and imbalances of power that advantage boys and men over girls and women.</p>

                            <p class="pb-3">Plan International, Transform Education, UNGEI and UNICEF Education are calling for this critical reset in education. Important work on this has already begun with the support of Global Affairs Canada and Dubai Cares and in this short brief, we explain how to “do” gender-transformative education: what it means, why it’s important and how to make it happen. </p>
                        </div>
                    </div>

                    <div v-if="displayGrandparents" class="flex flex-col lg:flex-row gap-6 lg:gap-10 xl:gap-14 py-10 lg:py-14">
                        <div data-aos="zoom-in" class="lg:w-1/2 text-left flex flex-col items-start justify-center">
                            <p class="text-4xl text-tertiary uppercase text-font-veener">Grandparents</p>

                            <p class="pt-6 pb-3">Gender transformative education moves beyond simply improving access to education for girls and women. It equips and empowers stakeholders to examine, challenge, and change harmful gender norms and imbalances of power that advantage boys and men over girls and women.</p>

                            <p class="pb-3">Plan International, Transform Education, UNGEI and UNICEF Education are calling for this critical reset in education. Important work on this has already begun with the support of Global Affairs Canada and Dubai Cares and in this short brief, we explain how to “do” gender-transformative education: what it means, why it’s important and how to make it happen. </p>
                        </div>

                        <div data-aos="zoom-in" class="lg:w-1/2">
                            <div>
                                <img class="w-full" src="../../assets/about-us/home-slider.jpg" alt="">
                            </div>
                        </div>
                    </div>

                    <div v-if="displayCaregivers" class="flex flex-col lg:flex-row gap-6 lg:gap-10 xl:gap-14">
                        <div data-aos="zoom-in" class="lg:w-1/2">
                            <div>
                                <img class="w-full" src="../../assets/about-us/home-slider.jpg" alt="">
                            </div>
                        </div>

                        <div data-aos="zoom-in" class="lg:w-1/2 text-left flex flex-col items-start justify-center">
                            <p class="text-4xl text-future uppercase text-font-veener">Caregivers</p>

                            <p class="pt-6 pb-3">Gender transformative education moves beyond simply improving access to education for girls and women. It equips and empowers stakeholders to examine, challenge, and change harmful gender norms and imbalances of power that advantage boys and men over girls and women.</p>

                            <p class="pb-3">Plan International, Transform Education, UNGEI and UNICEF Education are calling for this critical reset in education. Important work on this has already begun with the support of Global Affairs Canada and Dubai Cares and in this short brief, we explain how to “do” gender-transformative education: what it means, why it’s important and how to make it happen. </p>
                        </div>
                    </div>
                </div>

                <!-- Desktop -->
                <div class="hidden md:flex">
                    <div v-if="displayParents" class="flex flex-col lg:flex-row gap-6 lg:gap-10 xl:gap-14">
                        <div data-aos="fade-right" class="lg:w-1/2">
                            <div>
                                <img class="w-full h-96" src="../../assets/animations/kite.svg" alt="">
                            </div>
                        </div> 

                        <div class="lg:w-1/2 text-left flex flex-col items-start justify-center" data-aos="fade-left">
                            <p class="text-4xl text-secondary uppercase text-font-veener">Parents</p>

                            <p class="pt-6 pb-3">Gender transformative education moves beyond simply improving access to education for girls and women. It equips and empowers stakeholders to examine, challenge, and change harmful gender norms and imbalances of power that advantage boys and men over girls and women.</p>

                            <p class="pb-3">Plan International, Transform Education, UNGEI and UNICEF Education are calling for this critical reset in education. Important work on this has already begun with the support of Global Affairs Canada and Dubai Cares and in this short brief, we explain how to “do” gender-transformative education: what it means, why it’s important and how to make it happen. </p>
                        </div>
                    </div>

                    <div v-if="displayGrandparents" class="flex flex-col lg:flex-row gap-6 lg:gap-10 xl:gap-14 py-10 lg:py-14">
                        <div data-aos="fade-right" class="lg:w-1/2 text-left flex flex-col items-start justify-center">
                            <p class="text-4xl text-tertiary uppercase text-font-veener">Grandparents</p>

                            <p class="pt-6 pb-3">Gender transformative education moves beyond simply improving access to education for girls and women. It equips and empowers stakeholders to examine, challenge, and change harmful gender norms and imbalances of power that advantage boys and men over girls and women.</p>

                            <p class="pb-3">Plan International, Transform Education, UNGEI and UNICEF Education are calling for this critical reset in education. Important work on this has already begun with the support of Global Affairs Canada and Dubai Cares and in this short brief, we explain how to “do” gender-transformative education: what it means, why it’s important and how to make it happen. </p>
                        </div>

                        <div data-aos="fade-left" class="lg:w-1/2">
                            <div>
                                <img class="w-full" src="../../assets/about-us/home-slider.jpg" alt="">
                            </div>
                        </div>
                    </div>

                    <div v-if="displayCaregivers" class="flex flex-col lg:flex-row gap-6 lg:gap-10 xl:gap-14">
                        <div data-aos="fade-right" class="lg:w-1/2">
                            <div>
                                <img class="w-full" src="../../assets/about-us/home-slider.jpg" alt="">
                            </div>
                        </div>

                        <div data-aos="fade-left" class="lg:w-1/2 text-left flex flex-col items-start justify-center">
                            <p class="text-4xl text-future uppercase text-font-veener">Caregivers</p>

                            <p class="pt-6 pb-3">Gender transformative education moves beyond simply improving access to education for girls and women. It equips and empowers stakeholders to examine, challenge, and change harmful gender norms and imbalances of power that advantage boys and men over girls and women.</p>

                            <p class="pb-3">Plan International, Transform Education, UNGEI and UNICEF Education are calling for this critical reset in education. Important work on this has already begun with the support of Global Affairs Canada and Dubai Cares and in this short brief, we explain how to “do” gender-transformative education: what it means, why it’s important and how to make it happen. </p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>
</template>

<script>
import AOS from 'aos'
import 'aos/dist/aos.css'

export default {
    components: {},

    data() {
        return {
            host: "https://api.catchbangladesh.com",
            displayParents: true,
            displayGrandparents: false,
            displayCaregivers: false
        }
    },

    created() {
        AOS.init({
            duration: 1000,
        })
    },

    methods: {
        showParents() {
            this.displayParents = true,
            this.displayGrandparents = false,
            this.displayCaregivers = false
        },

        showGrandParents() {
            this.displayParents = false,
            this.displayGrandparents = true,
            this.displayCaregivers = false
        },

        showCaregivers() {
            this.displayParents = false,
            this.displayGrandparents = false,
            this.displayCaregivers = true
        },
    }
}
</script>

<style scoped>
.bottom-img-size {
    width: 360px;
}

@media screen and (max-width: 640px) {
    .mobile-width {
        @apply px-12
    }
}
</style> 