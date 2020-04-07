
// import router from '@/router'
import { fetchDemo } from '@/api/demo'
const state = {
   name:'',
   age:'',
   sex:''
  }
  
  const mutations = {
    SET_NAME: (state, name) => {
        state.name = name
      },
    SET_AGE: (state, age) => {
      state.age = age
    },
    SET_SEX: (state, sex) => {
      state.sex = sex
    },
  }
  
  const actions = {
    async getData({ commit }) {
        const {name,age,sex} = await fetchDemo()
        commit('SET_NAME',name)
        commit('SET_AGE',age)
        commit('SET_SEX',sex)
    }
}

  export default {
    namespaced: true,
    state,
    mutations,
    actions
  }