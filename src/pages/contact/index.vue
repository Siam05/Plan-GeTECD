<template>
    <div>
       <Header />
       <Contact />
       <Footer />
    </div>
</template>

<script>
import Header from '../../components/Header/Header.vue';
import Contact from '../../components/Contact/Contact.vue';
import Footer from '../../components/Footer/Footer.vue';

export default { 
    components: {
        Header,
        Contact,
        Footer
    }
}
</script>

<style scoped></style>