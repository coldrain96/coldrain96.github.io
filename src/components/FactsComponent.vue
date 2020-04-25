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

                <swiper-slide
                  v-for="fact in getArrayOfAllFactsAboutMe"
                  :key="fact.id"
                >
                  <div class="slide-inner">
                    <div class="text-wrapper">
                      {{ fact }}
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
  import { mapGetters } from 'vuex'
  export default {
    data: () => ({
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
    computed: mapGetters([
    'getArrayOfAllFactsAboutMe'
    ]),
  }
</script>

<style lang="scss" src="@/assets/scss/components/facts.scss" scoped></style>
