<script setup>
import { onMounted, onUnmounted, ref } from 'vue';

const atTop = ref(true);

const handleScroll = () => {
    atTop.value = window.scrollY === 0;  
}

onMounted(() => {
    window.addEventListener('scroll', () => requestAnimationFrame(handleScroll));
});

onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll);
});
</script>
<template>
    <div id="top-bar" :class="{'visible-bar': atTop, 'hidden-bar': !atTop }" class="bg-gray-100 fixed top-0 right-0 left-0 py-2">
      <p class="text-center py-2 font-semibold">
        0% APR available for qualified buyers
      </p>
    </div>
</template>

<style scoped>
#top-bar {
  transition: transform 0.5s ease-in-out;
}

.visible-bar {
  transform: translateY(0);
}

.hidden-bar {
  transform: translateY(-100%);
}

</style>