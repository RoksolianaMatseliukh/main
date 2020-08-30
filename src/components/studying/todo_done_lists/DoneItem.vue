<template>
  <div>

      <p> {{done.title}} </p>

  </div>
</template>

<script>


export default {
  name: 'DoneItem',
  props: {
    done: {
      type: Object
    }
  },
}
</script>

<style>

</style>