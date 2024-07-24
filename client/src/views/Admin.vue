<template>
    <div class="admin-container p-6">
      <h2 class="text-xl font-bold mb-4">Admin Dashboard</h2>
  
      <!-- Add Product Form -->
      <section class="add-product-form bg-white p-4 rounded-lg shadow-lg mb-6">
        <h3 class="text-l font-semibold mb-4">Add New Product</h3>
        <form @submit.prevent="createProduct">
          <div class="mb-4">
            <label for="name" class="block text-sm font-medium text-gray-700">Name</label>
            <input type="text" id="name" v-model="newProduct.name" class="mt-1 p-2 block w-full shadow-sm border border-gray-300 rounded-md" required />
          </div>
  
          <div class="mb-4">
            <label for="price" class="block text-sm font-medium text-gray-700">Price</label>
            <input type="number" id="price" v-model="newProduct.price" class="mt-1 p-2 block w-full shadow-sm border border-gray-300 rounded-md" required />
          </div>
  
          <div class="mb-4">
            <label for="category" class="block text-sm font-medium text-gray-700">Category</label>
            <select id="category" v-model="newProduct.category" class="mt-1 p-2 block w-full shadow-sm border border-gray-300 rounded-md" required>
              <option value="Interior">Interior</option>
              <option value="Exterior">Exterior</option>
              <option value="Suplemento">Suplemento</option>
            </select>
          </div>
  
          <div class="mb-4">
            <label for="image" class="block text-sm font-medium text-gray-700">Image URL</label>
            <input type="text" id="image" v-model="newProduct.image" class="mt-1 p-2 block w-full shadow-sm border border-gray-300 rounded-md" required />
          </div>
  
          <button type="submit" class="bg-green-600 hover:bg-green-700 text-white font-semibold p-3 rounded-lg w-full transition duration-300 ease-in-out">
            Add Product
          </button>
        </form>
      </section>
  
      <!-- Product List -->
      <section class="product-list bg-white p-4 rounded-lg shadow-lg">
        <h3 class="text-xl font-semibold mb-4">Manage Products</h3>
        <table class="min-w-full table-auto">
          <thead>
            <tr>
              <th class="px-6 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-sm leading-4 font-medium text-gray-600 uppercase tracking-wider">Name</th>
              <th class="px-6 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-sm leading-4 font-medium text-gray-600 uppercase tracking-wider">Price</th>
              <th class="px-6 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-sm leading-4 font-medium text-gray-600 uppercase tracking-wider">Category</th>
              <th class="px-6 py-3 border-b-2 border-gray-200 bg-gray-100"></th>
            </tr>
          </thead>
          <tbody class="bg-white">
            <tr v-for="product in products" :key="product.id">
              <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">{{ product.name }}</td>
              <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">{{ product.price }} €</td>
              <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">{{ product.category }}</td>
              <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                <button @click="deleteProduct(product.id)" class="text-red-600 hover:text-red-800 focus:outline-none">
                  <i class="fas fa-trash"></i>
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </section>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        products: [],
        newProduct: {
          name: '',
          price: 0,
          category: 'Interior',
          image: ''
        }
      };
    },
    async created() {
      await this.fetchProducts();
    },
    methods: {
      async fetchProducts() {
        try {
          const response = await fetch('http://localhost:3080/api/products');
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          this.products = await response.json();
        } catch (error) {
          console.error('Error fetching products:', error);
        }
      },
      async createProduct() {
        try {
          const response = await fetch('http://localhost:3080/api/products', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(this.newProduct)
          });
  
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
  
          // Reset the form and refresh the product list
          this.newProduct = { name: '', price: 0, category: 'Interior', image: '' };
          await this.fetchProducts();
        } catch (error) {
          console.error('Error creating product:', error);
        }
      },
      async deleteProduct(productId) {
        try {
          const response = await fetch(`http://localhost:3080/api/products/${productId}`, {
            method: 'DELETE'
          });
  
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
  
          // Refresh the product list
          await this.fetchProducts();
        } catch (error) {
          console.error('Error deleting product:', error);
        }
      }
    }
  };
  </script>
  
  <style scoped>
  .admin-container {
    max-width: 800px;
    margin: 0 auto;
  }
  </style>
  