import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './Layout'
import Home from './Home/Home'
import About from './About/About'


// method 1 
// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <Layout/>,
//     children: [
//       {
//         path: "",
//         element: <Home/>
//       },
//       {
//         path: "about",
//         element: <About/>
//       },
//       {
//         path: "contact",
//         element: <Contact/>
//       }
//     ]
//   }
// ])

// method2 
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>} >
    
      {/* <Route path='/' element={<Layout/>} /> */}

      <Route path='' element={<Home/>} />
      <Route path='about' element={<About/>} />
    </Route>

  )
)



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
