<template>
  <div class="flex flex-col items-center justify-center min-h-screen relative bg-green-50">
    <!-- Imagen de fondo -->
    <div class="absolute inset-0 bg-cover bg-center bg-no-repeat" style="background-image: url('/img/jardin5.jpg'); filter: brightness(80%);"></div>
    
    <!-- Formulario de Contacto -->
    <div class="relative z-10 p-6 bg-white bg-opacity-95 rounded-lg shadow-xl w-full max-w-md">
      <h2 class="text-3xl font-bold mb-6 text-center text-green-900">Contacta</h2>
      <form>
        <!-- Campo de Nombre -->
        <div class="mb-6 relative">
          <label class="block text-lg font-semibold mb-2 text-green-900" for="name">Nombre</label>
          <div class="flex items-center border border-green-300 rounded-lg focus-within:border-green-500">
            <span class="pl-3 pr-2 text-green-500">
              <i class="fas fa-user"></i> <!-- Ícono de usuario -->
            </span>
            <input
              class="w-full p-3 outline-none text-sm text-gray-700 placeholder-gray-400 focus:ring focus:ring-green-100 rounded-lg"
              type="text"
              id="name"
              placeholder="Tu nombre"
              required
            />
          </div>
        </div>

        <!-- Campo de Email -->
        <div class="mb-6 relative">
          <label class="block text-lg font-semibold mb-2 text-green-900" for="email">Email</label>
          <div class="flex items-center border border-green-300 rounded-lg focus-within:border-green-500">
            <span class="pl-3 pr-2 text-green-500">
              <i class="fas fa-envelope"></i> <!-- Ícono de correo -->
            </span>
            <input
              class="w-full p-3 outline-none text-sm text-gray-700 placeholder-gray-400 focus:ring focus:ring-green-100 rounded-lg"
              type="email"
              id="email"
              placeholder="Tu correo electrónico"
              required
            />
          </div>
        </div>

        <!-- Campo de Mensaje -->
        <div class="mb-6">
          <label class="block text-lg font-semibold mb-2 text-green-900" for="message">Mensaje</label>
          <textarea
            class="w-full p-3 border border-green-300 rounded-lg focus:outline-none focus:border-green-500 text-sm text-gray-700 placeholder-gray-400 focus:ring focus:ring-green-100"
            id="message"
            rows="4"
            placeholder="Escribe tu mensaje aquí"
            required
          ></textarea>
        </div>

        <!-- Botón Enviar -->
        <button class="bg-green-600 hover:bg-green-700 text-white font-semibold p-3 rounded-lg w-full transition duration-300 ease-in-out">
          Enviar
        </button>
      </form>
    </div>

    <!-- Mapa de Barcelona -->
    <div class="relative z-10 mt-8 w-full max-w-xl md:max-w-lg p-4 bg-white bg-opacity-95 rounded-lg shadow-xl">
      <h3 class="text-2xl font-bold mb-4 text-center text-green-900">Localización de Green Fingers</h3>
      <iframe
        class="w-full h-40 md:h-48 rounded-lg"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29912.68142253007!2d2.140399098218593!3d41.382760491852754!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12a4a2f39d66e2c5%3A0xb0c74c99e6a9d03a!2sGreen%20Fingers!5e0!3m2!1ses!2ses!4v1624371289381!5m2!1ses!2ses"
        style="border:0;"
        allowfullscreen=""
        loading="lazy"
      ></iframe>
    </div>
  </div>
</template>

<script>
export default {};
</script>


