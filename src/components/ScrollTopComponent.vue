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
				const scrollY = e.target.scrollingElement.ScrollTopComponent;
				const offsetTop = document.getElementById('whyChooseUs').offsetTop;
				this.show = false;
				if (scrollY > offsetTop) this.show = true;
			};
		},
		methods: {
			scrollToTop() {
				window.scrollTo({top: 0, left: 0, behavior: "smooth"});
			}
		}
	}
</script>

<style lang="scss" scoped>
	button {
		position: fixed;
		border: none;
		right: 40px;
		width: 50px;
		height: 50px;
		bottom: 50px;
		border-radius: 50px;
		background: #0E209D;

		&:focus {
			outline: 0;
		}

		&:before {
			content: url("~@/assets/img/angle-arrow-down.svg");
			width: 30px;
			height: 30px;
		}

		&:after {
			width: 50px;
			height: 50px;
			/*box-shadow:10px -10px 0px #B2BDCA;*/
			border-radius: 50px;
			background-color: #FAFBFD;
		}

	}
</style>
