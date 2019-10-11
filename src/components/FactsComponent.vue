<template>
	<section class="about">
		<div class="container">

			<div class="interesting-facts vh-100 align-items-center">
				<h2 class="interesting-facts__title">
					Интересные факты
				</h2>
				<ul class="interesting-facts__list">
					<li class="interesting-facts__item">
						Большой фанат Dram and bass музыки и Rave культуры.
					</li>
					<li class="interesting-facts__item">
						На момент задумки создания веб-сайта злоупотреблял сахаром, хотел написать об этом, но с недавних пор отказался от него. Теперь
						пью чай и кофе без сахара.
					</li>
					<li class="interesting-facts__item">
						Читаю бумажные книги и мангу. Возможно, это не практично (и дорого!), но что сравнится с запахом и осязанием новой книги?
					</li>
					<li class="interesting-facts__item">
						Люблю различные языки и культуры народов. В душе я авантюрист и путешественник. Сейчас всерьез обучаюсь только английскому.
					</li>
				</ul>
			</div>
		</div>
	</section>
</template>

<script>
</script>

<style lang="scss" scoped>
	@import "~@/assets/scss/_mixins.scss";

	.about {
		height: auto;
		font-size: 24px;

		background-color: #f3f4f6;
		border-radius: 5px;
		background-image: url("~@/assets/img/flowers2.jpg");
		background-repeat: no-repeat;
		background-size: 200px;
		background-position: 0% 100%;
	}

	.about {

		&.container {
			display: flex;
			justify-content: center;
			flex-direction: column;
		}

	}

	.about-content {
		padding-bottom: 30px;
		border-bottom: 1px solid rgba(0, 0, 0, 0.1);
		max-width: 700px;
		margin: 0 auto;
		text-align: center;
		padding-top: 60px;
	}

	.about-content p {
		color: rgba(0, 0, 0, 0.6);
		display: flex;
		justify-content: center;
		max-width: 700px;
	}

	.about-content h2 {
		margin-top: 80px;
	}

	.interesting-facts {
		max-width: 700px;
		margin: 0 auto;
		text-align: left;
	}

	.interesting-facts h2 {
		text-align: center;
	}

	.interesting-facts__item {
		padding: 10px 0;
		color: rgba(0, 0, 0, 0.6);
		animation: fadeIn 3s;
	}
</style>
