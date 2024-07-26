<template>
  <div class="p-4 relative">
    <!-- Carrito de Compras -->
    <Cart 
      :cartItems="cart" 
      :isOpen="isCartOpen" 
      @toggle-cart="toggleCart" 
      @remove-item="removeFromCart" 
    />

    <!-- Botón carrito -->
    <button
      class="fixed top-4 right-4 z-50 bg-green-500 text-white rounded-full p-3 hover:bg-green-600 focus:outline-none focus:ring focus:ring-green-300 shadow-md"
      @click="toggleCart"
    >
      <i class="fas fa-shopping-cart fa-lg"></i>
      <span v-if="cart.length" class="ml-2 font-bold text-sm">{{ cart.length }}</span>
    </button>

    <!-- Plantas de Interior -->
    <section id="interior" class="bg-green-100 p-4 rounded mb-4">
      <h2 class="text-xl font-bold mb-2">Plantas de Interior</h2>
      <div class="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
        <ProductCard 
          v-for="product in interiorPlants" 
          :key="product.id" 
          :product="product"
          @add-to-cart="addToCart" 
        />
      </div>
    </section>

    <!-- Plantas de Exterior -->
    <section id="exterior" class="bg-green-100 p-4 rounded mb-4">
      <h2 class="text-xl font-bold mb-2">Plantas de Exterior</h2>
      <div class="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
        <ProductCard 
          v-for="product in exteriorPlants" 
          :key="product.id" 
          :product="product"
          @add-to-cart="addToCart" 
        />
      </div>
    </section>

    <!-- Suplementos -->
    <section id="supplements" class="bg-green-100 p-4 rounded mb-4">
      <h2 class="text-xl font-bold mb-2">Suplementos</h2>
      <div class="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
        <ProductCard 
          v-for="product in supplements" 
          :key="product.id" 
          :product="product"
          @add-to-cart="addToCart" 
        />
      </div>
    </section>
  </div>
</template>

<script>
import ProductCard from '../components/ProductCard.vue'
import Cart from '../components/Cart.vue'

export default {
  components: {
    ProductCard,
    Cart
  },
  data() {
    return {
      interiorPlants: [],
      exteriorPlants: [],
      supplements: [],
      cart: [],
      isCartOpen: false
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
        const data = await response.json();
        this.interiorPlants = data.filter(product => product.category === 'Interior');
        this.exteriorPlants = data.filter(product => product.category === 'Exterior');
        this.supplements = data.filter(product => product.category === 'Suplemento');
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    },
    toggleCart() {
      this.isCartOpen = !this.isCartOpen;
    },
    addToCart(product) {
      const existingProduct = this.cart.find(item => item.id === product.id);
      if (existingProduct) {
        existingProduct.quantity += 1;
      } else {
        this.cart.push({ ...product, quantity: 1 });
      }
    },
    removeFromCart(productId) {
      this.cart = this.cart.filter(product => product.id !== productId);
    }
  }
}
</script>
