<template>
  <div class="flex items-center justify-center min-h-screen bg-green-50">
      <div class="p-4 bg-green-100 rounded shadow-lg w-full max-w-md">
          <h2 class="text-2xl font-bold mb-4 text-center">Contacta</h2>
          <form>
              <div class="mb-4">
                <label class="block text-sm font-bold mb-2" for="name">Nombre</label>
                <input class="w-full p-2 border rounded" type="text" id="name" required>
              </div>
              <div class="mb-4">
                <label class="block text-sm font-bold mb-2" for="email">Email</label>
                <input class="w-full p-2 border rounded" type="email" id="email" required>
              </div>
              <div class="mb-4">
                <label class="block text-sm font-bold mb-2" for="message">Mensaje</label>
                <textarea class="w-full p-2 border rounded" id="message" required></textarea>
              </div>
              <button class="bg-green-500 text-white p-2 rounded w-full">Enviar</button>
            </form>  
      </div>
  </div>
</template>

<script>
export default {
  
}
</script>

