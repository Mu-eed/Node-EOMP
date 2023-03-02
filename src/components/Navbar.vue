<!-- <template>
   
<header>
  <nav class="navbar navbar-expand-lg bg-transparent">
  <div class="container-fluid">
    <router-link to="/" class="navbar-brand" >
      <img alt="Vue logo" src="https://i.postimg.cc/xC5N8bQw/In-Shot-20230228-135454580-fococlipping-standard.png" style="max-width: 8rem;">
    </router-link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <router-link to="/">
            <i class="fa fa-home fa-fw me-3"></i> Home</router-link>
          </li>
        <li class="nav-item">
          <router-link to="/admin">
            <i class="fa fa-user fa-fw me-3"></i> Admin</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/products">
            <i class="fa fa-list fa-fw me-3"></i>Products</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/contact">
            <i class="fa fa-phone fa-fw me-3"></i> Contact Us</router-link>
          </li>
      </ul>
    </div>
  </div>
  </nav>
</header>
</template>

<script>
export default {
    
}
</script>

<style scoped>
#nav-bar
{
    position: sticky;
    top: 0;
    z-index: 10;
}
.navbar-brand img
{
    height: 60px;
    width: auto;
    padding-left: 30px;
}
.navbar-nav li
{
    padding: 0 10px;
}
.navbar-nav li a
{
    float: right;
    text-align: left;
}
#nav-bar ul li a:hover
{
    color: #747c85!important;
}
.navbar
{
    background: #fff;
}
.navbar-toggler
{
    border: none!important;
}
.nav-link
{
    color: #555!important;
    font-weight: 600;
    font-size: 16px;
}
   
</style> -->

<template lang="">
  <header>
  <!-- Sidebar -->
  <nav id="sidebarMenu" class="collapse d-lg-block sidebar collapse bg-transparent">
    <div class="sideList">
      <div class="list-group list-group-flush mx-3 mt-4 " style="margin-top: 50%;">
        <router-link class="list-group-item list-group-item-action py-2 ripple" 
        to="/"> <span><i class="fa fa-home fa-fw me-3"></i>Home</span> </router-link>
        <router-link class="list-group-item list-group-item-action py-2 ripple" 
        to="/admin"> <span><i class="fa fa-info fa-fw me-3"></i>Admin</span> </router-link>
        <router-link class="list-group-item list-group-item-action py-2 ripple" 
        to="/products"><span><i class="fa fa-list fa-fw me-3"></i>Products</span></router-link>
        <router-link class="list-group-item list-group-item-action py-2 ripple" 
        to="/contact"><span><i class="fa fa-phone fa-fw me-3"></i>Contact Us</span></router-link>
        </div>
    </div>
  </nav>
  <!-- Sidebar -->

  <!-- Navbar -->
  <nav id="main-navbar" class="navbar navbar-expand-lg navbar-light bg-transparent fixed-top na">
    <!-- Container wrapper -->
    <div class="container-fluid">
      <!-- Toggle button -->
      <button class="navbar-toggler navbtn" data-toggle="collapse" data-target="#thetarget" type="button" data-bs-toggle="collapse" data-bs-target="#sidebarMenu"
        aria-controls="sidebarMenu" aria-expanded="false" aria-label="Toggle navigation">
        <i class="fas fa-bars"></i>
      </button>

      <!-- Logo -->
      <router-link to="/" class="navbar-brand" >
      <img alt="Vue logo" src="https://i.postimg.cc/xC5N8bQw/In-Shot-20230228-135454580-fococlipping-standard.png" style="max-width: 8rem;">
    </router-link>

      <!-- Right links -->
      <ul class="navbar-nav ms-auto d-flex flex-row">
        <!-- Notification dropdown -->
      

        <!-- Avatar -->
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle hidden-arrow d-flex align-items-center" href="#"
            id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            <img src="https://i.postimg.cc/T3d6R0wV/png-clipart-frost-pro-for-os-x-icon-set-now-free-contacts-male-profile.png" class="rounded-circle"
              height="22" alt="Avatar" loading="lazy" />
          </a>
          <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdownMenuLink">
            <li>
              <router-link to="/register" class="dropdown-item">Register</router-link>
            </li>
            <li>
              <router-link to="/login" class="dropdown-item" >login</router-link>
              
            </li>
            <li>
              <router-link to="/" class="dropdown-item">Logout</router-link>
              
            </li>
          </ul>
        </li>
      </ul>
    </div>
    <!-- Container wrapper -->
  </nav>
  <!-- Navbar -->
</header>
</template>
<script>
export default {
  
}
</script>
<style scoped>

.navbtn{
  color: white;
}


    
@media (min-width: 991.98px) {
main {
padding-left: 240px;
}
}
/* Sidebar */
.sidebar {
top: 0;
bottom: 0;
left: 0;
padding: 58px 0 0; 
box-shadow: 0 2px 5px 0 rgb(0 0 0 / 5%), 0 2px 10px 0 rgb(0 0 0 / 5%);
width: 240px;
}


@media (max-width: 991.98px) {
.sidebar {
width: 100%;
}
}
.sidebar .active {
border-radius: 5px;
box-shadow: 0 2px 5px 0 rgb(0 0 0 / 16%), 0 2px 10px 0 rgb(0 0 0 / 12%);
}
.sidebar-sticky {
/* position: relative; */
top: 0;
height: calc(100vh - 48px);
padding-top: 0.5rem;
/* overflow-x: hidden; */
/* overflow-y: auto; */
}
</style>