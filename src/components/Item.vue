<script setup lang="ts">
  import Stars from "./Stars.vue";

  defineProps(['image_url', 'title','description', 'link_url','stars'
  ])
 // const count = 5;
 // const data = {count:5,selected:}
</script>

<template>
  <div class="grid max-w-xl border rounded-md shadow bg-orange-300	items-center  p-3.5 max-w-lg">
    <div class="gid grid-cols-1 justify-center justify-self-center  bg-white rounded-md min-w-40 min-h-50">
      <div class="grid max-w-xl border rounded-md items-center">
        <h1 class="row-auto text-2xl text-center m-4 capitalize text-grey-700" >{{title}}</h1>
        <a :href=link_url target="_blank" class="row-auto items-center justify-self-center">
          <img class=" h-24 font-semibold mb-1.5 items-center" :src="image_url" alt={{title}}>  </img>
        </a>
      </div>
      <div>
<!--        <Stars v-bind:data></Stars>-->
      </div>
    </div>
  </div>
</template>

<style >

</style>