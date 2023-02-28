<template>
  <div class="container" style="max-width: fit-content;">
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
:root {
    --gradient: linear-gradient(to bottom right,rgb(166, 178, 233), rgb(27, 34, 172)) !important;
  }.bbtn {
    border: 4px solid rgb(27, 34, 172);
    color: black !important;
    
    padding: 1px;
    border-image-slice: 1;
    background: var(--gradient) !important;
    -webkit-background-clip: text !important;
    -webkit-text-fill-color: transparent !important;
    border-image-source:  var(--gradient) !important; 
    text-decoration: none;
    transition: all .4s ease;
  }
  
  .bbtn:hover, .btn:focus {
        background: var(--gradient) !important;
    -webkit-background-clip: none !important;
    -webkit-text-fill-color: rgb(31, 35, 154) !important;
    border: 5px solid rgb(27, 34, 172) !important; 
    box-shadow: #43b6be 1px 0 10px;
    text-decoration: underline;
  }
</style>