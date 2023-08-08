<template>
    <div>
        <Header></Header>
        <MediaCentreDetails :slug="getMediaCentreSlug()" />
        <Footer></Footer>
    </div>
</template>

<script>
import Header from '../../../components/Header/Header.vue';
import MediaCentreDetails from '../../../components/MediaCentre/MediaCentreDetails.vue';
import Footer from '../../../components/Footer/Footer.vue';

export default {
    components: { 
        Header, 
        MediaCentreDetails, 
        Footer 
    },
    
    methods:{
        getMediaCentreSlug(){
            return this.$route.params.id
        },
    }
}
</script>

<style scoped></style>