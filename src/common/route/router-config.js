import LoginPage from '../../app/login/login-page'
import RegisterPage from '../../app/register/register-page'
import ProfilePage from '../../app/profile/profile-page'
import LayoutTemplate from './../layout/container/layout-template';
import InputNotesPage from '../../app/inputnotes/inputnotes-page'


const baseUrl = process.env.PUBLIC_URL;


const routeSources = [
    {
        component: LayoutTemplate, 
        path:`${baseUrl}/dompetsaya`, 
        child : [
            {component: ProfilePage, path:`/`, exact:true },
            {component: ProfilePage, path:`/profile`, exact:true },
            {component: InputNotesPage, path:`/inputnotes`, exact:true }

        ]
    },
    {component: LoginPage, path:`${baseUrl}/`, exact:true },
    {component: LoginPage, path:`${baseUrl}/login`, exact:true },
    {component: RegisterPage, path:`${baseUrl}/register`, exact:true },

]

export default routeSources;