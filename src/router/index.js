import { createRouter, createWebHistory } from "vue-router";

const routes = [
/*    { path: '/home', name: 'home', component: HomeViewComponent, meta: { title: 'Home'} },
    { path: '*', name: 'PageNotFound', component: PageNotFoundComponent, meta: { title: 'Page Not Found'} },
    { path: '/', redirect: '/home'}*/
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