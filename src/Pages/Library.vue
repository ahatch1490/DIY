<script setup lang="ts">
import {GridItem} from "../types/GridItem.ts";
import ItemGrid from "../components/ItemGrid.vue";
const items: Array<GridItem> = [{
  id: 1,
  title: 'First Cut at the shelf',
  image_url:'/images/Library/lib_step_1.jpeg',
  description:'',
  link_url:'https://www.example.com',
  stars: null
},{
  id: 2,
  title: 'Track Saw',
  image_url:'/images/Library/lib_step_2.jpeg',
  description: 'A crispy micro brew buries a Coors about an Avery IPA, or a Red Stripe of a Budweiser Select plays pinochle with the scooby snack. Now and then, a coors light intoxicatedly buries a bottle of a Fosters. The Mango Beer near a lager drunkenly figures out a blood clot from a razor blade beer, but an Avery IPA recognizes an often ravishing Dos Equis. A pit viper toward the booze prays, because a Honey Brown over another Labatts buys an expensive drink for a Mango Beer about a sake bomb.',
  link_url:'https://www.example.com',
  stars: null
}, {
  id: 3,
  title: 'Tracks',
  image_url:'/images/Library/lib_step_3.jpeg',
  description: 'A crispy micro brew buries a Coors about an Avery IPA, or a Red Stripe of a Budweiser Select plays pinochle with the scooby snack. Now and then, a coors light intoxicatedly buries a bottle of a Fosters. The Mango Beer near a lager drunkenly figures out a blood clot from a razor blade beer, but an Avery IPA recognizes an often ravishing Dos Equis. A pit viper toward the booze prays, because a Honey Brown over another Labatts buys an expensive drink for a Mango Beer about a sake bomb.',
  link_url:'https://www.example.com',
  stars: null
},{
  id: 4,
  title: 'Table Saw',
  image_url:'/images/Library/lib_step_4.jpeg',
  description: 'A crispy micro brew buries a Coors about an Avery IPA, or a Red Stripe of a Budweiser Select plays pinochle with the scooby snack. Now and then, a coors light intoxicatedly buries a bottle of a Fosters. The Mango Beer near a lager drunkenly figures out a blood clot from a razor blade beer, but an Avery IPA recognizes an often ravishing Dos Equis. A pit viper toward the booze prays, because a Honey Brown over another Labatts buys an expensive drink for a Mango Beer about a sake bomb.',
  link_url:'https://www.example.com',
  stars: null
},{
  id: 5,
  title: 'Miter Saw',
  image_url:'/images/Library/lib_step_5.jpeg',
  description: 'A crispy micro brew buries a Coors about an Avery IPA, or a Red Stripe of a Budweiser Select plays pinochle with the scooby snack. Now and then, a coors light intoxicatedly buries a bottle of a Fosters. The Mango Beer near a lager drunkenly figures out a blood clot from a razor blade beer, but an Avery IPA recognizes an often ravishing Dos Equis. A pit viper toward the booze prays, because a Honey Brown over another Labatts buys an expensive drink for a Mango Beer about a sake bomb.',
  link_url:'https://www.example.com',
  stars: null
},{
  id: 6,
  title: 'Band Saw',
  image_url:'/images/Library/lib_step_6.jpeg',
  description: 'A crispy micro brew buries a Coors about an Avery IPA, or a Red Stripe of a Budweiser Select plays pinochle with the scooby snack. Now and then, a coors light intoxicatedly buries a bottle of a Fosters. The Mango Beer near a lager drunkenly figures out a blood clot from a razor blade beer, but an Avery IPA recognizes an often ravishing Dos Equis. A pit viper toward the booze prays, because a Honey Brown over another Labatts buys an expensive drink for a Mango Beer about a sake bomb.',
  link_url:'https://www.example.com',
  stars: null
}, {
  id: 7,
  title: 'Router Kit',
  image_url:'/images/Library/lib_step_7.jpeg',
  description: 'A crispy micro brew buries a Coors about an Avery IPA, or a Red Stripe of a Budweiser Select plays pinochle with the scooby snack. Now and then, a coors light intoxicatedly buries a bottle of a Fosters. The Mango Beer near a lager drunkenly figures out a blood clot from a razor blade beer, but an Avery IPA recognizes an often ravishing Dos Equis. A pit viper toward the booze prays, because a Honey Brown over another Labatts buys an expensive drink for a Mango Beer about a sake bomb.',
  link_url:'https://www.example.com',
  stars: null
},{
  id: 8,
  title: 'Trim Router',
  image_url:'/images/Library/lib_step_8.jpeg',
  description: 'A crispy micro brew buries a Coors about an Avery IPA, or a Red Stripe of a Budweiser Select plays pinochle with the scooby snack. Now and then, a coors light intoxicatedly buries a bottle of a Fosters. The Mango Beer near a lager drunkenly figures out a blood clot from a razor blade beer, but an Avery IPA recognizes an often ravishing Dos Equis. A pit viper toward the booze prays, because a Honey Brown over another Labatts buys an expensive drink for a Mango Beer about a sake bomb.',
  link_url:'https://www.example.com',
  stars: null
}];
</script>

<template>
  <h1 class="text-center">Library</h1>
  <div class="box ">
    <ItemGrid v-bind:items ></ItemGrid>
  </div>
</template>

<style scoped>

</style>