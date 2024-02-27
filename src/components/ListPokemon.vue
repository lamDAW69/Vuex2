<template>
    <h1>{{ title }}</h1>
    <div class="row">

            <template v-for="pokemon in pokemon" :key="pokemon.id" >
            <Pokemon :pokemon="pokemon" />

            </template>

    </div>
</template>

<script>
import { onMounted, computed } from "vue";
import { useStore } from "vuex";
import Pokemon from "./Pokemon.vue";

export default {
    components: {
        Pokemon,
    },
    setup() {
        const store = useStore();
        onMounted(() =>{
            store.dispatch("getPokemon");
        });
        
    const pokemon = computed(() => store.state.pokemon);

        return{
            title: store.state.titleApp,
            pokemon,
        };
    },
};
</script>

<style>  
h1{
    text-align: center;
}
</style>
