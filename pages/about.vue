<template>
  <div>
    <nuxt-link to="/">to home page</nuxt-link>
    <p>about</p>
  </div>
</template>

<script>
export default {
  layout: 'dark',
  head: {
    title: 'about page'
  },
  asyncData() {
    return new Promise((resolve) => {
      setTimeout(function () {
        resolve({})
      }, 1000)
    })
  }
}
</script>