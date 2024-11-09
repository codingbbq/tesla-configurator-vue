<script setup>
import { inject, ref } from 'vue';
const carData = inject('carData');
const selected = ref(false);
const handlePerformanceUpgrade = () => {
    selected.value = !selected.value;
	carData.value = { ...carData.value, performance: selected.value };
};
</script>
<template>
	<!-- Performance Upgrade -->
	<div class="mb-8">
		<h3 class="font-semibold mb-2">Performance Package</h3>
		<button
			id="performance-btn"
            :class="selected ? 'bg-gray-700 text-white' : 'bg-gray-200'"
			class="w-full py-4 bg-gray-200 rounded-lg"
			@click="handlePerformanceUpgrade"
		>
			Performance Upgrade (+$5,000)
		</button>
	</div>
</template>
