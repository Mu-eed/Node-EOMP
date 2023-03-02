<template>
    <h1>Admin Page</h1>
    <div class="container" >
       
            <div class="table-title">     
				<h1>Users</h1>           
            </div>
            

			
  <table class="table">
    ...
  </table>

<div class="table-responsive-sm">
            <table class="table">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>First Name</th>
                        <th>Surname</th>
						<th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="user in users">
						<td>
						</td>
                        <td>{{ user.id }}</td>
                        <td>  {{ user.first }}</td>
                        <td>{{ user.surname }}</td>
                        <td>{{ user.email }}</td>
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

// Add button

// function addItem(){
//         let name =  document.querySelector('#addName').value;
//         let price = document.querySelector('#addPrice').value;
//         let style = document.querySelector('#addcategory').value;
//         let image = document.querySelector('#addImage').value;
    
//         catalogue.push({
//             name,
//             price,
//             category,
//             image
//         })
//         localStorage.setItem('catalogue', JSON.stringify(catalogue));  
// }


// delete button

// function del(id) {
    
//    products.splice(products.findIndex(item=>item.id==id),1)
//     localStorage.setItem('catalogue',JSON.stringify(products));
//     location.reload()
// }

</script>
<style scoped>
    .container{
        margin-top: 3rem;
        color: whitesmoke;
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