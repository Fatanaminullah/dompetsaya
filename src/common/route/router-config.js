import LoginPage from '../../app/login/login-page'

const baseUrl = process.env.PUBLIC_URL;


const routeSources = [
    {component: LoginPage, path:`${baseUrl}/login`, exact:true }
]

export default routeSources;