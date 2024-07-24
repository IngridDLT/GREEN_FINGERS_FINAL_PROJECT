<!-- <template>
    <div class="relative"> -->
      <!-- Botón del carrito con ícono de Font Awesome -->
      <!-- <button @click="toggleCart" class="text-green-900 hover:text-green-700 focus:outline-none focus:ring">
        <i class="fa-solid fa-cart-shopping"></i>
        <span v-if="cartItems.length" class="absolute -top-2 -right-2 bg-red-500 text-white rounded-full text-xs w-5 h-5 flex items-center justify-center">
          {{ cartItems.length }}
        </span>
      </button> -->
  
      <!-- Ventana del carrito -->
      <!-- <div v-if="isCartOpen" class="absolute right-0 mt-2 w-64 bg-white shadow-lg rounded-lg overflow-hidden z-50">
        <div class="p-4">
          <h3 class="text-lg font-bold mb-2">Tu Carrito</h3>
          <ul class="space-y-2">
            <li v-for="(item, index) in cartItems" :key="index" class="flex justify-between items-center border-b pb-2">
              <span>{{ item.name }}</span>
              <button @click="removeFromCart(index)" class="text-red-500 hover:text-red-700">
                <i class="fa-solid fa-trash"></i>
              </button>
            </li>
          </ul>
          <div v-if="!cartItems.length" class="text-gray-500 text-center">
            El carrito está vacío
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        isCartOpen: false,
        cartItems: [], // Aquí almacenaremos los productos añadidos al carrito
      };
    },
    methods: {
      toggleCart() {
        this.isCartOpen = !this.isCartOpen;
      },
      addToCart(product) {
        this.cartItems.push(product);
      },
      removeFromCart(index) {
        this.cartItems.splice(index, 1);
      },
    },
  };
  </script>
   -->