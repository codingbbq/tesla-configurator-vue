<script setup>
import { inject } from 'vue';
const colors = [
	{
		id: 1,
		name: 'DARK',
		image: 'button-dark.avif',
	},
	{
		id: 2,
		name: 'LIGHT',
		image: 'button-light.avif',
	},
];
const carData = inject('carData');
const handleCarInteriorColor = (color) => {
    carData.value = { ...carData.value, interiorColor: color.name };
};
</script>
<template>
	<!-- Interior Buttons -->
	<div class="my-8" id="interior-buttons">
		<h3 class="font-semibold mb-2">Interior Color</h3>
		<div class="flex space-x-4">
			<button
				v-for="color in colors"
				:key="color.id"
				class="transition-transform duration-300 hover:scale-110"
                @click="handleCarInteriorColor(color)"
			>
				<img :src="`/images/${color.image}`" :alt="color.name" class="w-12" />
			</button>
		</div>
	</div>
</template>
