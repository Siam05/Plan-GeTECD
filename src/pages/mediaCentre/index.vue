<template>
    <div>
       <Header />
       <MediaCentre />
       <Footer />
    </div>
</template>

<script>
import Header from '../../components/Header/Header.vue';
import MediaCentre from '../../components/MediaCentre/MediaCentre.vue';
import Footer from '../../components/Footer/Footer.vue';

export default { 
    components: {
        Header,
        MediaCentre,
        Footer
    }
}
</script>

<style scoped></style>