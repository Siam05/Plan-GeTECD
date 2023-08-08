<template>
    <div>
        <div class="background">
            <div class="h-full w-full flex justify-center items-center">
                <p class="text-2xl lg:text-4xl text-white font-semibold text-primary pt-20">Case Studies</p>
            </div>
        </div>

        <!-- <div class="flex justify-center">
            <div class="container px-4 py-6 lg:px-12 lg: py-12 xl:px-20 xl:py-20">

                <div class="grid gap-4 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 font-semibold text-gray-500 text-sm lg:text-base pb-6">
                    <router-link :to="{ path: '/case-studies' }">
                        <p class="cursor-pointer" :class="{'clicked': $route.meta.isAllActive}">All</p>
                    </router-link>
                    <div class="cursor-pointer" v-for="(category, index) in categories" :key="index">
                        <p @click="toCaseStudyCategory(category.slug)" :class="{'clicked': $route.meta.isCategoryActive && category.slug == slug}">{{ category.title }}</p>
                    </div>
                </div>

                <div>
                    <div class="box-weidth">
                        <div class="border rounded-2xl border-gray-300" v-for="(project, index) in case_studies" :key="index">
                            <router-link :to="{ path: '/case-study-details/' + project.slug }">
                                <div class="w-full">
                                    <div class="rounded-2xl flex justify-center">
                                        <img class="h-52 w-full rounded-t-2xl object-cover" :src="host + project.image" alt="">
                                    </div>
                                    
                                    <div class="p-3 text-left bg-background rounded-b-2xl">
                                        <p class="text-xl font-semibold">{{ project.title }}</p>
                                        <p class="text-sm pt-1">Client Name: {{ project.client_name }}</p>
                                    </div>
                                </div>
                            </router-link>
                        </div>
                    </div>
                </div>
            </div>
        </div> -->
    </div>
</template>

<script>
// import { mapState } from "vuex";

export default { 
    props: ['slug'],

    data() {
        return {
            host: "https://api.catchbangladesh.com"
        }
    },

    // computed: {
    //     ...mapState({
    //         categories: (state) => state.caseStudies.categories,
    //         case_studies: (state) => state.caseStudies.casesByCategory
    //     })
    // },

    // mounted() { 
    //     this.$store.dispatch('caseStudies/getCaseCategories') 
    //     this.$store.dispatch('caseStudies/getCasesByCategory', this.slug)
    // },

    methods: {
        toCaseStudyCategory(category_slug) {
            this.$store.dispatch('caseStudies/getCasesByCategory', category_slug)
            this.$router.push({ name: 'CaseByCategory', params: { id: category_slug } })
        }
    }
}
</script>

<style scoped>
    .background {
        background-image: url("../../assets/about-us/case-study.jpg");
        object-fit: cover;
        background-size: cover;
        background-repeat: no-repeat;
        height: 390px
    }

    .box-weidth {
        @apply grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 2xl:gap-8
    }

    .clicked {
        @apply border-b-2 pb-2 border-primary text-primary;
    }

    @media screen and (max-width: 640px) {
        .box-weidth {
            @apply grid grid-cols-2 px-0
        }

        .background {
            height: 320px
        }
    }

    @media screen and (max-width: 520px) {
        .box-weidth {
            @apply grid grid-cols-1 px-16
        }
    }

    @media screen and (max-width: 450px) {
        .box-weidth {
            @apply px-8
        }
    }

    @media screen and (max-width: 410px) {
        .box-weidth {
            @apply px-6
        }
    }

    @media screen and (max-width: 370px) {
        .box-weidth {
            @apply px-0
        }
    }
</style> 