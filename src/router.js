import {createWebHistory, createRouter} from 'vue-router'

import Overview from './views/Overview.vue'
import DataLoadingAndLocalPersistence from './views/DataLoadingAndLocalPersistence.vue'
import GraphQL from './views/GraphQL.vue'
import Watch from './views/Watch.vue'
import SelectWithCustomStyle from './views/SelectWithCustomStyle.vue'
import OverrideComponentStyles from './views/OverrideComponentStyles.vue'

const routes = [
	{
		path: '/',
		component: Overview,
	},
	{
		path: '/data-loading-and-local-persistence',
		component: DataLoadingAndLocalPersistence,
	},
	{
		path: '/graphql',
		component: GraphQL,
	},
	{
		path: '/watch',
		component: Watch,
	},
	{
		path: '/select-with-custom-style',
		component: SelectWithCustomStyle,
	},
	{
		path: '/override-component-styles',
		component: OverrideComponentStyles,
	},
]

const router = createRouter({
	history: createWebHistory(),
	routes,
})

export default router
