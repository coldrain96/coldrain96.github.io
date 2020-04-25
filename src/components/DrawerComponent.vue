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
        <router-link tag="li" class="nav-item" exact active-class="active" to="/">
          <a class="nav-link">Обо мне</a>
        </router-link>
        <router-link tag="li" class="nav-item" exact active-class="active" to="/facts">
          <a class="nav-link">Факты</a>
        </router-link>
        <router-link tag="li" class="nav-item" exact active-class="active" to="/projects">
          <a class="nav-link">Проекты</a>
        </router-link>
        <router-link tag="li" class="nav-item" exact active-class="active" to="/contacts">
          <a class="nav-link">Контакты</a>
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
