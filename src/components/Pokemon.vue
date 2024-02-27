<template>
  <div class="col-4 pokemon">
    <p>{{ pokemon.name }}</p>
    <p>{{ pokemon.variations[0].description }} </p>
    <img :src="'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/'+ pokemon.num + '.png'" />
  </div>
</template>

<script>
export default {
    props: {
        pokemon: Object,
    },
};
</script>

<style>
.pokemon{
    height: 300px;
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 1px solid grey;
}

.pokemon img{
    max-height: 200px;
    max-width: 250px;
}
</style>