import Vue from 'vue';
import VueRouter from 'vue-router';

import Home from '../views/Home.vue';
import Profile from '../components/Auth/Profile';
import Signin from '../components/Auth/Signin';
import Signup from '../components/Auth/Signup';
import AddPhoto from '../components/Photos/AddPhoto';
import Photos from '../components/Photos/Photos';

Vue.use(VueRouter);

const routes = [
	{
		path: '/',
		name: 'Home',
		component: Home
	},
	{
		path: '/profile',
		name: 'Profile',
		component: Profile
	},
	{
		path: '/signin',
		name: 'Signin',
		component: Signin
	},
	{
		path: '/signup',
		name: 'Signup',
		component: Signup
	},
	{
		path: '/photos',
		name: 'Photos',
		component: Photos
	},
	{
		path: '/photos/add-photo',
		name: 'AddPhoto',
		component: AddPhoto
	}
];

const router = new VueRouter({
	mode: 'history',
	// base: process.env.BASE_URL,
	routes
});

export default router;
