<template>
	<section class="home">
		<b-container>
			<b-row>
				<b-col cols="12">
					<b-row class="vh-100 align-items-center">

						<b-col cols="6" style="animation: fadeIn 2s;">
							<div class="header__photo">
								<img src="~@/assets/img/bg_new2.jpeg" id="" class="header__photo--img" alt="">
								<!--<img :src="feksfh" @mouseover="firstPhoto = secondPhoto"/ src="~@/assets/img/bg_new3.jpeg" id="" class="header__photo&#45;&#45;img" alt="">-->
							</div>
						</b-col>

						<b-col cols="6" style="animation: fadeIn 2s; overflow: hidden;">
							<b-row>
								<div class="about">
									<h2>Обо мне</h2>
									<vue-typer
											:text='["Привет!👋","Меня зовут Камиль, мне 23 года, я веб-разработчик.👨‍💻", "Верстаю на HTML5&CSS3, познаю  тонкости языка разметки.📝",
										"Программирую на JavaScript. Пишу стихи и рассказы, люблю активные виды отдыха.🚲"]'
											:repeat='Infinity'
											:shuffle='false'
											initial-action='typing'
											:pre-type-delay='70'
											:type-delay='70'
											:pre-erase-delay='2000'
											:erase-delay='250'
											erase-style='select-all'
											:erase-on-complete='false'
											caret-animation='solid'
									></vue-typer>
								</div>
							</b-row>
							<b-row>
								<div class="square-upper"></div>
							</b-row>
							<b-row>
								<div class="square-bottom"></div>
							</b-row>

						</b-col>
					</b-row>
				</b-col>
			</b-row>
		</b-container>
	</section>
</template>

<script>
    // import moment from 'moment'

    export default {
        data: () => ({}),
        methods: {
            photoReplace() {
                const photoImg = document.getElementById('headerPhoto');
                photoImg.src = "../assets/img/bg_new3.jpeg";
            },
        },
        computed: {
            currentAgeComputed: () => {
                const currentYear = new Date().getFullYear();
                const myAge = (currentYear - 1996);
                return myAge;
            }
        },
    }
</script>
<style lang="scss" scoped>
	.home {
		background-color: #f3f4f6;
		/*height: 100vh;*/
	}

	.about {
		font-size: 24px;
		padding-bottom: 30px;
		border-bottom: 5px solid rgba(0, 0, 0, 0.1);
		max-width: 700px;
		margin: 0 auto;
		text-align: center;
		/*padding-top: 60px;*/
		margin-bottom: 30px;
		max-width: 360px;
	}

	.about p {
		color: rgba(0, 0, 0, 0.6);
		display: flex;
		justify-content: center;
		max-width: 700px;
	}

	.about h2 {
		/*margin-top: 80px;*/
		margin-top: 0 !important;
	}

	.header__photo--img {
		margin-right: auto;
		margin-left: auto;
		max-width: 100%;
		max-height: 500px;
		-webkit-box-shadow: 30px -30px 0px 5px rgba(224, 224, 224, 0.47);
		-moz-box-shadow: 30px -30px 0px 5px rgba(224, 224, 224, 0.47);
		box-shadow: 30px -30px 0px 5px rgba(224, 224, 224, 0.47);
	}

	.header-img-after img {
		position: absolute;
		right: 0;
		left: 0;
	}

	.square-upper {
		width: 70px;
		height: 70px;
		background-color: rgba(224, 224, 224, 0.47);;
		margin-left: 100px;
		margin-bottom: 30px;
	}

	.square-bottom {
		width: 50px;
		height: 50px;
		background-color: rgba(224, 224, 224, 0.47);;
		margin-left: 30px;
	}
</style>
