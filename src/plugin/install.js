import routes from '../routes/contabilidad_routes'

export default {

 install ({ router }) {

   routes.forEach(route => {
     router.addRoute(route)
   })

 }

}