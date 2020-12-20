<template>
  <div id="app">
    <main-store-display/>
  </div>
</template>

<script>
import MainStoreDisplay from './components/MainStoreDisplay.vue';

export default {
  name: 'App',
  components: {
    MainStoreDisplay,
  },
};
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Merriweather:wght@300;400;700&display=swap');

#app {
  font-family: Merriweather, arial;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  position: relative;
  min-height: 100%;
  text-align: center;
  color: #2c3e50;
}
</style>
