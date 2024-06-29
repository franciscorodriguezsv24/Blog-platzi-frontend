
import { BrowserRouter, useRoutes} from 'react-router-dom';
import Home from '../Home';
import SignIn from '../SignIn/index';
import NotFound from '../NotFound'

const AppRoutes = () => {

  let routes = useRoutes([
    {path:'/', element: <Home/>},
    {path:'/sign-in', element: <SignIn/>},
    {path: '/*', element: <NotFound/> }

  ])

  return routes
}

function App() {

  return (
    <>
    <BrowserRouter>
      <AppRoutes/>
    </BrowserRouter>
    </>
  )
}

export default App
