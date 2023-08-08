<template>
    <div class="bg-background">
        <Header />
        <Slider />
        <AboutGeTECD />
        <InformationGuideline />
        <ParentingPackages />
        <ParentingFacilitators />
        <ProjectVideo />
        <Footer />
    </div>
</template>

<script>
import Header from '../../components/Header/Header.vue';
import Slider from '../../components/Home/Slider.vue';
import AboutGeTECD from '../../components/Home/About-GeTECD.vue';
import InformationGuideline from '../../components/Home/Information-Guideline.vue';
import ParentingPackages from '../../components/Home/Parenting-Package.vue';
import ParentingFacilitators from '../../components/Home/Parenting-Facilitators.vue';
import ProjectVideo from '../../components/Home/Project-Video.vue';
import Footer from '../../components/Footer/Footer.vue';

export default { 
    components: {
        Header,
        Slider,
        AboutGeTECD,
        InformationGuideline,
        ParentingPackages,
        ParentingFacilitators,
        ProjectVideo,
        Footer
    }
}
</script>

<style scoped></style>