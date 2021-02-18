<template>
	<BackLink />
	<h1>Data Loading & Local Persistence</h1>
	<h2>Instructions</h2>
	<ol>
		<li>
			Fetch the JSON from
			<a
				href="https://storage-staging.birdeatsbug.com/networkRequests/bC8YNgPK_F1M-nZS9-5aUi3unwebuONAGmddlCNpPjwjNl5J7DoTBRW05TF-Lv7jbwnGANwOdpaB37bPNvoc-Igtqb-M87PMD0ajIj2riTM1gfmcyETP_bajZQYCqcqs--hgDsh2NrnMDRMnHCk2KA/requests.json"
				target="_blank"
				noref
				nofollow
				>1</a
			>
			and
			<a
				href="https://storage-staging.birdeatsbug.com/networkRequests/yZBmrOkqJSaV8MmjyecgT7Lp6lyWRcg3hLdClBcDBItm1ZKUE0f6D9Zbdc0Bbj4-OSeJna4b7UYHgU9yEDMYnkXENY7RlcO8QQBvZp3gkScHEoMKxDQeq20a81evCYNg-cY1JDLEeiis6ti0Vbs8vc/requests.json"
				target="_blank"
				noref
				nofollow
				>2</a
			>
			in parallel. Merge the <code>responses</code> property of both request's responses into one array. Order the
			data by the <code>startedAt</code> attribute descending. Lastly, render the result on this page.
		</li>
		<li>
			Persist the computed result in <code>localStorage</code>. When the page is reloaded, the persisted result
			should be shown until the data re-fetching and re-computation finished. Then overwrite the previous
			<code>localStorage</code> content with the new result.
		</li>
		<li>
			Add a text input which allows to edit the persisted result. When the user reloads the view and the network
			responses come in, merge the incoming data with the persisted data. Persisted data takes precendence over
			the incoming data, so that local edits survive page reloads.
		</li>
	</ol>

	<hr />
	<h2>Result</h2>
	<p>
		<i>ToDo</i>
	</p>
</template>

<script setup>
// eslint-disable-next-line no-unused-vars
import BackLink from '../components/BackLink.vue'
</script>
