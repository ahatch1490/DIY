<script setup lang="ts">
import Item from "./Item.vue";
import { GridItem } from "../types/GridItem.ts";

defineProps({ items:
      {
        type: Array<GridItem>,
      }
});

const selectedHandler = (gridItem: GridItem) => {
  console.log('called selected in parent')
  console.log(gridItem);
};
</script>

<template>
<div  class ="grid grid-cols-4 gap-4" >
  <div v-for="item in items">
    <item  :grid-item="item" @selected="selectedHandler" ></item>
  </div>
</div>
</template>

<style scoped>

</style>