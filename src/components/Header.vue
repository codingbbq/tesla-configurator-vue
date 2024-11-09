<script setup>
import logo from '@/assets/images/logo.svg';
</script>
<template>
	<header class="flex justify-between items-center px-10 py-6 mt-16">
		<img :src="logo" alt="Tesla" width="120" height="24" />
		<button><font-awesome-icon icon="globe" /> <span class="font-bold">US</span></button>
	</header>
</template>
