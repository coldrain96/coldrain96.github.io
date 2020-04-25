<template>
  <div id="app">
    <Drawer/>
    <router-view/>
    <NotAvailable/>
  </div>
</template>

<script>
  import Drawer from './components/DrawerComponent'
  import NotAvailable from './components/NotAvailableComponent'

  export default {
    name: 'App',
    components: {
      Drawer,
      NotAvailable,
    },
  };
</script>
<style lang="scss" src="@/assets/scss/main.scss"></style>
<style lang="scss" src="@/assets/scss/media.scss"></style>

<style>
  #app h2 {
    margin-top: 0px !important;
    padding-top: 42px;
  }
</style>
