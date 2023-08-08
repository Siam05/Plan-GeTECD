<template>
    <div class="flex flex-col navbar">
        <div class="nav-cross">
            <div>
                <i @click="$emit('navClosed')" class="pi pi-times py-2.5 px-3" style="font-size: 1.2rem"></i>
            </div>
        </div>

        <div class="w-full text-left">
            <router-link to="/"><P class="px-4 py-4">HOME</P></router-link>

            <router-link to="/training"><P class="px-4 py-4">TRAINING</P></router-link>

            <router-link to="/media-centre"><P class="px-4 py-4">MEDIA CENTRE</P></router-link>
        </div>
    </div>
</template>

<script>

export default {
    data () {
        return{
            displayCareer: false,
        }
    }
}
</script>

<style scoped>
.navbar {
    z-index: 999;
    width: 100vw;
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    @apply shadow-lg bg-primary;
}

.nav-cross { 
    width: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
    align-self: flex-start;
    padding-top: 2%;
    padding-right: 4%;
}

.options {
    @apply px-4 my-2 py-1 capitalize text-base;
}
</style>