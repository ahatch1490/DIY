<script setup lang="ts">
import Item from "./Item.vue";
import { GridItem } from "../types/GridItem.ts";

defineProps({ items:
      {
        type: Array<GridItem>,
      }
});
</script>

<template>
<div  class ="grid grid-cols-4 gap-4" >
  <div v-for="item in items">
    <item  v-bind="item"></item>
  </div>
</div>
</template>

<style scoped>

</style>