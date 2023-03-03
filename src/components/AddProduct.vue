<template>
    <h1>Add Product</h1>
    <!-- Modal -->
    <div class="modal fade" id="modalForm" tabindex="-1" aria-labelledby="ModalLabel" aria-hidden="true">
     <div class="modal-dialog">
       <div class="modal-content">
         <div class="modal-header">
           <h1 class="modal-title">Add Product Information</h1>
           <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
          </div>
          <div class="modal-body">
            <form v-for="item in products" :key="item">
             <div>
                 <label for="inputname"  > Name of Product</label>
                 <input type="text" id="addName" v-model="payload.prodName">
             </div>
             <div>
                 <label for="inputprice"> Price of Product</label>
                 <input type="number" id="addPrice" v-model="payload.price" >
             </div>
             <div>
                 <label for="inputStyle"> Add the Category</label>
                 <input type="text" id="addStyle" v-model="category">
             </div>
             <div>
                 <label for="inputDescription"> Add description</label>
                 <input type="text" id="addStyle" v-model="description">
             </div>
             <div>
                 <label for="inputImage"> Add link to Picture of Product</label>
                 <input type="text" id="addImage" v-model="imagURL">
             </div>
           </form>
         </div>
         <div class="modal-footer">
           <button class="btn btn-secondary btn-lg" 
             style="background-color: rgb(181, 218, 181); color: black;"
             onclick="addItem()" 
             id="addBtn">Add Product
           </button>
         </div>
       </div>
      </div>
    </div>
</template>
<script>

import Store from '../store/index';
import{useStore} from 'vuex';

export default {
    name: 'AddProduct',
    setup() {
        const Store = useStore();
        let payloadTemplate= {
            prodName:'',
            prodDescription:'',
            category:'',
            price:'',
            imgURL:'',
            userID:'',
        }
      
      const addProduct = async () => {
          store.dispatch('addProduct', payloadTemplate);
          store.dispatch('fetchProducts');
          location.reload()
      }
      
      return {
        addProduct,
        payloadTemplate
      }
    }

    
}
</script>
<style scoped>
    
</style>