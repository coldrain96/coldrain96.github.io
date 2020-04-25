<template>
	<transition name="fade">
		<button id="scrollBtn" v-on:click="scrollToTop" v-if="show">

		</button>
	</transition>
</template>

<script>
	export default {
		data: () => ({
			show: false,
		}),
		mounted() {
			window.onscroll = (e) => {
				const scrollY = e.target.scrollingElement.ScrollTopComponent
				const offsetTop = document.getElementById('whyChooseUs').offsetTop
				this.show = false
				if (scrollY > offsetTop) this.show = true
			}
		},
		methods: {
			scrollToTop() {
				window.scrollTo({top: 0, left: 0, behavior: "smooth"})
			}
		}
	}
</script>

<style lang="scss" src="@/assets/scss/components/scroll-top.scss" scoped></style>
