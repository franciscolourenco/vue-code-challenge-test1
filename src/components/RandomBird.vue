<template>
	<p>
		<img :src="`/${randomBirdIcon}.svg`" height="88" width="88" />
		<button @click="getRandomBirdIcon">I'm feeling lucky</button>
	</p>
</template>

<script>
export default {
	data: function () {
		return {
			randomBirdIcon: 'bird-sherlock',
			birdIcons: ['bird', 'bird-sherlock', 'bird-xmas'],
		}
	},
	methods: {
		getRandomBirdIcon() {
			this.randomBirdIcon = this.birdIcons[Math.floor(Math.random() * this.birdIcons.length)]
		},
	},
}
</script>

<style scoped>
img {
	padding: 1rem;
	border-radius: 50%;
	background: #e2e8f4;
}

button {
	margin-top: 1rem;
	display: block;
	background: #fad878;
	border-radius: 0.2rem;
	padding: 0.4rem 0.8rem;
}

button:hover {
	background: #fece2f;
}
</style>
