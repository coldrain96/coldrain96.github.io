<template>
  <section class="facts" style="animation: fadeIn 2s;">
    <div class="container">
      <div class="facts--wrapper page-wrapper vh-100 align-items-center">
        <h2 class="facts__title mob-page-title">
          Интересные факты
        </h2>
        <b-row class="justify-content-center">
          <div class="facts__info">
            <b-col cols="12">
              <swiper :options="swiperOption">
                <swiper-slide
                  v-for="(fact, index) in facts"
                  :key="index"
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
    props: {
      facts: {
        type: Array,
        required: true
      }
    }
  }
</script>

<style lang="scss" src="@/assets/scss/components/facts.scss" scoped></style>
