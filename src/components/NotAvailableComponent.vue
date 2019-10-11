<template>
	<div class="mobile"><strong>Sorry but mobile version it's not available yet.</strong></div>
</template>
<style lang="scss" scoped>
	.mobile {
		display: none;
	}

	@media all and (max-width: 991px) {
		.mobile {
			display: block;
			position: fixed;
			width: 100%;
			height: 100%;
			color: #000;
			font-size: 34px;
			z-index: 1100;
			top: 0;
			right: 0;
			left: 0;
			bottom: 0;
			background-color: #ffffff;
			padding: 60px;
		}
	}
</style>
