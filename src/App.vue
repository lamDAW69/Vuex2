<template>
  <div class="container">
    <list-pokemon />
    <list-memes />
  </div>
</template>

<script>
import ListMemes from '@/components/ListMemes.vue';
import ListPokemon from '@/components/ListPokemon.vue';

export default {
  name: 'App',
  components: {
    ListPokemon,
    ListMemes,
  },
};
</script>

<style></style>