<template>
    <div class="py-10 lg:py-14 bg-white"> 
        <div class="flex justify-center">
            <div class="container flex flex-col px-4 lg:px-12 xl:px-20">
                <iframe class="pdf-height" :src="'https://flowpaper.com/flipbook/' + 'https://api.catchbangladesh.com/media/c9656e96-0478-4e13-b39e-0b687e2a5bce.pdf'" width="100%"  style="border: none;" allowFullScreen></iframe>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    data() {
        return {
            host: "https://api.catchbangladesh.com"
        }
    }
}
</script>

<style scoped>
.pdf-height {
    height: 700px;
}

@media screen and (max-width: 1024px) {
    .pdf-height {
        height: 600px;
    }
}

@media screen and (max-width: 768px) {
    .pdf-height {
        height: 500px;
    }
}

@media screen and (max-width: 600px) {
    .pdf-height {
        height: 450px;
    }
}

@media screen and (max-width: 550px) {
    .pdf-height {
        height: 410px;
    }
}

@media screen and (max-width: 480px) {
    .pdf-height {
        height: 390px;
    }
}
</style> 