<script setup>
    import CarDetailsExterior from './CarDetailsExterior.vue';
    import CarDetailsInterior from './CarDetailsInterior.vue';
</script>

<template>

    <!-- Image Section -->
    <section class="w-full md:w-3/4">
        <div class="sticky top-24">
          
            <CarDetailsExterior />
            <CarDetailsInterior />
          
        </div>
      </section>

</template>