<template>
	<BackLink />
	<h1>Watch</h1>
</template>

<script>
import BackLink from '../components/BackLink.vue'

export default {
	components: {BackLink},
	data() {
		return {
			interval: null,
		}
	},
	mounted() {
		this.interval = setInterval(this.updateUnixTimestampQueryParameter, 1000)
	},
	beforeUnmount() {
		clearInterval(this.interval)
		const query = {...this.$route.query}
		delete query.unixTimestamp
		this.$router.replace({query})
	},
	methods: {
		updateUnixTimestampQueryParameter() {
			const unixTimestamp = Math.floor(Date.now() / 1000)
			const query = {...this.$route.query, unixTimestamp}
			this.$router.replace({query})
		},
	},
}
</script>
