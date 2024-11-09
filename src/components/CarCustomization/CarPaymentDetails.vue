<script setup>

import { inject, computed, watch } from 'vue';
const carData = inject('carData');
const totalPrice = computed(() => {
	return carData.value.price;
});

const downPayment = 5000;
const loanTerm = 60;
const annualRate = 3;

const monthlyEMI = computed(() => {
	const principal = totalPrice.value - downPayment;
	const monthlyRate = annualRate / 12 / 100;
	const numberOfMonths = loanTerm;
	return (
		(principal * monthlyRate * Math.pow(1 + monthlyRate, numberOfMonths)) /
		(Math.pow(1 + monthlyRate, numberOfMonths) - 1)
	);
});

const formattedEMI = computed(() => {
  return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(monthlyEMI.value);
});

// Watch the monthlyEMI and update carData when it changes
watch(monthlyEMI, (newEMI) => {
  carData.value.monthlyEMI = newEMI;
});

</script>

<template>
	<!-- Payment Breakdown -->
	<div class="border-t pt-4 mt-6">
		<h3 class="font-semibold text-lg">Estimated Payment Breakdown</h3>
		<div class="mt-4">
			<p>
				Down Payment:
				<span id="down-payment" class="font-bold">${{ downPayment }}</span>
			</p>
			<p>Loan Term: <span class="font-bold">{{ loanTerm }} Months</span></p>
			<p>Interest Rate: <span class="font-bold">{{ annualRate }}% APR</span></p>
			<p>
				Estimated Monthly Payment:
				<span id="monthly-payment" class="font-bold text-2xl">{{ formattedEMI }}</span>
			</p>
		</div>
	</div>
</template>
