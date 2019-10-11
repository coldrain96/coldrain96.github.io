<template>
	<section class="projects">
		<b-container>
			<h2 class="projects-title">Проекты</h2>
			<div v-masonry="containerId" transition-duration="0.3s" item-selector=".grid-item">
				<div v-masonry-tile class="item">

					<div class="card-item grid-item">
						<a href="https://1st-admin.ru">
							<div class="card-item__front">
								<div class="img-wrap">
									<img class="item-preview" src="~@/assets/img/preview/1st.jpg" alt="">
								</div>
								<div class="card-item__back">
									<div class="description">
										<span>✒️project name:<br/> 1st-admin</span>
										<span>🛠️ stack:<br/> HTML5&SASS, Vue, Vue-cli, Bootstrap 4</span>
										<span>display on 💻:<br/> true</span>
										<span>display on 📱:<br/> true</span>
										<span>💰 production:<br/> true</span>
										<span>🖮 source code:<br/> protected</span>
										<span>drunk cups of ☕:<br/> 30</span>
										<span style="text-align: center">Total rate: 😎</span>
									</div>
								</div>
							</div>
						</a>
					</div>

					<div class="card-item grid-item">
						<a href="#">
							<div class="card-item__front">
								<div class="img-wrap">
									<img class="item-preview" src="~@/assets/img/preview/vue-my-projects.jpg" alt="">
								</div>
								<div class="card-item__back">
									<div class="description">
										<span>✒️project name:<br/> my-projects (Vue SPA) </span>
										<span>🛠️ stack:<br/> HTML5&SASS, Vue, Vue-cli, Vue-router, Vue-validate, Vuex, Bootstrap 4</span>
										<span>💻 display: true</span>
										<span>📱 display: in progress</span>
										<span>💰 production: false</span>
										<span>🖮 source code: public</span>
										<span>☕ drunk cups: 15</span>
										<span style="text-align: center">Total rate: 🧙‍♂️</span>
									</div>
								</div>
							</div>
						</a>
					</div>

					<div class="card-item grid-item">
						<a href="https://justtryagain.gitlab.io/my-projects/book-main">
							<div class="card-item__front">
								<div class="img-wrap">
									<img class="item-preview" src="~@/assets/img/preview/book-main-10-rows.jpg" alt="">
								</div>
								<div class="card-item__back">
									<div class="description">
										<span>✒️project name:<br/> book-main</span>
										<span>🛠️ stack:<br/>Flex, JQuery, HTML5&CSS3</span>
										<span>💻 display: true</span>
										<span>📱 display: false</span>
										<span>💰 production: false</span>
										<span>🖮 source code: protected</span>
										<span>☕ drunk cups: 3</span>
										<span style="text-align: center">Total rate: 🌴</span>
									</div>
								</div>
							</div>
						</a>
					</div>

					<div class="card-item grid-item">
						<a href="https://justtryagain.gitlab.io/my-projects/uksivt/">
							<div class="card-item__front">
								<div class="img-wrap">
									<img class="item-preview" src="~@/assets/img/preview/uksivt.jpg" alt="">
								</div>
								<div class="card-item__back">
									<div class="description">
										<span>✒️project name:<br/> uksivt</span>
										<span>🛠️ stack:<br/> HTML5&SASS, JQuery, Smartgrid, Gulp</span>
										<span>💻 display: true</span>
										<span>📱 display: false</span>
										<span>💰 production: false</span>
										<span>🖮 source code: protected</span>
										<span>☕ drunk cups: 10</span>
										<span style="text-align: center">Total rate: 🎓</span>
									</div>
								</div>
							</div>
						</a>
					</div>

					<div class="card-item grid-item">
						<a href="https://uvelircentr.com/actions/nika/">
							<div class="card-item__front">
								<div class="img-wrap">
									<img class="item-preview" src="~@/assets/img/preview/nika.jpg" alt="">
								</div>
								<div class="card-item__back">
									<div class="description">
										<span>✒️project name:<br/> nika (Themeforest template)</span>
										<span>🛠️ stack:<br/>HTML5&CSS3, </span>
										<span>💻 display: true</span>
										<span>📱 display: true</span>
										<span>💰 production: true</span>
										<span>🖮 source code: protected</span>
										<span>☕ drunk cups: 3</span>
										<span style="text-align: center">Total rate: 🌴</span>
									</div>
								</div>
							</div>
						</a>
					</div>

					<div class="card-item grid-item">
						<a href="https://justtryagain.gitlab.io/my-projects/the-new-providence/">
							<div class="card-item__front">
								<div class="img-wrap">
									<img class="item-preview" src="~@/assets/img/preview/thenewprovidence.jpg" alt="">
								</div>
								<div class="card-item__back">
									<div class="description">
										<span>✒️project name:<br/> the new providence</span>
										<span>🛠️ stack:<br/>Flex, HTML5&CSS3</span>
										<span>💻 display: true</span>
										<span>📱 display: false</span>
										<span>💰 production: false</span>
										<span>🖮 source code: public</span>
										<span>☕ drunk cups: 10</span>
										<span style="text-align: center">Total rate: 😏</span>
									</div>
								</div>
							</div>
						</a>
					</div>

					<div class="card-item grid-item">
						<a href="https://justtryagain.gitlab.io/my-projects/">
							<div class="card-item__front">
								<div class="img-wrap">
									<img class="item-preview" src="~@/assets/img/preview/my.jpg" alt="">
								</div>
								<div class="card-item__back">
									<div class="description">
										<span>✒️project name:<br/> my-projects (landing page)</span>
										<span>🛠️ stack:<br/> Flex, JQuery, HTML5&CSS3</span>
										<span>💻 display: true</span>
										<span>📱 display: false</span>
										<span>💰 production: false</span>
										<span>🖮 source code: public</span>
										<span>☕ drunk cups: 10</span>
										<span style="text-align: center">Total rate: 👏</span>
									</div>
								</div>
							</div>
						</a>
					</div>

					<div class="card-item grid-item">
						<a href="#">
							<div class="card-item__front">
								<div class="img-wrap">
									<img class="item-preview" src="~@/assets/img/preview/profstyle.jpg" alt="">
								</div>
								<div class="card-item__back">
									<div class="description">
										<span>✒️project name:<br/> profstyle</span>
										<span>🛠️ stack:<br/> HTML5&SASS, Smartgrid, JQuery, Gulp</span>
										<span>💻 display: true</span>
										<span>📱 display: true</span>
										<span>💰 production: true</span>
										<span>🖮 source code: protected</span>
										<span>☕ drunk cups: 15</span>
										<span style="text-align: center">Total rate: 👍</span>
									</div>
								</div>
							</div>
						</a>
					</div>

				</div>
			</div>
		</b-container>
	</section>
</template>

<script>
    export default {
        data: () => ({}),
        components: {}
    }
</script>
<style lang="scss" scoped>

	.projects {
		position: relative;
	}

	.projects h2 {
		text-align: center;
	}

	.projects-title__border {
		width: 50px;
		border-bottom: 2px solid #267df4;
	}

	.projects__wrap {
		margin: 0 auto;
		display: flex;
		flex-wrap: wrap;
		padding-bottom: 50px;
	}

	.card-item {
		padding: 10px 5px;
	}

	.card-item__front {
		max-width: 350px;
		border: 1px solid rgba(0, 0, 0, 0.1);
		/*border: 1px solid rgba(0, 0, 0, 0.7);*/
		& img {
			min-width: 100%;
		}
	}

	.card-item:hover .card-item__back {
		display: block;
		transition: width .2s;
	}

	.card-item__back {
		display: none;

		background-color: rgba(0, 0, 0, 0.7);
		z-index: 100;
		position: absolute;
		top: 10px;
		width: 350px;
		height: 98.5%;

		& .description {
			color: #ffffff;
			/*font-size: 34px;*/
			font-size: 28px;
			flex-direction: column;
			display: flex;
			padding: 50px 20px 40px 20px;
			/*align-items: center;*/
			overflow: hidden;

			& span {
				text-align: center;
				animation: fadeInLeftBig 0.5s;
				margin-bottom: 15px;

				&:after {
					content: "";
					width: 10px;
					height: 1px;
					border-bottom: solid 20px rgba(255, 255, 255, 0.3);
				}
				&:last-child {
					border-bottom:none;
				}
			}

			& span:nth-child(1) {
				transition: all .4s;
			}

			& span:nth-child(2) {
				/*animation: fadeInLeftBig 1s;*/
			}

			& span:nth-child(3) {
				/*animation: fadeInLeftBig 1s;*/
			}

			& span:nth-child(4) {
				/*animation: fadeInLeftBig 1s;*/
			}

			& span:nth-child(5) {
				/*animation: fadeInLeftBig 1s;*/
			}

			& span:nth-child(6) {
				/*animation: fadeInLeftBig 1s;*/
			}

			& span:nth-child(7) {
				/*animation: fadeInLeftBig 1s;*/
			}
		}
	}

	/*.card_item__front:hover .card_item__back{*/
	/*	background-color: rgba(0, 0, 0, 0.2);*/
	/*}*/

	.item-preview {
		max-width: 350px;
	}
</style>
