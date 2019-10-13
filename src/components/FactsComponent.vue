<template>
	<section class="facts">
		<div class="container">

			<div class="facts--wrapper vh-100 align-items-center">
				<h2 class="facts__title">
					Интересные факты
				</h2>
				<div class="facts__info">
					<div class="facts__count">
						<!--						текущий индекс массива + 1-->
						/{{ factsItemMessage.length }}
					</div>
					<div class="facts__text" @click="counter()">
						{{ factsItemMessage[5] }}
					</div>
				</div>
			</div>
		</div>
	</section>
</template>

<script>
    export default {
        data: () => ({
            factsItemMessage: [
                'Большой фанат Dram and bass музыки и Rave культуры. Так же люблю jazz, hip-hop, jungle.',
                'На момент задумки создания веб-сайта злоупотреблял сахаром, но с недавних пор отказался от него. Пью чай и кофе без сахара.',
                'Читаю бумажные книги и мангу. Возможно, это не практично и дорого, но что сравнится с запахом и осязанием новой книги?',
                'Авантюрист и путешественник. Люблю различные языки и культуры народов. Сейчас обучаюсь английскому.',
                'С детства пишу стихи, а с отрочества - рассказы. Работаю над изданием сборника.',
                'Лучший отдых - костер, палатка, природа.',
                'Планирую покорить несколько горных вершин, полетать над ними на дельтаплане.',
                'Самоучка-программист. Нахожу в программировании необъяснимую прелесть.',
            ]
        }),
        methods: {
            counter(factsItemMessage) {
                for (let i = 0;i < factsItemMessage.length;i++) {
                    factsItemMessage[0] ++;
                }
            }
        }
    }
</script>

<style lang="scss" src="@/assets/scss/facts-component.scss" scoped></style>
