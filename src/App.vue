<template>
  <nav>
    <router-link to="/">主页</router-link> &nbsp|&nbsp
    <router-link to="/copybook">书法字帖</router-link>&nbsp|&nbsp
    <router-link to="/children">少儿书法教育</router-link>&nbsp|&nbsp
    <!-- <router-link to="/swiper">Swiper</router-link>&nbsp|&nbsp -->
    <router-link to="/university">大学书法教育</router-link>&nbsp|&nbsp
    <router-link to="/theory">书法教育理论</router-link>&nbsp|&nbsp
    <router-link to="/tech">科技与书法</router-link>&nbsp|&nbsp
    <router-link to="/communicate">学习与交流</router-link>&nbsp|&nbsp
    <!-- <router-link to="/about">关于</router-link> -->
  </nav>
  <router-view/>
</template>

<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
nav {
  height: 15px;
  background-color: #CC0000;
  padding: 10px;
  a {
    color: 	#e8e5e5;
    &.router-link-exact-active {
      color: #286248;
    }
  }
}
</style>
