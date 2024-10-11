import { createRouter, createWebHistory } from "vue-router";
import HomeComponent  from '../public/pages/Home.vue'
import CountryOverviewComponent from "../country-management/pages/CountryOverview.vue";

const routes = [
    { path: '/home', name: 'home', component: HomeComponent, meta: { title: 'Home'} },
    { path: '/countries', name: 'countries', component: CountryOverviewComponent, meta: { title: 'Countries'} },
    /*
    { path: '*', name: 'PageNotFound', component: PageNotFoundComponent, meta: { title: 'Page Not Found'} },
    */
    { path: '/', redirect: '/home'}
]

const router = createRouter({
    history: createWebHistory(),
    routes,
});

router.beforeEach((to, from, next) => {
    let baseTitle = 'Country App';
    document.title = `${baseTitle} | ${to.meta['title']}`;
    next();
});

export default router;