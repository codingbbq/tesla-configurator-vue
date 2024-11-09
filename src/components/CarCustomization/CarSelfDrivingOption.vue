<script setup>
import { inject, ref } from 'vue';
const carData = inject('carData');
const fullSelfDriving = ref(carData.value?.fullSelfDriving || false);
const handleFullSelfDriving = (event) => {
    carData.value = { ...carData.value, fullSelfDriving: event.target.checked };
};
</script>
<template>
	<!-- Full Self Driving Option -->
	<div class="border p-4 mb-8 rounded-lg shadow">
		<h3 class="font-semibold mb-2">Full Self-Driving</h3>
		<label class="flex items-center space-x-3">
			<input
				type="checkbox"
				id="full-self-driving-checkbox"
				class="form-checkbox h-5 w-5 text-blue-600"
                v-model="fullSelfDriving"
                @change="handleFullSelfDriving"
			/>
			<span>Add Full Self-Driving for $8,500</span>
		</label>
	</div>
</template>
