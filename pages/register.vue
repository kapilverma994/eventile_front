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
          <span v-if="errors.name" class="text-danger float-left mb-2">{{
            errors.name[0]
          }}</span>
        </div>

        <div class="form-group">
          <input
            type="email"
            class="form-control"
            v-model="form.email"
            placeholder="Enter your Email"
          />
          <span v-if="errors.email" class="text-danger float-left mb-2">{{
            errors.email[0]
          }}</span>
        </div>
        <div class="form-group">
          <input
            type="password"
            class="form-control"
            v-model="form.password"
            placeholder="Password"
          />
          <span v-if="errors.password" class="text-danger float-left mb-2">{{
            errors.password[0]
          }}</span>
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
import axios from 'axios'
export default {
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
  methods: {
    submit() {
      console.log('hii')
      axios
        .post('http://127.0.0.1:8000/api/register', this.form)
        .then((res) => {
          this.form = ''
          //   this.$router.push("/");
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
