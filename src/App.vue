<template>
	<router-view />
	<Modal />
</template>

<script setup>
// eslint-disable-next-line no-unused-vars
import Modal from './views/Modal.vue'
</script>

<style>
#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	color: #2c3e50;
	padding: 3rem 5rem;
	max-width: 65ch;
	margin-right: auto;
	margin-left: auto;
}

a {
	color: #0ba7ff;
}

a:hover {
	color: #353d4d;
}

button {
	border: none;
	font-family: inherit;
	font-size: inherit;
	color: inherit;
	padding: 0;
	cursor: pointer;
}

li {
	padding-bottom: 0.4rem;
}
</style>
