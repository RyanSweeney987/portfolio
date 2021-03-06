import { createApp  } from "vue";
import { createPinia } from "pinia";
import { createRouter, createWebHashHistory } from "vue-router";

// Data
import { skills } from "@/assets/data/skills.json";
import { workexp } from "@/assets/data/workexp.json";
import { projects } from "@/assets/data/projects.json";

// Views
import Home from "@/views/Home.vue";
import Skill from "@/views/Skill.vue";
import Work from "@/views/Work.vue";
import Project from "@/views/Project.vue";
import App from "./App.vue";

// CSS
import './index.css';

const pinia = createPinia();

const routeStores = [
	{name: "skill", store: skills},
	{name: "work", store: workexp},
	{name: "project", store: projects}
];

const routes = [
	{ 
		path: '/', 
		name: "home", 
		component: Home, 
		sensitive: true
	},
	{ 
		path: '/skill/:slug', 
		name: "skill", 
		component: Skill, 
		sensitive: true, 
		props: true, 
		meta: {
			bg: "background-2",
			bgPattern: "background-pattern-2",
			bgHover: "background-hover-2"
		}
	},
	{ 
		path: '/work/:slug', 
		name: "work", 
		component: Work, 
		sensitive: true, 
		props: true, 
		meta: {
			bg: "background-3",
			bgPattern: "background-pattern-3",
			bgHover: "background-hover-3"
		}
	},
	{ 
		path: '/project/:slug', 
		name: "project", 
		component: Project, 
		sensitive: true, 
		props: true, 
		meta: {
			bg: "background-4",
			bgPattern: "background-pattern-4",
			bgHover: "background-hover-4"
		}
	},
];

const router = createRouter({
	history: createWebHashHistory("/portfolio"),
	routes, // short for `routes: routes`
	strict: true,
	scrollBehavior(to, from, savedPosition) {
		if (savedPosition) {
			return savedPosition;
		} else {
			return { x: 0, y: 0, top: 0 };
		}
	}
});

// Global navigation guard
router.beforeEach((to, from) => {
	// Check if the route is any route other than the home route
	if(routeStores.map(_ => _.name).find(_ => _ === to.name) !== undefined) {
		const store = routeStores.find(_ => _.name === to.name)?.store.map(_ => _.slug);
		
		if(store === undefined || store.find(_ => _ === to.params.slug) === undefined) {
			return {name: "home"};
		} 
	} 
});

const app = createApp(App);
app.use(pinia)
app.use(router);
app.mount("#app");