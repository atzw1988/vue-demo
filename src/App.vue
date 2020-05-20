<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>

export default {
  data () {
    return {
      isAli: false,
      isWx: false
    }
  },
  watch: {
    $route () {
      // const data = this.$route.query
    }
  },
  beforeMount () {
    const browser = window.navigator.userAgent.toLowerCase()
    console.log(window.navigator)
    if (browser.indexOf('alipay') > -1) {
      this.isAli = true
      this.$store.commit('SET_PAYWAY', 'alipay')
    } else if (browser.indexOf('micromessenger') > -1) {
      this.isWx = true
      this.$store.commit('SET_PAYWAY', 'wxpay')
    } else {
      this.isAli = false
      this.isWx = false
      this.$store.commit('SET_PAYWAY', 'webpay')
    }
  },
  // beforeDestroy () {
  //   this.saveState()
  // },
  mounted () {
    window.addEventListener('unload', this.saveState)
    console.log(this.$store.state)
    if (!this.isAli && !this.isWx) {
      this.$router.push({
        name: 'errorpage'
      })
    }
  },
  methods: {
    saveState () {
      sessionStorage.setItem('state', JSON.stringify(this.$store.state))
    }
  }
}
</script>

<style lang="less">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%;
}
</style>
