<template>
    <div class="min-vh-100 main">
        

        <!-- Filter Section -->
        <select name="filter" id="filter" style="display:flex;">
       <option value="">All</option>
       <option value="rpg">RPG</option>
       <option value="Action">Action</option>
       <option value="Adventure">Adventure</option>
       <option value="roguelike">Roguelike</option>
     </select>

     <!-- Search bar -->

     <!-- Displaying Products -->
     <div class="displaying">
      <SpinnerC v-if="isLoading"/>
      <div v-else>
        <div class="row">
         <div class="card col-lg-4 games" v-for="item in products" :key="item" style="width: 18rem;">
         <img :src="item.imgURL" class="card-img-top" alt="...">
          <div class="card-body">
          <h5 class="card-title">{{ item.prodName }}</h5>
          </div>
         <ul class="list-group list-group-flush">
            <li class="list-group-item">{{ item.category }}</li>
            <li class="list-group-item">R{{ item.price }}</li>
            <li>
              <button>
                <router-link to="/singleprod" class="card-link">View Details</router-link>
            </button>
              </li>
          </ul>
        </div>
      </div>
      </div>
      
     </div>
     
    </div>
</template>
<script>
import { useStore } from 'vuex';
import {computed} from '@vue/runtime-core';
import SpinnerC from '../components/Spinner.vue'

export default {
  setup(){
        const store = useStore();
        store.dispatch('fetchProducts');
        let products = computed(() => store.state.products);

        return{
            products
        }
    },
    components: { 
      SpinnerC
     },
     data(){
      return {
        isLoading: true,
      }
     },
     created(){
      setTimeout(()=> {
        this.isLoading = false;
      },2000);
     }
}


// Trying to filter


// let catFilter = document.getElementById('filter');

// catFilter.addEventListener('change',(e)=>{
//     console.log(e.target.value)
//     let filteredCards = catalogue.filter(item =>{

//         return item.category === e.target.value
//     })

//     pCards.innerHTML ="";   
//     Object.keys(filteredCards).forEach((item)=>{
//         console.log(filteredCards)
//         Cards +=`
//         <div class="card col-3 .col-xl-3 games" style="width: 18rem;">
//          <img :src="item.imgURL" class="card-img-top" alt="...">
//           <div class="card-body">
//           <h5 class="card-title">{{ item.prodName }}</h5>
//           </div>
//          <ul class="list-group list-group-flush">
//             <li class="list-group-item">{{ item.category }}</li>
//             <li class="list-group-item">{{ item.price }}</li>
//             <li>
//               </li>
//           </ul>
//         </div>`

//     })
//     if(e.target.value == 'all') {
//         display();
//     }
// console.log(filteredCards);
// })

</script>

<style scoped>

.main{
  margin-top: 5rem;
}

.games{
  margin: auto;
}
    .displaying{
      margin: auto;

    }
</style>