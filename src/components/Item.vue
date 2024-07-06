<script setup lang="ts">
  defineProps(['image_url', 'title','description', 'link_url'
  ])
</script>

<template>
  <div class="grid max-w-xl border rounded-md shadow bg-amber-600	items-center">
    <div class="flex justify-center items-center">
      <h1 class="text-2xl text-center m-4 capitalize" >{{title}}</h1>
      <a :href=link_url target="_blank" >
        <img class=" h-24 font-semibold mb-1.5 " :src="image_url" alt={{title}}>  </img>
      </a>
    </div>
  </div>
</template>

<style >

</style>