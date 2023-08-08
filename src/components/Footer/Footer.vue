<template>
    <div class="w-full">
        <div class="w-full bg-primary flex justify-center">
            <div class="container flex justify-center">
                <!-- Top portion -->
                <div class="flex flex-col md:flex-row gap-8 lg:gap-14 justify-center items-center py-10 lg:py-14 px-4 lg:px-12 xl:px-20 text-white">
                    <div class="flex flex-col justify-center items-center">
                        <img class="h-14 md:h-16 xl:h-20" src="../../assets/logo/logo-white.png" alt="">
                        <p class="pt-6 text-lg w-full text-center">Follow us on social media:</p>
                        <div class="flex pt-4 gap-4">
                            <a href="https://www.facebook.com/planinbangladesh/" target="_blank"><i class="fa-brands fa-square-facebook" style="font-size: x-large;"></i></a>
                            <a href="https://twitter.com/PlanBangladesh" target="_blank"><i class="fa-brands fa-twitter" style="font-size: x-large;"></i></a>
                        </div>
                    </div>
                    <div class="w-full sm:w-96 px-4 sm:px-0 text-center">
                        <p>Gender transformative education moves beyond simply improving access to education for girls and women. It equips and empowers stakeholders to examine, challenge, and change harmful gender norms and imbalances of power that advantage boys and men over girls and women.</p>
                    </div>
                </div>
            </div>
        </div>

        <!-- Bottom portion -->
        <div class="w-full py-4 px-4 lg:px-12 xl:px-20 bg-gray-700">
            <div class="w-full flex flex-col lg:flex-row lg:justify-between">
                <div class="text-sm text-white">
                    <p>GeTECD - Plan International Bangladesh</p>
                </div>
                <div class="pt-1 lg:pt-0">
                    <p class="text-gray-300 text-sm">
                        © <a class="text-white hover:text-primary font-semibold">Plan International Bangladesh</a> All Rights Reserved | Developed by <a class="text-white hover:text-primary font-semibold" href="https://www.facebook.com/catchbangladesh" target="_blank" >Catch Bangladesh | </a> <a class="text-white hover:text-primary font-semibold" href="https://www.facebook.com/catchbitflex" target="_blank" >BitFlex</a>
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapState } from "vuex";

export default { 
    data () {
        return {
            host: "https://api.catchbangladesh.com"
        }
    },

    computed: {
        ...mapState({
            site_settings: (state) => state.siteSettings.site_settings
        })
    },

    mounted() {
        this.$store.dispatch('siteSettings/getSiteSettings')
    }
}
</script>

<style></style>