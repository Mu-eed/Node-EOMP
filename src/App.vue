<template>
  <div>
    <Navbar/>
        <router-view/>
     <Footer/>
  </div>
  

    
</template>

<script>
import Navbar from './components/Navbar.vue';
import Footer from './components/Footer.vue';

export default{
  name: "App",
  components:{
    Navbar,
    Footer,
}
}
</script>

<style>
#app {
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color-scheme: white;
  background: url('https://i.postimg.cc/KvsVLkjy/wallpaperflare-com-wallpaper.jpg') no-repeat center center/cover;
  background-attachment: fixed;
}

@media (min-width: 990px) {
  #main{
    margin-left: 50%;
  }}
</style>
