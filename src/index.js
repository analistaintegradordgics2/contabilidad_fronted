import routes from "./routes/contabilidad_routes"

export default {

 install(Vue, { router }) {

   routes.forEach(route => {
     router.addRoute(route)
   })

   console.log("Modulo contabilidad cargado")

 }

}