<template>
    <div>
       <Header />
       <Clients />
       <Footer />
    </div>
</template>

<script>
import Header from '../../components/Header/Header.vue';
import Clients from '../../components/Training/Training.vue';
import Footer from '../../components/Footer/Footer.vue';

export default { 
    components: {
        Header,
        Clients,
        Footer
    }
}
</script>

<style scoped></style>