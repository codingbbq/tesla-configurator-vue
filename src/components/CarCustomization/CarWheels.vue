<script setup>
import { inject, ref } from 'vue';
const selected = ref('STANDARD');
const carData = inject('carData');
const handleCarWheels = (wheels) => {
    carData.value = { ...carData.value, wheels };
    selected.value = wheels;
};
</script>
<template>
    <!-- Wheel Buttons -->
    <div class="mb-8" id="wheel-buttons">
          <h3 class="font-semibold mb-2">Wheels</h3>
          <button
            @click="handleCarWheels('STANDARD')"
            :class="{ 'bg-gray-700 text-white': selected === 'STANDARD' }"
            class="w-full py-4 mb-2 bg-gray-200 hover:bg-gray-600 hover:text-white rounded-lg transition-colors duration-300"
          >
            Standard Wheels
          </button>
          <button
            @click="handleCarWheels('PERFORMANCE')"
            :class="{ 'bg-gray-700 text-white': selected === 'PERFORMANCE' }"
            class="w-full py-4 mb-2 bg-gray-200 hover:bg-gray-600 hover:text-white rounded-lg transition-colors duration-300"
          >
            Performance Wheels (+$2,500)
          </button>
        </div>
</template>