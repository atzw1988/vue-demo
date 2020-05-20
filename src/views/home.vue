<template>
  <hello-world
   :msg="msg"></hello-world>
</template>

<script>
import HelloWorld from '@/components/HelloWorld'

export default {
  name: 'home',
  components: {
    HelloWorld
  },
  data () {
    return {
      msg: 'Hello World'
    }
  }
}
</script>
