<template>
  <div class="product-card p-4 bg-white rounded-lg shadow-md border border-gray-200 transition-transform transform hover:scale-105 hover:shadow-xl relative">
    <img :src="`/${product.image}`" :alt="product.name" class="w-full h-48 object-contain rounded-t-lg">
    <div class="p-4">
      <h3 class="text-lg font-bold mb-2 text-center">{{ product.name }}</h3>
      <p class="text-gray-700 mb-4 text-center">{{ product.price | currency }} €</p>
    </div>

    <div
      class="absolute inset-0 flex items-center justify-center bg-gray-400 bg-opacity-0 hover:bg-opacity-25 transition-opacity rounded-lg"
      @click="addToCart"
    >
      <button class="text-white text-3xl opacity-0 hover:opacity-100 transition-opacity">
        <i class="fas fa-plus text-6xl"></i>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProductCard',
  props: {
    product: {
      type: Object,
      required: true
    }
  },
  methods: {
    addToCart() {
      this.$emit('add-to-cart', this.product);
    }
  },
  filters: {
    currency(value) {
      return value.toFixed(2);
    }
  }
}
</script>

<style scoped>
.product-card:hover {
  box-shadow: 0 0 15px rgba(0, 255, 0, 0.6); /* Glow verde */
}
</style>
