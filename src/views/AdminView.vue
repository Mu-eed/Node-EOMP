<template>
    <h1>Admin Page</h1>
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
    
</style>