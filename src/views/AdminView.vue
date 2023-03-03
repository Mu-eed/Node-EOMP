<template>
    <h1>Admin Page</h1>
    <div class="container" >
       
            

			
  <table class="table">
    
  </table>

<div class="table-responsive-sm">
            <table class="table">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>First Name</th>
                        <th>Last Name</th>
						<th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="user in users">
						<td>
						</td>
                        <td>{{ user.id }}</td>
                        <td>  {{ user.firstName }}</td>
                        <td>{{ user.lastName }}</td>
                        <td>{{ user.emailAdd }}</td>
                        <td>
                            <a href="#editEmployeeModal" class="edit" data-toggle="modal"><i class="material-icons" data-toggle="tooltip" title="Edit">&#xE254;</i></a>
                            <a href="#deleteEmployeeModal" class="delete" data-toggle="modal"><i class="material-icons" data-toggle="tooltip" title="Delete">&#xE872;</i></a>
                        </td>
                    </tr>
                </tbody>
            </table>
</div>
            <br>
            <br>

            <h1>Products</h1>
            <table  class="table table-responsive">
                <thead>
                    <tr >
                        <th scope="col">#</th>
                        <th scope="col">image</th>
                        <th scope="col">Name</th>
						<th scope="col">Price</th>
                        <th scope="col">Category</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="item in products" :key="item">
                        <th scoped="row">{{ item.id }}</th>
                        <td><figure>
                            <img :src="item.imgURL" alt="" style="max-width: 40px;">
                        </figure></td>
                        <td>{{ item.prodName }}</td>
                        <td>{{ item.price }}</td>
                        <td>{{ item.category }}</td>
                        <td>
                            <a href="#editEmployeeModal" class="edit" data-toggle="modal"><i class="fa fa-pencil-square-o" data-toggle="tooltip" title="Edit"></i></a>
                            <a href="#deleteEmployeeModal" class="delete" data-toggle="modal"><i class="fa fa-trash" data-toggle="tooltip" title="Delete"></i></a>
                        </td>
                    </tr>
                </tbody>
            </table>

            <button
     id="addBtn"
      class="btn btn-secondary btn-lg" 
      style="background-color: rgb(0, 0, 0); color: black;" 
      type="button" data-bs-toggle="modal" data-bs-target="#modalForm"
      >Add Product
    </button>
        </div>


    <AddProduct/>
    <UpdateProduct/>
</template>

<script>
import AddProduct from '@/components/AddProduct.vue';
import UpdateProduct from '@/components/UpdateProduct.vue';
import { useStore } from 'vuex';
import {computed} from '@vue/runtime-core';

export default {
    setup(){
        const store = useStore();
        store.dispatch('fetchProducts');
        let products = computed(() => store.state.products);

        return{
            products
        }
    },
    components: { AddProduct, UpdateProduct }
}

</script>
<style scoped>
    .container{
        margin-top: 3rem;
        color: whitesmoke;
    }

    .table{
        background-color: rgb(255, 255, 255, 0.7);
    }

	.table-title {        
		padding-bottom: 15px;
		background: #435d7d;
		color: #fff;
		padding: 16px 30px;
		margin: -20px -25px 10px;
		border-radius: 3px 3px 0 0;
    }
    .table-title h2 {
		margin: 5px 0 0;
		font-size: 24px;
	}
    table.table tr th, table.table tr td {
        border-color: #e9e9e9;
		padding: 12px 15px;
		vertical-align: middle;
    }
	table.table tr th:first-child {
		width: 60px;
	}
	table.table tr th:last-child {
		width: 100px;
	}
   
    table.table th i {
        font-size: 13px;
        margin: 0 5px;
        cursor: pointer;
    }	
    table.table td:last-child i {
		opacity: 0.9;
		font-size: 22px;
        margin: 0 5px;
    }
	table.table td a {
		font-weight: bold;
		color: #566787;
		display: inline-block;
		text-decoration: none;
		outline: none !important;
	}
	table.table td a:hover {
		color: #2196F3;
	}
	table.table td a.edit {
        color: #FFC107;
    }
    table.table td a.delete {
        color: #F44336;
    }
    table.table td i {
        font-size: 19px;
    }
	
</style>