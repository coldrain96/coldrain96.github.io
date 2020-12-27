<template>
  <section class="projects">
    <b-container>
      <div class="projects--wrapper page-wrapper">
        <h2 class="projects-title mob-page-title">
          Примеры проектов
        </h2>
        <div
          v-masonry
          transition-duration="0.3s"
          item-selector=".grid-item"
        >
          <div
            v-masonry-tile
            class="items"
          >
            <div
              v-for="(project, index) in projects"
              :key="index"
              class="card-item grid-item"
            >
              <a :href="project.href">
                <div class="card-item__front">
                  <div class="img-wrap">
                    <img
                      class="item-preview"
                      :src="project.previewImgSrc"
                    >
                  </div>
                  <div class="card-item__back">
                    <div class="description">
                    <span
                      v-for="(value, key) in project.description"
                      :key="key"
                    >
                      {{ key }}
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
  export default {
    props: {
      projects: {
        type: Array,
        required: true
      }
    }
  }
</script>

<style lang="scss" src="@/assets/scss/components/projects.scss" scoped></style>
