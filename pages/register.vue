<template>
  <div class="mt-5">
    <div class="container col-md-6 text-center jumbotron">
      <h1 class="mb-5">Register</h1>
      <form action="" @submit.prevent="submit">
        <div class="form-group">
          <input
            type="text"
            name=""
            class="form-control"
            id=""
            v-model="form.name"
            placeholder="Enter your name"
          />
          <error-field :errors="errors" field="name" />
        </div>

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
        <div class="form-group">
          <input
            type="password"
            class="form-control"
            v-model="form.password_confirmation"
            placeholder="Confirm password"
          />
        </div>
        <button type="submit" class="btn btn-primary btn-block">
          Register
        </button>
      </form>
    </div>
  </div>
</template>

<script>
import errorField from '../components/util/errorField'
export default {
  components: { errorField },
  data() {
    return {
      form: {
        email: '',
        name: '',
        password: '',
        password_confirmation: '',
      },
      errors: {},
    }
  },
  mounted() {},
  methods: {
    submit() {
      // console.log('hii')
      this.$axios
        .$post('http://127.0.0.1:8000/api/register', this.form)
        .then((res) => {
          this.form = ''
          this.$router.push('/login')
          console.log(res.data)
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
