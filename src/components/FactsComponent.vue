<template>
    <section class="facts" style="animation: fadeIn 2s;">
        <div class="container">

            <div class="facts--wrapper vh-100 align-items-center">
                <h2 class="facts__title">
                    Интересные факты
                </h2>
                <b-row class="justify-content-center">
                    <div class="facts__info">
                        <b-col cols="12">
                            <swiper :options="swiperOption">
                                <swiper-slide>
                                    <div class="slide-inner">
                                        <div class="text-wrapper">
                                            Большой фанат dram and bass музыки и rave культуры. Так же люблю jazz, hip-hop, jungle.💿
                                        </div>
                                    </div>
                                </swiper-slide>
                                <swiper-slide>
                                    <div class="slide-inner">
                                        <div class="text-wrapper">
                                            Злоупотреблял сахаром, но с недавних пор отказался от него. Пью чай и кофе без сахара.☕
                                        </div>
                                    </div>
                                </swiper-slide>
                                <swiper-slide>
                                    <div class="slide-inner">
                                        <div class="text-wrapper">
                                            Читаю бумажные книги и мангу. Возможно, это не практично и дорого, но что сравнится с запахом и осязанием новой книги?📖
                                        </div>
                                    </div>
                                </swiper-slide>
                                <swiper-slide>
                                    <div class="slide-inner">
                                        <div class="text-wrapper">
                                            Авантюрист и путешественник.🗿 Люблю различные языки и культуры народов. Сейчас обучаюсь английскому.🎓
                                        </div>
                                    </div>
                                </swiper-slide>
                                <swiper-slide>
                                    <div class="slide-inner">
                                        <div class="text-wrapper">
                                            С детства пишу стихи, а с отрочества - рассказы. Работаю над изданием сборника.✍🏻
                                        </div>
                                    </div>
                                </swiper-slide>
                                <swiper-slide>
                                    <div class="slide-inner">
                                        <div class="text-wrapper">
                                            Для меня продуктивный отдых это - костер, палатка и природа.🏕️
                                        </div>
                                    </div>
                                </swiper-slide>
                                <swiper-slide>
                                    <div class="slide-inner">
                                        <div class="text-wrapper">
                                            Планирую покорить несколько горных вершин, полетать над ними на дельтаплане.🏔️
                                        </div>
                                    </div>
                                </swiper-slide>
                                <swiper-slide>
                                    <div class="slide-inner">
                                        <div class="text-wrapper">
                                            Программист-самоучка. Нахожу в программировании необъяснимую прелесть. 💎
                                        </div>
                                    </div>
                                </swiper-slide>

                            </swiper>
                        </b-col>
                    </div>
                </b-row>
                <b-row class="justify-content-center">
                    <div class="swiper-pagination" slot="pagination"></div>
                    <div class="mouse-hint">🖱️↕️</div>
                </b-row>
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
            ],
            swiperOption: {
                width: 700,
                direction: 'vertical',
                slidesPerView: 1,
                spaceBetween: 30,
                mousewheel: true,
                pagination: {
                    el: '.swiper-pagination',
                    type: 'fraction',
                    width: 100,
                },
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev'
                }
            }
        }),
    }
</script>

<style lang="scss" src="@/assets/scss/components/facts.scss" scoped></style>
<style lang="scss" scoped>
    .slide-inner {
        max-width: 610px;
        height: 210px;
        margin: auto;
        display: flex;
        align-items: center;

        /*background-color: #ffffff;*/
        /*text-decoration: underline;*/
        /*font-style: italic;*/

        /*&:after {*/
        /*    content: "";*/
        /*    width: 25px;*/
        /*    height: 25px;*/
        /*    border-left: solid 3px rgba(0,0,0, 0.1);*/
        /*    border-top: solid 3px rgba(0,0,0, 0.1);*/
        /*    position: absolute;*/
        /*    top: 0;*/
        /*    left: 0;*/
        /*}*/
        /*&:before {*/
        /*    content: "";*/
        /*    width: 25px;*/
        /*    height: 25px;*/
        /*    border-right: solid 3px rgba(0,0,0, 0.1);*/
        /*    border-bottom: solid 3px rgba(0,0,0, 0.1);*/
        /*    position: absolute;*/
        /*    bottom: 15px;*/
        /*    right: 0;*/
        /*}*/
    }

    .swiper-container {
        max-width: 700px;
        height: auto;
        max-height: 210px;
    }

    .swiper-slide {
        text-align: center;
        font-size: 34px;
    }

    .swiper-pagination-fraction {
        position: static !important;
        display: flex;
        align-items: flex-end;
        font-size: 48px;
        padding-right: 15px;
        width: 80px !important;
    }

    .swiper-pagination-total {
        font-size: 42px !important;
        opacity: 0.4 !important;
    }

    .mouse-hint {
        display: flex;
        align-items: flex-end;
        padding-bottom: 15px;
    }


    .text-wrapper {
        &:after {
            content: "";
            width: 25px;
            height: 25px;
            border-left: solid 3px rgba(0, 0, 0, 0.1);
            border-top: solid 3px rgba(0, 0, 0, 0.1);
            position: absolute;
            top: 0;
            left: 0;
        }

        &:before {
            content: "";
            width: 25px;
            height: 25px;
            border-right: solid 3px rgba(0, 0, 0, 0.1);
            border-bottom: solid 3px rgba(0, 0, 0, 0.1);
            position: absolute;
            bottom: 15px;
            right: 0;
        }
    }
</style>
