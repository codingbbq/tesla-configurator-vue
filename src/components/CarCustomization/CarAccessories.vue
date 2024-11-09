<script setup>
import { inject, ref } from 'vue';
const carData = inject('carData');
const handleAccessory = (accessory) => {
    carData.value = { ...carData.value, accessories: { ...carData.value.accessories, [accessory]: !carData.value.accessories[accessory] } };
};
</script>
<template>
	<!-- Accessories Checkboxes -->
	<div class="my-8">
		<h3 class="font-semibold mb-2">Accessories</h3>
		<div class="space-y-4">
			<label class="flex items-center justify-between py-4 px-4 border rounded-lg shadow">
				<span>Center Console Trays</span>
				<span class="flex items-center space-x-2">
					<input type="checkbox" class="accessory-form-checkbox h-5 w-5" @change="handleAccessory('CENTER_CONSOLE')" />
					<span>$35</span>
				</span>
			</label>
			<label class="flex items-center justify-between py-4 px-4 border rounded-lg shadow">
				<span>Sunshade</span>
				<span class="flex items-center space-x-2">
					<input type="checkbox" class="accessory-form-checkbox h-5 w-5" @change="handleAccessory('SUNSHADE')" />
					<span>$105</span>
				</span>
			</label>
			<label class="flex items-center justify-between py-4 px-4 border rounded-lg shadow">
				<span>All-Weather Interior Liners</span>
				<span class="flex items-center space-x-2">
					<input type="checkbox" class="accessory-form-checkbox h-5 w-5" @change="handleAccessory('LINERS')" />
					<span>$225</span>
				</span>
			</label>
		</div>
	</div>
</template>
