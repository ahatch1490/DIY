<script setup lang="ts">
  import Stars from "./Stars.vue";

  defineProps(['image_url', 'title','description', 'link_url','stars'
  ])
    const data =  {count:5, selected:3};

 // const count = 5;
 // const data = {count:5,selected:}
</script>

<template>
  <div class="">
    <div class="gid grid-cols-1 justify-center justify-self-center  bg-amber-600 border-amber-600 rounded-md min-w-40 min-h-50  my-3 mx-3">
      <div class="grid border rounded-md items-center py-1 px-1 border-amber-600 ">
        <div class="grid max-w-xl bg-white border rounded-md items-center pb-5">
          <h1 class="row-auto text-2xl text-center m-4 capitalize text-grey-700" >{{title}}</h1>
          <a :href=link_url target="_blank" class="row-auto items-center justify-self-center rounded">
            <img class=" h-24 font-semibold mb-1.5 items-center rounded" :src="image_url" alt={{title}}>  </img>
          </a>
        </div>
        <div>
          <Stars v-bind:data></Stars>
        </div>
      </div>
      </div>

  </div>
</template>

<style >

</style>