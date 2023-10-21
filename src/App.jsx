import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import Layout from './Components/Layout/Layout';
import Register from './Components/Register/Register';
import SignIn from './Components/SignIn/SignIn';
import Notes from './Components/Notes/Notes';
import ProtectedRoutes from './Components/ProtectedRoutes/ProtectedRoutes';


function App() {
  const routes = createBrowserRouter([
    {path:'/',element: <Layout/>,children:[
      {index:true,element:<Register/>},
      {path:'/register',element:<Register/>},
      {path:'/signin',element:<SignIn/>},
      {path:'/notes',element:<ProtectedRoutes><Notes/></ProtectedRoutes>}
    ]}
  ])

  return (
    <>
   <RouterProvider router={routes}/>
    </>
  );
}

export default App;
