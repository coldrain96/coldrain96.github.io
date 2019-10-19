<template>
	<section class="home" style="animation: fadeIn 2s;">
		<b-container>
			<b-row>
				<b-col cols="12">
					<b-row class="vh-100 align-items-center">

						<b-col cols="6">
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
<style lang="scss" src="@/assets/scss/components/about.scss" scoped></style>
