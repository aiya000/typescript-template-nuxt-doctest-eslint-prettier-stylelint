<template>
  <div :class="$styles.bar"></div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class Navbar extends Vue {}
</script>

<style lang="sass" module>

.bar
  background-color: #1fd1ed
  height: 30vw
</style>
