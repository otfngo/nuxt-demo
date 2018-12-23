<template>
  <div>
    <h1>hello {{ name }}</h1>
    <button @click="handleBtnClick">clicked {{ count }}</button>
    <ul>
      <li><nuxt-link to="/about">to about page</nuxt-link></li>
      <li><nuxt-link to="/users">to users page</nuxt-link></li>
      <li><nuxt-link to="/bulma">to bulma page</nuxt-link></li>
      <li><nuxt-link to="/localeEn">to localeEn page</nuxt-link></li>
      <li><nuxt-link to="/cache">to cache page</nuxt-link></li>
    </ul>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'

export default {
  head: {
    title: 'home page'
  },
  asyncData() {
    return new Promise((resolve) => {
      setTimeout(function () {
        resolve({ name: 'tianya' })
      }, 1000)
    })
  },
  computed: {
    ...mapState(['count'])
  },
  methods: {
    ...mapMutations(['increment']),
    handleBtnClick() {
      this.increment()
    }
  }
}
</script>