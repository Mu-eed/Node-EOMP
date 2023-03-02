<template>
  <div class="container min-vh-100">
    <img alt="Vue logo" src="https://i.postimg.cc/xC5N8bQw/In-Shot-20230228-135454580-fococlipping-standard.png" style="max-width: 100%;"><br>
    <button class="bbtn btn">Browse Games</button>

    <h4>
      We offer the latest games for PS4, PS5 or PCs for sale.
      If you would like to get a game we do not stock, then feel
      free to contact us and we'll have it in under a month!
    </h4>
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

h4{
  margin-top: 10rem;
color: white;
text-shadow: 1px 2px 1px black;
}
.container{
  margin-top: 5rem;
}
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
    text-decoration: none !important;
    -webkit-text-fill-color:  rgb(0, 0, 0) !important;
    border: 5px solid   rgb(255, 255, 255) !important;
    box-shadow: #000000 1px 0 10px;
    text-decoration: underline;
  }
</style>