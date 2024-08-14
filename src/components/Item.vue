<script setup lang="ts">
  import Stars from "./Stars.vue";
  import {GridItem} from "../types/GridItem.ts";
  import {PropType} from "vue";

  const props =defineProps({gridItem: {
      type: Object as PropType<GridItem>,
      required: true
    }});

  const emit= defineEmits(["selected"])

  function selected() {
    console.log('called selected');
    emit('selected',props.gridItem);
  }


 // const count = 5;
 // const data = {count:5,selected:}
</script>

<template>
  <div v-on:click="selected">
    <div class="gid grid-cols-1 justify-center justify-self-center  bg-amber-600 border-amber-600 rounded-md min-w-40 min-h-50  my-3 mx-3">
      <div class="grid border rounded-md items-center py-1 px-1 border-amber-600 ">
        <div class="grid max-w-xl bg-white border rounded-md items-center pb-5">
          <h1 class="row-auto text-2xl text-center m-4 capitalize text-grey-700" >{{gridItem.title}}</h1>
          <div class="row-auto items-center justify-self-center rounded">
            <img class=" h-24 font-semibold mb-1.5 items-center rounded" :src="gridItem.image_url" alt={{gridItem.title}}>  </img>
          </div>
          <Stars v-if="gridItem.stars" :stars="gridItem.stars"></Stars>
        </div>

      </div>
      </div>

  </div>
</template>

<style >

</style>