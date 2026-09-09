import MainPage from "../views/MainPage.vue"
import Biblioteca from "../views/Biblioteca.vue"
import Enfermeria from "../views/Enfermeria.vue"
import Bienestar from "../views/Bienestar.vue"
import Cafeteria from "../views/Cafeteria.vue"
import Coordinacion from "../views/Coordinacion.vue"
import { createRouter, createWebHashHistory } from "vue-router"

const routes = [
    {path:"/", component:MainPage},
    {path:"/Biblioteca", component:Biblioteca},
    {path:"/Enfermeria", component:Enfermeria},
    {path:"/Bienestar", component:Bienestar},
    {path:"/Cafeteria", component:Cafeteria},
    {path:"/Coordinacion", component:Coordinacion}
]

export const router = createRouter({
    routes,
    history:createWebHashHistory()
})