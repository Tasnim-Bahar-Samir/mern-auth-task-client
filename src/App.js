import { Toaster } from 'react-hot-toast';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Register from './Components/Register/Register';

function App() {
  const router = createBrowserRouter([{
    path: '/',
    element: <Register/>
  }]) 
  return (
    <div className="App">
      <h1>Hello</h1>
      <Toaster/>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
