<template>
  <div class="col-4 pokemon">
    <p>{{ pokemon.nombre }}</p>
    <p>{{ pokemon.descripcion }} </p>
    <img :src="pokemon.foto" />
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