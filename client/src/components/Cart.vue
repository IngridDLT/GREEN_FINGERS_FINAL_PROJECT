<template>
  <div
    v-if="isOpen"
    class="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-end z-50"
    @click.self="toggleCart"
  >
    <div class="w-full max-w-xs md:max-w-md h-screen overflow-y-auto bg-white shadow-lg p-6 relative rounded-t-xl md:rounded-xl">
      <h2 class="text-xl font-bold mb-4 text-center">Carrito de Compras</h2>

      <ul v-if="cartItems.length">
        <li
          v-for="item in cartItems"
          :key="item.id"
          class="flex justify-between items-center mb-4"
        >
          <div class="flex items-center">
            <img :src="`/${item.image}`" alt="Product Image" class="w-12 h-12 mr-4">
            <div>
              <h3 class="font-semibold">{{ item.name }}</h3>
              <p>{{ item.price | currency }} € x {{ item.quantity }}</p>
            </div>
          </div>
          <button
            @click="removeItem(item.id)"
            class="text-red-600 hover:text-red-800 focus:outline-none"
            aria-label="Remove from cart"
          >
            <i class="fas fa-trash"></i>
          </button>
        </li>
      </ul>
      
      <div v-else class="text-center text-gray-500">
        Tu carrito está vacío
      </div>

      <div class="flex justify-between items-center mt-6 border-t pt-4">
        <span class="font-bold">Total:</span>
        <span class="font-bold">{{ total | currency }} €</span>
      </div>

      <button
        @click="toggleCart"
        class="absolute top-4 right-4 text-gray-600 hover:text-gray-800 focus:outline-none"
        aria-label="Close cart"
      >
        <i class="fas fa-times"></i>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    cartItems: {
      type: Array,
      required: true
    },
    isOpen: {
      type: Boolean,
      required: true
    }
  },
  computed: {
    total() {
      return this.cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
    }
  },
  methods: {
    toggleCart() {
      this.$emit('toggle-cart');
    },
    removeItem(productId) {
      this.$emit('remove-item', productId);
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
.cart-item:hover {
  background-color: #f1f1f1;
}
</style>
