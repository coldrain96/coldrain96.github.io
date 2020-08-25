<template>
  <section class="home" style="animation: fadeIn 2s;">
    <b-container>
      <div class="home--wrapper page-wrapper">
        <b-row class="desktop">
          <b-col cols="12">
            <b-row class="vh-100 align-items-center">

              <b-col cols="6">
                <div class="header__photo">
                  <img src="~@/assets/img/bg_new2.jpeg" class="header__photo--img">
                </div>
              </b-col>

              <b-col cols="6" style="animation: fadeIn 2s; overflow: hidden;">
                <b-row>
                  <div class="about">
                    <h2>Обо мне</h2>
                    <vue-typer
                            :text='TEXT_ABOUT_ME_GET'
                            :repeat='Infinity'
                            :shuffle='false'
                            initial-action='typing'
                            :pre-type-delay='70'
                            :type-delay='90'
                            :pre-erase-delay='2000'
                            :erase-delay='250'
                            erase-style='select-all'
                            :erase-on-complete='false'
                            caret-animation='solid'
                    ></vue-typer>
                  </div>
                </b-row>
                <div class="md-decoration">
                  <b-row>
                    <div class="square-upper"></div>
                  </b-row>
                  <b-row>
                    <div class="square-bottom"></div>
                  </b-row>
                </div>
              </b-col>
            </b-row>
          </b-col>
        </b-row>
        <b-row class="mobile">
          <b-col cols="12">
            <b-row class="vh-100 align-items-center">

              <b-col cols="12" style="animation: fadeIn 2s; overflow: hidden;">
                <b-row>
                  <b-col cols="12">
                    <div class="about">
                      <h2>Обо мне</h2>
                      <span v-for="about in TEXT_ABOUT_ME_GET" :key="about.id">
                      {{ about }}
                    </span>
                    </div>
                  </b-col>
                </b-row>
                <b-row>
                  <b-col cols="6" offset="6">
                    <div class="header__photo">
                      <img src="~@/assets/img/bg_new2.jpeg" class="header__photo--img">
                    </div>
                  </b-col>
                </b-row>
              </b-col>
            </b-row>
          </b-col>
        </b-row>
      </div>
    </b-container>
  </section>
</template>

<script>
  import { mapGetters } from 'vuex'

  export default {
    computed: mapGetters([
      'TEXT_ABOUT_ME_GET'
    ])
  }
</script>

<style lang="scss" src="@/assets/scss/pages/about.scss" scoped></style>
