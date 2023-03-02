<template>
    <h1>Admin Page</h1>
    <div class="container">
        <div class="table-wrapper">
            <div class="table-title">
                <div class="row">
                    <div class="col-sm-6">
						
					</div>
                </div>
            </div>
            <table class="table table-striped table-hover">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>image</th>
                        <th>Name</th>
						<th>Price</th>
                        <th>Category</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="item in products" :key="use.uesrID">
						<td>
						</td>
                        <td>{{ item.id }}</td>
                        <td>  {{ item.imgURL }}</td>
                        <td>{{ item.name }}</td>
                        <td>{{ item.price }}</td>
                        <td>{{ item.category }}</td>
                        <td>
                            <a href="#editEmployeeModal" class="edit" data-toggle="modal"><i class="material-icons" data-toggle="tooltip" title="Edit">&#xE254;</i></a>
                            <a href="#deleteEmployeeModal" class="delete" data-toggle="modal"><i class="material-icons" data-toggle="tooltip" title="Delete">&#xE872;</i></a>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>

    <AddProduct/>
    <UpdateProduct/>
</template>

<script>
import AddProduct from '@/components/AddProduct.vue';
import UpdateProduct from '@/components/UpdateProduct.vue';

export default {
    components: { AddProduct, UpdateProduct }
}

</script>
<style scoped>
    .container{
        margin-top: 3rem;
        color: whitesmoke;
    }
</style>