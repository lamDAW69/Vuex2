import { createStore } from 'vuex';

export default createStore({
  state: {
    titileApp: "Memes", 
    memes: [],
    pokemon: []
  },
  getters: {
    // getters si los necesitas
  },
  mutations: {
    setMemes(state, payload) {
      state.memes = payload;
    },
    setPokemon(state, payload) {
      state.pokemon = payload;
    }
  },
  actions: {
    async getMemes({ commit }) {
      try {
        const response = await fetch('https://api.imgflip.com/get_memes');
        const result = await response.json();
        commit('setMemes', result.data.memes);
        console.log("Mis memes");
        console.log(result);
      } catch (error) {
        console.log(error);
      }
    },
   
    async getPokemon ({commit}){
      try{
        const response = await fetch("https://raw.githubusercontent.com/lamDAW69/modelo-datos/main/animales.json")
        const result = await response.json();
        commit("setPokemon", result);
        console.log("Mis pokemon");
        console.log(result);  
      }
      catch(error){
        console.log(error);
      }
    },
  },
    modules: {
    }
})
