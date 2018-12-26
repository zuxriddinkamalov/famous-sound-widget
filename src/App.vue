<template>
  <div id="app" full-wrap>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
};
</script>

<style lang="sass">
  body
    width: 100%
    height: 100%
    display: flex
  #app
    display: flex
    flex-basis: 100%
</style>
