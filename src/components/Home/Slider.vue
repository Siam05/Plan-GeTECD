<template>
    <div>
        <!-- Mobile -->
        <div class="imageStyle flex lg:hidden" :style="{backgroundImage:`url(${slider.image_mobile})`}"></div>

        <!-- Desktop -->
        <div class="imageStyle hidden lg:flex" :style="{backgroundImage:`url(${slider.image})`}"></div>
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