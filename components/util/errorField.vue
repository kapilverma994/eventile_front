<template>
  <span v-if="errors[field]" class="text-danger float-left mb-2">{{
    errors[field][0]
  }}</span>
</template>

<script>
export default {
  props: ['errors', 'field'],
}
</script>

<style></style> 