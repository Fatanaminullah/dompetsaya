import LoginPage from '../../app/login/login-page'
import RegisterPage from '../../app/register/register-page'
import ProfilePage from '../../app/profile/profile-page'
import LayoutTemplate from './../layout/container/layout-template';


const baseUrl = process.env.PUBLIC_URL;


const routeSources = [
    {
        component: LayoutTemplate, 
        path:`${baseUrl}/modul`, 
        child : [
            {component: ProfilePage, path:`/`, exact:true },
            {component: ProfilePage, path:`/profile`, exact:true }
        ]
    },
    {component: LoginPage, path:`${baseUrl}/login`, exact:true },
    {component: RegisterPage, path:`${baseUrl}/register`, exact:true },

]

export default routeSources;