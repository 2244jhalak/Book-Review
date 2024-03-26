import React from 'react'
import ReactDOM from 'react-dom/client'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Root from './components/Root/Root';
import Home from './components/Home/Home';
import ListedBooks from './components/ListedBooks/ListedBooks';
import PagesToRead from './components/PagesToRead/PagesToRead';
import Quetos from './components/Quetos/Quetos';
import AboutUs from './components/AboutUs/AboutUs';
import BookDetails from './components/BookDetails/BookDetails';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children:[
      {
        path:"/",
        element:<Home></Home>
      },
      {
        path:"/listed",
        element:<ListedBooks></ListedBooks>,
        loader:()=>fetch('/books.json')
      },
      {
        path:"/pages",
        element:<PagesToRead></PagesToRead>
      },
      {
        path:"/quetos",
        element:<Quetos></Quetos>
      },
      {
        path:"/about",
        element:<AboutUs></AboutUs>
      },
      {
        path:"/details/:bookId",
        element:<BookDetails></BookDetails>,
        loader:()=>fetch('/books.json')
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
