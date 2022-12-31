import { Toaster } from 'react-hot-toast';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Login from './Components/Login/Login';
import Profile from './Components/Profile/Profile';
import Register from './Components/Register/Register';

function App() {
  const router = createBrowserRouter([
    {
    path: '/',
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
      <h1>Hello</h1>
      <Toaster/>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
