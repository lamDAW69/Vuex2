<template>
  <div class="col-3 meme">
    <p>{{ meme.name }}</p>
    <!--Utilizamos la clase fluid para que ajuste el tamaño -->
<img :src="meme.url" class="fluid" :alt="meme.name" />
    </div>
</template>

<script>
export default {
    props: {
        meme: Object,
    },
};
</script>

<style>
.meme {
  height: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid grey;
}

.meme img {
  max-height: 200px;
  max-width: 250px;
}
</style>