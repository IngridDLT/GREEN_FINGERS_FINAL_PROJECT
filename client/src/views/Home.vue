<template>
    <div class="p-4">
      <section id="interior" class="bg-green-100 p-4 rounded mb-4">
        <h2 class="text-xl font-bold mb-2">Plantas de Interior</h2>
        <div class="grid grid-cols-2 md:grid-cols-5 gap-4 text-center">
          <ProductCard v-for="product in interiorPlants" :key="product.id" :product="product" />
        </div>
      </section>
      <section id="exterior" class="bg-green-100 p-4 rounded mb-4">
        <h2 class="text-xl font-bold mb-2">Plantas de Exterior</h2>
        <div class="grid grid-cols-2 md:grid-cols-5 gap-4 text-center">
          <ProductCard v-for="product in exteriorPlants" :key="product.id" :product="product" />
        </div>
      </section>
      <section id="supplements" class="bg-green-100 p-4 rounded mb-4">
        <h2 class="text-xl font-bold mb-2">Suplementos</h2>
        <div class="grid grid-cols-2 md:grid-cols-5 gap-4 text-center">
          <ProductCard v-for="product in supplements" :key="product.id" :product="product" />
        </div>
      </section>
    </div>
  </template>
  
  <script>
  import ProductCard from '../components/ProductCard.vue'
  
  export default {
    components: {
      ProductCard
    },
    data() {
      return {
        interiorPlants: [
          // { id: 1, name: 'Orquídea Azul', price: 15, image: './src/assets/img/orquidea_int.jpg' },
          // { id: 2, name: 'Monstera', price: 20, image: './src/assets/img/monstera_int.jpg' },
          // { id: 3, name: 'Zamioculca', price: 35, image: "./src/assets/img/zz_int.jpg" },
          // { id: 4, name: 'Begoña', price: 20, image: "./src/assets/img/begoña_int.jpg" },
          // { id: 5, name: 'Orquídea Rosa', price: 22, image: "./src/assets/img/orquidea2_int.jpg" },
          // { id: 5, name: 'Ceropegia Woodii', price: 24, image: "./src/assets/img/ceropegia_int.jpg" },
        ],
        exteriorPlants: [
          // { id: 1, name: 'Margarita Azul', price: 10, image: './src/assets/img/margarita_azul_ext.jpg' },
          // { id: 2, name: 'Lavanda', price: 20, image: './src/assets/img/lavanda_ext.jpg' },
          // { id: 3, name: 'Limonero', price: 30, image: "./src/assets/img/limonero_ext.jpg" },
          // { id: 4, name: 'Ave del Paraiso', price: 85, image: "./src/assets/img/ave_paraiso_ext.jpg" },
          // { id: 5, name: 'Margarita Amarilla', price: 25, image: "./src/assets/img/margaritas_amarillas_ext.jpg" },
          // { id: 5, name: 'Margarita Blanca', price: 25, image: "./src/assets/img/margarita_blanca_ext.jpg" },
        ],
        supplements: [
          // { id: 1, name: 'Perlita', price: 5, image: './src/assets/img/perlita.jpg' },
          // { id: 2, name: 'Compost', price: 5, image: './src/assets/img/tierra.jpg' },
          // { id: 3, name: 'Fertilizante', price: 5, image: './src/assets/img/fertilizante.jpg' },
          // { id: 4, name: 'Vermiculita 6L', price: 5, image: './src/assets/img/vermiculita6.jpg' },
          // { id: 5, name: 'Sustrato', price: 5, image: './src/assets/img/sustrato_universal.jpg' },
          // { id: 4, name: 'Vermiculita 20L', price: 5, image: './src/assets/img/vermiculita.jpg' },
        ]
      }
    }
  }
  </script>
  
