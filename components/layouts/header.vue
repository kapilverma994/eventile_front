<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark p-3">
    <div class="container-fluid">
      <nuxt-link to="/" class="navbar-brand"> Home</nuxt-link>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav ml-auto mb-2 mb-lg-0">
          <li v-if="login" class="nav-item">
            <a class="nav-link active" @click.prevent="logout"> Logout</a>
          </li>
          <li v-else class="nav-item">
            <a class="nav-link active" @click.prevent="logout"> Login</a>
            <a class="nav-link active" @click.prevent="logout"> Register</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
<script>
export default {
  computed: {
    login() {
      return this.$store.state.login
    },
  },
  methods: {
    logout() {
      // console.log('hii')
      this.$axios
        .$post('http://127.0.0.1:8000/api/logout')
        .then((res) => {
          this.$cookies.set('token')
          this.$store.commit('logout')
          this.$router.push('/login')
          // console.log(res.data)
          //    this.$notify({
          //       message: "Register Successfully 😍",
          //       duration: 3000,
          //       position: 'center',
          //     });
        })
        .catch((e) => (this.errors = e.response.data.errors))
    },
  },
}
</script>