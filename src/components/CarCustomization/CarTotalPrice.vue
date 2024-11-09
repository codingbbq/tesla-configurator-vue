<script setup>
import { inject, ref, watchEffect, computed } from 'vue';
const carData = inject('carData');
const totalPrice = ref(52490);
watchEffect(() => {
	totalPrice.value = 52490;
	if (carData.value.wheels === 'PERFORMANCE') {
		totalPrice.value += 2500;
	}
	if (carData.value.fullSelfDriving) {
		totalPrice.value += 8500;
	}
	if (carData.value.accessories.CENTER_CONSOLE) {
		totalPrice.value += 35;
	}
	if (carData.value.accessories.SUNSHADE) {
		totalPrice.value += 105;
	}
	if (carData.value.accessories.LINERS) {
		totalPrice.value += 225;
	}

	// Update the price in the carData object
	carData.value.price = totalPrice.value;
});

const formattedTotalPrice = computed(() => {
	return totalPrice.value.toLocaleString('en-US', {
		style: 'currency',
		currency: 'USD',
	});
});
</script>
<template>
	<!-- Total Price Section -->
	<div class="pt-4">
		<h3 class="font-semibold text-lg">Total Price</h3>
		<p id="total-price" class="text-2xl font-bold">{{ formattedTotalPrice }}</p>
	</div>
</template>
