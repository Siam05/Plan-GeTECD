<template>
    <div>
        <div class="background">
            <div class="h-full w-full flex justify-center items-center">
                <!-- <div class="container px-4 lg:px-12 xl:px-20">
                    <div class="flex flex-col items-start text-white">
                        <p data-aos="fade-right" class="font-semibold">Training Manual</p>
                        <p data-aos="fade-left" class="text-xl lg:text-4xl font-semibold my-4">GENDER INFORMATIVE TRAINING MANUAL</p>
                        <p data-aos="fade-right" class="text-base lg:text-2xl">Learning and resources on gender in education</p>
                    </div>
                </div> -->
            </div>
        </div>

        <div class="bg-tertiary py-10 lg:py-14">
            <div class="h-full w-full blur-background flex justify-center items-center">
                <div class="container px-6 md:px-10 lg:px-52 xl:px-72">
                    <div class="flex flex-col text-white">
                        <!-- <p class="text-2xl font-semibild">Welcome to Training Manual Hub</p> -->
                        <p class="text-xl lg:text-3xl font-semibold pb-2">GENDER INFORMATIVE TRAINING MANUAL</p>
                        <p class="text-base lg:text-2xl">Learning and resources on gender in education</p>

                        <i class="pi pi-minus py-4" style="font-size: 2rem;;"></i>

                        <p class="">The first ever digital library featuring all types of learning content relating to gender in education, our Knowledge Hub is dedicated to organizations and individuals working to advance gender equality in and through education. Explore our resource centres, feature collections and more to build your knowledge across the field. Help expand the platform by sharing your resources below.</p>

                        <!-- <div class="pt-4">
                            <button class="border-2 border-white text-white px-4 lg:px-6 py-2">SUBMIT A RESOURCE</button>
                        </div> -->
                    </div>
                </div>
            </div>
        </div>

        <div class="bg-primary">
            <p class="py-4 text-xl md:text-2xl text-white font-semibold">Search your training manual</p>
        </div>

        <div class="flex justify-center">
            <div class="container py-10 lg:py-14">
                <div>
                    <span class="p-input-icon-left">
                        <i class="pi pi-search" />
                        <InputText v-model="value1" placeholder="Search" class="search-width" />
                    </span>
                </div>

                <div class="flex flex-col sm:flex-row px-4 lg:px-12 xl:px-20 gap-4 sm:gap-6 pt-8">
                    <button class="w-full h-12 bg-future font-semibold text-white" @click="showParents">PARENTS</button>
                    <button class="w-full h-12 bg-secondary font-semibold text-white" @click="showSbk">SBK</button>
                    <button class="w-full h-12 bg-tertiary font-semibold text-white" @click="showTeachers">TEACHERS</button>
                </div>
            </div>
        </div>

        <!-- For Displaying Previous Buttons -->
        <div class="bg-background py-10 lg:py-14 flex justify-center items-center">
            <div class="container">
                <div v-if="displayParents" class="">
                    <p class="text-future text-4xl text-font-veener">PARENTS</p>

                    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mt-6 px-4 lg:px-12 xl:px-20">
                        <div v-for="(parent, index) in parents" :key="index" data-aos="zoom-in" class="bg-white rounded-xl shadow">
                            <img class="h-60 lg:h-64 xl:h-72 w-full rounded-t-xl object-cover" :src="parent.image" alt="">

                            <div class="text-left pt-2">
                                <p class="font-semibold p-4">{{ parent.title }}</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div v-if="displaySbk">
                    <p class="text-secondary text-4xl text-font-veener">SBK</p>

                    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mt-6 px-4 lg:px-12 xl:px-20">
                        <div v-for="(sbk, index) in sbks" :key="index" data-aos="fade-right" class="bg-white rounded-xl shadow">
                            <img class="h-60 lg:h-64 xl:h-72 w-full rounded-t-xl object-cover" :src="sbk.image" alt="">

                            <div class="text-left pt-2">
                                <p class="font-semibold p-4">{{ sbk.title }}</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div v-if="displayTeachers">
                    <p class="text-tertiary text-4xl text-font-veener">TEACHERS</p>

                    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mt-6 px-4 lg:px-12 xl:px-20">
                        <div v-for="(teacher, index) in teachers" :key="index" data-aos="fade-left" class="bg-white rounded-xl shadow">
                            <img class="h-60 lg:h-64 xl:h-72 w-full rounded-t-xl object-cover" :src="teacher.image" alt="">

                            <div class="text-left pt-2">
                                <p class="font-semibold p-4">{{ teacher.title }}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- <div class="flex justify-center">
            <div class="container my-8 lg:my-16 px-4 lg:px-12 xl:px-20">
                <p class="text-primary text-6xl text-font-veener">BLOGS</p>
                <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 pt-8">
                    <div v-for="(blog, index) in blogs" :key="index" data-aos="zoom-in" class="rounded-xl shadow">
                        <div class="w-full">
                            <div class="rounded-2xl flex justify-center">
                                <img class="h-64 w-full rounded-t-2xl object-cover" :src="blog.image" alt="">
                            </div>
                            
                            <div class="p-4 text-left bg-background">
                                <p class="text-xl font-semibold text-gray-500">{{ blog.title }}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div> -->
    </div>
</template>

<script>
import { mapState } from "vuex";
import InputText from 'primevue/inputtext';
import AOS from 'aos'
import 'aos/dist/aos.css'

export default { 
    components: {
        InputText
    },

    data() {
        return {
            host: "https://api.catchbangladesh.com",

            displayParents: true,
            displaySbk: false,
            displayTeachers: false
        }
    },

    computed: {
        ...mapState({
            parents: (state) => state.training.parents,
            sbks: (state) => state.training.sbks,
            teachers: (state) => state.training.teachers,
            // blogs: (state) => state.training.blogs,
        })
    },

    created() {
        AOS.init({
            duration: 1000,
        })
    },

    methods: {
        showParents() {
            this.displayParents = true,
            this.displaySbk = false,
            this.displayTeachers = false
        },
        showSbk() {
            this.displayParents = false,
            this.displaySbk = true,
            this.displayTeachers = false
        },
        showTeachers() {
            this.displayParents = false,
            this.displaySbk = false,
            this.displayTeachers = true
        },
    }
}
</script>

<style scoped>
    .search-width {
        width: 650px;
    }

    .background {
        background-image: url("../../assets/stories/111.jpeg");
        background-size: cover;
        object-fit: cover;
        background-repeat: no-repeat;
        height: 600px
    }

    @media screen and (max-width: 700px) {
        .search-width {
            width: 450px;
        }
    }

    @media screen and (max-width: 640px) {
        .background {
            height: 320px
        }

        .search-width {
            width: 350px;
        }
    }

    @media screen and (max-width: 450px) {
        .search-width {
            width: 250px;
        }
    }
</style> 