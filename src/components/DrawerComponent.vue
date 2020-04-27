<template>
  <div class="overlay">
    <aside class="drawer" :class="{ 'bg-white': drawerActive }">
      <div class="drawer-hamburger hamburger">
        <a href="#" :class="{ activeNav: drawerActive }"
           @click.prevent="drawerActive = !drawerActive"
        >
          <div class="hamburger-line line-1"></div>
          <div class="hamburger-line line-2"></div>
          <div class="hamburger-line line-3"></div>
        </a>
      </div>
      <ul v-if="drawerActive"
          class="drawer__list"
          @click.prevent="drawerActive = !drawerActive"
      >
        <div class="nav-items-wrapper">
        <router-link
          v-for="route in $router.options.routes"
          :key="route.path"
          tag="li"
          class="nav-item"
          exact
          active-class="active"
          :to="route.path"
        >
          <a class="nav-link">{{ route.name }}</a>
        </router-link>
        </div>
      </ul>
    </aside>
  </div>
</template>

<script>
  export default {
    data: () => ({
      drawerActive: false,
      overlay: false,
    }),
    methods: {
      switchCurrentRoute() {
        const routesArray = []
        this.$router.options.routes.forEach((item) => {
          routesArray.push(item.path)
        })
      }
    }
  }
</script>
<style lang="scss" src="@/assets/scss/components/drawer.scss" scoped></style>
<style lang="scss" scoped>
  @media only screen and (max-width: 991px), only screen and (max-device-width: 991px) {
    .drawer {
      width: 100%;
      height: 60px;
      background: none;
    }
    .drawer__list {
      background-color: #fff;
    }
    .mob-page-title {
      padding-top: 72px !important;
    }
    .nav-items-wrapper {
      height: 100vh;
    }
  }
</style>
