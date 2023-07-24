import { Router } from "@vaadin/router";

export function initRouter() {
    const router = new Router(document.querySelector('#app'))

    router.setRoutes([
        {
            path:"/",
            component: "home-page",
            action: () => import("./pages/home-page") 
        },
        {
            path:"",
            component: "/a-barbearia",
            action: () => import("./pages/a-barbearia-page.js") 
        },
    ])
    
    
    return router

}

