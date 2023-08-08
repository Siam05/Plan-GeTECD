<template>
    <div class="py-10 lg:py-14">
        <div class="flex justify-center">

            <!-- Mobile -->
            <div class="flex md:hidden">
                <div class="container flex flex-col lg:flex-row items-center gap-6 lg:gap-10 xl:gap-14 px-4 lg:px-12 xl:px-20">
                    <div data-aos="zoom-in" class="lg:w-1/2">
                        <div>
                            <video class="w-full" controls autoplay>
                                <source src="../../assets/animations/video.mp4" type="video/mp4">
                            </video>
                        </div>
                    </div>

                    <div data-aos="zoom-in" class="lg:w-1/2 text-left flex flex-col items-start justify-center">
                        <p class="text-3xl text-primary">Gender Transformative Early Childhood Development</p>

                        <p class="pt-6 pb-3">Gender transformative education moves beyond simply improving access to education for girls and women. It equips and empowers stakeholders to examine, challenge, and change harmful gender norms and imbalances of power that advantage boys and men over girls and women.</p>

                        <p class="pb-3">Plan International, Transform Education, UNGEI and UNICEF Education are calling for this critical reset in education. Important work on this has already begun with the support of Global Affairs Canada and Dubai Cares and in this short brief, we explain how to “do” gender-transformative education: what it means, why it’s important and how to make it happen. </p>

                        <a class="text-primary text-lg font-medium border-b border-primary" href="https://drive.google.com/file/d/1fkeqAWc8HsuLTKorhdgA3k4PD56Aa9Sb/view?usp=drive_link" target="_blank">See More</a>

                        <div class="flex gap-1.5 pt-3 text-lg">
                            <p>Also available in:</p>
                            <a class="text-primary font-medium" href="https://drive.google.com/file/d/1fkeqAWc8HsuLTKorhdgA3k4PD56Aa9Sb/view?usp=drive_link" target="_blank">Bangla</a>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Desktop -->
            <div class="hidden md:flex">
                <div class="container flex flex-col lg:flex-row items-center gap-6 lg:gap-10 xl:gap-14 px-4 lg:px-12 xl:px-20">
                    <div data-aos="fade-right" class="lg:w-1/2">
                        <div>
                            <video class="w-full" controls autoplay>
                                <source src="../../assets/animations/video.mp4" type="video/mp4">
                            </video>
                        </div>
                    </div>

                    <div data-aos="fade-left" class="lg:w-1/2 text-left flex flex-col items-start justify-center">
                        <p class="text-3xl text-primary">Gender Transformative Early Childhood Development</p>

                        <p class="pt-6 pb-3">Gender transformative education moves beyond simply improving access to education for girls and women. It equips and empowers stakeholders to examine, challenge, and change harmful gender norms and imbalances of power that advantage boys and men over girls and women.</p>

                        <p class="pb-3">Plan International, Transform Education, UNGEI and UNICEF Education are calling for this critical reset in education. Important work on this has already begun with the support of Global Affairs Canada and Dubai Cares and in this short brief, we explain how to “do” gender-transformative education: what it means, why it’s important and how to make it happen. </p>

                        <a class="text-primary text-lg font-medium border-b border-primary" href="https://drive.google.com/file/d/1fkeqAWc8HsuLTKorhdgA3k4PD56Aa9Sb/view?usp=drive_link" target="_blank">See More</a>

                        <div class="flex gap-1.5 pt-3 text-lg">
                            <p>Also available in:</p>
                            <a class="text-primary font-medium" href="https://drive.google.com/file/d/1fkeqAWc8HsuLTKorhdgA3k4PD56Aa9Sb/view?usp=drive_link" target="_blank">Bangla</a>
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

    data() {
        return {
            host: "https://api.catchbangladesh.com"
        }
    },

    created() {
        AOS.init({
            duration: 1000,
        })
    }
}
</script>

<style></style> 