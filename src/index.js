import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './Layout'
import Home from './Home/Home'
import Depart from './Department/Depart'
import Doctor from './Doctor/Doctor'
import Services from './Services/Services'
import Contact from './Contact/Contact'


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
      <Route path='doctors' element={<Doctor/>} />
      <Route path='depart' element={<Depart/>} />
      <Route path='services' element={<Services/>} />
      <Route path='contact' element={<Contact/>} />
    </Route>

  )
)



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
