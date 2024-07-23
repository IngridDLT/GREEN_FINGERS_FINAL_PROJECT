<template>
  <nav class="bg-green-300 p-4">
    <div class="container mx-auto flex justify-between items-center">
      
      <!-- Botón para menú móvil -->
      <div class="block md:hidden ml-auto">
        <button @click="toggleMenu" class="text-gray-700 focus:outline-none">
          <svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>
      </div>

      <!-- Menú de navegación para escritorio -->
      <div class="hidden md:flex md:items-center ml-auto">
        <router-link to="/" class="mr-4">Home</router-link>
        <router-link to="/contact" class="mr-4">Contact</router-link>
        <router-link to="/advice" class="mr-4">Advice</router-link>
      </div>

      <!-- Menú de navegación móvil -->
      <div v-if="isMenuOpen" class="md:hidden absolute top-16 right-0 bg-white shadow-lg rounded mt-2 w-48">
        <router-link to="/" class="block px-2 py-1 text-gray-800 hover:bg-gray-200">Home</router-link>
        <router-link to="/contact" class="block px-2 py-1 text-gray-800 hover:bg-gray-200">Contact</router-link>
        <router-link to="/advice" class="block px-2 py-1 text-gray-800 hover:bg-gray-200">Advice</router-link>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      isMenuOpen: false
    };
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    }
  }
};
</script>
