export const state = () => ({
  login: false
})

export const mutations = {
  setlogin(state) {
    state.login = true
  },
  logout(state) {
    state.login = false
  }
}
export const actions = {
  nuxtServerInit({
    commit
  }) {
    const token = this.$cookies.get('token')
    if (token) {
      commit('setlogin')
    }
  }
}
