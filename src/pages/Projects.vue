<template>
  <section class="projects" style="animation: fadeIn 2s;">
    <b-container>
      <div class="projects--wrapper page-wrapper">
        <h2 class="projects-title mob-page-title">
          Примеры проектов
        </h2>
        <div v-masonry="containerId" transition-duration="0.3s" item-selector=".grid-item">
          <div v-masonry-tile class="items">

            <div
                    v-for="project in PROJECTS_GET"
                    :key="project.id"
                    class="card-item grid-item"
            >
              <a :href="project.href">
                <div class="card-item__front">
                  <div class="img-wrap">
                    <img class="item-preview" :src="project.previewImgSrc" alt="">
                  </div>
                  <div class="card-item__back">
                    <div class="description">
                    <span
                            v-for="(value, name) in project.description"
                            :key="name.id"
                    >
                      {{ name }}
                      <br/>
                      {{ value }}
                    </span>
                    </div>
                  </div>
                </div>
              </a>
            </div>

          </div>
        </div>
      </div>
    </b-container>
  </section>
</template>

<script>
  import { mapGetters } from 'vuex'

  export default {
    computed: mapGetters([
      'PROJECTS_GET',
    ]),
  }
</script>

<style lang="scss" src="@/assets/scss/pages/projects.scss" scoped></style>
