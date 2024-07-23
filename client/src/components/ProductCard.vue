<template>
  <div class="product-card p-4 bg-white rounded-lg shadow-md transition-transform transform hover:scale-105 hover:shadow-xl">
    <img :src="`/${product.image}`" :alt="product.name" class="w-full h-48 object-contain rounded-t-lg">
    <div class="p-4">
      <h3 class="text-lg font-bold mb-2 text-center">{{ product.name }}</h3>
      <p class="text-gray-700 mb-4 text-center">{{ product.price | currency }} €</p>
      
      
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
  filters: {
    currency(value) {
      return `${value.toFixed(2)}`;
    }
  }
}
</script>

<style scoped>
.product-card:hover {
  box-shadow: 0 0 15px rgba(0, 255, 0, 0.6); /* Glow verde */
}
</style>