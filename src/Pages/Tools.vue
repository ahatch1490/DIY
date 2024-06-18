<script setup lang="ts">
import ItemGrid from '../components/ItemGrid.vue'
import {GridItem} from "../types/GridItem.ts";
const items: Array<GridItem> = [{
  title: 'Drill Set',
  image_url:'/images/rigid_drills.jpg',
  description: 'A crispy micro brew buries a Coors about an Avery IPA, or a Red Stripe of a Budweiser Select plays pinochle with the scooby snack. Now and then, a coors light intoxicatedly buries a bottle of a Fosters. The Mango Beer near a lager drunkenly figures out a blood clot from a razor blade beer, but an Avery IPA recognizes an often ravishing Dos Equis. A pit viper toward the booze prays, because a Honey Brown over another Labatts buys an expensive drink for a Mango Beer about a sake bomb.',
  link_url:'https://www.example.com',
},{
  title: 'Track Saw',
  image_url:'/images/track_saw.jpg',
  description: 'A crispy micro brew buries a Coors about an Avery IPA, or a Red Stripe of a Budweiser Select plays pinochle with the scooby snack. Now and then, a coors light intoxicatedly buries a bottle of a Fosters. The Mango Beer near a lager drunkenly figures out a blood clot from a razor blade beer, but an Avery IPA recognizes an often ravishing Dos Equis. A pit viper toward the booze prays, because a Honey Brown over another Labatts buys an expensive drink for a Mango Beer about a sake bomb.',
  link_url:'https://www.example.com',
}, {
  title: 'Tracks',
  image_url:'/images/rail_guid.jpg',
  description: 'A crispy micro brew buries a Coors about an Avery IPA, or a Red Stripe of a Budweiser Select plays pinochle with the scooby snack. Now and then, a coors light intoxicatedly buries a bottle of a Fosters. The Mango Beer near a lager drunkenly figures out a blood clot from a razor blade beer, but an Avery IPA recognizes an often ravishing Dos Equis. A pit viper toward the booze prays, because a Honey Brown over another Labatts buys an expensive drink for a Mango Beer about a sake bomb.',
  link_url:'https://www.example.com',
},{
  title: 'Table Saw',
  image_url:'/images/contractor-saw.jpg',
  description: 'A crispy micro brew buries a Coors about an Avery IPA, or a Red Stripe of a Budweiser Select plays pinochle with the scooby snack. Now and then, a coors light intoxicatedly buries a bottle of a Fosters. The Mango Beer near a lager drunkenly figures out a blood clot from a razor blade beer, but an Avery IPA recognizes an often ravishing Dos Equis. A pit viper toward the booze prays, because a Honey Brown over another Labatts buys an expensive drink for a Mango Beer about a sake bomb.',
  link_url:'https://www.example.com',
},{
  title: 'Miter Saw',
  image_url:'/images/miter_saw.jpg',
  description: 'A crispy micro brew buries a Coors about an Avery IPA, or a Red Stripe of a Budweiser Select plays pinochle with the scooby snack. Now and then, a coors light intoxicatedly buries a bottle of a Fosters. The Mango Beer near a lager drunkenly figures out a blood clot from a razor blade beer, but an Avery IPA recognizes an often ravishing Dos Equis. A pit viper toward the booze prays, because a Honey Brown over another Labatts buys an expensive drink for a Mango Beer about a sake bomb.',
  link_url:'https://www.example.com',
},{
  title: 'Band Saw',
  image_url:'/images/band_saw.jpeg',
  description: 'A crispy micro brew buries a Coors about an Avery IPA, or a Red Stripe of a Budweiser Select plays pinochle with the scooby snack. Now and then, a coors light intoxicatedly buries a bottle of a Fosters. The Mango Beer near a lager drunkenly figures out a blood clot from a razor blade beer, but an Avery IPA recognizes an often ravishing Dos Equis. A pit viper toward the booze prays, because a Honey Brown over another Labatts buys an expensive drink for a Mango Beer about a sake bomb.',
  link_url:'https://www.example.com',
}, {
  title: 'Router Kit',
  image_url:'/images/router_kit.jpg',
  description: 'A crispy micro brew buries a Coors about an Avery IPA, or a Red Stripe of a Budweiser Select plays pinochle with the scooby snack. Now and then, a coors light intoxicatedly buries a bottle of a Fosters. The Mango Beer near a lager drunkenly figures out a blood clot from a razor blade beer, but an Avery IPA recognizes an often ravishing Dos Equis. A pit viper toward the booze prays, because a Honey Brown over another Labatts buys an expensive drink for a Mango Beer about a sake bomb.',
  link_url:'https://www.example.com',
},{
  title: 'Trim Router',
  image_url:'/images/trim_router.jpg',
  description: 'A crispy micro brew buries a Coors about an Avery IPA, or a Red Stripe of a Budweiser Select plays pinochle with the scooby snack. Now and then, a coors light intoxicatedly buries a bottle of a Fosters. The Mango Beer near a lager drunkenly figures out a blood clot from a razor blade beer, but an Avery IPA recognizes an often ravishing Dos Equis. A pit viper toward the booze prays, because a Honey Brown over another Labatts buys an expensive drink for a Mango Beer about a sake bomb.',
  link_url:'https://www.example.com',
},{
  title: 'Nailer',
  image_url:'/images/nailer.jpg',
  description: 'A crispy micro brew buries a Coors about an Avery IPA, or a Red Stripe of a Budweiser Select plays pinochle with the scooby snack. Now and then, a coors light intoxicatedly buries a bottle of a Fosters. The Mango Beer near a lager drunkenly figures out a blood clot from a razor blade beer, but an Avery IPA recognizes an often ravishing Dos Equis. A pit viper toward the booze prays, because a Honey Brown over another Labatts buys an expensive drink for a Mango Beer about a sake bomb.',
  link_url:'https://www.example.com',
},{
  title: 'Oscillating Sander',
  image_url:'/images/Sender_Oscillating.jpg',
  description: 'A crispy micro brew buries a Coors about an Avery IPA, or a Red Stripe of a Budweiser Select plays pinochle with the scooby snack. Now and then, a coors light intoxicatedly buries a bottle of a Fosters. The Mango Beer near a lager drunkenly figures out a blood clot from a razor blade beer, but an Avery IPA recognizes an often ravishing Dos Equis. A pit viper toward the booze prays, because a Honey Brown over another Labatts buys an expensive drink for a Mango Beer about a sake bomb.',
  link_url:'https://www.example.com',
},{
  title: 'Orbital Sander',
  image_url:'/images/orbital_sander.jpg',
  description: 'A crispy micro brew buries a Coors about an Avery IPA, or a Red Stripe of a Budweiser Select plays pinochle with the scooby snack. Now and then, a coors light intoxicatedly buries a bottle of a Fosters. The Mango Beer near a lager drunkenly figures out a blood clot from a razor blade beer, but an Avery IPA recognizes an often ravishing Dos Equis. A pit viper toward the booze prays, because a Honey Brown over another Labatts buys an expensive drink for a Mango Beer about a sake bomb.',
  link_url:'https://www.example.com',
}];
</script>

<template>
  <h1 class="text-center text-bold m-2">Tools</h1>
  <ItemGrid v-bind:items ></ItemGrid>
</template>

<style scoped>

</style>