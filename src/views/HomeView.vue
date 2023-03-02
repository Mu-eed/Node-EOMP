<template>
  <div class="container min-vh-100">
    <img alt="Vue logo" src="https://i.postimg.cc/xC5N8bQw/In-Shot-20230228-135454580-fococlipping-standard.png" style="max-width: 100%;"><br>
    <button class="bbtn btn">Browse Games</button>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'HomeView',
  components: {
    
  }
}
</script>

<style scoped>

.bbtn {
    box-shadow: white 1px 0 10px;
    border: 4px solid  rgb(43, 6, 27);
    padding: 1px;
    color: rgb(255, 255, 255) !important;
    border-image-slice: 1;
    text-decoration: none;
    transition: all .4s ease;
  }
  
  .bbtn:hover, .btn:focus {
    -webkit-text-fill-color:  rgb(201, 164, 184) !important;
    border: 5px solid  rgb(201, 164, 184) !important; 
    box-shadow: #d1819a 1px 0 10px;
    text-decoration: underline;
  }
</style>