<script setup lang="ts">
import {GridItem} from "../types/GridItem.ts";
import {ref} from "vue";
import {Nullable} from "../types/Nullable.ts";
let props = defineProps({ items:
      {
        type: Array<GridItem>,
        default: [],
      }
});
let selected = ref<Nullable<GridItem>>(null)

const selectionHandler = (gridItem: GridItem) => {
  selected.value = gridItem;
};
selectionHandler(props.items[0]);
</script>

<template>
  <div v-if="selected" class="max-w-xl border rounded-md shadow m-3">
    <div class="grid h-50 place-items-center m-3">
      <div class="color">
        <h1 class="text-4xl text-gray-700 text-center m-4 capitalize " >{{selected.title}}</h1>
        <img class=" h-50 font-semibold mb-1.5 border rounded border-0 " :src="selected.image_url" alt="{{selected.title}}" />
      </div>
    </div>
    <div class="text-sm rounded p-2.5 pb-2 " >{{selected.description}}</div>
  </div>
</template>

<style scoped>

</style>