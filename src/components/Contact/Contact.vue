<template>
    <div>
        <Toast :breakpoints="{'640px': {width: '80%', right: '0'}}" /> 
        <div class="background">
            <div class="h-full w-full flex justify-center items-center">
                <p class="text-2xl lg:text-4xl font-semibold text-primary pt-20">Contact Us</p>
            </div>
        </div>

        <div class="flex justify-center">
            <div class="container px-4 lg:px-12 py-10 xl:px-20 2xl:px-48 xl:py-20">
                <div class="w-full flex flex-col md:flex-row gap-12 lg:gap-20 2xl:gap-32">

                    <div class="w-full md:w-1/2">
                        <div class="w-full flex flex-col items-start gap-4">
                            <div class="w-full flex flex-col items-start">
                                <p class="py-1">Name</p>
                                <input v-model="message.name" type="text" class="w-full p-3 border border-primary rounded-lg text-sm" placeholder="Your Name" name="" id="">
                            </div>

                            <div class="w-full flex flex-col items-start">
                                <p class="py-1">Email</p>
                                <input v-model="message.email" type="text" class="w-full p-3 border border-primary rounded-lg text-sm" placeholder="Your Email" name="" id="">
                            </div>

                            <div class="w-full flex flex-col items-start">
                                <p class="py-1">Phone No.</p>
                                <input v-model="message.phone" type="text" class="w-full p-3 border border-primary rounded-lg text-sm" placeholder="Your Phone Number" name="" id="">
                            </div>

                            <div class="w-full flex flex-col items-start">
                                <p class="py-1">Message</p>
                                <textarea v-model="message.message" name="" class="w-full p-3 border border-primary rounded-lg text-sm" placeholder="Your message here..." id="" cols="30" rows="5"></textarea>
                            </div>
                            <button @click="sendMessage()" class="mt-2 bg-primary py-2 w-full text-white rounded-lg">Send Message</button>
                        </div>
                    </div>

                    <div class="mt-3 md:mt-0 w-full md:w-1/2">
                        <div class="w-full flex flex-col justify-center items-center text-sm">

                            <div class="w-full flex flex-col items-center pb-6 border-b border-primary">
                                <i class="fa-sharp fa-solid fa-phone self-center text-primary" style="font-size: medium"></i>
                                <p class="font-semibold pt-4 pb-2">CALL US</p>
                                <a class="text-gray-600 hover:text-primary" :href="`tel:${site_settings.phone_number}`">{{ site_settings.phone_number }}</a>
                            </div>

                            <div class="w-full pt-6 flex flex-col items-center pb-6 border-b border-primary">
                                <i class="fa-sharp fa-solid fa-clock self-center text-primary" style="font-size: medium"></i>
                                <p class="font-semibold pt-4 pb-2">HOURS</p>
                                <p class="text-gray-600">MON - FRI 9AM - 8PM, SAT 9AM - 6PM</p>
                            </div>

                            <div class="w-full pt-6 flex flex-col items-center pb-6 border-b border-primary">
                                <i class="fa-solid fa-location-dot self-center text-primary" style="font-size: medium"></i>
                                <p class="font-semibold pt-4 pb-2">ADDRESS</p>
                                <p class="text-gray-600">{{site_settings.address}}</p>
                            </div>
                
                            <div class="w-full pt-6 flex flex-col items-center pb-6 border-b border-primary">
                                <i class="fa-solid fa-envelope self-center text-primary" style="font-size: medium"></i>
                                <p class="font-semibold pt-4 pb-2">EMAIL</p>
                                <a class="text-gray-600 hover:text-primary" :href="`mailto:${site_settings.email}`">{{ site_settings.email }}</a> 
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapState } from "vuex";
import Toast from 'primevue/toast';

export default { 
    components: {
        Toast
    },

    data() {
        return {
            host: "https://api.catchbangladesh.com",
            message: {
                name: '',
                email: '',
                phone: '',
                message: ''
            }
        }
    },

    computed: {
        ...mapState({
            site_settings: (state) => state.siteSettings.site_settings
        })
    },

    mounted() {
        this.$store.dispatch('siteSettings/getSiteSettings')
    },

    methods: {
        sendMessage() {
            this.$store.dispatch('contact/createContact', this.message).then(response => {
                // console.log(response)    
                if(response.data.code == 200) { 
                    this.$toast.add({severity: 'success', summary: 'Success!', detail: response.data.response, closable: false, life: 3000})
                    this.message.name= ""
                    this.message.email = ""
                    this.message.phone = ""
                    this.message.message = ""
                }
                else {
                    this.$toast.add({severity: 'error', summary: 'Error!', detail: response.data.response, closable: false, life: 3000})
                }
            })
        }
    }
}
</script>

<style scoped>
    .background {
        background-image: url("../../assets/about-us/contact.jpg");
        background-size: cover;
        object-fit: cover;
        background-repeat: no-repeat;
        height: 390px
    }

    @media screen and (max-width: 640px) {
        .background {
            height: 320px
        }
    }
</style> 