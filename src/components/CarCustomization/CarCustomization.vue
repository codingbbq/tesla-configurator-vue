<script setup>
  import CarExterior from './CarExterior.vue';
  import CarInterior from './CarInterior.vue';
  import CarWheels from './CarWheels.vue';
  import CarSelfDrivingOption from './CarSelfDrivingOption.vue';
  import CarAccessories from './CarAccessories.vue';
  import CarPerformanceUpgrade from './CarPerformanceUpgrade.vue';
  import CarTotalPrice from './CarTotalPrice.vue';
  import CarPaymentDetails from './CarPaymentDetails.vue';
</script>

<template>
    <!-- Sidebar -->
    <aside class="w-full md:w-1/3 pl-0 md:pl-8 mt-6 md:mt-0 z-2">
        <h1 class="text-5xl text-center font-bold mb-5">Model Y</h1>
        <h2 class="text-xl text-center font-light">Customize Your Car</h2>

        <CarExterior />

        <CarInterior />

        <CarWheels />

        <CarSelfDrivingOption />

        <CarPerformanceUpgrade />

        <CarAccessories />

        <CarTotalPrice />

        <CarPaymentDetails />
      </aside>
</template>