import { createBrowserRouter } from "react-router-dom"
import Root from "./Root"
import Home from "./Home"
import AddCoffee from "./AddCoffee"
import { UpdataProduct } from "./UpdataProduct"
import SingUp from "./SingUp"
import SingIn from "./SingIn"
import Users from "./Users"
import NavMenu from "./NavMenu"


const Routers =createBrowserRouter([
    {
        path:'/',
        element: <Root> </Root>,
        children:[
            {
                path:'/',
                element:<Home> </Home>,
                loader: ()=> fetch('http://localhost:5000/coffee')
            },
            {
                path:'/add-coffee',
                element: <AddCoffee> </AddCoffee>
            },
            {
                path: '/updateCoffee/:id',
                element: <UpdataProduct> </UpdataProduct>,
                loader: ({params})=> fetch(`http://localhost:5000/coffee/${params.id}`)
            },
            {
                path:'/singup',
                element: <SingUp></SingUp>
            },
            {
                path:'/singin',
                element:<SingIn> </SingIn>
            },
            {
                path:'/users',
                element:<Users/>,
                loader: ()=> fetch('http://localhost:5000/users')
            },
            {
                path: '/navmenu',
                element: <NavMenu> </NavMenu>
            }
        ]
    }
])

export default Routers