<script setup>
import { inject, computed } from 'vue';
const carModel = [
	{
		name: 'STEALTHGREY',
		image: 'model-y-stealth-grey.jpg',
	},
	{
		name: 'PEARLWHITE',
		image: 'model-y-pearl-white.jpg',
	},
	{
		name: 'DEEPBLUE',
		image: 'model-y-deep-blue-metallic.jpg',
	},
	{
		name: 'SOLIDBLACK',
		image: 'model-y-solid-black.jpg',
	},
	{
		name: 'ULTRARED',
		image: 'model-y-ultra-red.jpg',
	},
	{
		name: 'QUICKSILVER',
		image: 'model-y-quicksilver.jpg',
	},
];

const carData = inject('carData');
const selectedCar = computed(() => {
	const car = carModel.find((car) => car.name === carData.value?.exteriorColor);
	return car ? car.image : null;
});
</script>

<template>
	<!-- Exterior Image -->
	<div class="h-96 bg-gray-200 flex items-center justify-center overflow-hidden mb-4">
		<img
			:src="`/images/${selectedCar}`"
			alt="Model Y"
			class="max-w-full h-auto transform scale-125"
			id="exterior-image"
		/>
	</div>
</template>
