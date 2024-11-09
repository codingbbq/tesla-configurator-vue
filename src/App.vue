<script setup>
import { ref, provide } from 'vue';
import TopBar from '@/components/TopBar.vue';
import Header from '@/components/Header.vue';
import CarDetails from '@/components/CarDetails/CarDetails.vue';
import CarCustomization from '@/components/CarCustomization/CarCustomization.vue';
import CardataObj from '@/utilities/carDataObj.js';
const carData = ref(CardataObj);
provide('carData', carData);
</script>

<template>
	<TopBar />
	<Header />

	<!-- Main Content -->
	<main class="flex flex-col md:flex-row justify-between px-4 md:px-10 py-6">
		<CarDetails />
		<CarCustomization />
	</main>
</template>
