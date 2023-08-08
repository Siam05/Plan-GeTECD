<template>
	<div class="flex flex-col justify-center items-center pt-36 lg:pt-40 pb-12 lg:pb-20 bg-background"> 
  
		<div class="container px-4 sm:px-8 lg:px-12 xl:px-32 2xl:px-48">
			<div class="flex flex-col items-start">
				<!-- <div class="w-full">
					<div class="text-left">
						<p class="text-xl xl:text-3xl text-left">{{ caseDetail.title }}</p>
						<div class="text-justify text-gray-600 pt-6" v-html="caseDetail.description"></div>
					</div>
				</div>	 -->
			</div>
		</div>
	</div>
</template>

<script>
// import { mapState } from "vuex";

export default {
	props: ["slug"],
	
	// computed: {
	// 	...mapState({
	// 		caseDetail: (state) => state.caseStudies.case_study,
	// 	}),
	// },
	
	// mounted() {
    //     console.log(this.slug)
	// 	this.$store.dispatch("caseStudies/getCaseDetailsBySlug", this.slug);
		
	// }
};
</script>