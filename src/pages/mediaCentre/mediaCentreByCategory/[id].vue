<template>
    <div>
       <Header />
       <MediaCentreByCategory :slug="getMediaCentreSlug()" />
       <Footer />
    </div>
</template>

<script>
import Header from '../../../components/Header/Header.vue';
import MediaCentreByCategory from '../../../components/MediaCentre/MediaCentreByCategory.vue';
import Footer from '../../../components/Footer/Footer.vue';

export default { 
    components: {
        Header,
        MediaCentreByCategory,
        Footer
    },

    methods: {
        getMediaCentreSlug() {
            return this.$route.params.id
        }
    }
}
</script>

<style scoped></style>