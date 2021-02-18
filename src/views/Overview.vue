<template>
	<img src="/bird.svg" height="36" width="36" />
	<h1>You Made It</h1>
	<p>Welcome! 👏</p>

	<hr />

	<h2>Challenges</h2>
	<p>
		<router-link to="/data-loading-and-local-persistence">Data Loading & Local Persistence</router-link> |
		<router-link to="/graphql">GraphQL Query & Mutation</router-link> |
		<router-link to="/watch">Watch</router-link>
	</p>
	<p>
		<router-link to="/select-with-custom-style">Native Select With Custom Style</router-link> |
		<router-link to="/override-component-styles">Override Component Styles</router-link>
	</p>
</template>

<style scoped>
a:not(:first-of-type) {
	margin-left: 0.4rem;
}

a:not(:last-of-type) {
	margin-right: 0.4rem;
}
</style>
