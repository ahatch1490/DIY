<script setup lang="ts">
  defineProps(['image_url', 'title','description', 'link_url'
  ])
</script>

<template>
  <div class="max-w-xl border rounded-md shadow">
    <h1 class="text-2xl text-center m-4 capitalize " >{{title}}</h1>
    <div class="grid h-24 place-items-center">
      <div>
        <a :href=link_url target="_blank" >
          <img class=" h-24 font-semibold mb-1.5 " :src="image_url" alt={{title}}>  </img>
        </a>
      </div>
    </div>
    <div class="text-sm rounded p-2.5 pb-2 line-clamp-2" >{{description}}</div>
  </div>
</template>

<style >

</style>