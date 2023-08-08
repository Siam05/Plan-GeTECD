<template>
    <div>
        <!-- Mobile -->
        <div class="imageStyle flex lg:hidden" :style="{backgroundImage:`url(${slider.image_mobile})`}">
            <div class="h-full text-left flex flex-col items-end justify-end">
                <div class="px-4 sm:px-12 pb-16">
                    <p data-aos="fade-right" class="text-xl md:text-3xl text-primary p-4 bg-white text-font-veener desc-width">PLAN INTERNATIONAL BANGLADESH</p>
                    <p data-aos="fade-left" class="mt-4 text-xl sm:text-2xl lg:text-3xl font-semibold p-4 bg-primary text-white">{{ slider.title }}</p>
                    <p data-aos="fade-right" class="mt-4 p-4 bg-tertiary text-white text-lg desc-width">{{ slider.description }}</p>
                </div>
            </div>
        </div>

        <!-- Desktop -->
        <div class="imageStyle hidden lg:flex" :style="{backgroundImage:`url(${slider.image})`}">
            <div class="h-full text-left flex flex-col items-end justify-end">
                <div class="px-4 sm:px-12 pb-12">
                    <p data-aos="fade-right" class="text-xl md:text-3xl text-primary p-4 bg-white text-font-veener desc-width">PLAN INTERNATIONAL BANGLADESH</p>
                    <p data-aos="fade-left" class="mt-4 text-xl sm:text-2xl lg:text-3xl font-semibold lg:w-2/3 p-4 bg-primary text-white">{{ slider.title }}</p>
                    <p data-aos="fade-right" class="mt-4 p-4 bg-tertiary text-white text-lg desc-width">{{ slider.description }}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapState } from "vuex";
import img from '../../assets/about-us/home-slider.jpg'
import img_mobile from '../../assets/about-us/home-slider-mobile.jpg'
import AOS from 'aos'
import 'aos/dist/aos.css'

export default { 
    data() {
        return {
            host: "https://api.catchbangladesh.com",

            slider: {
                title: 'Gender Transformative Early Childhood Development (GeTECD)',
                description: 'Learning and resources on gender in education',
                image: img,
                image_mobile: img_mobile,
            }
        }
    },

    computed: {
        ...mapState({
            slider_images: (state) => state.slider.slider_images
        })
    },

    created() {
        AOS.init({
            duration: 1000,
        })
    },

    mounted() {
        this.$store.dispatch('slider/getSliderImages')
    }
}
</script>

<style scoped>
    .imageStyle {
        background-size: cover;
        object-fit: cover;
        width: 100%;
        height: 100vh;
        background-color: #16161623;
    }

    .desc-width {
        width: fit-content;
    }
</style>