<template>
	<IsIt2021Already v-if="!closed && $route.path === '/watch'" class="modal" @close="closed = true" />
</template>

<script>
import IsIt2021Already from '../components/IsIt2021Already.vue'

export default {
	components: {IsIt2021Already},
	data() {
		return {closed: false}
	},
}
</script>

<style scoped>
.modal {
	position: absolute;
	top: 35vh;
	background: #e2e8f4;
	border-radius: 0.4rem;
	padding: 1rem;
	min-height: 4rem;
	width: 65ch;
	margin-right: auto;
	margin-left: auto;
}
</style>
