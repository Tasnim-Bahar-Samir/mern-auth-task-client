import { Toaster } from 'react-hot-toast';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import ErrorPage from './Components/ErrorPage/ErrorPage';
import Login from './Components/Login/Login';
import Profile from './Components/Profile/Profile';
import Register from './Components/Register/Register';

function App() {
  const isLoggedIn = localStorage.getItem('loggedIn')
  const router = createBrowserRouter([
    {
    path: '/',
    element: <Login/>,
    errorElement: <ErrorPage/>
  },
    {
    path: '/login',
    element: <Login/>
  },
  {
    path:'/register',
    element: <Register/>
  },
  {
    path:'/profile',
    element:<Profile/>
  }
]) 
  return (
    <div className="App">
      <Toaster/>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
