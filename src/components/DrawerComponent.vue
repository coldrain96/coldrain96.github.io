<template>
  <div class="overlay">
    <aside class="drawer">
      <div class="drawer-hamburger hamburger">
        <a href="#" :class="{ activeNav: drawerActive }"
           @click.prevent="drawerActive = !drawerActive">
          <div class="hamburger-line line-1"></div>
          <div class="hamburger-line line-2"></div>
          <div class="hamburger-line line-3"></div>
        </a>
      </div>
      <ul v-if="drawerActive" class="drawer__list">
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
  }
</script>
<style lang="scss" src="@/assets/scss/components/drawer.scss" scoped></style>
