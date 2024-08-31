<script setup lang="ts">
import {GridItem} from "../types/GridItem.ts";
import {PropType} from "vue";
import Stars from "./Stars.vue";
defineProps({ selected:
      {
        type: Object as PropType<GridItem>,
        default: null,
      }
});

</script>

<template>
    <div class="grid h-50 place-items-center m-3">
      <div class="color">
        <h1 class="text-4xl text-gray-700 text-center m-4 capitalize " >{{selected.title}}</h1>
        <img class=" h-50 font-semibold mb-1.5 border rounded border-0 " :src="selected.image_url" alt="{{selected.title}}" />
      </div>
      <Stars v-if="selected.stars" :stars="selected.stars"></Stars>
    </div>
    <div class="text-sm rounded p-2.5 pb-2 " >{{selected.description}}</div>
  <div>

  </div>
</template>

<style scoped>

</style>