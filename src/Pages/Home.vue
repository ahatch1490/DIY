<script setup lang="ts">
import ItemGrid from "../components/ItemGrid.vue";
import {GridItem} from "../types/GridItem.ts";
const items: Array<GridItem> = [{
  id: 1,
  title: 'Tools',
  image_url:'/images/rigid_drills.jpg',
  description: '',
  link_url:"/tools",
  stars: null
},{
  id: 2,
  title: 'Library',
  image_url:'/images/Library/lib_step_8.jpeg',
  description: '',
  link_url:"/Library",
  stars: null
}]
</script>

<template>
<h1 class="font-bold text-center">Home</h1>
  <div class="content-center flex items-center justify-center">
    <item-grid v-bind:items></item-grid>
  </div>
</template>

<style scoped>

</style>