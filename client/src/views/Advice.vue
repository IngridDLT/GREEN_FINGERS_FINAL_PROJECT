<template>
  <div class="flex flex-col items-center justify-center min-h-screen relative bg-green-50">
    <!-- Imagen de fondo -->
    <div class="absolute inset-0 bg-cover bg-center bg-no-repeat" style="background-image: url('/img/camino.jpg'); filter: brightness(80%);"></div>
    
    <!-- Contenido principal -->
    <div class="relative z-10 p-6 bg-white bg-opacity-95 rounded-lg shadow-xl w-full max-w-screen-lg space-y-6 mx-auto">
      
      <!-- Sección de Consejos Generales -->
      <section class="bg-green-200 text-white p-6 rounded-lg shadow-lg overflow-hidden flex flex-col md:flex-row bg-opacity-80" style="background-image: url('/img/jardin7.jpg'); background-size: cover; background-position: center;">
        <div class="bg-opacity-75 bg-green-700 p-6 rounded-lg flex-1 md:w-1/2">
          <h2 class="text-3xl font-bold mb-4 text-center">Consejos Básicos para Cuidar tus Plantas</h2>
          <p class="text-lg">
            Pon una planta en tu vida. Sus beneficios son múltiples: producen oxígeno, absorben dióxido de carbono, ayudan a regular la temperatura, y conforman un entorno agradable lleno de belleza y vida. En Green Fingers, te daremos unos consejos básicos para cuidar tus plantas. Míralos y no dudes en aplicarlos. ¡Tus plantas lo agradecerán!
            <br /><br />
            Antes de comprar cualquier planta, tanto interior como exterior, debes informarte acerca de sus cuidados. En el caso de las plantas de interior, es muy importante la luz directa que recibe, así como el riego. Y en las de exterior, hay que atender a la poda y el abonado.
          </p>
        </div>
      </section>

      <!-- Sección de Consejos para Plantas Interiores -->
      <section class="bg-gradient-to-r from-green-200 via-yellow-100 to-green-200 text-black p-6 rounded-lg shadow-lg flex flex-col md:flex-row items-center">
        <div class="w-full md:w-1/3 mb-4 md:mb-0 md:mr-4">
          <img src="/img/jardin3.jpg" alt="Jardín Interior" class="rounded-lg shadow-lg w-full" />
        </div>
        <div class="w-full md:w-2/3 bg-opacity-80 bg-white p-4 rounded-lg shadow-lg">
          <h2 class="text-2xl font-bold mb-4 text-center">Cuidar Plantas Interiores</h2>
          <ul class="list-disc list-inside space-y-2">
            <li>
              Suministra la cantidad de agua correcta. En muchas ocasiones, excederse en el agua con el que se riega la planta puede afectar a su supervivencia, al igual que si se hace de manera escasa. La planta debe estar húmeda, no empapada.
            </li>
            <li>
              Mantén limpias las plantas. Si estas no se mantienen limpian corren el riesgo de adquirir un aspecto marchito o enfermarse. Con pasar un paño húmedo es suficiente. En el caso de que necesites desinfectar la planta de alguna plaga, también puedes emplear algún jabón insecticida.
            </li>
            <li>
              Evita el calor. Aquellas plantas que tengan flores, deben huir del calor. Pues si no se secarán mucho más rápido.
            </li>
            <li>
              Adapta tus plantas al entorno y el clima. Las plantas necesitan un tiempo para acostumbrarse a la luz y a la sombra. No puedes exponer al sol directamente a una planta que ha estado a la sombra, porque si no sus hojas pueden quemarse. Lo mejor es en inviernos acercarlas a la ventana y en verano alejarlas.
            </li>
          </ul>
        </div>
      </section>

      <!-- Sección de Consejos para Plantas Exteriores -->
      <section class="bg-gradient-to-r from-green-300 via-yellow-100 to-green-200 text-black p-6 rounded-lg shadow-lg flex flex-col md:flex-row items-center">
        <div class="w-full md:w-1/3 mb-4 md:mb-0 md:mr-4">
          <img src="/img/jardin2.jpg" alt="Jardín Exterior" class="rounded-lg shadow-lg w-full" />
        </div>
        <div class="w-full md:w-2/3 bg-opacity-80 bg-white p-4 rounded-lg shadow-lg">
          <h2 class="text-2xl font-bold mb-4 text-center">Cuidar Plantas Exteriores</h2>
          <ul class="list-disc list-inside space-y-2">
            <li>
              Elige un lugar adecuado. Para ello tienes que tener en cuenta la cantidad de luz que tus plantas deben recibir. Lo más práctico es colocar las plantas en macetas para facilitar el movimiento y adaptarse mejor a las condiciones climáticas que necesitan.
            </li>
            <li>
              Fíjate en la maceta. Es muy importante el material con el que están hechas: plástico, arcilla, cerámica… Las de plástico permiten un movimiento más fácil, sin embargo, las de arcilla o cerámica drenan mejor el agua. Es importante que la maceta cuente con un agujero en la parte inferior. De esta forma, eliminará el exceso de agua al regar la planta.
            </li>
            <li>
              Riega tus plantas solo cuando sea necesario. Dependiendo del lugar donde vivas, si es más seco o hay más lluvias necesitarás regar más o menos. La periodicidad y cantidad con la que hay que regar una planta es variable y lo más recomendable es que preguntes antes de comprarla.
            </li>
          </ul>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
export default {};
</script>
