import React from 'react'
import ReactDOM from 'react-dom/client'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css';
import Root from './components/Root/Root';
import Home from './components/Home/Home';
import ListedBooks from './components/ListedBooks/ListedBooks';
import PagesToRead from './components/PagesToRead/PagesToRead';


import BookDetails from './components/BookDetails/BookDetails';
import Quotes from './components/Quotes/Quotes';
import Author from './components/Author/Author';
import ErrorPage from './components/ErrorPage/ErrorPage';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement:<ErrorPage></ErrorPage>,
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
        element:<PagesToRead></PagesToRead>,
        loader:()=>fetch('/books.json')
      },
      {
        path:"/quotes",
        element:<Quotes></Quotes>
      },
      {
        path:"/author",
        element:<Author></Author>
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
