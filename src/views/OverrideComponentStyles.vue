<template>
	<BackLink />
	<h1>Override Component Styles</h1>
	<h2>Instructions</h2>
	<p>
		Change the following's component's displayed bird icon's circular background to the color
		<button @click="copyColorCode">#C1CBDC</button> without changing the component itself.
	</p>
	<p>
		<RandomBird />
	</p>
	<hr />
	<h2>Result</h2>
	<p>
		<i>ToDo</i>
		<RandomBird />
	</p>
</template>

<script>
import BackLink from '../components/BackLink.vue'
import RandomBird from '../components/RandomBird.vue'

export default {
	components: {BackLink, RandomBird},
	methods: {
		copyColorCode() {
			navigator.clipboard.writeText('#C1CBDC')
		},
	},
}
</script>

<style scoped>
button {
	background: #c1cbdc;
	cursor: copy;
}
</style>
