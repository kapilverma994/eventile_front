<template>
  <div class="container">
    Home
    <button class="btn btn-primary" @click="fetchuser">Fetch</button>
  </div>
</template>

<script>
export default {
  middleware: 'auth',
  methods: {
    fetchuser() {
      this.$axios
        .$post('http://127.0.0.1:8000/api/me')

        .then((res) => {
          this.form = ''
          //   this.$router.push("/");
          // console.log(res.data)
        })
        .catch((e) => (this.errors = e.response.data.errors))
    },
  },
}
</script>

<style>
</style>
