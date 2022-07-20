import { defineStore } from 'pinia'
import { workexp } from "@/assets/data/workexp.json";

// useStore could be anything like useUser, useCart
// the first argument is a unique id of the store across your application
export const useWorkStore = defineStore('workStore', {
	state: () => {
		return { workexp };
	}
});