import { createApp  } from "vue";
import { createPinia } from "pinia";
import { createRouter, createWebHistory } from "vue-router";

import Home from "@/views/Home.vue";
import Skill from "@/views/Skill.vue";
import Work from "@/views/Work.vue";
import Project from "@/views/Project.vue";

import App from "./App.vue";

import './index.css'

const pinia = createPinia()

const routes = [
	{ path: '/', name: "Home", component: Home },
	{ path: '/skill/:slug', name: "Skill", component: Skill },
	{ path: '/work/:slug', name: "Work", component: Work },
	{ path: '/project/:slug', name: "Project", component: Project },
];

const router = createRouter({
	history: createWebHistory("/portfolio"),
	routes, // short for `routes: routes`
});

const app = createApp(App);
app.use(pinia)
app.use(router);
app.mount("#app");