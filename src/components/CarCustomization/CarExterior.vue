<script setup>
    import { inject } from 'vue';
    const colors = [
        {
            id: 1,
            name: 'STEALTHGREY',
            image: 'button-stealth-grey.avif'
        },
        {
            id: 2,
            name: 'PEARLWHITE',
            image: 'button-pearl-white.avif'
        },
        {
            id: 3,
            name: 'DEEPBLUE',
            image: 'button-deep-blue-metallic.avif'
        },
        {
            id: 4,
            name: 'SOLIDBLACK',
            image: 'button-solid-black.avif'
        },
        {
            id: 5,
            name: 'ULTRARED',
            image: 'button-ultra-red.avif'
        },
        {
            id: 6,
            name: 'QUICKSILVER',
            image: 'button-quicksilver.avif'
        }
    ]

    const carData = inject('carData');
    const handleCarExteriorColor = (color) => {
        carData.value = { ...carData.value, exteriorColor: color };
    }
</script>

<template>
    <!-- Exterior Buttons -->
    <div class="my-8" id="exterior-buttons">
          <h3 class="font-semibold mb-2">Exterior Color</h3>
          <div class="flex space-x-4">
            <button v-for="color in colors" :key="color.id"
              class="transition-transform duration-300 hover:scale-110"
              @click="handleCarExteriorColor(color.name)"
            >
              <img
                v-bind:src="`/src/assets/images/${color.image}`"
                :alt="color.name"
                class="w-22"
              />
            </button>
          </div>
        </div>
</template>