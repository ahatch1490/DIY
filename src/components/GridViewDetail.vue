<script setup lang="ts">
defineProps(['image_url', 'title','description', 'link_url'
])
</script>

<template>
  <div class="max-w-xl border rounded-md shadow m-3">
    <div class="grid h-50 place-items-center m-3">
      <div class="color">
        <h1 class="text-4xl text-gray-700 text-center m-4 capitalize " >{{title}}</h1>
        <a :href=link_url target="_blank" >
          <img class=" h-50 font-semibold mb-1.5 border rounded border-0 " :src="image_url" alt={{title}}>
          </img>
        </a>
      </div>
    </div>
    <div class="text-sm rounded p-2.5 pb-2 " >{{description}}</div>
  </div>
</template>

<style scoped>

</style>