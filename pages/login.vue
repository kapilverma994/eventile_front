<template>
  <div class="mt-5">
    <div class="container col-md-6 text-center jumbotron">
      <h1 class="mb-5">Login</h1>
      <form action="" @submit.prevent="submit">
        <div class="form-group">
          <input
            type="email"
            class="form-control"
            v-model="form.email"
            placeholder="Enter your Email"
          />
          <error-field :errors="errors" field="email" />
        </div>
        <div class="form-group">
          <input
            type="password"
            class="form-control"
            v-model="form.password"
            placeholder="Password"
          />
          <error-field :errors="errors" field="password" />
        </div>

        <button type="submit" class="btn btn-primary btn-block">Login</button>
      </form>
    </div>
  </div>
</template>

<script>
import errorField from '../components/util/errorField'
export default {
  middleware: 'guest',
  components: { errorField },
  data() {
    return {
      form: {
        email: '',
        password: '',
      },
      errors: {},
    }
  },
  methods: {
    submit() {
      // console.log('hii')
      this.$axios
        .$post('http://127.0.0.1:8000/api/login', this.form)
        .then((res) => {
          this.$cookies.set('token', res)
          this.$store.commit('setlogin')
          this.$axios.defaults.headers.common.authorization = `Bearer ${res}`
          this.$router.push('/')
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

<style></style>
