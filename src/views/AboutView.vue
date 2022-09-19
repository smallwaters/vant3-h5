<template>
  <div class="about">
    <h1>This is an about page</h1>
    <van-button type="primary" @click="getWeatherInfo">获取天气</van-button>
  </div>
</template>

<script>
import { getWeather } from '@/api/home'

export default {
  methods: {
    getWeatherInfo() {
      getWeather({
        city: 420000,
        key: ''
      })
    }
  }
}
</script>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
