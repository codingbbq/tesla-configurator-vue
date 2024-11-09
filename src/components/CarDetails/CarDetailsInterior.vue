<script setup>
	const carModel = [
		{ name: 'DARK', image: 'model-y-interior-dark.jpg' },
		{ name: 'LIGHT', image: 'model-y-interior-light.jpg' },
	]
    import { inject, computed } from 'vue';
	const carData = inject('carData');
	const interior = computed(() => {
		return carModel.find((car) => car.name === carData.value?.interiorColor);
	});
</script>

<template>
	<!-- Interior Image -->
	<div class="h-96 bg-gray-200 flex items-center justify-center overflow-hidden mb-4">
		<img
			:src="`/images/${interior.image}`"
			alt="Model Y Interior"
			class="max-w-full h-auto transform scale-125"
			id="interior-image"
		/>
	</div>
</template>
