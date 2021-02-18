<template>
	<div>
		<button class="close" @click="$emit('close')">x</button>
		<h2>Instructions</h2>
		<p>
			Change the component <code>IsIt2021Already</code> to always render the current
			<code>unixTimestamp</code> query parameter, and whether or not the timestamp is after
			<code>2021-01-01 00:00:00</code>.
		</p>
		<hr />
		<h2>Result</h2>
		<h3>Is It 2021 Already? 😱</h3>
		<p>
			<i>ToDo</i>
		</p>
	</div>
</template>

<style scoped>
.close {
	float: right;
	background: transparent;
	width: 1rem;
	height: 1rem;
	line-height: 1rem;
	text-align: center;
}
</style>
