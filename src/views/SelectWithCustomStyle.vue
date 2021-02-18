<template>
	<BackLink />
	<h1>Native <code>Select</code> With Custom Style</h1>
	<h2>Instructions</h2>
	<ol>
		<li>
			Build a native HTML <code>select</code>, which has a custom style similar to this:

			<img :class="{inline}" src="/select.gif" @click="inline = !inline" />

			The select should look like a clickable link across browsers and operating systems, and (keyboard)
			accessible.
		</li>
		<li>Reverse the rendering order of the selection history.</li>
		<li>
			Whenever a select option is selected, its <code>button</code> in the "Selection History" should be focused.
		</li>
		<li>
			When <code>admin</code> is selected for the 1st time, the value of <code>selection</code> should be reset to
			<code>null</code> and the <code>select</code> should display its empty default state. There should be no
			entry in the selection history.
		</li>
	</ol>

	<hr />
	<h2>Result</h2>
	<p>
		<select :value="selection" @change="onSelectionChange">
			<optgroup label="selection">
				<option value="admin">Admin - Full member with access to billing and payments</option>
				<option value="full-member">Full member - can report and manage all sessions</option>
				<option value="bug-reporter">Bug reporter - can only report and view sessions they upload</option>
			</optgroup>
		</select>
	</p>
	<h3>Selection History</h3>
	<p>
		<button
			v-for="(historyEntry, index) in selectionHistory"
			:key="historyEntry"
			:ref="`${historyEntry}-${index}`"
			@click="selection = historyEntry"
		>
			{{ historyEntry }}
		</button>
	</p>
</template>

<script>
import BackLink from '../components/BackLink.vue'

export default {
	components: {BackLink},
	data: function () {
		return {
			inline: true,
			selection: null,
			selectionHistory: [],
		}
	},
	methods: {
		onSelectionChange(event) {
			console.log(`option "${event.target.value}" selected`)
			this.selection = event.target.value
			this.selectionHistory.push(event.target.value)
			console.log(`selection is now "${this.selection}"`)
		},
	},
}
</script>

<style scoped>
img {
	object-fit: contain;
	margin-top: 0.4rem;
	cursor: zoom-out;
}

.inline {
	width: 100%;
	cursor: zoom-in;
}

button {
	display: block;
	padding: 0.4rem 0.8rem;
	margin-bottom: 0.4rem;
	background: #fad878;
	border-radius: 0.4rem;
}

button:hover {
	background: #fece2f;
}
</style>
