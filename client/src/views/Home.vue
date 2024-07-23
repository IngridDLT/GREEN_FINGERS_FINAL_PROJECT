<template>
  <div class="p-4">
    <section id="interior" class="bg-green-100 p-4 rounded mb-4">
      <h2 class="text-xl font-bold mb-2">Plantas de Interior</h2>
      <div class="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
        <ProductCard v-for="product in interiorPlants" :key="product.id" :product="product" />
      </div>
    </section>
    <section id="exterior" class="bg-green-100 p-4 rounded mb-4">
      <h2 class="text-xl font-bold mb-2">Plantas de Exterior</h2>
      <div class="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
        <ProductCard v-for="product in exteriorPlants" :key="product.id" :product="product" />
      </div>
    </section>
    <section id="supplements" class="bg-green-100 p-4 rounded mb-4">
      <h2 class="text-xl font-bold mb-2">Suplementos</h2>
      <div class="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
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
      interiorPlants: [],
      exteriorPlants: [],
      supplements: []
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
    }
  }
}
</script>