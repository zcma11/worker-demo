<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <p v-for="(m, index) in msg" :key="index">{{ m }}</p>
  </div>
</template>

<script>
import myWorker from './worker/foo.worker'
export default {
  name: 'App',
  mounted() {
    const worker = new myWorker()

    worker.postMessage({ a: 1 })
    worker.onmessage = e => {
      console.log(e, e.data)
      this.msg.push(e.data)
    }
  },
  data() {
    return {
      msg: []
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
