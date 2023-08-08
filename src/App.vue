<template>
    <div>
        <router-view></router-view>
    </div>
</template>

<script>
export default {}
</script>

<style>
@import url(https://db.onlinewebfonts.com/c/294f2e27fd0602c32be5a6d86f3f0b6e?family=Veneer+Regular);

#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    text-align: center;
}

.button {
    @apply text-sm capitalize rounded-3xl bg-primary border-2 border-primary text-white font-semibold px-8 py-2.5;
    background-image: linear-gradient(30deg, #0072ce 50%, transparent 0);
    background-repeat: no-repeat;
    background-size: 850px;
    background-position: 0;
    transition: background 300ms ease-in-out;
}

.button:hover {
    background-position: 100%;
    background-color: white;
    @apply text-primary font-semibold;
}

.text-font-veener {
    font-family: "Veneer Regular";
}

@media screen and (min-width: 1320px) {
    .container {
        max-width: 1320px !important;
    }
}
</style>
