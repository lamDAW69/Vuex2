<template>
  <div>
    <h1>{{ title }}</h1>
    <div v-for="meme in memes" :key="meme.id">
      <Meme :meme="meme" />
    </div>
  </div>
</template>

<script>
import { onMounted, computed } from 'vue'
import { useStore } from 'vuex'
import Meme from './Meme.vue'

export default {
  components: {
    Meme
  },

  setup() {
    const store = useStore();

    // Cuando el componente se monta, se ejecuta la acción para obtener los memes
    onMounted(() => {
      store.dispatch('getMemes');
    })

    const memes = computed(() => store.state.memes);

    return {
      title: store.state.titileApp,
      memes,
    };
  },
};
</script>

<style>
h1 {
  text-align: center;
}
</style>
