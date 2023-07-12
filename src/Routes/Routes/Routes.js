import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import UserList from "../../Pages/UserList/UserList";
import UserForm from "../../Pages/UserForm/UserForm";
import ViewUser from "../../Pages/ViewUser/ViewUser";
import About from "../../Pages/About/About";
import Contact from "../../Pages/Contact/Contact";

const routes=createBrowserRouter([
    {
        path:'/',
        element:<Main/>,
        children:[
            {
                path:'/',
                element:<UserList/>
            },
            {
                path:'/users/add',
                element:<UserForm/>
            },
            {
                path:'/users/:id',
                element:<ViewUser/>
            },
            {
                path:'/users/edit/:id',
                element:<UserForm/>
            },
            {
                path:'/about',
                element:<About/>
            },
            {
                path:'/contact',
                element:<Contact/>
            },
            
        ]
    }
])
export default routes;